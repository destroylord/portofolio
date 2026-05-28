# Plan Pengembangan Warm Story

## Tujuan Produk

Membangun website portofolio `Warm Story` berbasis Astro yang:

- tampil editorial, hangat, dan profesional di sisi publik,
- mendukung dua bahasa: Indonesia dan English,
- memiliki panel admin internal untuk mengelola konten,
- dan memakai `Better Auth` untuk login area admin.

Target akhirnya bukan sekadar website portofolio statis, tetapi sistem portofolio yang bisa dikelola tanpa mengedit file manual terus-menerus.

## Arah Besar yang Akan Dibangun

Produk ini dibagi menjadi dua sisi utama:

1. Public site
   Website bilingual untuk menampilkan brand, about, project list, project detail, dan contact.
2. Admin site
   Area privat untuk login dan mengelola konten yang tampil di public site.

Keputusan penting: karena kebutuhan auth saat ini hanya login, maka implementasi `Better Auth` cukup difokuskan pada `email/password + session management`, tanpa memperluas scope ke social login, magic link, atau role kompleks dulu.

## Stack yang Dipilih

### Frontend dan routing

- `Astro` sebagai fondasi website dan route handling
- `Astro i18n` bawaan untuk routing dua bahasa
- Komponen reusable untuk publik dan admin

### Authentication

- `Better Auth` sebagai solusi login admin
- Mode awal: email dan password
- Session berbasis cookie agar sederhana dan cocok untuk area admin privat

Referensi resmi yang relevan:

- Astro menyatakan tidak memiliki auth bawaan resmi dan merekomendasikan integrasi eksternal seperti Better Auth:
  https://docs.astro.build/en/guides/authentication/
- Better Auth menyediakan integrasi Astro resmi:
  https://better-auth.com/docs/integrations/astro
- Better Auth mendukung email/password bawaan:
  https://better-auth.com/docs/authentication/email-password

## Visi Admin Panel

Admin panel sebaiknya tidak terlalu besar di awal. Fokus utamanya adalah mengurangi kebutuhan edit file manual pada konten yang sering berubah.

### Yang wajib dinamis

1. Projects
   Ini prioritas utama karena proyek adalah inti portofolio dan paling sering berubah.

2. About content
   Konten seperti intro, story, quote, dan skill summary lebih baik dikelola dari admin agar mudah diubah tanpa sentuh code.

3. Site settings
   Data global seperti nama brand, headline hero, CTA utama, email, lokasi, availability status, dan social links sebaiknya dinamis.

4. Translation content
   Karena website bilingual, konten inti perlu bisa diisi untuk `id` dan `en`, minimal untuk halaman home, about, dan contact.

### Yang sangat disarankan setelah projects

1. Project categories / tags
   Supaya filtering, grouping, dan taxonomy proyek tidak hardcoded.

2. Project metadata
   Tahun, role, client, stack, metrics, cover image, slug, dan urutan tampil.

3. SEO fields
   Meta title, meta description, dan mungkin OG image per halaman atau per proyek.

### Yang belum wajib di tahap awal

1. Contact inbox
   Belum perlu jika form masih diarahkan ke email atau layanan eksternal.

2. Media library penuh
   Belum wajib jika aset gambar masih sedikit dan bisa memakai URL eksternal atau upload sederhana.

3. Multi-user / role system
   Belum perlu jika admin hanya dipakai oleh satu akun internal.

## Rekomendasi Scope Admin V1

Agar tetap fokus dan cepat selesai, admin V1 sebaiknya hanya mencakup:

### Auth

- Login
- Logout
- Proteksi route `/admin/*`
- Session check pada halaman admin

### Dashboard inti

- Overview singkat jumlah proyek
- Shortcut ke manage projects
- Shortcut ke manage site settings
- Shortcut ke manage about content

### Manajemen konten

- CRUD projects
- Edit about content
- Edit site settings global
- Edit field bilingual untuk konten inti

## Struktur Konten yang Sebaiknya Dinamis

Supaya arah implementasi jelas, berikut rekomendasi model data yang perlu dipikirkan:

### Site settings

- brand name
- site description
- hero title `id`
- hero title `en`
- hero body `id`
- hero body `en`
- CTA label
- contact email
- location
- availability status
- social links

### About content

- about eyebrow `id/en`
- about title `id/en`
- about intro `id/en`
- story paragraphs `id/en`
- quote `id/en`
- quote byline `id/en`
- skill cards `id/en`

### Projects

- title `id/en`
- slug
- summary `id/en`
- challenge `id/en`
- insights `id/en`
- process `id/en`
- solution `id/en`
- role
- client
- year
- stack
- categories
- metrics
- cover image
- gallery images
- publish status
- featured flag
- sort order

## Catatan Kritis

Ada beberapa keputusan penting yang perlu dijaga agar proyek ini tidak melebar:

- Jangan membuat admin untuk semua hal sekaligus. Fokus pada konten yang paling sering berubah.
- Kalau semua struktur bilingual dibuat terlalu bebas tanpa schema yang jelas, admin akan cepat membingungkan.
- `Better Auth` sebaiknya dipakai sesederhana mungkin di awal: satu admin account atau sedikit account internal, tanpa role rumit.
- Jangan campur antara kebutuhan public site yang editorial dengan admin site yang terlalu dekoratif. Admin lebih baik bersih, cepat, dan jelas.
- Perlu diputuskan lebih awal apakah data admin disimpan di database relasional penuh atau cukup solusi sederhana yang masih SSR-friendly.

## Preferensi Implementasi Teknis

### Authentication

- Gunakan `Better Auth` dengan `emailAndPassword.enabled: true`
- Mount handler pada route API Astro sesuai panduan Better Auth untuk Astro
- Buat halaman login custom yang sederhana dan konsisten dengan visual brand, tetapi tidak perlu terlalu artistik
- Lindungi route admin di server side, bukan hanya di client

### Admin architecture

- Buat route seperti `/admin/login`, `/admin`, `/admin/projects`, `/admin/settings`, `/admin/about`
- Pisahkan layout public dan layout admin
- Gunakan form yang sederhana, validasi jelas, dan feedback yang cepat

### Data architecture

- Hindari menyimpan seluruh konten penting hanya di file statis
- Pindahkan konten yang memang ingin dikelola admin ke storage/database yang bisa di-query server-side
- Pastikan data bilingual memiliki struktur konsisten, misalnya field `id` dan `en`

## Tahapan Kerja yang Disarankan

### Status implementasi saat ini

- Tahap 1 selesai: public site bilingual sudah berjalan dengan routing Astro i18n.
- Tahap 2 selesai: Better Auth sudah terpasang untuk login admin.
- Tahap 3 selesai: route `/admin/*` sudah diproteksi session middleware.
- Tahap 4 selesai: admin dashboard dan layout dasar sudah tersedia.
- Tahap 5 selesai secara fondasi: projects sudah dipindahkan ke database dan punya CRUD admin.
- Tahap 6 sudah dimulai: site settings dan about content sudah punya schema, form admin, dan fallback ke copy statis bila tabel masih kosong.
- Tahap 7 masih berjalan: validasi form, audit UX admin, dan pengujian data bilingual masih perlu diteruskan.

### Tahap 1 - Stabilkan public site

- Rapikan public site bilingual yang sudah ada
- Pastikan route `id` dan `en` konsisten
- Audit ulang komponen yang masih terlalu hardcoded

### Tahap 2 - Fondasi auth

- Install dan konfigurasi `Better Auth`
- Siapkan environment variables
- Buat instance `auth`
- Mount route handler `/api/auth/*`
- Konfigurasi email/password login

### Tahap 3 - Proteksi admin

- Buat halaman login admin
- Buat logout flow
- Terapkan guard pada seluruh route `/admin/*`
- Pastikan user non-login tidak bisa mengakses admin

### Tahap 4 - Admin dashboard dasar

- Buat layout admin
- Buat halaman dashboard overview
- Buat navigasi admin yang ringkas dan fungsional

### Tahap 5 - Dynamic projects

- Pindahkan data project dari hardcoded ke sumber data yang bisa dikelola
- Buat CRUD project
- Tambahkan field bilingual dan metadata proyek
- Sinkronkan output admin ke halaman public project list dan project detail

### Tahap 6 - Dynamic about dan site settings

- Buat editor untuk about content
- Buat editor untuk site settings global
- Hubungkan perubahan ke public site bilingual

### Tahap 7 - Polish dan quality check

- Audit UX login dan admin forms
- Audit proteksi route
- Audit konsistensi bilingual content
- Audit apakah seluruh public page sudah membaca data dinamis yang benar

### Tahap 8 - UX admin dan data seeding

- Ubah field JSON `projects` yang paling rawan menjadi input yang lebih ramah admin
- Tambahkan placeholder, helper text, dan contoh format pada seluruh form konten penting
- Seed default data untuk `site settings` dan `about content` agar admin tidak mulai dari kondisi kosong
- Tambahkan validasi yang lebih jelas untuk slug, URL, field bilingual, dan JSON invalid
- Rapikan dashboard admin agar menampilkan status modul, jumlah data, dan progres implementasi

### Tahap 9 - Hardening dan konsistensi public site

- Audit apakah seluruh public page sudah membaca fallback dan data dinamis dengan perilaku yang konsisten
- Kurangi ketergantungan pada textarea JSON mentah bila pola input sudah bisa dibuat lebih terstruktur
- Pastikan perubahan dari admin langsung tercermin dengan struktur bilingual yang tetap stabil

## Prioritas Implementasi

Jika harus dikerjakan bertahap, urutan paling sehat adalah:

1. Better Auth login
2. Route protection admin
3. CRUD projects
4. Site settings global
5. About content
6. Field bilingual tambahan
7. UX admin untuk structured content
8. Seed data default dan hardening validasi

Alasannya sederhana: `projects` adalah konten paling bernilai dan paling sering berubah, sedangkan `site settings` dan `about` memberi pengurangan friction berikutnya.

## Definisi Selesai untuk Fase Berikutnya

Fase ini dianggap berhasil jika:

- admin bisa login menggunakan `Better Auth`,
- route admin terlindungi dengan benar,
- projects bisa dikelola dari admin tanpa edit file manual,
- site settings inti bisa diperbarui dari admin,
- about content inti bisa diperbarui dari admin,
- dan public site bilingual membaca data yang dikelola admin dengan konsisten.

Fase polish berikutnya dianggap berhasil jika:

- form admin tidak membingungkan untuk field structured content,
- admin tidak perlu mulai dari tabel kosong untuk modul inti,
- pesan error form cukup spesifik untuk mempercepat koreksi input,
- dan dashboard memberi gambaran status implementasi yang benar-benar berguna.

## Kesimpulan

Tujuan proyek sekarang bukan hanya membangun website portofolio yang terlihat bagus, tetapi membangun sistem portofolio yang bisa dikelola. Karena itu, `Better Auth + admin panel fokus + konten bilingual` adalah arah yang paling masuk akal.

Untuk tahap admin, area yang paling layak dinamis selain `projects` adalah:

- `site settings`
- `about content`
- `project categories/tags`
- `translation content`
- dan `SEO fields`

Area lain seperti inbox, multi-role, atau media manager penuh sebaiknya ditunda sampai kebutuhan dasarnya benar-benar stabil.
