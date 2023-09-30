how to branch:

1. git checkout sam
2. fix source
3. git add .
4. git commit -m 'fix'
5. git checkout main
6. git merge sam
7. git push r <- 원격저장소 r에 소스 올라감

new branch 생성후 원격저장소에 연동시키려면,
git push 원격저장소명 새브랜치명 해줘야함.
ex) git push r sam
