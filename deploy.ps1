npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/hkk2018/hkk2018.github.io.git master

Read-Host -Prompt "Press Enter to continue"