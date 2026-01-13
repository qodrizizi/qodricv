# 📋 Checklist Upload Files ke Server

## ✅ File Wajib Upload

### Root Files (Upload ke public_html atau www)
- [ ] `index.html` (7 KB)
- [ ] `.htaccess` (dari root project, bukan dari dist)
- [ ] `script.js` (1.5 KB)
- [ ] `styles.css` (12 KB)

### Folder: assets/
- [ ] `index-CtSHbX5Q.css` (11 KB)
- [ ] `index-qmARwJNG.js` (12 KB)

### Folder: css/
- [ ] `style.css`

### Folder: js/
- [ ] `script.js`

### Folder: img/ (SANGAT PENTING!)
- [ ] `BCF.png` (7 KB) - Logo Bakrie Center Foundation
- [ ] `about.jpeg` (1.1 MB)
- [ ] `certification1.png` (383 KB) - Digital Forensic
- [ ] `certification2.jpg` (537 KB) - IT and Database
- [ ] `certification3.jpg` (1.1 MB) - CSIL-CI
- [ ] `csc.png` (9 KB) - Logo CSC
- [ ] `himatif.jpg` (5 KB) - Logo HIMATIF
- [ ] `icon.jpg` (1.4 MB)
- [ ] `komputer.jpg` (784 KB) - Operator Komputer
- [ ] `network.jpg` (787 KB) - Junior Network Admin
- [ ] `poto.jpg` (162 KB)
- [ ] `profile.png` (160 KB) - **PENTING: Foto profil utama**
- [ ] `sikmrs.jpg` (8 KB) - Logo SIKMRS
- [ ] `web.jpg` (784 KB) - Junior Web Developer

---

## 📊 Total Files: 22 files

### Struktur Folder di Server:

```
public_html/ (atau www/)
│
├── index.html
├── .htaccess
├── script.js
├── styles.css
│
├── assets/
│   ├── index-CtSHbX5Q.css
│   └── index-qmARwJNG.js
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── img/
    ├── BCF.png
    ├── about.jpeg
    ├── certification1.png
    ├── certification2.jpg
    ├── certification3.jpg
    ├── csc.png
    ├── himatif.jpg
    ├── icon.jpg
    ├── komputer.jpg
    ├── network.jpg
    ├── poto.jpg
    ├── profile.png
    ├── sikmrs.jpg
    └── web.jpg
```

---

## 🎯 Cara Upload via FTP/cPanel

### Metode 1: File Manager cPanel
1. Login ke cPanel
2. Buka "File Manager"
3. Masuk ke folder `public_html` atau `www`
4. Upload semua file dari folder `dist/` ke sini
5. Upload file `.htaccess` dari root project

### Metode 2: FTP Client (FileZilla)
1. Buka FileZilla
2. Connect ke server FTP Anda
3. Di panel kanan, masuk ke `public_html` atau `www`
4. Di panel kiri, masuk ke folder `dist/` di komputer Anda
5. Drag & drop semua file dan folder
6. Upload file `.htaccess` dari root project

### Metode 3: Git (Jika server support)
```bash
# Di server
git clone https://github.com/username/qodricv.git
cd qodricv
npm install
npm run build
# Copy isi dist/ ke public_html
```

---

## ✅ Verifikasi Setelah Upload

### 1. Cek File di Server
Pastikan semua file ada dengan ukuran yang benar.

### 2. Test di Browser
Buka: `https://namadomain.my.id`

### 3. Cek Console Browser (F12)
Pastikan tidak ada error 404 untuk gambar.

### 4. Test Semua Section
- [ ] Hero section loading
- [ ] About - foto profil muncul
- [ ] Skills - filter berfungsi
- [ ] Projects - gambar muncul
- [ ] Certifications - 6 sertifikat muncul
- [ ] Experience - logo perusahaan muncul
- [ ] Contact - map muncul

### 5. Test Responsiveness
- [ ] Desktop (1920x1080)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

---

## 🚨 Troubleshooting

### Gambar Tidak Muncul?
1. Cek apakah folder `img/` ter-upload
2. Cek nama file (case-sensitive di Linux)
3. Cek permissions: `chmod 755 img/`
4. Cek console browser untuk error 404

### Website Blank?
1. Cek apakah `index.html` ter-upload
2. Cek apakah folder `assets/` ter-upload
3. Clear cache browser (Ctrl + F5)

### Error 404 saat Refresh?
1. Pastikan `.htaccess` ter-upload
2. Pastikan mod_rewrite aktif
3. Hubungi support hosting

---

## 📞 Need Help?

Jika ada masalah:
1. Screenshot error yang muncul
2. Cek console browser (F12)
3. Cek Network tab untuk melihat file mana yang gagal
4. Hubungi support hosting dengan screenshot

---

**Good luck! 🚀**
