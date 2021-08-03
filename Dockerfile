# https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/

# --------------> The build image
FROM node:lts AS build
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
ENV HUSKY=0
RUN npm ci --only=production

# --------------> The production image
FROM node:lts-alpine@sha256:0c80f9449d2690eef49aad35eeb42ed9f9bbe2742cd4e9766a7be3a1aae2a310
RUN apk update
RUN apk --no-cache add dumb-init=1.2.2-r1 && apk --no-cache add --upgrade apk-tools && rm -rf /var/cache/apk/*
ENV NODE_ENV production
USER node
EXPOSE 4000
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --chown=node:node ./dist /usr/src/app
COPY --chown=node:node package.json /usr/src/app/
CMD ["dumb-init", "node", "server.js"]
