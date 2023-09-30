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

- pull 요청은 어떻게보내지?
- 새 브랜치에서 소스 수정후
- git commit
- git push
  이 상태에서는 main 브랜치와 sam 브랜치가
  github상에서 소스가 달라서 compare될수있다.
  이때 레파지토리 메뉴중 pull requests에서 camparing changes에 소스 비교가 나온다.
