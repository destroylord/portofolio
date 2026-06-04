# Warm Story

Portfolio bilingual berbasis Astro dengan:

- public site `id/en`
- admin panel internal
- Better Auth
- MySQL
- Drizzle

## Command

Semua command dijalankan dari root project:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run db:push`
- `npm run db:reset-app`
- `npm run db:reset-all`
- `npm run db:seed-content`
- `npm run db:seed-projects`
- `npm run auth:seed-admin`

Catatan reset database:

- `npm run db:reset-app` hanya menghapus tabel milik aplikasi
- `npm run db:reset-all` menghapus semua tabel dalam database aktif

## Environment

Template local:

- [.env.example](/mnt/c/laragon/www/portfolio/.env.example:1)

Template production:

- [.env.production.example](/mnt/c/laragon/www/portfolio/.env.production.example:1)

## Dokumentasi

- Plan pengembangan: [docs/plan.md](/mnt/c/laragon/www/portfolio/docs/plan.md:1)
- Panduan deploy: [docs/deployment.md](/mnt/c/laragon/www/portfolio/docs/deployment.md:1)

## Docker

Template environment untuk Docker:

- [.env.docker.example](/mnt/c/laragon/www/portfolio/.env.docker.example:1)
- [docker-compose.external.yml](/mnt/c/laragon/www/portfolio/docker-compose.external.yml:1)
- [deploy/nginx/default.conf](/mnt/c/laragon/www/portfolio/deploy/nginx/default.conf:1)
- [scripts/deploy-docker.sh](/mnt/c/laragon/www/portfolio/scripts/deploy-docker.sh:1)

Command dasar:

- `cp .env.docker.example .env.production`
- `docker compose --env-file .env.production build`
- `docker compose --env-file .env.production up -d`
- `docker compose --env-file .env.production exec app npm run db:push`
- `docker compose --env-file .env.production exec app npm run db:seed-content`
- `docker compose --env-file .env.production exec app npm run auth:seed-admin`
- `./scripts/deploy-docker.sh init`

Container yang jalan:

- `nginx` sebagai web server publik pada port `80`
- `app` sebagai Astro Node server internal
- `mysql` sebagai database internal
