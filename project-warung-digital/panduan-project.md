# 📖 Panduan Project: Warung Sekolah Digital

> Ikuti panduan ini langkah demi langkah. Setiap **🔥 TANTANGAN** harus kamu kerjakan sendiri!

---

## 📌 Daftar Isi

1. [Persiapan & Setup](#bagian-1-persiapan--setup)
2. [Memahami Backend (Express API)](#bagian-2-memahami-backend-express-api)
3. [Memahami Frontend (React)](#bagian-3-memahami-frontend-react)
4. [Mengerjakan Tantangan](#bagian-4-mengerjakan-tantangan)
5. [Testing & Pengecekan](#bagian-5-testing--pengecekan)

---

## Bagian 1: Persiapan & Setup

### Langkah 1.1: Setup Backend

Buka terminal, lalu jalankan:

**Windows (PowerShell):**
```powershell
Copy-Item -Path "template-backend" -Destination "warung-backend" -Recurse
cd warung-backend
npm install
```

**Atau Windows (Command Prompt):**
```cmd
xcopy template-backend warung-backend /E /I
cd warung-backend
npm install
```

Setelah install selesai, jalankan server:

```bash
node index.js
```

Kamu akan lihat:
```
🏪 Server Warung Digital berjalan di http://localhost:3001
📋 API Menu: http://localhost:3001/api/menu
```

**Coba buka di browser:** http://localhost:3001/api/menu — kamu akan lihat data menu dalam format JSON! ✅

### Langkah 1.2: Setup Frontend

Buka **terminal BARU** (jangan tutup terminal backend!), lalu:

**Windows (PowerShell):**
```powershell
Copy-Item -Path "template-frontend" -Destination "warung-frontend" -Recurse
cd warung-frontend
npm install
npm run dev
```

**Atau Windows (Command Prompt):**
```cmd
xcopy template-frontend warung-frontend /E /I
cd warung-frontend
npm install
npm run dev
```

Buka **http://localhost:5173** di browser — kamu akan lihat tampilan Warung Digital! ✅

> ⚠️ **Pastikan kedua terminal tetap berjalan** (backend di port 3001, frontend di port 5173).

---

## Bagian 2: Memahami Backend (Express API)

Buka file `warung-backend/index.js` dan pahami strukturnya:

### API yang Tersedia:

| Method | URL | Fungsi |
|--------|-----|--------|
| `GET` | `/api/menu` | Ambil semua menu |
| `GET` | `/api/menu/:id` | Ambil satu menu berdasarkan ID |
| `POST` | `/api/menu` | Tambah menu baru |
| `DELETE` | `/api/menu/:id` | Hapus menu |

### Contoh Data Menu:

```json
{
  "id": 1,
  "nama": "Nasi Goreng",
  "harga": 15000,
  "kategori": "makanan",
  "emoji": "🍛",
  "deskripsi": "Nasi goreng spesial dengan telur dan kerupuk",
  "tersedia": true
}
```

### 🔥 TANTANGAN 1: Tambah Menu Baru (⭐ Mudah)

Buka `warung-backend/index.js`, cari komentar:
```javascript
// 🔥 TANTANGAN 1: Tambah 3 menu baru di bawah ini!
```

**Tugasmu:** Tambahkan **3 menu baru** favoritmu ke array `daftarMenu`. Setiap menu harus punya: `id`, `nama`, `harga`, `kategori` ("makanan" atau "minuman"), `emoji`, `deskripsi`, dan `tersedia`.

**Contoh:**
```javascript
{
  id: 8,
  nama: "Roti Bakar",
  harga: 10000,
  kategori: "makanan",
  emoji: "🍞",
  deskripsi: "Roti bakar coklat keju",
  tersedia: true
},
```

> 💡 **Hint:** Pastikan setiap `id` berbeda (lanjutkan dari id terakhir). Jangan lupa **koma** di akhir setiap objek!

Setelah menambahkan, **restart server** (`Ctrl+C` lalu `node index.js`) dan cek di browser: http://localhost:3001/api/menu

---

## Bagian 3: Memahami Frontend (React)

Buka file `warung-frontend/src/App.jsx` dan pahami strukturnya:

### Komponen yang Ada:

```
App (Komponen Utama)
├── Header          → Judul & deskripsi
├── FormTambahMenu  → Form untuk admin tambah menu
├── FilterBar       → Pencarian & filter kategori
├── DaftarMenu      → Grid kartu-kartu menu
│   └── KartuMenu   → Satu kartu menu (dipakai berkali-kali)
└── Keranjang       → Panel keranjang belanja
    └── ItemKeranjang → Satu item di keranjang
```

### State yang Digunakan:

```jsx
const [menus, setMenus] = useState([]);           // Data menu dari server
const [keranjang, setKeranjang] = useState([]);    // Isi keranjang belanja
const [cariMenu, setCariMenu] = useState('');      // Kata kunci pencarian
const [filterKategori, setFilterKategori] = useState('semua'); // Filter aktif
const [loading, setLoading] = useState(true);      // Status loading
```

---

## Bagian 4: Mengerjakan Tantangan

### 🔥 TANTANGAN 2: Format Harga Rupiah (⭐ Mudah)

**Di file:** `warung-frontend/src/App.jsx`

Cari fungsi `formatRupiah`. Saat ini harga tampil sebagai angka biasa (contoh: `15000`). Tugasmu: buat harga tampil sebagai format Rupiah yang benar.

**Yang harus kamu buat:**
```
15000   → "Rp 15.000"
8000    → "Rp 8.000"
150000  → "Rp 150.000"
```

**Hint yang ada di kode:**
```javascript
// Gunakan .toLocaleString('id-ID')
// Contoh: (15000).toLocaleString('id-ID') → "15.000"
```

---

### 🔥 TANTANGAN 3: Fitur Pencarian (⭐⭐ Sedang)

**Di file:** `warung-frontend/src/App.jsx`

Cari komentar `TANTANGAN 3`. Saat ini input pencarian sudah ada tapi belum berfungsi. Tugasmu: filter menu berdasarkan nama yang diketik user.

**Yang harus terjadi:**
- User ketik "nasi" → hanya menu yang mengandung kata "nasi" yang tampil
- User ketik "es" → hanya menu yang mengandung kata "es" yang tampil
- Input kosong → semua menu tampil

**Hint:**
```javascript
// Gunakan .filter() dan .includes()
// Jangan lupa .toLowerCase() agar tidak case-sensitive
```

---

### 🔥 TANTANGAN 4: Filter Kategori (⭐⭐ Sedang)

**Di file:** `warung-frontend/src/App.jsx`

Cari komentar `TANTANGAN 4`. Tombol filter kategori sudah ada tapi belum berfungsi. Tugasmu: filter menu berdasarkan kategori yang dipilih.

**Yang harus terjadi:**
- Klik "Semua" → tampilkan semua menu
- Klik "🍔 Makanan" → hanya tampilkan makanan
- Klik "🥤 Minuman" → hanya tampilkan minuman

**Hint:**
```javascript
// Jika filterKategori === 'semua', tampilkan semua
// Jika tidak, filter berdasarkan menu.kategori
```

> 💡 **Tips:** Tantangan 3 dan 4 harus digabungkan! Menu yang tampil harus memenuhi KEDUA filter (pencarian DAN kategori).

---

### 🔥 TANTANGAN 5: Hapus dari Keranjang (⭐⭐ Sedang)

**Di file:** `warung-frontend/src/App.jsx`

Cari fungsi `hapusDariKeranjang`. Saat ini tombol hapus (🗑️) di keranjang belum berfungsi. Tugasmu: buat fungsi untuk menghapus item dari keranjang.

**Yang harus terjadi:**
- Klik 🗑️ di samping item → item hilang dari keranjang
- Jika item punya jumlah > 1, kurangi jumlahnya
- Jika jumlah = 1, hapus item sepenuhnya

**Hint:**
```javascript
// Cek jumlah item:
// - Jika jumlah > 1: kurangi jumlah (map + spread)
// - Jika jumlah === 1: hapus dari array (filter)
```

---

### 🔥 TANTANGAN 6: Hitung Total Harga (⭐⭐ Sedang)

**Di file:** `warung-frontend/src/App.jsx`

Cari komentar `TANTANGAN 6`. Saat ini total harga selalu menampilkan `Rp 0`. Tugasmu: hitung total harga semua item di keranjang.

**Yang harus dihitung:**
```
Nasi Goreng x2 = 15000 x 2 = 30000
Es Jeruk   x1 =  5000 x 1 =  5000
                         Total: 35000 → "Rp 35.000"
```

**Hint:**
```javascript
// Gunakan .reduce() untuk menjumlahkan
// total = keranjang.reduce((sum, item) => sum + ???, 0)
// Ingat: setiap item punya item.harga dan item.jumlah
```

---

### 🔥 TANTANGAN 7: Tombol "Pesan Sekarang" (⭐⭐⭐ Sulit)

**Di file:** `warung-frontend/src/App.jsx`

Cari fungsi `pesanSekarang`. Saat ini tombol "🛍️ Pesan Sekarang" belum berfungsi. Tugasmu: buat fungsi yang menampilkan ringkasan pesanan.

**Yang harus terjadi saat tombol diklik:**
1. Tampilkan `alert()` dengan ringkasan pesanan
2. Format pesanan seperti ini:
```
📋 Ringkasan Pesanan:
──────────────────
🍛 Nasi Goreng x2 = Rp 30.000
🧃 Es Jeruk x1 = Rp 5.000
──────────────────
💰 Total: Rp 35.000

Terima kasih sudah memesan! 🎉
```
3. Setelah alert, kosongkan keranjang

**Hint:**
```javascript
// 1. Gunakan .map() untuk membuat daftar string pesanan
// 2. Gunakan .join('\n') untuk gabungkan jadi satu string
// 3. Gunakan alert() untuk menampilkan
// 4. Gunakan setKeranjang([]) untuk mengosongkan keranjang
```

---

## Bagian 5: Testing & Pengecekan

### Checklist Testing:

**Backend:**
- [ ] Buka http://localhost:3001/api/menu → data menu tampil (termasuk 3 menu baru)
- [ ] Data JSON lengkap dan tidak ada error

**Frontend — Tampilan:**
- [ ] Kartu menu tampil dengan emoji, nama, harga, dan deskripsi
- [ ] Harga tampil dalam format Rupiah (Rp xx.xxx)
- [ ] Tampilan responsif dan menarik

**Frontend — Fitur:**
- [ ] Pencarian: ketik nama menu → daftar terfilter
- [ ] Filter kategori: klik tombol → menu terfilter
- [ ] Pencarian + filter bisa bekerja bersamaan
- [ ] Tambah ke keranjang: klik tombol → item masuk keranjang
- [ ] Hapus dari keranjang: klik 🗑️ → item berkurang/hilang
- [ ] Total harga: terhitung otomatis dan benar
- [ ] Pesan: klik tombol → alert muncul → keranjang kosong

**Frontend — Bonus:**
- [ ] Form tambah menu: isi form → klik tambah → menu baru muncul
- [ ] Menu tidak tersedia: tampil semi-transparan dan tidak bisa dipesan

---

## 🏆 Selamat!

Jika semua checklist di atas terpenuhi, kamu telah berhasil membuat **aplikasi Warung Sekolah Digital** yang lengkap! 🎉

### Ide Pengembangan Lebih Lanjut:

| Ide | Tingkat |
|-----|---------|
| Tambah gambar untuk setiap menu | ⭐ |
| Tambah fitur "stok" (jumlah tersedia) | ⭐⭐ |
| Simpan keranjang ke localStorage | ⭐⭐ |
| Tambah halaman detail menu | ⭐⭐ |
| Buat fitur login sederhana | ⭐⭐⭐ |
| Hubungkan ke database MongoDB | ⭐⭐⭐ |

---

**⬅️ Kembali ke [README Project](./README.md)**
