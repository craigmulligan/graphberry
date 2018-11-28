FROM resin/raspberrypi3-node:9

RUN apt-get update

WORKDIR /usr/src/app

COPY package.json package.json

RUN JOBS=MAX npm install --production --unsafe-perm 

COPY . ./

ENV INITSYSTEM on
ENV PORT 80

CMD ["npm", "start"]
