FROM node:16 AS prep
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install


FROM prep AS prod
COPY . /app
RUN yarn run build
CMD yarn start

FROM prep AS dev
CMD yarn run serve