# --- Build stage ---
FROM node:22-alpine AS builder
WORKDIR /backend

COPY package*.json ./
COPY tsconfig*.json ./
COPY . .
RUN npm install
RUN npm run build

# --- Production stage ---
FROM node:22-alpine AS production
WORKDIR /backend

COPY package*.json ./
RUN npm install --only=production

# Copy built files from builder
COPY --from=builder /backend/dist ./dist

# Set environment variables (optional)
ENV NODE_ENV=production
ENV PORT=8000
EXPOSE 8000

CMD ["node", "dist/src/main.js"]
