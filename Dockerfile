FROM node:20
WORKDIR /app
COPY package.json ./
RUN npm install 
COPY . .d 
EXPOSE 3001
CMD [ "npm","start" ]