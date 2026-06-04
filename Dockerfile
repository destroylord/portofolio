FROM node:22-bookworm-slim AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS build
COPY . .
RUN npm run build

FROM base AS runtime
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=4321
WORKDIR /app

COPY package.json package-lock.json drizzle.config.mjs ./
COPY scripts ./scripts
COPY src ./src
RUN npm ci --omit=dev && npm cache clean --force

COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]