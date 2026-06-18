# 📖 Pertemuan 3: Menghubungkan React + Express (Full-Stack Todo App)

> ⏱️ Durasi: **45 menit**
> 🎯 Tujuan: Menghubungkan frontend React dengan backend Express menjadi aplikasi full-stack

---

## 📌 Daftar Isi

1. [Recap: Apa yang Sudah Kita Buat?](#1-recap-apa-yang-sudah-kita-buat)
2. [Konsep: Fetch API](#2-konsep-fetch-api)
3. [Konsep: useEffect Hook](#3-konsep-useeffect-hook)
4. [Praktik: Menghubungkan React ke Express](#4-praktik-menghubungkan-react-ke-express)
5. [Testing Aplikasi Full-Stack](#5-testing-aplikasi-full-stack)
6. [Tantangan Bonus](#6-tantangan-bonus)

---

## 1. Recap: Apa yang Sudah Kita Buat?

### Pertemuan 1 → Backend Express (Port 3000)

```
Server Express (http://localhost:3000)
├── GET    /api/todos      → Ambil semua todo
├── POST   /api/todos      → Tambah todo baru
├── PUT    /api/todos/:id   → Toggle selesai/belum
└── DELETE /api/todos/:id   → Hapus todo
```

### Pertemuan 2 → Frontend React (Port 5173)

```
React App (http://localhost:5173)
├── Tampilan Todo List yang keren
├── State: todos, inputTugas
├── Fungsi: tambahTodo, toggleTodo, hapusTodo
└── Komponen: App, TodoItem
```

### Sekarang: Hubungkan Keduanya! 🔗

```
React (Port 5173)  ←──── fetch() ────→  Express (Port 3000)
   Tampilan                                  Data & API
```

---

## 2. Konsep: Fetch API

**Fetch** adalah cara JavaScript untuk **mengirim permintaan HTTP** ke server.

### Contoh Dasar Fetch:

```javascript
// GET — Mengambil data dari server
fetch('http://localhost:3000/api/todos')
  .then(response => response.json())   // Ubah response ke JSON
  .then(data => console.log(data))     // Gunakan datanya
  .catch(error => console.error(error)); // Tangani error
```

### Dengan Async/Await (Lebih Mudah Dibaca):

```javascript
// Cara yang lebih modern dan mudah dibaca
async function ambilTodos() {
  try {
    const response = await fetch('http://localhost:3000/api/todos');
    const data = await response.json();
    console.log(data); // Array of todos
  } catch (error) {
    console.error('Gagal ambil data:', error);
  }
}
```

### Mengirim Data dengan POST:

```javascript
async function tambahTodo(tugas) {
  const response = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',  // Beritahu server: kita kirim JSON
    },
    body: JSON.stringify({ tugas: tugas }), // Data yang dikirim (sebagai JSON)
  });
  const data = await response.json();
  return data;
}
```

### Ringkasan HTTP Methods dengan Fetch:

| Method | Fungsi | Headers | Body |
|--------|--------|---------|------|
| GET | Ambil data | Tidak perlu | Tidak ada |
| POST | Kirim data baru | `Content-Type: application/json` | JSON data |
| PUT | Update data | `Content-Type: application/json` | Opsional |
| DELETE | Hapus data | Tidak perlu | Tidak ada |

---

## 3. Konsep: useEffect Hook

### Masalah: Kapan Harus Ambil Data?

Kita ingin **mengambil data dari server saat halaman pertama kali dibuka**. Di React, kita pakai **useEffect**.

### Apa Itu useEffect?

`useEffect` = menjalankan kode **setelah komponen tampil** di layar.

```jsx
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  // useEffect — jalankan sekali saat halaman dibuka
  useEffect(() => {
    // Kode di sini jalan setelah komponen tampil
    console.log('Halaman dibuka! Ambil data dari server...');

    // Ambil data dari API
    fetch('http://localhost:3000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []); // ← Array kosong [] = jalankan SEKALI saja

  return <div>...</div>;
}
```

### Penjelasan Parameter useEffect:

```jsx
useEffect(() => {
  // Kode yang dijalankan
}, [dependencies]);
```

| Dependencies | Kapan Dijalankan |
|-------------|-----------------|
| `[]` (kosong) | Sekali saja, saat pertama kali render |
| `[count]` | Setiap kali `count` berubah |
| Tidak ada | Setiap kali komponen render ulang |

> 💡 Untuk ambil data dari server, kita pakai `[]` (array kosong) agar hanya dijalankan sekali.

---

## 4. Praktik: Menghubungkan React ke Express

### Persiapan: Pastikan Kedua Server Berjalan!

**Terminal 1** — Server Express:
```bash
cd todo-backend
node index.js
# → Server berjalan di http://localhost:3000
```

**Terminal 2** — React:
```bash
cd todo-frontend
npm run dev
# → React berjalan di http://localhost:5173
```

### Langkah 1: Update `src/App.jsx` (Full-Stack Version)

**Ganti seluruh isi** `src/App.jsx` dengan kode berikut:

```jsx
// src/App.jsx — Full-Stack Todo App 🚀
import { useState, useEffect } from 'react';
import './App.css';

// Alamat server Express kita
const API_URL = 'http://localhost:3000/api/todos';

function App() {
  // ===== STATE =====
  const [todos, setTodos] = useState([]);
  const [inputTugas, setInputTugas] = useState('');
  const [loading, setLoading] = useState(true);

  // ===== AMBIL DATA DARI SERVER (saat halaman dibuka) =====
  useEffect(() => {
    ambilSemuaTodo();
  }, []);

  // Fungsi: Ambil semua todo dari server
  async function ambilSemuaTodo() {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('Gagal ambil data:', error);
    } finally {
      setLoading(false);
    }
  }

  // Fungsi: Tambah todo baru ke server
  async function tambahTodo() {
    if (inputTugas.trim() === '') return;

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tugas: inputTugas }),
      });
      const todoBaru = await response.json();

      // Tambahkan ke state lokal
      setTodos([...todos, todoBaru]);
      setInputTugas('');
    } catch (error) {
      console.error('Gagal menambah todo:', error);
    }
  }

  // Fungsi: Toggle selesai/belum di server
  async function toggleTodo(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
      });
      const todoUpdated = await response.json();

      // Update state lokal
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, selesai: todoUpdated.selesai } : todo
        )
      );
    } catch (error) {
      console.error('Gagal update todo:', error);
    }
  }

  // Fungsi: Hapus todo dari server
  async function hapusTodo(id) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });

      // Hapus dari state lokal
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Gagal menghapus todo:', error);
    }
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
          <p>Full-Stack App — React + Express</p>
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
          {loading ? (
            <div className="empty-state">
              <div className="emoji">⏳</div>
              <p>Memuat data dari server...</p>
            </div>
          ) : todos.length === 0 ? (
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

        {/* Footer */}
        <div className="footer">
          <p>💡 Data tersimpan di server Express (port 3000)</p>
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

### Langkah 2: Tambahkan Style Footer

Tambahkan CSS berikut di **bagian bawah** `src/App.css`:

```css
/* ===== FOOTER ===== */
.footer {
  text-align: center;
  margin-top: 30px;
  padding: 15px;
}

.footer p {
  color: #6c6c80;
  font-size: 0.8rem;
}
```

### Langkah 3: Lihat Hasilnya!

1. Pastikan **Express server berjalan** (Terminal 1)
2. Pastikan **React berjalan** (Terminal 2)
3. Buka **http://localhost:5173**

**Apa yang terjadi:**
1. ⏳ React menampilkan "Memuat data dari server..."
2. 📡 React mengirim GET request ke Express (`/api/todos`)
3. 📦 Express mengirim data todo sebagai JSON
4. 🎨 React menampilkan data tersebut sebagai UI yang keren!

### Coba Fitur-Fiturnya:

| Aksi | Apa yang Terjadi |
|------|-----------------|
| Ketik tugas + klik "Tambah" | React → POST ke Express → Data tersimpan di server |
| Klik ⭕ checkbox | React → PUT ke Express → Status berubah |
| Klik 🗑️ hapus | React → DELETE ke Express → Data terhapus |

### Bukti Data di Server:

Buka tab baru: **http://localhost:3000/api/todos** — kamu akan lihat data yang sama dalam format JSON!

---

## 5. Testing Aplikasi Full-Stack

### Test 1: Tambah Todo
1. Ketik "Belajar Full-Stack" di input
2. Klik "Tambah"
3. ✅ Todo baru muncul di daftar
4. ✅ Cek di `http://localhost:3000/api/todos` — data baru ada di sana

### Test 2: Toggle Selesai
1. Klik lingkaran di samping todo
2. ✅ Todo berubah jadi tercoret (opacity berkurang)
3. ✅ Klik lagi — kembali normal

### Test 3: Hapus Todo
1. Klik ikon 🗑️ di samping todo
2. ✅ Todo hilang dari daftar
3. ✅ Cek di API — data sudah terhapus

### Test 4: Refresh Halaman
1. Tekan **F5** atau **Ctrl+R** di browser
2. ✅ Data tetap ada! (Karena diambil dari server saat halaman dibuka)

> 💡 **Catatan:** Data akan hilang jika server Express di-restart, karena datanya disimpan di variabel (memori). Di aplikasi nyata, data disimpan di database.

---

## 6. Tantangan Bonus

### 🌟 Tantangan 1: Tambah Fitur Pencarian
Tambahkan input pencarian yang memfilter todo berdasarkan teks.

```jsx
// Hint:
const [cariTugas, setCariTugas] = useState('');

// Filter todos berdasarkan pencarian
const todoFiltered = todos.filter(todo =>
  todo.tugas.toLowerCase().includes(cariTugas.toLowerCase())
);

// Gunakan todoFiltered saat map, bukan todos
```

### 🌟 Tantangan 2: Tambah Tanggal Otomatis
Tambahkan tanggal pembuatan di setiap todo.

```javascript
// Di backend (index.js), tambahkan tanggal:
const todoBaru = {
  id: nextId++,
  tugas: req.body.tugas,
  selesai: false,
  tanggal: new Date().toLocaleDateString('id-ID') // Format tanggal Indonesia
};
```

### 🌟 Tantangan 3: Kategori Todo
Tambahkan dropdown kategori (Sekolah, Pribadi, Lainnya) saat menambah todo.

---

## 📋 Ringkasan Pertemuan 3

| Konsep | Penjelasan |
|--------|-----------|
| **fetch()** | Fungsi JavaScript untuk mengirim HTTP request ke server |
| **async/await** | Cara modern menangani operasi asinkron |
| **useEffect** | Hook React untuk menjalankan kode saat komponen tampil |
| **Full-Stack** | Aplikasi yang punya frontend DAN backend |
| **CORS** | Mengizinkan frontend mengakses API di domain/port berbeda |
| **Loading State** | Menampilkan status "memuat" saat menunggu data dari server |

---

## 🏆 Selamat! Kamu Sudah Bisa Membuat Aplikasi Full-Stack!

Kamu telah belajar:
- ✅ Membuat **server API** dengan Express
- ✅ Membuat **tampilan interaktif** dengan React
- ✅ **Menghubungkan** keduanya menjadi aplikasi utuh
- ✅ Menggunakan **HTTP methods** (GET, POST, PUT, DELETE)
- ✅ Menggunakan **useState** dan **useEffect**
- ✅ Memahami konsep **frontend-backend**

### 🚀 Langkah Selanjutnya (Untuk yang Mau Belajar Lebih)

1. **Database** — Pelajari MongoDB atau MySQL agar data tidak hilang
2. **Authentication** — Tambahkan fitur login/register
3. **Deployment** — Deploy aplikasi ke internet (Vercel, Render)
4. **React Router** — Buat aplikasi multi-halaman
5. **TypeScript** — JavaScript yang lebih aman dan terstruktur

---

**📚 Kembali ke [Halaman Utama ←](../README.md)**

**📎 Lihat [Cheatsheet JavaScript Dasar →](../cheatsheet/javascript-dasar.md)**

**📎 Lihat [Perintah Terminal →](../cheatsheet/perintah-terminal.md)**
