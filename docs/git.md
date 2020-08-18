#git


### git 合并分支    mergetool

```
git branch -u origin/addFile
git branch --set-upstream-to origin/addFile

git branch --unset-upstream
```


```
git branch -r
git checkout -b mywork origin/remote

git pull = git fetch + git merge
git fetch origin remote:mywork
git merge b     git merge --abort
git rebase b

```