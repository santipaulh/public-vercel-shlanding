FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install

RUN npm install -g typescript
RUN npm link typescript

COPY .next ./.next
COPY public ./public
COPY next.config.* ./

EXPOSE 6767

CMD ["npm", "run", "start"]
