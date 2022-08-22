#!/usr/bin/env sh

set -e

npm install
npm run build

cd dist

echo 'rusetskii.dev' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:xtenzq/xtenzq.github.io.git master:gh-pages

cd -