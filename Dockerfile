FROM node:18-alpine

WORKDIR /app/frontend/

COPY package.json /app/frontend/

RUN npm install
# Copia el resto de la aplicación
# RUN npm i @rollup/rollup-linux-x64-musl --save-optional
# RUN npm i @rollup/rollup-linux-x64-gnu
COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev", "--", "--host"]
