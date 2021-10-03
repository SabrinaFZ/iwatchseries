FROM node:12-alpine

WORKDIR /iwatchseries

COPY ["package*.json", "/iwatchseries/"]

RUN npm install

COPY [".", "/iwatchseries/"]

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]
