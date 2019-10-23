FROM node
ENV NPM_CONFIG_LOGLEVEL warn
RUN mkdir /app -p
EXPOSE 3000
WORKDIR /app
ADD package.json  /app
RUN npm install --production
COPY . /app
ENTRYPOINT ["npm","run","execute"]
