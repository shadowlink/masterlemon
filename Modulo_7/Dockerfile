FROM ubuntu:18.04

USER root

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_10.x  | bash -
RUN apt-get -y install nodejs

RUN nodejs --version

WORKDIR /opt/app

COPY . .

RUN npm install --only=production

EXPOSE 8888

CMD ["npm", "start"]
