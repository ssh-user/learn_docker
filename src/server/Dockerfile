FROM mhart/alpine-node:latest
RUN mkdir -p /site/
WORKDIR /site/
COPY . /site/
RUN npm install
CMD ["node", "app.js"]
EXPOSE 3000
