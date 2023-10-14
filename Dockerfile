FROM node:18.18.1-alpine3.18

WORKDIR /

COPY dist dist

WORKDIR dist

RUN npm install --global serve

EXPOSE 4200

CMD ["serve","-p","4200"]
