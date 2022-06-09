for i in $(echo */test.sh); do 
    echo "cd to $(dirname $i)"
    cd "$(dirname $i)"
    echo "runing test.sh"
    bash test.sh
done