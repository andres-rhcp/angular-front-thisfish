FROM ng

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

CMD ["ng", "serve --o --host 172.16.7.9"]