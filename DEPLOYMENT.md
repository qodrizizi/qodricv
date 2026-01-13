# 🚀 Panduan Deployment ke Domain my.id

## ✅ Status: Siap Deploy!

Website CV Anda sudah dikonfigurasi dengan benar dan semua gambar akan muncul di production.

---

## 📋 Checklist Persiapan

- [x] Konfigurasi Vite untuk copy semua assets
- [x] Update semua path gambar ke `/img/...`
- [x] Build production berhasil
- [x] Testing lokal berhasil - semua gambar muncul
- [x] File `.htaccess` sudah dibuat

---

## 🎯 Langkah-langkah Deploy

### 1. Build Production (Sudah Selesai ✅)

Project sudah di-build dan folder `dist` sudah berisi semua file yang diperlukan.

### 2. Upload ke Server

**Upload semua isi folder `dist/` ke root domain Anda:**

```
dist/
├── index.html          → Upload ke root (public_html atau www)
├── assets/             → Upload folder ini
├── css/                → Upload folder ini  
├── img/                → Upload folder ini (PENTING!)
├── js/                 → Upload folder ini
├── script.js           → Upload file ini
└── styles.css          → Upload file ini
```

**PENTING:** Pastikan folder `img/` ter-upload dengan lengkap. Folder ini berisi:
- BCF.png
- certification1.png
- certification2.jpg
- certification3.jpg
- csc.png
- himatif.jpg
- komputer.jpg
- network.jpg
- profile.png
- sikmrs.jpg
- web.jpg

### 3. Upload File .htaccess

Upload file `.htaccess` yang ada di root project ke root domain Anda (sejajar dengan index.html).

File ini sudah dikonfigurasi untuk:
- ✅ URL rewriting (agar refresh tidak error 404)
- ✅ GZIP compression (loading lebih cepat)
- ✅ Browser caching (performa optimal)
- ✅ Security headers

### 4. Set Permissions (Jika Perlu)

Jika menggunakan Linux hosting, pastikan permissions:
```bash
# Folder
chmod 755 img/
chmod 755 assets/
chmod 755 css/
chmod 755 js/

# Files
chmod 644 index.html
chmod 644 .htaccess
chmod 644 img/*
```

### 5. Test Website

Buka domain Anda dan periksa:

#### ✅ Checklist Testing:
- [ ] Website loading dengan cepat
- [ ] Foto profil muncul di section About
- [ ] Semua 6 sertifikat muncul di section Certifications
- [ ] Logo perusahaan muncul di section Experience
- [ ] Map Google muncul di section Contact
- [ ] Navigasi berfungsi dengan smooth scroll
- [ ] Responsif di mobile (test dengan HP)
- [ ] Tidak ada error 404 di console browser (tekan F12)

---

## 🔧 Troubleshooting

### ❌ Gambar Tidak Muncul

**Solusi:**
1. Buka Console Browser (F12 → Console)
2. Cari error 404 untuk gambar
3. Periksa apakah folder `img/` sudah ter-upload
4. Pastikan nama file sama persis (case-sensitive di Linux)
5. Periksa permissions folder dan file

**Contoh Error:**
```
GET https://namadomain.my.id/img/profile.png 404 (Not Found)
```

**Fix:** Upload ulang folder `img/` ke server

### ❌ Website Lambat

**Solusi:**
1. Pastikan `.htaccess` sudah di-upload
2. Aktifkan GZIP compression di cPanel
3. Gunakan CDN jika perlu (Cloudflare gratis)

### ❌ Error 404 Saat Refresh Halaman

**Solusi:**
1. Pastikan `.htaccess` sudah di-upload
2. Pastikan mod_rewrite aktif di server
3. Hubungi hosting jika masih error

### ❌ Map Tidak Muncul

**Solusi:**
Map sudah dikonfigurasi dengan embed URL Google Maps. Jika tidak muncul:
1. Periksa koneksi internet
2. Pastikan Google Maps tidak diblokir
3. Periksa console untuk error

---

## 📊 Optimasi Performa

Website sudah dioptimasi dengan:

1. **Minified Assets**: JS dan CSS sudah di-minify oleh Vite
2. **GZIP Compression**: Mengurangi ukuran transfer hingga 70%
3. **Browser Caching**: Gambar di-cache 1 tahun, CSS/JS 1 bulan
4. **Lazy Loading**: Map di-load dengan `loading="lazy"`
5. **Optimized Images**: Semua gambar dalam format optimal

---

## 🎨 Fitur Website

✅ **Dark Theme Premium** dengan efek glassmorphism
✅ **Smooth Animations** di semua section
✅ **Responsive Design** untuk semua device
✅ **Scroll-to-Top Button** untuk navigasi mudah
✅ **Interactive Skill Filter** dengan 3 kategori
✅ **Professional Typography** dengan JetBrains Mono & Outfit
✅ **Terminal-Style UI** yang unik dan modern

---

## 📞 Support

Jika ada masalah saat deployment:

1. Periksa console browser (F12) untuk error
2. Periksa Network tab untuk melihat file mana yang gagal load
3. Pastikan semua file ter-upload dengan benar
4. Hubungi support hosting jika ada masalah server

---

## 🎉 Selamat!

Website CV Anda siap tampil maksimal di domain my.id! 

**Next Steps:**
- Share link ke LinkedIn
- Update CV dengan link website
- Monitor traffic dengan Google Analytics (opsional)
- Backup website secara berkala

---

**Built with:** Vite + TypeScript + Vanilla CSS
**Version:** 2.0.4
**Last Updated:** 2025
