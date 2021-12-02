FROM node:12-alpine

ADD package.json /tmp/package.json
RUN cd /tmp && rm -rf node_modules && npm install -q

# Code base
ADD ./ /src
RUN rm -rf /src/node_modules && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src

EXPOSE 3000