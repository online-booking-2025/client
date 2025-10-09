FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
RUN apk add --no-cache curl

EXPOSE 3000
CMD ["npm", "run", "preview"]
