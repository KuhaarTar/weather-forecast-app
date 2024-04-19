FROM node:lts-alpine
WORKDIR /forecast-app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
CMD ["npm", "start"]
