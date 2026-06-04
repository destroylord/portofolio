# Deployment Guide

## Ringkasan

Project ini **bukan static export biasa**. Saat ini konfigurasi Astro memakai:

- `output: "server"`
- adapter `@astrojs/node`
- `Better Auth`
- `MySQL`

Artinya aplikasi harus dideploy ke environment yang bisa menjalankan **Node.js server** dan terhubung ke **database MySQL**.

Target deploy yang cocok:

- VPS Ubuntu + Docker Compose
- Railway
- Render
- Fly.io
- Coolify
- layanan lain yang support Node app

Target deploy yang tidak cocok:

- shared hosting statis biasa
- hosting yang hanya menjalankan PHP tanpa Node.js

## Requirement

Sebelum deploy, siapkan:

1. Server Node.js atau Docker Engine + Docker Compose
2. Database MySQL production
3. Domain atau subdomain production
4. HTTPS untuk domain production

Versi Node minimum dari project ini:

- `Node.js >= 22.12.0`

## Environment Variables

Gunakan template dari [.env.production.example](/mnt/c/laragon/www/portfolio/.env.production.example:1).

Variable penting:

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `SITE_URL`
- `DATABASE_HOST`
- `DATABASE_PORT`
- `DATABASE_NAME`
- `DATABASE_USER`
- `DATABASE_PASSWORD`
- `DATABASE_CONNECTION_LIMIT`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `ADMIN_NAME`

Catatan penting:

- `BETTER_AUTH_URL` dan `SITE_URL` harus memakai domain production yang benar.
- Jika production memakai HTTPS, gunakan `https://...`.
- Untuk MySQL, sesuaikan `DATABASE_HOST` dengan grant user di server production.

## Alur Deploy Umum

Urutan paling aman:

1. Clone project ke server
2. Copy env production
3. Install dependency
4. Push schema database
5. Seed data awal
6. Seed akun admin
7. Build project
8. Jalankan server Node
9. Publikasikan app lewat web server atau reverse proxy

## Deploy Dengan Docker Compose

Project ini sekarang sudah disiapkan untuk skenario full Docker:

- `nginx`
- `app`
- `mysql`

Catatan untuk local testing:

- Jika sebelumnya container `mysql` pernah gagal start karena konfigurasi lama, hapus volume MySQL lama sebelum test ulang supaya database bisa diinisialisasi ulang dengan bersih.

File yang dipakai:

- [Dockerfile](/mnt/c/laragon/www/portfolio/Dockerfile:1)
- [docker-compose.yml](/mnt/c/laragon/www/portfolio/docker-compose.yml:1)
- [docker-compose.external.yml](/mnt/c/laragon/www/portfolio/docker-compose.external.yml:1)
- [.env.docker.example](/mnt/c/laragon/www/portfolio/.env.docker.example:1)
- [deploy/nginx/default.conf](/mnt/c/laragon/www/portfolio/deploy/nginx/default.conf:1)
- [scripts/deploy-docker.sh](/mnt/c/laragon/www/portfolio/scripts/deploy-docker.sh:1)

### 1. Siapkan environment

```bash
cp .env.docker.example .env.production
```

Lalu edit `.env.production` dan ganti minimal:

- `BETTER_AUTH_SECRET`
- `BETTER_AUTH_URL`
- `SITE_URL`
- `DATABASE_NAME`
- `DATABASE_USER`
- `DATABASE_PASSWORD`
- `MYSQL_ROOT_PASSWORD`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

Penting:

- `DATABASE_HOST` untuk setup Compose ini harus tetap `mysql`
- `BETTER_AUTH_URL` dan `SITE_URL` harus memakai domain production final

### 2. Build dan jalankan container

```bash
docker compose --env-file .env.production build
docker compose --env-file .env.production up -d
```

Setelah `up -d`, website publik akan tersedia dari container `nginx` pada port `80` VPS.

### 3. Inisialisasi database pertama kali

Jalankan ini setelah container `app`, `nginx`, dan `mysql` sudah hidup:

```bash
docker compose --env-file .env.production exec app npm run db:push
docker compose --env-file .env.production exec app npm run db:seed-content
docker compose --env-file .env.production exec app npm run auth:seed-admin
```

Opsional sample project:

```bash
docker compose --env-file .env.production exec app npm run db:seed-projects
```

### 4. Update deploy berikutnya

Kalau ada perubahan code:

```bash
./scripts/deploy-docker.sh update
```

Kalau ada perubahan schema database:

```bash
docker compose --env-file .env.production exec app npm run db:push
```

### 5. Log dan restart

```bash
docker compose --env-file .env.production logs -f nginx
docker compose --env-file .env.production logs -f app
docker compose --env-file .env.production restart nginx
docker compose --env-file .env.production restart app
```

### 6. Script helper deploy

Supaya lebih ringkas, kamu bisa pakai:

```bash
chmod +x ./scripts/deploy-docker.sh
./scripts/deploy-docker.sh init
```

Mode yang tersedia:

- `./scripts/deploy-docker.sh init`
- `./scripts/deploy-docker.sh update`
- `./scripts/deploy-docker.sh logs`
- `./scripts/deploy-docker.sh restart`
- `./scripts/deploy-docker.sh shell`

Kalau ingin pakai compose file lain, misalnya database eksternal:

```bash
COMPOSE_FILE=docker-compose.external.yml ./scripts/deploy-docker.sh update
```

## Deploy Dengan MySQL Eksternal

Kalau database MySQL production kamu sudah ada di server lain atau managed service, pakai:

- [docker-compose.external.yml](/mnt/c/laragon/www/portfolio/docker-compose.external.yml:1)

Pastikan `.env.production` diisi sesuai host database external:

- `DATABASE_HOST`
- `DATABASE_PORT`
- `DATABASE_NAME`
- `DATABASE_USER`
- `DATABASE_PASSWORD`

Jalankannya:

```bash
docker compose --env-file .env.production -f docker-compose.external.yml build
docker compose --env-file .env.production -f docker-compose.external.yml up -d
docker compose --env-file .env.production -f docker-compose.external.yml exec app npm run db:push
docker compose --env-file .env.production -f docker-compose.external.yml exec app npm run db:seed-content
docker compose --env-file .env.production -f docker-compose.external.yml exec app npm run auth:seed-admin
```

## Command Deploy

Dari root project:

```bash
npm install
npm run db:push
npm run db:seed-content
npm run auth:seed-admin
npm run build
node ./dist/server/entry.mjs
```

Opsional:

```bash
npm run db:seed-projects
```

Command ini dipakai kalau kamu ingin langsung mengisi sample project awal ke database.

## First Deploy Checklist

Untuk deploy pertama:

1. Buat database MySQL kosong
2. Isi `.env.production`
3. Jalankan `npm install`
4. Jalankan `npm run db:push`
5. Jalankan `npm run db:seed-content`
6. Jalankan `npm run auth:seed-admin`
7. Jika ingin sample data project, jalankan `npm run db:seed-projects`
8. Jalankan `npm run build`
9. Start app dengan `node ./dist/server/entry.mjs`

## Update Deploy Checklist

Untuk deploy update berikutnya:

1. Pull code terbaru
2. Jalankan `npm install` jika dependency berubah
3. Jalankan `npm run db:push` jika schema berubah
4. Jalankan `npm run build`
5. Restart process Node

## Rekomendasi VPS Ubuntu

Stack yang saya sarankan:

- Ubuntu 24.04
- Docker Engine
- Docker Compose plugin
- Nginx

### Install dependency dasar

```bash
sudo apt update
sudo apt install -y nginx mysql-client
```

Install Docker sesuai panduan resmi Docker untuk Ubuntu, lalu jalankan app via `docker compose`.

## Nginx Di Dalam Docker

Container `nginx` sudah ikut dijalankan oleh Compose dan otomatis proxy ke service `app`.

Template config yang dipakai:

- [deploy/nginx/default.conf](/mnt/c/laragon/www/portfolio/deploy/nginx/default.conf:1)

Port publik default:

- `80` untuk HTTP

Jadi untuk mode full Docker ini kamu tidak perlu install `nginx` manual di VPS.

Kalau nanti ingin HTTPS full otomatis di dalam Docker juga, langkah berikutnya paling enak biasanya pakai:

- `nginx + certbot` container
- atau pindah ke `Caddy`
- atau `Traefik`

Saat ini setup yang saya siapkan fokus ke alur paling sederhana: `docker compose up -d` langsung hidup semuanya lewat HTTP.

## Rekomendasi Railway

Kalau ingin deploy lebih cepat tanpa atur server manual:

1. Push repo ke GitHub
2. Buat project baru di Railway
3. Hubungkan repo
4. Tambahkan MySQL atau gunakan MySQL eksternal
5. Isi environment variables
6. Railway akan menjalankan build command:

```bash
npm install && npm run build
```

7. Start command:

```bash
node ./dist/server/entry.mjs
```

Tambahkan post-deploy langkah manual:

- `npm run db:push`
- `npm run db:seed-content`
- `npm run auth:seed-admin`

## Hal yang Perlu Diperhatikan

### Better Auth

- Domain cookie harus cocok dengan domain production
- `BETTER_AUTH_URL` tidak boleh salah
- Jika domain berubah, session login lama bisa invalid

### Database

- Jangan pakai user root untuk production
- Buat user khusus aplikasi
- Pastikan grant MySQL sesuai host yang dipakai app

### Seed admin

- `npm run auth:seed-admin` idealnya dijalankan sekali saat initial setup
- Kalau user admin sudah ada, kamu mungkin perlu ganti password lewat database atau flow auth berikutnya

### Build output

Karena adapter Node memakai mode standalone, hasil build utama dijalankan dari:

```bash
node ./dist/server/entry.mjs
```

## Skenario yang Saya Sarankan

Kalau mau paling sederhana:

1. Deploy ke VPS Ubuntu
2. Jalankan app pakai PM2
3. Reverse proxy pakai Nginx
4. Database pakai MySQL terpisah atau satu server

Kalau mau paling cepat:

1. Deploy ke Railway
2. Isi env
3. Push schema
4. Seed content
5. Seed admin

## Setelah Deploy

Begitu app sudah online, cek:

1. Public site bisa dibuka
2. Route bilingual `id` dan `en` berjalan
3. `/admin/login` bisa dibuka
4. Login admin berhasil
5. `/admin/projects`, `/admin/settings`, `/admin/about` bisa diakses
6. Project create/edit berjalan
7. Site settings dan about membaca data dari database
