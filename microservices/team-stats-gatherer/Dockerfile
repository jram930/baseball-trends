FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV TEAM_NAME NotSet

CMD ["npm", "start"]