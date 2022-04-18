#

echo "deploy"
echo  $1

npm i 

npm run build

git add -A

git commit -m '$1'

# git pull

# git push 