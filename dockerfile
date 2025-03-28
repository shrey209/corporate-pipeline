
FROM node:18


WORKDIR /app






COPY . .

RUN npm install

EXPOSE 80


CMD ["node", "index.js"]
