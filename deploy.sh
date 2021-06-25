#!/usr/bin/env sh

# abort on errors
set -e

rm -r dist

npm run build

rm -r docs
cp -r dist docs


git init
git add -A
git commit -m 'deploy'

cd -

git push