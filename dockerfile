
FROM node:16-alpine


WORKDIR /app






COPY . .

RUN npn install

EXPOSE 80


CMD ["node", "index.js"]
