FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

ENV WDS_SOCKET_PORT=3001

COPY . .

RUN npm install

EXPOSE 4001

CMD ["npm", "start"]