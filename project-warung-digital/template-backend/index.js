// ============================================================
// 🏪 WARUNG SEKOLAH DIGITAL — Backend API
// ============================================================
// File ini adalah server Express yang menyediakan API untuk
// mengelola data menu warung sekolah.
// ============================================================

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // Gunakan port 3001 agar tidak bentrok dengan project lain

// Middleware
app.use(cors());
app.use(express.json());

// ============================================================
// 📋 DATA MENU WARUNG
// ============================================================
// Data ini disimpan di memori (variabel). Jika server restart,
// data akan kembali ke awal.
// ============================================================

let daftarMenu = [
  {
    id: 1,
    nama: 'Nasi Goreng',
    harga: 15000,
    kategori: 'makanan',
    emoji: '🍛',
    deskripsi: 'Nasi goreng spesial dengan telur dan kerupuk',
    tersedia: true
  },
  {
    id: 2,
    nama: 'Mie Ayam',
    harga: 12000,
    kategori: 'makanan',
    emoji: '🍜',
    deskripsi: 'Mie ayam dengan pangsit dan bakso',
    tersedia: true
  },
  {
    id: 3,
    nama: 'Bakso',
    harga: 13000,
    kategori: 'makanan',
    emoji: '🍲',
    deskripsi: 'Bakso sapi dengan kuah kaldu gurih',
    tersedia: true
  },
  {
    id: 4,
    nama: 'Es Teh Manis',
    harga: 5000,
    kategori: 'minuman',
    emoji: '🧃',
    deskripsi: 'Teh manis dingin segar',
    tersedia: true
  },
  {
    id: 5,
    nama: 'Es Jeruk',
    harga: 6000,
    kategori: 'minuman',
    emoji: '🍊',
    deskripsi: 'Jus jeruk segar dengan es batu',
    tersedia: true
  },
  {
    id: 6,
    nama: 'Gorengan',
    harga: 3000,
    kategori: 'makanan',
    emoji: '🍤',
    deskripsi: 'Tahu, tempe, dan bakwan goreng (3 pcs)',
    tersedia: true
  },
  {
    id: 7,
    nama: 'Susu Coklat',
    harga: 8000,
    kategori: 'minuman',
    emoji: '🥛',
    deskripsi: 'Susu coklat dingin yang creamy',
    tersedia: false // Contoh: menu yang sedang habis
  },

  // ============================================================
  // 🔥 TANTANGAN 1: Tambah 3 menu baru di bawah ini!
  // ============================================================
  // Tambahkan 3 menu favoritmu. Setiap menu harus punya:
  // - id: angka unik (lanjutkan dari 8, 9, 10)
  // - nama: nama menu (string)
  // - harga: harga dalam rupiah (number, tanpa titik)
  // - kategori: 'makanan' atau 'minuman'
  // - emoji: emoji yang cocok
  // - deskripsi: deskripsi singkat
  // - tersedia: true atau false
  //
  // Contoh:
  // {
  //   id: 8,
  //   nama: 'Roti Bakar',
  //   harga: 10000,
  //   kategori: 'makanan',
  //   emoji: '🍞',
  //   deskripsi: 'Roti bakar coklat keju',
  //   tersedia: true
  // },
  //
  // 👇 TULIS KODE KAMU DI BAWAH INI 👇

  // 👆 TULIS KODE KAMU DI ATAS INI 👆
  // ============================================================
];

// ID untuk menu baru
let nextId = 20;

// ============================================================
// 🛣️ ROUTES API
// ============================================================

// GET /api/menu — Ambil semua menu
app.get('/api/menu', (req, res) => {
  res.json(daftarMenu);
});

// GET /api/menu/:id — Ambil satu menu berdasarkan ID
app.get('/api/menu/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const menu = daftarMenu.find(m => m.id === id);

  if (menu) {
    res.json(menu);
  } else {
    res.status(404).json({ pesan: 'Menu tidak ditemukan' });
  }
});

// POST /api/menu — Tambah menu baru
app.post('/api/menu', (req, res) => {
  const { nama, harga, kategori, emoji, deskripsi } = req.body;

  // Validasi: pastikan data lengkap
  if (!nama || !harga || !kategori) {
    return res.status(400).json({
      pesan: 'Data tidak lengkap! Butuh: nama, harga, kategori'
    });
  }

  const menuBaru = {
    id: nextId++,
    nama,
    harga: parseInt(harga),
    kategori,
    emoji: emoji || '🍽️',
    deskripsi: deskripsi || '',
    tersedia: true
  };

  daftarMenu.push(menuBaru);
  res.status(201).json(menuBaru);
});

// DELETE /api/menu/:id — Hapus menu
app.delete('/api/menu/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = daftarMenu.findIndex(m => m.id === id);

  if (index !== -1) {
    daftarMenu.splice(index, 1);
    res.json({ pesan: 'Menu berhasil dihapus' });
  } else {
    res.status(404).json({ pesan: 'Menu tidak ditemukan' });
  }
});

// GET / — Halaman utama
app.get('/', (req, res) => {
  res.json({
    pesan: '🏪 Warung Sekolah Digital API',
    endpoints: {
      'GET /api/menu': 'Ambil semua menu',
      'GET /api/menu/:id': 'Ambil satu menu',
      'POST /api/menu': 'Tambah menu baru',
      'DELETE /api/menu/:id': 'Hapus menu'
    }
  });
});

// ============================================================
// 🚀 JALANKAN SERVER
// ============================================================
app.listen(PORT, () => {
  console.log('');
  console.log('🏪 Server Warung Digital berjalan di http://localhost:' + PORT);
  console.log('📋 API Menu: http://localhost:' + PORT + '/api/menu');
  console.log('');
  console.log('Tekan Ctrl+C untuk menghentikan server');
  console.log('');
});
