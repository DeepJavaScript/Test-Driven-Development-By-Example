#!/bin/bash
set -e
set -v

swift --version
swift test --enable-code-coverage

BIN="$(swift build --show-bin-path)"
FILE="$(find "${BIN}" -name '*.xctest')"
COV="$(dirname "$(which swift)")/llvm-cov"

if [[ "$OSTYPE" == "darwin"* ]]; then
    FILE=""${FILE}"/Contents/MacOS/$(basename "$FILE" .xctest)"
    if [[ ! -f "$COV" ]]; then
        COV="$(xcrun -f llvm-cov)"
    fi
fi

if [[ ! -f "$COV" ]]; then
 exit 0
fi

VERSION="$("$COV" --version | grep --only-matching "version [0-9]*" | cut -c 9-)"
ARGS=""

if [ "$VERSION" -gt "12" ]; then
    ARGS="-show-branch-summary=0 "
fi
if [ -t 1 ] || [ "${GITHUB_ACTIONS}" = true ]; then
    ARGS="${ARGS}--use-color "
fi

"$COV" report "${FILE}" -instr-profile="${BIN}/codecov/default.profdata" -ignore-filename-regex=".build|Tests" $ARGS
