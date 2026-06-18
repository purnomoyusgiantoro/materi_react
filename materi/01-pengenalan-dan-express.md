# 📖 Pertemuan 1: Pengenalan Web Modern & Express Backend

> ⏱️ Durasi: **45 menit**
> 🎯 Tujuan: Memahami konsep frontend-backend dan membuat server API pertama

---

## 📌 Daftar Isi

1. [Apa Itu Website Modern?](#1-apa-itu-website-modern)
2. [Mengenal Frontend & Backend](#2-mengenal-frontend--backend)
3. [Apa Itu React & Express?](#3-apa-itu-react--express)
4. [Praktik: Membuat Server Express Pertama](#4-praktik-membuat-server-express-pertama)
5. [Praktik: Membuat API Sederhana](#5-praktik-membuat-api-sederhana)
6. [Latihan Mandiri](#6-latihan-mandiri)

---

## 1. Apa Itu Website Modern?

### Website Dulu vs Sekarang

| Aspek | Website Lama | Website Modern |
|-------|-------------|----------------|
| Tampilan | Statis, membosankan | Dinamis, interaktif |
| Update | Harus reload halaman | Real-time tanpa reload |
| Contoh | Blog sederhana | Instagram, Tokopedia |
| Teknologi | HTML + PHP | React + Express |

### Cara Kerja Website Modern

```
┌─────────────┐         ┌─────────────┐         ┌──────────┐
│   Browser   │ ←─────→ │   Server    │ ←─────→ │ Database │
│ (Frontend)  │  JSON   │ (Backend)   │         │          │
│ React       │         │ Express     │         │          │
└─────────────┘         └─────────────┘         └──────────┘
     👆                       👆
  Tampilan               Logika &
  yang dilihat           penyimpanan
  user                   data
```

> 💡 **Analogi Sederhana:**
> - **Frontend** = Tampilan toko (etalase, dekorasi, kasir)
> - **Backend** = Gudang toko (stok barang, catatan penjualan)
> - **API** = Pintu penghubung antara toko dan gudang

---

## 2. Mengenal Frontend & Backend

### Frontend (Sisi Klien/User)

Frontend adalah bagian yang **dilihat dan diinteraksi** oleh pengguna.

**Teknologi Frontend:**
- **HTML** → Struktur halaman (kerangka)
- **CSS** → Tampilan/gaya (warna, ukuran, posisi)
- **JavaScript** → Interaksi (klik, animasi, logika)
- **React** → Library JavaScript untuk membuat UI

### Backend (Sisi Server)

Backend adalah bagian yang **bekerja di belakang layar**, mengelola data dan logika.

**Teknologi Backend:**
- **Node.js** → JavaScript yang berjalan di server
- **Express** → Framework untuk membuat API di Node.js
- **Database** → Tempat menyimpan data (MongoDB, MySQL, dll.)

### Apa Itu API?

**API** (Application Programming Interface) = cara frontend dan backend berkomunikasi.

```
Frontend: "Hei server, kasih aku daftar todo!"
    ↓ (HTTP Request: GET /api/todos)
Backend:  "Nih, ini datanya!"
    ↓ (HTTP Response: JSON data)
Frontend: "Oke, aku tampilkan ke user!"
```

**Format data yang dikirim = JSON (JavaScript Object Notation)**

```json
{
  "id": 1,
  "tugas": "Belajar React",
  "selesai": false
}
```

---

## 3. Apa Itu React & Express?

### ⚛️ React

- Dibuat oleh **Facebook** (Meta)
- Digunakan oleh: Instagram, WhatsApp Web, Netflix
- Membuat tampilan web menjadi **komponen-komponen** kecil yang bisa dipakai ulang

### 🚂 Express

- Framework **paling populer** untuk Node.js
- Membuat **API** dan **server** dengan sangat mudah
- Ringan dan sederhana

---

## 4. Praktik: Membuat Server Express Pertama

### Langkah 1: Buat Folder Project

Buka **Terminal** di VS Code (`Ctrl + ~`), lalu ketik:

```bash
mkdir todo-backend
cd todo-backend
```

### Langkah 2: Inisialisasi Project Node.js

```bash
npm init -y
```

> 📝 Perintah ini membuat file `package.json` yang berisi informasi project kamu.

Kamu akan lihat output seperti ini:
```json
{
  "name": "todo-backend",
  "version": "1.0.0",
  "main": "index.js",
  ...
}
```

### Langkah 3: Install Express

```bash
npm install express
```

> 📝 Perintah ini mengunduh library Express dan menyimpannya di folder `node_modules`.

### Langkah 4: Buat File Server

Buat file baru bernama **`index.js`** di folder `todo-backend`, lalu ketik kode berikut:

```javascript
// index.js — Server Express Pertama Kita! 🎉

// 1. Import express
const express = require('express');

// 2. Buat aplikasi express
const app = express();

// 3. Tentukan port (alamat server)
const PORT = 3000;

// 4. Buat route pertama (halaman utama)
app.get('/', (req, res) => {
  res.send('Halo! Ini server Express pertamaku! 🚀');
});

// 5. Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
```

### Penjelasan Kode:

| Baris | Penjelasan |
|-------|-----------|
| `require('express')` | Mengambil library Express yang sudah di-install |
| `express()` | Membuat aplikasi Express baru |
| `PORT = 3000` | Server akan berjalan di port 3000 |
| `app.get('/', ...)` | Ketika ada yang mengakses halaman utama (`/`), kirim pesan |
| `req` | **Request** = permintaan dari browser |
| `res` | **Response** = jawaban dari server |
| `res.send(...)` | Mengirim teks sebagai jawaban |
| `app.listen(...)` | Menjalankan server dan menunggu permintaan |

### Langkah 5: Jalankan Server

```bash
node index.js
```

Output di terminal:
```
Server berjalan di http://localhost:3000
```

### Langkah 6: Buka di Browser

Buka browser, ketik: **http://localhost:3000**

Kamu akan melihat: **"Halo! Ini server Express pertamaku! 🚀"**

🎉 **Selamat! Kamu sudah membuat server pertamamu!**

> ⚠️ Untuk menghentikan server, tekan `Ctrl + C` di terminal.

---

## 5. Praktik: Membuat API Sederhana

Sekarang kita akan membuat API untuk **Todo List**. Update file `index.js`:

### Update `index.js`:

```javascript
// index.js — API Todo List 📝

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: agar bisa menerima data JSON dari frontend
app.use(express.json());

// Middleware: agar frontend React bisa mengakses API ini
const cors = require('cors');
app.use(cors());

// ===== DATA TODO (disimpan di memory/variabel) =====
let todos = [
  { id: 1, tugas: 'Belajar Express', selesai: false },
  { id: 2, tugas: 'Belajar React', selesai: false },
  { id: 3, tugas: 'Buat project keren', selesai: false }
];

// Variabel untuk membuat ID otomatis
let nextId = 4;

// ===== ROUTE API =====

// 1. GET — Ambil semua todo
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// 2. POST — Tambah todo baru
app.post('/api/todos', (req, res) => {
  const todoBaru = {
    id: nextId++,
    tugas: req.body.tugas,
    selesai: false
  };
  todos.push(todoBaru);
  res.json(todoBaru);
});

// 3. PUT — Update status todo (selesai/belum)
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (todo) {
    todo.selesai = !todo.selesai;
    res.json(todo);
  } else {
    res.status(404).json({ pesan: 'Todo tidak ditemukan' });
  }
});

// 4. DELETE — Hapus todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ pesan: 'Todo berhasil dihapus' });
});

// Halaman utama
app.get('/', (req, res) => {
  res.send('API Todo List berjalan! Akses /api/todos untuk melihat data.');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server API berjalan di http://localhost:${PORT}`);
  console.log(`Coba buka: http://localhost:${PORT}/api/todos`);
});
```

### Jangan lupa install CORS:

```bash
npm install cors
```

> 📝 **CORS** memungkinkan frontend (React) yang berjalan di port berbeda untuk mengakses API kita.

### Jalankan ulang server:

```bash
node index.js
```

### Coba di Browser:

Buka **http://localhost:3000/api/todos** — kamu akan lihat data JSON:

```json
[
  { "id": 1, "tugas": "Belajar Express", "selesai": false },
  { "id": 2, "tugas": "Belajar React", "selesai": false },
  { "id": 3, "tugas": "Buat project keren", "selesai": false }
]
```

### Penjelasan HTTP Methods:

| Method | Fungsi | Contoh URL | Keterangan |
|--------|--------|-----------|------------|
| `GET` | Mengambil data | `/api/todos` | Ambil semua todo |
| `POST` | Menambah data | `/api/todos` | Kirim todo baru |
| `PUT` | Mengupdate data | `/api/todos/1` | Update todo id 1 |
| `DELETE` | Menghapus data | `/api/todos/1` | Hapus todo id 1 |

---

## 6. Latihan Mandiri

### ✏️ Latihan 1: Tambah Route Baru
Tambahkan route baru untuk menampilkan satu todo berdasarkan ID:

```javascript
// Hint: gunakan app.get('/api/todos/:id', ...)
// Gunakan todos.find() untuk mencari todo
```

### ✏️ Latihan 2: Tambah Data Awal
Tambahkan 2 todo lagi ke array `todos` di awal (total jadi 5 todo).

### ✏️ Latihan 3: Custom Response
Buat route baru `GET /api/info` yang mengembalikan:
```json
{
  "nama_app": "Todo List SMA",
  "versi": "1.0",
  "jumlah_todo": 3
}
```

---

## 📋 Ringkasan Pertemuan 1

| Konsep | Penjelasan |
|--------|-----------|
| **Frontend** | Tampilan yang dilihat user (React) |
| **Backend** | Server yang mengelola data (Express) |
| **API** | Jembatan komunikasi frontend ↔ backend |
| **JSON** | Format data yang digunakan API |
| **HTTP Methods** | GET (ambil), POST (tambah), PUT (update), DELETE (hapus) |
| **npm** | Package manager untuk menginstall library |
| **Express** | Framework untuk membuat API di Node.js |

---

**🎉 Pertemuan 1 selesai! Lanjut ke [Pertemuan 2: React Frontend →](./02-react-frontend.md)**
