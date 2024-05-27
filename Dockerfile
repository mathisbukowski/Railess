FROM node:22-alpine3.19
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 8080
CMD ["node", "dist/server.js"]
