

set -env

npm run build

cd dist

git init
git add -A 
git commit -m 'New Deployment'
git push -f git@github.com:AdrianBegic/art-resto-og.git master:gh-pages

cd - 