FROM resin/%%RESIN_MACHINE_NAME%%-node:8

RUN apt-get update && apt-get install -yq \
    bluetooth bluez libbluetooth-dev libudev-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package.json package.json

RUN JOBS=MAX npm install --production --unsafe-perm && npm cache clean && rm -rf /tmp/*

COPY . ./

ENV INITSYSTEM on
ENV PORT 80

CMD ["npm", "start"]
