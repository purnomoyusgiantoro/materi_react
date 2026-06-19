// index.js — API Todo List 📝

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware: agar bisa menerima data JSON dari frontend
app.use(express.json());

// Middleware: agar frontend React bisa mengakses API ini
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
