# Deployment Guide

## Ringkasan

Project ini **bukan static export biasa**. Saat ini konfigurasi Astro memakai:

- `output: "server"`
- adapter `@astrojs/node`
- `Better Auth`
- `MySQL`

Artinya aplikasi harus dideploy ke environment yang bisa menjalankan **Node.js server** dan terhubung ke **database MySQL**.

Target deploy yang cocok:

- VPS Ubuntu + Nginx
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

1. Server Node.js
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
9. Pasang reverse proxy seperti Nginx

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
- Node.js 22
- MySQL 8
- Nginx
- PM2

### Install dependency dasar

```bash
sudo apt update
sudo apt install -y nginx mysql-client
```

Install Node.js 22 sesuai preferensi kamu, misalnya pakai `nvm`.

### Jalankan dengan PM2

```bash
npm install
npm run build
pm2 start ./dist/server/entry.mjs --name warm-story
pm2 save
```

## Contoh Nginx Reverse Proxy

Asumsi aplikasi jalan di port `4321`.

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Setelah itu aktifkan HTTPS, misalnya dengan Certbot.

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
