# Test-Driven-Development-By-Example

## 加入 CI 的方式

在自己的分支 `git cherry-pick` 這三個 commit

1. `a4bdac54a8f34d9899917af60469f648b999572b`, 
2. `3a05704ee0a6c56acf661b36d526617530691f7a`
3. `f1f81be6b33c508cf82fc3ea175b5849a67e8c75`, 

分成三次使用下面的指令

```
git checkout <my branch name>
git cherry-pick <hash>
```

各別處理一下衝突，並保留自己要的檔案

- `a4bdac54a8f34d9899917af60469f648b999572b` 取得 CI.sh 檔
- `3a05704ee0a6c56acf661b36d526617530691f7a` 取得 .github/workflows/CI.yml 檔
- `f1f81be6b33c508cf82fc3ea175b5849a67e8c75` 取得 .gitignore 檔 (可能不用這個)

最後以這個指令結束每一次的 cherry-pick 成功的話，就會進入 vim 的畫面進行 commit

```
git cherry-pick --continue
```

最後，記得在自己的目錄下加入 `test.sh`, 在其中加入執行測試的指令。
