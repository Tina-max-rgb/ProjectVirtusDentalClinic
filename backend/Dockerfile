FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev 
COPY src ./src
COPY scripts ./scripts
COPY database ./database
RUN mkdir -p /app/data /app/data/backups && chown -R node:node /app
USER node
EXPOSE 4000
CMD ["node","src/server.js"]
