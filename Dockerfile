# Install dependencies only when needed
FROM node:18-alpine AS deps
WORKDIR /
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /
COPY . .
COPY --from=deps ./node_modules ./node_modules

# Build the application
RUN npm run build

# Production image, copy all the files and run Next.js
FROM node:18-alpine AS runner
WORKDIR /

# Set environment to production
ENV NODE_ENV=development

# Copy only the necessary build and runtime files
COPY --from=builder ./next.config.ts ./next.config.ts
COPY --from=builder ./public ./public
COPY --from=builder ./.next ./.next
COPY --from=builder ./node_modules ./node_modules
COPY --from=builder ./package.json ./package.json

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
