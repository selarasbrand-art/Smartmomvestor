# SmartMomVestor — Smart Financial Reset Kit™

Landing page penjualan (React + Vite), siap deploy ke Vercel.

## 1. Jalankan lokal (opsional, untuk cek dulu)

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## 2. Upload ke GitHub

1. Buat repository baru di GitHub (misalnya `smartmomvestor-landing`), **jangan** centang "Add README" agar tidak bentrok.
2. Di folder project ini, jalankan:

```bash
git init
git add .
git commit -m "Initial commit: SmartMomVestor landing page"
git branch -M main
git remote add origin https://github.com/USERNAME/smartmomvestor-landing.git
git push -u origin main
```

Ganti `USERNAME` dan nama repo sesuai punyamu.

## 3. Deploy ke Vercel

**Opsi A — lewat dashboard (paling mudah):**
1. Login ke [vercel.com](https://vercel.com) pakai akun GitHub kamu.
2. Klik **Add New → Project**.
3. Pilih repo `smartmomvestor-landing` yang baru di-push.
4. Vercel otomatis mendeteksi framework **Vite** (build command `npm run build`, output `dist`) — biarkan default, lalu klik **Deploy**.
5. Setelah build selesai (~1 menit), kamu dapat URL live seperti `smartmomvestor-landing.vercel.app`.

**Opsi B — lewat CLI:**
```bash
npm install -g vercel
vercel login
vercel        # deploy preview
vercel --prod # deploy ke production
```

## 4. Ganti konten nanti

- Foto perempuan: buka `src/App.jsx`, cari komentar `EDITORIAL PHOTO`, ganti elemen `<img>` dengan foto asli (taruh file di folder `public/` lalu isi `src="/nama-file.jpg"`).
- Harga & link checkout: cari bagian `OFFER` di `src/App.jsx`.
- Semua teks modul, bonus, FAQ ada di array di bagian atas file `src/App.jsx` — tinggal edit teksnya, tidak perlu sentuh layout.

## Struktur file

```
smartmomvestor/
├── index.html          # entry HTML
├── package.json
├── vercel.json          # konfigurasi build Vercel
├── vite.config.js
├── src/
│   ├── main.jsx          # render root React
│   └── App.jsx           # seluruh landing page (komponen utama)
└── README.md
```
