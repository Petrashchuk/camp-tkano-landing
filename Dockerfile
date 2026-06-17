FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev
COPY public/ ./public/
COPY server/ ./server/
COPY scripts/ ./scripts/
HEALTHCHECK --interval=300s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:${PORT:-3001}/ || exit 1
CMD ["node", "server/index.js"]
