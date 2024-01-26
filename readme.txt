

sudo apt-get update
sudo apt-get install unzip

sudo apt-get install nodejs
sudo apt-get install npm


unzip toptube-insights-backend.zip
 
cd toptube-insights-backend

rm -rf node_modules package-lock.json

sudo npm install -g pm2

npm install

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

nvm install node

nvm use node




pm2 start server.js

