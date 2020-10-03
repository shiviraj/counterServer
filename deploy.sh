#! /bin/bash

rm -rf .* *
echo 'cloning'
git clone  https://github.com/shiviraj/counterServer.git 2> /dev/null
cd counterServer
echo 'installing'
npm install 2> /dev/null
npm test

if [ $? -ne 0 ]
then
  exit 1
fi

cd ..
echo 'cloning'
git clone https://github.com/shiviraj/counter.git 2> /dev/null
cd counter
echo 'installing'
npm install 2> /dev/null
npm test
if [ $? -ne 0 ]
then
  exit 1
fi

echo 'creating build'
npm run build 2> /dev/null
mv build/* ../counterServer/public/.
cd ../counterServer

echo 'created build'
ls