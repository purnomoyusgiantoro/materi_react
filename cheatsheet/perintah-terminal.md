# 📋 Cheatsheet: Perintah Terminal yang Sering Dipakai

> Referensi cepat perintah terminal untuk development React + Express.
> Buka terminal di VS Code: tekan `Ctrl + ~` (backtick)

---

## 🗂️ Navigasi Folder

| Perintah | Fungsi | Contoh |
|----------|--------|--------|
| `cd nama_folder` | Masuk ke folder | `cd todo-backend` |
| `cd ..` | Mundur satu folder | `cd ..` |
| `dir` (Windows) / `ls` (Mac/Linux) | Lihat isi folder | `dir` |
| `mkdir nama_folder` | Buat folder baru | `mkdir project-baru` |

---

## 📦 NPM (Node Package Manager)

### Inisialisasi & Install

| Perintah | Fungsi |
|----------|--------|
| `npm init -y` | Buat `package.json` baru (setup project) |
| `npm install nama_package` | Install package/library |
| `npm install` | Install semua dependencies dari `package.json` |
| `npm install express` | Install Express |
| `npm install cors` | Install CORS |

### Menjalankan Project

| Perintah | Fungsi |
|----------|--------|
| `node index.js` | Jalankan file JavaScript dengan Node.js |
| `npm run dev` | Jalankan React (development mode) |
| `npm run build` | Build React untuk production |

### Membuat Project Baru

| Perintah | Fungsi |
|----------|--------|
| `npm create vite@latest nama-project -- --template react` | Buat project React baru dengan Vite |

---

## 🖥️ Server & Proses

| Perintah | Fungsi |
|----------|--------|
| `Ctrl + C` | Hentikan server/proses yang sedang berjalan |
| `Ctrl + ~` | Buka/tutup terminal di VS Code |
| `Ctrl + Shift + ~` | Buka terminal baru |
| `cls` (Windows) / `clear` (Mac/Linux) | Bersihkan layar terminal |

---

## 🔧 Git (Opsional — untuk menyimpan kode)

| Perintah | Fungsi |
|----------|--------|
| `git init` | Inisialisasi Git di folder |
| `git add .` | Tandai semua file untuk di-commit |
| `git commit -m "pesan"` | Simpan perubahan dengan pesan |
| `git status` | Lihat status perubahan |

---

## 🌐 Port yang Digunakan

| Aplikasi | Port Default | URL |
|----------|-------------|-----|
| Express (Backend) | 3000 | http://localhost:3000 |
| React/Vite (Frontend) | 5173 | http://localhost:5173 |

---

## ⚠️ Troubleshooting Umum

### Error: "port already in use"
Server sebelumnya masih berjalan. Hentikan dulu dengan `Ctrl + C`, lalu jalankan lagi.

### Error: "module not found"
Package belum terinstall. Jalankan:
```bash
npm install
```

### Error: "CORS blocked"
Pastikan `cors` sudah di-install dan ditambahkan di Express:
```javascript
const cors = require('cors');
app.use(cors());
```

### React tidak menampilkan perubahan
1. Cek terminal — apakah ada error?
2. Simpan file (`Ctrl + S`)
3. Refresh browser (`Ctrl + R` atau `F5`)

### Data tidak muncul di React
1. Pastikan server Express **sedang berjalan**
2. Cek URL API di browser: `http://localhost:3000/api/todos`
3. Buka **Developer Tools** di browser (`F12`) → tab **Console** untuk lihat error

---

## 🔑 Shortcut VS Code yang Berguna

| Shortcut | Fungsi |
|----------|--------|
| `Ctrl + S` | Simpan file |
| `Ctrl + Z` | Undo (batalkan) |
| `Ctrl + Shift + Z` | Redo |
| `Ctrl + /` | Comment/uncomment baris |
| `Ctrl + D` | Pilih kata yang sama berikutnya |
| `Alt + ↑/↓` | Pindahkan baris ke atas/bawah |
| `Ctrl + P` | Cari dan buka file |
| `Ctrl + Shift + P` | Command Palette |
| `Ctrl + ~` | Toggle terminal |

---

## 📝 Urutan Perintah Setup Lengkap

### Setup Backend (Express):

```bash
mkdir todo-backend
cd todo-backend
npm init -y
npm install express cors
# Buat file index.js, lalu:
node index.js
```

### Setup Frontend (React):

```bash
npm create vite@latest todo-frontend -- --template react
cd todo-frontend
npm install
npm run dev
```
