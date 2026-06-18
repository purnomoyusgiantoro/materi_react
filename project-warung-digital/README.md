# 🏪 Project: Warung Sekolah Digital

> **Level:** Menengah (setelah menyelesaikan 3 JP materi dasar)
> **Durasi:** 1–2 Jam Praktik
> **Hasil Akhir:** Aplikasi web toko kantin sekolah full-stack dengan fitur menu, keranjang belanja, dan admin

---

## 🎯 Tentang Project Ini

Kamu akan membuat **Warung Sekolah Digital** — aplikasi web untuk kantin sekolah di mana:

- 🍔 Menampilkan **daftar menu** makanan dan minuman
- 🛒 Bisa **tambah ke keranjang** belanja
- 💰 Menghitung **total harga** otomatis
- ➕ Bisa **tambah menu baru** (fitur admin)
- 🔍 Bisa **cari menu** berdasarkan nama
- 🏷️ Bisa **filter** berdasarkan kategori

### Preview Tampilan

```
┌──────────────────────────────────────────────┐
│  🏪 Warung Sekolah Digital                   │
│  ┌─────────────────────────────────────────┐ │
│  │ 🔍 Cari menu...          [Semua][Makan] │ │
│  └─────────────────────────────────────────┘ │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ 🍔       │  │ 🍜       │  │ 🧃       │   │
│  │ Burger   │  │ Mie Ayam │  │ Es Jeruk │   │
│  │ Rp15.000 │  │ Rp12.000 │  │ Rp 5.000 │   │
│  │[+Keranjg]│  │[+Keranjg]│  │[+Keranjg]│   │
│  └──────────┘  └──────────┘  └──────────┘   │
│                                              │
│  🛒 Keranjang (3 item) — Total: Rp 32.000   │
│  ┌──────────────────────────────────────┐    │
│  │ Burger x1      Rp15.000   [hapus]   │    │
│  │ Mie Ayam x1    Rp12.000   [hapus]   │    │
│  │ Es Jeruk x1    Rp 5.000   [hapus]   │    │
│  │──────────────────────────────────────│    │
│  │ TOTAL           Rp32.000  [PESAN!]  │    │
│  └──────────────────────────────────────┘    │
└──────────────────────────────────────────────┘
```

---

## 📁 Struktur File

```
project-warung-digital/
├── README.md                      ← File ini
├── panduan-project.md             ← 📖 Panduan langkah demi langkah + TANTANGAN
├── template-backend/
│   ├── package.json               ← Tinggal copy, lalu npm install
│   └── index.js                   ← Template backend (ada bagian yang harus dilengkapi)
└── template-frontend/
    ├── package.json               ← Tinggal copy, lalu npm install
    ├── index.html                 ← Entry HTML
    ├── vite.config.js             ← Config Vite
    └── src/
        ├── main.jsx               ← Entry point React
        ├── index.css              ← Style global
        ├── App.jsx                ← 🔥 Komponen utama (ada TANTANGAN di dalamnya!)
        └── App.css                ← Style lengkap
```

---

## 🚀 Cara Memulai (Quick Start)

### 1. Copy Template Backend

```bash
# Dari folder project-warung-digital:
cp -r template-backend warung-backend
cd warung-backend
npm install
node index.js
# → Server berjalan di http://localhost:3001
```

**Atau di Windows (Command Prompt):**
```bash
xcopy template-backend warung-backend /E /I
cd warung-backend
npm install
node index.js
```

### 2. Copy Template Frontend

```bash
# Buka terminal BARU:
cp -r template-frontend warung-frontend
cd warung-frontend
npm install
npm run dev
# → React berjalan di http://localhost:5173
```

**Atau di Windows (Command Prompt):**
```bash
xcopy template-frontend warung-frontend /E /I
cd warung-frontend
npm install
npm run dev
```

### 3. Buka Panduan dan Kerjakan Tantangan!

Buka [panduan-project.md](./panduan-project.md) dan ikuti langkah-langkahnya.

---

## 🔥 Daftar Tantangan

Di dalam kode template ada **7 tantangan** yang harus kamu kerjakan sendiri:

| # | Tantangan | Tingkat | Di File |
|---|-----------|---------|---------|
| 1 | Tambah 3 menu baru ke data awal | ⭐ Mudah | `backend/index.js` |
| 2 | Buat fungsi format harga Rupiah | ⭐ Mudah | `frontend/App.jsx` |
| 3 | Buat fitur pencarian menu | ⭐⭐ Sedang | `frontend/App.jsx` |
| 4 | Buat fitur filter kategori | ⭐⭐ Sedang | `frontend/App.jsx` |
| 5 | Buat fitur hapus item dari keranjang | ⭐⭐ Sedang | `frontend/App.jsx` |
| 6 | Hitung total harga keranjang | ⭐⭐ Sedang | `frontend/App.jsx` |
| 7 | Buat fitur "Pesan Sekarang" dengan alert | ⭐⭐⭐ Sulit | `frontend/App.jsx` |

> 💡 **Setiap tantangan ada HINT (petunjuk)** di dalam kode! Cari komentar bertanda `🔥 TANTANGAN`.

---

## ✅ Checklist Selesai

- [ ] Server Express berjalan dan API `/api/menu` menampilkan data
- [ ] Tampilan React menampilkan kartu-kartu menu
- [ ] Tantangan 1: 3 menu baru ditambahkan ✏️
- [ ] Tantangan 2: Harga tampil dalam format Rupiah 💰
- [ ] Tantangan 3: Fitur pencarian berfungsi 🔍
- [ ] Tantangan 4: Filter kategori berfungsi 🏷️
- [ ] Tantangan 5: Bisa hapus item dari keranjang 🗑️
- [ ] Tantangan 6: Total harga terhitung otomatis 🧮
- [ ] Tantangan 7: Tombol "Pesan" menampilkan ringkasan 📋

---

**📖 Mulai dari [Panduan Project →](./panduan-project.md)**
