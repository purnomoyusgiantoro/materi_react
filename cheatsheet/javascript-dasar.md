# 📋 Cheatsheet: JavaScript Dasar untuk React & Express

> Ringkasan cepat konsep JavaScript yang dipakai di materi ini.
> Simpan halaman ini sebagai referensi! 🔖

---

## 1. Variabel

```javascript
// const = nilai TIDAK bisa diubah (gunakan ini sebagai default)
const nama = 'Budi';
const umur = 17;

// let = nilai BISA diubah
let skor = 0;
skor = 10; // ✅ Boleh

// const untuk array/objek: isinya bisa diubah, tapi variabelnya tidak
const buah = ['apel', 'jeruk'];
buah.push('mangga'); // ✅ Boleh (mengubah isi)
// buah = [];         // ❌ Error (mengubah variabel)
```

---

## 2. Tipe Data

| Tipe | Contoh | Keterangan |
|------|--------|------------|
| String | `'Halo'` atau `"Halo"` | Teks |
| Number | `42`, `3.14` | Angka |
| Boolean | `true`, `false` | Benar/Salah |
| Array | `[1, 2, 3]` | Daftar/kumpulan data |
| Object | `{ nama: 'Budi', umur: 17 }` | Data terstruktur |
| null | `null` | Kosong (disengaja) |
| undefined | `undefined` | Belum diisi |

---

## 3. Template Literal (Backtick)

```javascript
const nama = 'Budi';
const kelas = 12;

// Cara lama (pakai +)
console.log('Halo ' + nama + ', kelas ' + kelas);

// Cara modern (pakai backtick ` dan ${})
console.log(`Halo ${nama}, kelas ${kelas}`);

// Backtick juga bisa multi-baris
const pesan = `
  Halo ${nama},
  Selamat datang di kelas ${kelas}!
`;
```

---

## 4. Arrow Function

```javascript
// Fungsi biasa
function tambah(a, b) {
  return a + b;
}

// Arrow function (cara singkat)
const tambah = (a, b) => {
  return a + b;
};

// Arrow function (lebih singkat — kalau cuma 1 baris)
const tambah = (a, b) => a + b;

// Arrow function tanpa parameter
const sapa = () => console.log('Halo!');

// Arrow function dengan 1 parameter (kurung opsional)
const kali2 = x => x * 2;
```

---

## 5. Array Methods (Sering Dipakai di React)

### `map()` — Ubah setiap elemen

```javascript
const angka = [1, 2, 3, 4, 5];
const kaliDua = angka.map(n => n * 2);
// Hasil: [2, 4, 6, 8, 10]

// Di React: menampilkan daftar
const nama = ['Budi', 'Ani', 'Cika'];
nama.map(n => <p key={n}>{n}</p>);
```

### `filter()` — Ambil elemen yang memenuhi syarat

```javascript
const angka = [1, 2, 3, 4, 5];
const genap = angka.filter(n => n % 2 === 0);
// Hasil: [2, 4]

// Di React: filter todo yang belum selesai
const belumSelesai = todos.filter(t => !t.selesai);
```

### `find()` — Cari satu elemen

```javascript
const siswa = [
  { id: 1, nama: 'Budi' },
  { id: 2, nama: 'Ani' },
];
const cari = siswa.find(s => s.id === 2);
// Hasil: { id: 2, nama: 'Ani' }
```

### `push()` — Tambah elemen di akhir

```javascript
const buah = ['apel', 'jeruk'];
buah.push('mangga');
// Hasil: ['apel', 'jeruk', 'mangga']
```

### `includes()` — Cek apakah elemen ada

```javascript
const buah = ['apel', 'jeruk', 'mangga'];
buah.includes('jeruk'); // true
buah.includes('durian'); // false
```

---

## 6. Destructuring (Membongkar)

### Destructuring Object

```javascript
const siswa = { nama: 'Budi', umur: 17, kelas: 'XII' };

// Cara lama
const nama = siswa.nama;
const umur = siswa.umur;

// Destructuring (cara modern)
const { nama, umur, kelas } = siswa;
console.log(nama); // 'Budi'

// Di React (props)
function Kartu({ nama, umur }) {
  return <p>{nama} - {umur} tahun</p>;
}
```

### Destructuring Array

```javascript
const warna = ['merah', 'biru', 'hijau'];

// Destructuring
const [pertama, kedua, ketiga] = warna;
console.log(pertama); // 'merah'

// Di React (useState)
const [count, setCount] = useState(0);
```

---

## 7. Spread Operator (`...`)

```javascript
// Spread Array — menyalin dan menambah
const buah = ['apel', 'jeruk'];
const semuaBuah = [...buah, 'mangga'];
// Hasil: ['apel', 'jeruk', 'mangga']

// Di React: menambah todo baru
setTodos([...todos, todoBaru]);

// Spread Object — menyalin dan mengubah
const siswa = { nama: 'Budi', umur: 17 };
const siswaUpdate = { ...siswa, umur: 18 };
// Hasil: { nama: 'Budi', umur: 18 }

// Di React: update satu todo
todos.map(t => t.id === id ? { ...t, selesai: !t.selesai } : t);
```

---

## 8. Async/Await (Operasi Asinkron)

```javascript
// Fungsi biasa: langsung dapat hasilnya
const hasil = 1 + 2; // 3

// Fungsi async: harus "menunggu" hasilnya (misal: ambil data dari server)
async function ambilData() {
  try {
    const response = await fetch('http://localhost:3000/api/todos');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// await = "tunggu sampai selesai"
// try/catch = "coba, kalau gagal tangani error-nya"
```

---

## 9. Ternary Operator (If Singkat)

```javascript
// If-else biasa
let pesan;
if (umur >= 17) {
  pesan = 'Boleh nyetir';
} else {
  pesan = 'Belum boleh';
}

// Ternary (cara singkat)
const pesan = umur >= 17 ? 'Boleh nyetir' : 'Belum boleh';

// Di React JSX:
<p>{selesai ? '✅ Selesai' : '⏳ Belum'}</p>

// Conditional rendering:
{loading ? <p>Memuat...</p> : <TodoList />}
```

---

## 10. Import & Export

### Named Export/Import

```javascript
// file: utils.js
export function tambah(a, b) { return a + b; }
export function kurang(a, b) { return a - b; }

// file: app.js
import { tambah, kurang } from './utils.js';
```

### Default Export/Import

```javascript
// file: App.jsx
function App() { return <div>Halo</div>; }
export default App;

// file: main.jsx
import App from './App';  // Nama bebas
```

### Import Library

```javascript
// Import dari node_modules
import { useState, useEffect } from 'react';
const express = require('express'); // CommonJS (Node.js/Express)
```

---

## 11. Console Methods (Debugging)

```javascript
console.log('Pesan biasa');            // Output biasa
console.error('Ada error!');           // Output merah (error)
console.warn('Hati-hati!');            // Output kuning (peringatan)
console.table([{a: 1}, {a: 2}]);      // Tampilkan sebagai tabel
console.log({nama, umur, kelas});      // Shorthand property
```

---

## 📌 Tips Cepat

| Mau ngapain? | Pakai ini |
|-------------|-----------|
| Buat variabel tetap | `const x = 5` |
| Buat variabel yang bisa berubah | `let x = 5` |
| Gabung string + variabel | `` `Halo ${nama}` `` |
| Ubah semua elemen array | `.map()` |
| Filter elemen array | `.filter()` |
| Cari satu elemen | `.find()` |
| Salin array/objek | `...spread` |
| Operasi async | `async/await` |
| If-else singkat | `kondisi ? benar : salah` |
