# Step 1

FROM node:16-alpine as build-step

RUN mkdir /atom
#esol

WORKDIR /atom

COPY package.json /atom

#COPY .env.production /dapp-rinz

RUN npm install --legacy-peer-deps

COPY . /atom
RUN ls -al
RUN npm run export
RUN ls -al


# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /atom/build /usr/share/nginx/html
COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
