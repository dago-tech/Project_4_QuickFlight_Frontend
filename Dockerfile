FROM node:18-alpine

WORKDIR /app/frontend/

COPY package.json /app/frontend/

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev", "--", "--host"]
