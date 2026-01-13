---
description: Panduan Deploy ke Domain my.id
---

# Panduan Deployment ke Domain my.id

## Langkah-langkah Deploy:

### 1. Build Production
// turbo
```bash
npm run build
```

### 2. Verifikasi Build
Pastikan folder `dist` berisi:
- `index.html`
- Folder `assets/` dengan semua file JS, CSS, dan gambar

### 3. Upload ke Server
Upload semua isi folder `dist/` ke root domain Anda (public_html atau www)

### 4. Konfigurasi .htaccess (untuk Apache)
Buat file `.htaccess` di root domain dengan isi:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 5. Test Website
Buka domain Anda dan periksa:
- [ ] Semua gambar muncul
- [ ] Navigasi berfungsi
- [ ] Responsif di mobile
- [ ] Loading cepat

## Troubleshooting:

### Gambar Tidak Muncul
1. Periksa console browser (F12) untuk error 404
2. Pastikan path gambar benar
3. Periksa permissions folder (755 untuk folder, 644 untuk file)

### Website Lambat
1. Aktifkan GZIP compression
2. Aktifkan browser caching
3. Gunakan CDN jika perlu

### Error 404 saat Refresh
1. Pastikan .htaccess sudah di-upload
2. Pastikan mod_rewrite aktif di server
