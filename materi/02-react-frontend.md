# 📖 Pertemuan 2: React Frontend — Komponen, Props & State

> ⏱️ Durasi: **45 menit**
> 🎯 Tujuan: Membuat tampilan web interaktif menggunakan React

---

## 📌 Daftar Isi

1. [Apa Itu React?](#1-apa-itu-react)
2. [Membuat Project React dengan Vite](#2-membuat-project-react-dengan-vite)
3. [Memahami Struktur Project React](#3-memahami-struktur-project-react)
4. [Konsep Utama React](#4-konsep-utama-react)
5. [Praktik: Membuat Tampilan Todo List](#5-praktik-membuat-tampilan-todo-list)
6. [Latihan Mandiri](#6-latihan-mandiri)

---

## 1. Apa Itu React?

React adalah **library JavaScript** untuk membuat tampilan (UI) website yang:

- 🧩 **Berbasis Komponen** — UI dipecah jadi bagian-bagian kecil (komponen)
- ⚡ **Cepat** — Hanya mengupdate bagian yang berubah
- 🔄 **Reaktif** — Tampilan otomatis berubah saat data berubah

### Analogi Komponen React

Bayangkan kamu membangun rumah dari **LEGO**:

```
┌─────────────────────────────────┐
│          🏠 Halaman Web         │
│  ┌──────────────────────────┐   │
│  │      📌 Header           │   │  ← Komponen Header
│  └──────────────────────────┘   │
│  ┌──────────────────────────┐   │
│  │      📝 Form Input       │   │  ← Komponen Form
│  └──────────────────────────┘   │
│  ┌──────────────────────────┐   │
│  │      📋 Daftar Todo      │   │  ← Komponen TodoList
│  │  ┌────────────────────┐  │   │
│  │  │ ☐ Todo Item 1      │  │   │  ← Komponen TodoItem
│  │  ├────────────────────┤  │   │
│  │  │ ☐ Todo Item 2      │  │   │  ← Komponen TodoItem
│  │  ├────────────────────┤  │   │
│  │  │ ☐ Todo Item 3      │  │   │  ← Komponen TodoItem
│  │  └────────────────────┘  │   │
│  └──────────────────────────┘   │
└─────────────────────────────────┘
```

> Setiap **kotak** adalah satu **komponen** React. Komponen bisa dipakai ulang!

---

## 2. Membuat Project React dengan Vite

### Apa Itu Vite?

**Vite** (dibaca "vit") adalah tool untuk membuat project React dengan cepat. Jauh lebih cepat dari `create-react-app`.

### Langkah 1: Buat Project Baru

Buka terminal **baru** (biarkan server Express di terminal sebelumnya tetap jalan), lalu:

```bash
npm create vite@latest todo-frontend -- --template react
```

> 📝 Perintah ini akan membuat folder `todo-frontend` dengan template React.

### Langkah 2: Masuk ke Folder dan Install Dependencies

```bash
cd todo-frontend
npm install
```

### Langkah 3: Jalankan React

```bash
npm run dev
```

Output:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
```

Buka **http://localhost:5173** di browser — kamu akan melihat halaman React default! 🎉

---

## 3. Memahami Struktur Project React

```
todo-frontend/
├── node_modules/      ← Library yang terinstall (JANGAN DISENTUH)
├── public/            ← File statis (gambar, icon)
├── src/               ← ⭐ KODE KITA DI SINI
│   ├── App.jsx        ← Komponen utama
│   ├── App.css        ← Style untuk App
│   ├── main.jsx       ← Entry point (titik masuk)
│   └── index.css      ← Style global
├── index.html         ← File HTML utama
├── package.json       ← Info project & dependencies
└── vite.config.js     ← Konfigurasi Vite
```

### File Penting:

| File | Fungsi |
|------|--------|
| `src/main.jsx` | Titik masuk — menghubungkan React ke HTML |
| `src/App.jsx` | Komponen utama — "halaman utama" kita |
| `src/App.css` | Styling untuk komponen App |
| `src/index.css` | Styling global (berlaku untuk semua) |

---

## 4. Konsep Utama React

### 4.1. JSX — HTML di dalam JavaScript

JSX memungkinkan kita menulis **HTML di dalam JavaScript**:

```jsx
// Ini JSX! Campuran HTML dan JavaScript
function Salam() {
  const nama = 'Budi';

  return (
    <div>
      <h1>Halo, {nama}! 👋</h1>
      <p>Selamat belajar React!</p>
    </div>
  );
}
```

> 💡 **Kurung kurawal `{}`** digunakan untuk memasukkan JavaScript ke dalam HTML.

### Aturan JSX:

| Aturan | Contoh Benar | Contoh Salah |
|--------|-------------|-------------|
| Harus punya 1 elemen pembungkus | `<div>...</div>` | `<h1>...</h1><p>...</p>` tanpa pembungkus |
| `class` → `className` | `<div className="box">` | `<div class="box">` |
| Tag harus ditutup | `<img />` | `<img>` |

### 4.2. Komponen — Blok Bangunan React

**Komponen** = fungsi JavaScript yang mengembalikan JSX (tampilan).

```jsx
// Komponen sederhana
function KartuSiswa() {
  return (
    <div className="kartu">
      <h2>Budi Santoso</h2>
      <p>Kelas: XII IPA 1</p>
    </div>
  );
}
```

> 📝 Nama komponen **HARUS** diawali huruf **KAPITAL** (PascalCase).

### 4.3. Props — Mengirim Data ke Komponen

**Props** = data yang dikirim dari komponen induk ke komponen anak.

```jsx
// Komponen yang menerima props
function KartuSiswa({ nama, kelas }) {
  return (
    <div className="kartu">
      <h2>{nama}</h2>
      <p>Kelas: {kelas}</p>
    </div>
  );
}

// Cara menggunakan:
function App() {
  return (
    <div>
      <KartuSiswa nama="Budi" kelas="XII IPA 1" />
      <KartuSiswa nama="Ani" kelas="XII IPA 2" />
      <KartuSiswa nama="Cika" kelas="XII IPS 1" />
    </div>
  );
}
```

> 💡 **Analogi Props:** Seperti mengisi formulir. Komponen adalah formulirnya, props adalah data yang diisi.

### 4.4. State — Data yang Bisa Berubah

**State** = data dalam komponen yang **bisa berubah** dan membuat tampilan **otomatis update**.

```jsx
import { useState } from 'react';

function Penghitung() {
  // [nilai, fungsiUntukMengubahNilai] = useState(nilaiAwal)
  const [angka, setAngka] = useState(0);

  return (
    <div>
      <h2>Angka: {angka}</h2>
      <button onClick={() => setAngka(angka + 1)}>
        Tambah +1
      </button>
      <button onClick={() => setAngka(angka - 1)}>
        Kurang -1
      </button>
      <button onClick={() => setAngka(0)}>
        Reset
      </button>
    </div>
  );
}
```

### Perbedaan Props vs State:

| Aspek | Props | State |
|-------|-------|-------|
| Siapa yang kirim? | Komponen induk | Komponen itu sendiri |
| Bisa berubah? | ❌ Tidak (read-only) | ✅ Bisa (pakai setter) |
| Memicu render ulang? | Ya (jika berubah dari induk) | Ya (otomatis) |
| Analogi | Pesan dari atasan | Catatan pribadi |

---

## 5. Praktik: Membuat Tampilan Todo List

Sekarang kita akan membuat tampilan Todo List di React! 🎨

### Langkah 1: Bersihkan File Default

**Ganti isi** `src/App.css` dengan CSS berikut:

```css
/* src/App.css */

/* ===== RESET & BASE ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ===== CONTAINER UTAMA ===== */
.app {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
  width: 100%;
  max-width: 500px;
}

/* ===== HEADER ===== */
.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: #ffffff;
  font-size: 2.2rem;
  margin-bottom: 5px;
}

.header p {
  color: #a8a8b3;
  font-size: 0.95rem;
}

/* ===== FORM INPUT ===== */
.form-input {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
}

.form-input input {
  flex: 1;
  padding: 14px 18px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

.form-input input::placeholder {
  color: #6c6c80;
}

.form-input input:focus {
  border-color: #8257e5;
  background: rgba(255, 255, 255, 0.12);
}

.form-input button {
  padding: 14px 24px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, #8257e5, #6833e4);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.form-input button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(130, 87, 229, 0.4);
}

/* ===== INFO BAR ===== */
.info-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 0 5px;
}

.info-bar span {
  font-size: 0.85rem;
  color: #a8a8b3;
}

.info-bar span strong {
  color: #8257e5;
}

/* ===== TODO LIST ===== */
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* ===== TODO ITEM ===== */
.todo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  animation: slideIn 0.3s ease;
}

.todo-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.todo-item.selesai {
  opacity: 0.5;
}

.todo-item.selesai .todo-text {
  text-decoration: line-through;
  color: #6c6c80;
}

/* Checkbox custom */
.todo-checkbox {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #8257e5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.todo-checkbox:hover {
  background: rgba(130, 87, 229, 0.3);
}

.todo-checkbox.checked {
  background: #8257e5;
}

.todo-checkbox.checked::after {
  content: '✓';
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.todo-text {
  flex: 1;
  color: #e1e1e6;
  font-size: 0.95rem;
  word-break: break-word;
}

.todo-delete {
  background: none;
  border: none;
  color: #6c6c80;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 5px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.todo-delete:hover {
  color: #e55757;
  background: rgba(229, 87, 87, 0.15);
}

/* ===== EMPTY STATE ===== */
.empty-state {
  text-align: center;
  padding: 50px 20px;
  color: #6c6c80;
}

.empty-state .emoji {
  font-size: 3rem;
  margin-bottom: 15px;
}

.empty-state p {
  font-size: 0.95rem;
}

/* ===== ANIMASI ===== */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Langkah 2: Ganti `src/App.jsx`

**Ganti seluruh isi** file `src/App.jsx` dengan kode berikut:

```jsx
// src/App.jsx — Aplikasi Todo List 📝
import { useState } from 'react';
import './App.css';

function App() {
  // ===== STATE =====
  const [todos, setTodos] = useState([
    { id: 1, tugas: 'Belajar Express', selesai: false },
    { id: 2, tugas: 'Belajar React', selesai: false },
    { id: 3, tugas: 'Buat project keren', selesai: false },
  ]);
  const [inputTugas, setInputTugas] = useState('');

  // ===== FUNGSI-FUNGSI =====

  // Fungsi untuk menambah todo baru
  function tambahTodo() {
    // Jangan tambah jika input kosong
    if (inputTugas.trim() === '') return;

    const todoBaru = {
      id: Date.now(), // ID unik berdasarkan waktu
      tugas: inputTugas,
      selesai: false,
    };

    setTodos([...todos, todoBaru]);
    setInputTugas(''); // Kosongkan input
  }

  // Fungsi untuk toggle selesai/belum
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, selesai: !todo.selesai } : todo
      )
    );
  }

  // Fungsi untuk hapus todo
  function hapusTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Hitung jumlah todo selesai
  const jumlahSelesai = todos.filter((t) => t.selesai).length;

  // ===== TAMPILAN =====
  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h1>📝 Todo List</h1>
          <p>Atur tugas-tugasmu dengan mudah!</p>
        </div>

        {/* Form Input */}
        <div className="form-input">
          <input
            type="text"
            placeholder="Tulis tugas baru..."
            value={inputTugas}
            onChange={(e) => setInputTugas(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && tambahTodo()}
          />
          <button onClick={tambahTodo}>Tambah</button>
        </div>

        {/* Info Bar */}
        <div className="info-bar">
          <span>
            Total: <strong>{todos.length}</strong> tugas
          </span>
          <span>
            Selesai: <strong>{jumlahSelesai}</strong> dari {todos.length}
          </span>
        </div>

        {/* Daftar Todo */}
        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <div className="emoji">🎉</div>
              <p>Semua tugas selesai! Atau belum ada tugas.</p>
            </div>
          ) : (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onHapus={hapusTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// ===== KOMPONEN TODO ITEM =====
function TodoItem({ todo, onToggle, onHapus }) {
  return (
    <div className={`todo-item ${todo.selesai ? 'selesai' : ''}`}>
      <div
        className={`todo-checkbox ${todo.selesai ? 'checked' : ''}`}
        onClick={() => onToggle(todo.id)}
      />
      <span className="todo-text">{todo.tugas}</span>
      <button className="todo-delete" onClick={() => onHapus(todo.id)}>
        🗑️
      </button>
    </div>
  );
}

export default App;
```

### Langkah 3: Ganti `src/index.css`

**Ganti seluruh isi** file `src/index.css`:

```css
/* src/index.css — Style Global */
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Langkah 4: Lihat Hasilnya!

Buka browser di **http://localhost:5173** — kamu akan lihat Todo List yang keren! 🎨

**Coba fitur-fiturnya:**
- ✅ Ketik tugas baru dan klik "Tambah" (atau tekan Enter)
- ✅ Klik lingkaran untuk menandai selesai
- ✅ Klik 🗑️ untuk menghapus

### Penjelasan Kode App.jsx:

```jsx
// Ini adalah State — data yang bisa berubah
const [todos, setTodos] = useState([...]);    // Daftar todo
const [inputTugas, setInputTugas] = useState(''); // Isi input

// Untuk mengubah state, gunakan setter function:
setTodos([...todos, todoBaru]);    // Tambah todo baru
setInputTugas('');                  // Kosongkan input

// Props dikirim ke komponen anak:
<TodoItem
  todo={todo}              // Props: data todo
  onToggle={toggleTodo}    // Props: fungsi toggle
  onHapus={hapusTodo}      // Props: fungsi hapus
/>

// Komponen anak menerima props:
function TodoItem({ todo, onToggle, onHapus }) {
  // Menggunakan props di dalam komponen
}
```

---

## 6. Latihan Mandiri

### ✏️ Latihan 1: Tambah Fitur "Hapus Semua"
Tambahkan tombol **"Hapus Semua"** yang menghapus seluruh todo.

```jsx
// Hint: buat fungsi hapusSemua
function hapusSemua() {
  setTodos([]);
}

// Tambahkan tombol di bawah info-bar
```

### ✏️ Latihan 2: Hitung Todo yang Belum Selesai
Tampilkan jumlah todo yang **belum selesai** di info bar.

```jsx
// Hint: gunakan filter
const belumSelesai = todos.filter(t => !t.selesai).length;
```

### ✏️ Latihan 3: Ubah Warna Tema
Coba ubah warna gradient di `.app` pada `App.css`:

```css
/* Contoh warna lain: */
background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);  /* Biru gelap */
background: linear-gradient(135deg, #1b1b2f, #162447, #1f4068);  /* Navy */
background: linear-gradient(135deg, #0d0d0d, #1a1a2e, #2d132c);  /* Ungu gelap */
```

---

## 📋 Ringkasan Pertemuan 2

| Konsep | Penjelasan |
|--------|-----------|
| **JSX** | Menulis HTML di dalam JavaScript |
| **Komponen** | Blok bangunan UI (fungsi yang return JSX) |
| **Props** | Data yang dikirim dari induk ke anak |
| **State** | Data yang bisa berubah dan membuat UI update |
| **useState** | Hook React untuk membuat state |
| **Event Handler** | Fungsi yang dijalankan saat user interaksi (onClick, onChange) |
| **map()** | Menampilkan daftar/array sebagai elemen JSX |
| **Vite** | Tool untuk membuat dan menjalankan project React |

---

**🎉 Pertemuan 2 selesai! Lanjut ke [Pertemuan 3: Full-Stack Todo App →](./03-fullstack-todo-app.md)**
