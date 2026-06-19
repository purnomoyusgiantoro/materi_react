# 📖 PANDUAN MISI — KARTU PROFIL KEREN

> 🎮 **Selamat datang, Player!** Kamu akan menyelesaikan 5 misi untuk membuat kartu profil yang SUPER KEREN. Setiap misi punya achievement yang bisa kamu unlock. Ready? LET'S GO! 🚀

---

## 🎮 MISI 1: Setup & First Wow Moment
⏱️ **Waktu:** 10 menit | **Difficulty:** ⭐ (Easy)

### 📋 Objektif
Jalankan project dan lihat kartu profil keren muncul di browser!

### Step 1: Copy Template
Buka terminal di folder `project-kartu-profil`, lalu:
```bash
cp -r template-frontend kartu-profil-frontend
cp -r template-backend kartu-profil-backend
```

> 💡 **Di Windows?** Bisa juga copy-paste folder manual lewat File Explorer!

### Step 2: Jalankan Backend
```bash
cd kartu-profil-backend
npm install
node index.js
```
Kamu akan lihat: `🚀 Server jalan di http://localhost:3001`

### Step 3: Jalankan Frontend (buka terminal BARU!)
```bash
cd kartu-profil-frontend
npm install
npm run dev
```

### Step 4: BUKA BROWSER! 🎉
Buka `http://localhost:5173`

**BOOM!** 🤯 Kamu harusnya lihat kartu profil keren dengan:
- ✅ Background gradient yang bergerak
- ✅ Kartu kaca (glassmorphism) di tengah
- ✅ Emoji avatar gede
- ✅ Nama & bio
- ✅ Skill bars yang animasi
- ✅ Tombol social media
- ✅ Fun facts

> 🎉 **WOW MOMENT:** Semua ini SUDAH JADI! Tugas kamu selanjutnya adalah **KUSTOMISASI** biar jadi milik kamu!

### 🏆 Achievement Unlocked: FIRST BLOOD!
```
╔═══════════════════════════════════╗
║  🏆 ACHIEVEMENT: FIRST BLOOD!    ║
║  Berhasil menjalankan project     ║
║  untuk pertama kali! 🎉          ║
╚═══════════════════════════════════╝
```

---

## 🎨 MISI 2: Personalisasi — Jadikan Milikmu!
⏱️ **Waktu:** 15 menit | **Difficulty:** ⭐⭐ (Medium)

### 📋 Objektif
Ubah SEMUA data placeholder jadi data kamu sendiri!

### Step 1: Ganti Nama & Bio
Buka file `kartu-profil-frontend/src/App.jsx`, cari bagian ini:

```jsx
// ✏️ GANTI DENGAN NAMAMU
const profil = {
  nama: "Nama Kamu Di Sini",
  bio: "Klik Misi 2 untuk mengubah bio ini! 🚀",
```

Ganti jadi data KAMU:
```jsx
// ✏️ GANTI DENGAN NAMAMU
const profil = {
  nama: "Ahmad Rizky",           // ← GANTI!
  bio: "Gamer by day, coder by night 🌙",  // ← GANTI!
```

> 💡 **Simpan file, lalu cek browser** — nama kamu langsung muncul! ✨

### Step 2: Ganti Avatar Emoji
Masih di file yang sama, cari:
```jsx
  emoji: "🎮",  // ✏️ GANTI EMOJI AVATARMU
```

Pilih emoji favoritmu! Beberapa ide:
| Emoji | Vibe |
|-------|------|
| 🎮 | Gamer |
| 🎸 | Musician |
| 🎨 | Artist |
| 🏀 | Sporty |
| 💻 | Coder |
| 🦄 | Unik |
| 🐱 | Cat Person |
| 👾 | Retro |

### Step 3: Pilih Tema Warna 🌈
Cari bagian ini:
```jsx
  // ✏️ PILIH WARNA TEMAMU (pilih salah satu!)
  warna: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
```

Pilih dari 5 gradient keren ini:

| # | Nama | Kode |
|---|------|------|
| 1 | 🌊 Ocean Blue | `"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"` |
| 2 | 🌅 Sunset | `"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"` |
| 3 | 🌿 Forest | `"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"` |
| 4 | 🔥 Fire | `"linear-gradient(135deg, #fa709a 0%, #fee140 100%)"` |
| 5 | 🌌 Galaxy | `"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"` |

Copy-paste kode warna pilihanmu ke bagian `warna:`!

### Step 4: Lihat Hasilnya!
Simpan file → Cek browser → **KARTU INI SEKARANG MILIK KAMU!** 🎉

### 🏆 Achievement Unlocked: IDENTITY CLAIMED!
```
╔════════════════════════════════════════╗
║  🏆 ACHIEVEMENT: IDENTITY CLAIMED!    ║
║  Kartu profil sekarang punya identitas ║
║  kamu sendiri! You own it! 💪         ║
╚════════════════════════════════════════╝
```

---

## ⚡ MISI 3: Tambah Skill Bar
⏱️ **Waktu:** 10 menit | **Difficulty:** ⭐⭐ (Medium)

### 📋 Objektif
Ganti skill bars dengan SKILL KAMU SENDIRI! Bars-nya bakal animasi pas loading — keren banget! 😎

### Step 1: Temukan Skill Section
Buka `kartu-profil-frontend/src/App.jsx`, cari bagian:
```jsx
  // ✏️ GANTI DENGAN SKILL-MU (level: 0-100)
  skills: [
    { nama: "Rebahan", level: 95, emoji: "😴" },
    { nama: "Scroll TikTok", level: 100, emoji: "📱" },
    { nama: "Makan Mi Instan", level: 80, emoji: "🍜" },
    { nama: "Begadang", level: 90, emoji: "🌙" },
  ],
```

### Step 2: Ganti dengan Skill Kamu!
Hapus skill di atas, ganti dengan SKILL KAMU SENDIRI:
```jsx
  skills: [
    { nama: "Gaming", level: 90, emoji: "🎮" },
    { nama: "Coding", level: 40, emoji: "💻" },
    { nama: "Masak Mie", level: 100, emoji: "🍜" },
    { nama: "Ngobrol", level: 85, emoji: "💬" },
    { nama: "Tidur", level: 99, emoji: "😴" },
  ],
```

> ⚠️ **ATURAN:** Level harus antara 0-100. Jujur ya! 😂 (atau jangan, terserah kamu wkwk)

### Step 3: Lihat Animasinya! 🎬
Simpan → Refresh browser → **LIHAT SKILL BAR-NYA ANIMASI!** 

Bars-nya akan "tumbuh" dari kiri ke kanan pas halaman di-load. Makin tinggi level-nya, makin panjang bar-nya! 📊

> 💡 **Pro Tip:** Coba tambah lebih banyak skill! Kamu bisa punya berapa aja — tambahin aja object baru di array-nya.

### 🏆 Achievement Unlocked: SKILL FLEXER!
```
╔═══════════════════════════════════╗
║  🏆 ACHIEVEMENT: SKILL FLEXER!   ║
║  Skill bars kamu sekarang flex    ║
║  kemampuan kamu ke dunia! 💪      ║
╚═══════════════════════════════════╝
```

---

## 🔗 MISI 4: Tambah Social Links
⏱️ **Waktu:** 10 menit | **Difficulty:** ⭐⭐ (Medium)

### 📋 Objektif
Tambahkan link ke social media kamu! Tombolnya punya hover effect yang keren! ✨

### Step 1: Temukan Links Section
Di `App.jsx`, cari bagian:
```jsx
  // ✏️ GANTI DENGAN SOCIAL MEDIA-MU
  links: [
    { platform: "Instagram", url: "https://instagram.com/username", emoji: "📸" },
    { platform: "TikTok", url: "https://tiktok.com/@username", emoji: "🎵" },
    { platform: "YouTube", url: "https://youtube.com/@username", emoji: "📺" },
    { platform: "Discord", url: "https://discord.gg/xxxxx", emoji: "🎮" },
  ],
```

### Step 2: Ganti dengan Link Kamu!
```jsx
  links: [
    { platform: "Instagram", url: "https://instagram.com/USERNAMEMU", emoji: "📸" },
    { platform: "TikTok", url: "https://tiktok.com/@USERNAMEMU", emoji: "🎵" },
    { platform: "YouTube", url: "https://youtube.com/@USERNAMEMU", emoji: "📺" },
    { platform: "GitHub", url: "https://github.com/USERNAMEMU", emoji: "💻" },
  ],
```

> 💡 **Boleh tambah platform lain!** Spotify 🎧, Twitter/X 🐦, Steam 🎮, apa aja!

### Step 3: Test Link-nya!
Simpan → Hover tombolnya di browser → **LIHAT EFEK HOVER KEREN!** 🌟

Klik tombolnya — harusnya buka link kamu di tab baru!

### 🏆 Achievement Unlocked: CONNECTED!
```
╔═══════════════════════════════════════╗
║  🏆 ACHIEVEMENT: CONNECTED!          ║
║  Social media kamu sekarang           ║
║  terhubung ke kartu profil! 🔗       ║
╚═══════════════════════════════════════╝
```

---

## 🏆 MISI 5: Tantangan Kreativitas (BONUS!)
⏱️ **Waktu:** Bebas | **Difficulty:** ⭐⭐⭐ (Hard)

### 📋 Objektif
Pilih satu atau lebih tantangan di bawah untuk bikin kartu profil kamu MAKIN KEREN! 🚀

---

### 🎯 Tantangan A: Hobby Gallery
Tambahkan section galeri hobi di bawah skills!

Di bagian return di `App.jsx`, tambahkan SETELAH section skills:
```jsx
{/* 🎯 HOBBY GALLERY */}
<div className="hobby-section">
  <h3>🎯 Hobi Kamu</h3>
  <div className="hobby-grid">
    <div className="hobby-item">🎮 Gaming</div>
    <div className="hobby-item">🎸 Musik</div>
    <div className="hobby-item">📚 Baca Komik</div>
    <div className="hobby-item">🏀 Basket</div>
  </div>
</div>
```

Tambahkan CSS ini di `App.css`:
```css
.hobby-section { margin-top: 24px; }
.hobby-section h3 { font-size: 1.1rem; margin-bottom: 12px; }
.hobby-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.hobby-item {
  background: rgba(255,255,255,0.1);
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 0.9rem;
  transition: transform 0.2s;
}
.hobby-item:hover { transform: scale(1.05); }
```

---

### 🎯 Tantangan B: Fun Facts Section
Tambahkan section fakta-fakta seru tentang kamu!

Di `App.jsx`, tambahkan di return:
```jsx
{/* 💡 FUN FACTS */}
<div className="facts-section">
  <h3>💡 Fun Facts</h3>
  <ul className="facts-list">
    <li>🎂 Lahir di bulan yang sama kayak Elon Musk</li>
    <li>🍕 Bisa makan 8 potong pizza sekali duduk</li>
    <li>🌙 Pernah begadang 36 jam buat nonton anime</li>
  </ul>
</div>
```

CSS-nya:
```css
.facts-section { margin-top: 24px; }
.facts-section h3 { font-size: 1.1rem; margin-bottom: 12px; }
.facts-list {
  list-style: none;
  padding: 0;
}
.facts-list li {
  background: rgba(255,255,255,0.08);
  margin-bottom: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 0.9rem;
  transition: transform 0.2s;
}
.facts-list li:hover { transform: translateX(5px); }
```

---

### 🎯 Tantangan C: Dark Mode Toggle 🌙
Tambahkan tombol untuk switch dark/light mode!

Di bagian atas fungsi `App()` di `App.jsx`:
```jsx
const [darkMode, setDarkMode] = React.useState(true);
```

Tambahkan tombol di dalam card, paling atas:
```jsx
<button 
  className="mode-toggle"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "☀️" : "🌙"}
</button>
```

Tambahkan ke className card:
```jsx
<div className={`card ${darkMode ? "dark" : "light"}`}>
```

CSS-nya:
```css
.mode-toggle {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255,255,255,0.2);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;
}
.mode-toggle:hover { transform: rotate(180deg); }
.card.light {
  background: rgba(255,255,255,0.85);
  color: #1a1a2e;
}
```

---

### 🎯 Tantangan D: Secret Message 🤫
Tambahkan pesan rahasia yang muncul saat di-klik!

Di bagian atas fungsi `App()`:
```jsx
const [showSecret, setShowSecret] = React.useState(false);
```

Tambahkan di return:
```jsx
<div 
  className="secret-trigger"
  onClick={() => setShowSecret(!showSecret)}
>
  🤫 Klik untuk rahasia...
</div>
{showSecret && (
  <div className="secret-message">
    ✨ Kamu orang yang keren karena sudah sampai sini! ✨
  </div>
)}
```

CSS-nya:
```css
.secret-trigger {
  margin-top: 16px;
  cursor: pointer;
  opacity: 0.5;
  font-size: 0.85rem;
  transition: opacity 0.3s;
}
.secret-trigger:hover { opacity: 1; }
.secret-message {
  margin-top: 8px;
  padding: 12px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 12px;
  text-align: center;
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

---

### 🎯 Tantangan E: Animated Background ✨
Ganti background jadi animated gradient yang lebih keren!

Di `App.css`, ganti `.app-background`:
```css
.app-background {
  min-height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

### 🏆 Achievement Unlocked: CREATIVE LEGEND!
```
╔════════════════════════════════════════════╗
║  🏆 ACHIEVEMENT: CREATIVE LEGEND!         ║
║  Kamu sudah melampaui batas template!      ║
║  Kreativitas kamu UNLIMITED! 🌟           ║
╚════════════════════════════════════════════╝
```

---

## 📡 MISI 6: Hubungkan ke Backend (EXTRA QUEST! 🚀)
⏱️ **Waktu:** 15 menit | **Difficulty:** ⭐⭐⭐⭐ (Expert)

### 📋 Objektif
Hubungkan frontend React kamu agar mengambil data profil secara dinamis dari API server backend yang berjalan di port `3001`!

### Step 1: Nyalakan Kedua Server
Pastikan `kartu-profil-backend` dan `kartu-profil-frontend` sedang berjalan seperti di Misi 1.

### Step 2: Modifikasi `App.jsx`
Buka file `kartu-profil-frontend/src/App.jsx`. Kita akan mengubah data profil statis menjadi dinamis menggunakan state dan `useEffect`.

1. Di baris paling atas, pastikan `useEffect` sudah di-import dari React:
   ```jsx
   import React, { useState, useEffect } from "react";
   ```

2. Tambahkan state baru `profil` dan `loading` di bagian atas fungsi `App()`, lalu hapus (atau komentari) objek `const profil = { ... }` yang statis:
   ```jsx
   const [profil, setProfil] = useState(null);
   const [loading, setLoading] = useState(true);
   ```

3. Tambahkan `useEffect` untuk mengambil data dari server API saat halaman di-load:
   ```jsx
   useEffect(() => {
     async function ambilDataProfil() {
       try {
         const response = await fetch("http://localhost:3001/api/profil");
         const data = await response.json();
         setProfil(data);
       } catch (error) {
         console.error("Gagal mengambil data profil:", error);
       } finally {
         setLoading(false);
       }
     }
     ambilDataProfil();
   }, []);
   ```

4. Karena pengambilan data bersifat asinkron (butuh waktu), tambahkan kondisi loading di bagian atas (sebelum baris `return (...)` JSX utama):
   ```jsx
   if (loading) {
     return (
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1a1a2e', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
         <h2>Loading Profil... 🚀</h2>
       </div>
     );
   }

   if (!profil) {
     return (
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#1a1a2e', color: '#fff', fontFamily: 'Poppins, sans-serif' }}>
         <h2>Profil gagal dimuat. Pastikan server backend sudah berjalan di port 3001! 🔌</h2>
       </div>
     );
   }
   ```

### Step 3: Lihat Hasilnya!
Simpan file `App.jsx` dan refresh browser kamu (`http://localhost:5173`).
Sekarang data yang tampil di kartu profil kamu berasal langsung dari server backend (`http://localhost:3001/api/profil`).

### Step 4: Coba Ubah Data di Backend!
Buka file `kartu-profil-backend/index.js`, ubah isi objek `profil` (misal ubah nama atau skill-mu).
Setelah itu, restart server backend (`Ctrl+C` lalu `node index.js`).
Refresh browser frontend kamu, dan lihat data baru otomatis terupdate tanpa kamu perlu menyentuh file frontend `App.jsx` lagi! 🤯

### 🏆 Achievement Unlocked: FULL-STACK ENGINEER!
```
╔════════════════════════════════════════════╗
║  🏆 ACHIEVEMENT: FULL-STACK ENGINEER!      ║
║  Frontend dan Backend berhasil terhubung   ║
║  secara dinamis via Fetch API! 📡          ║
╚════════════════════════════════════════════╝
```

---

## 🎊 MISI SELESAI! SELAMAT!

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║    🏆🏆🏆 CONGRATULATIONS! 🏆🏆🏆              ║
║                                                  ║
║    Kamu telah membuat KARTU PROFIL KEREN!        ║
║                                                  ║
║    Achievement Collected:                        ║
║    ✅ First Blood                                ║
║    ✅ Identity Claimed                           ║
║    ✅ Skill Flexer                               ║
║    ✅ Connected                                  ║
║    ✅ Creative Legend                            ║
║    ✅ Full-Stack Engineer                        ║
║                                                  ║
║    Sekarang PAMER ke teman-teman kamu! 😎        ║
║                                                  ║
╚══════════════════════════════════════════════════╝
```

### 🚀 Apa Selanjutnya?
- **Share** kartu profil kamu ke teman sekelas!
- **Compare** desain kamu dengan teman — siapa yang paling keren?
- **Deploy** ke internet biar bisa diakses semua orang (tanya guru caranya! 😉)
- **Eksperimen** lebih lanjut — tambahin fitur apapun yang kamu mau!

> 💡 **Remember:** Setiap developer hebat mulai dari sini. Kamu sudah ambil langkah pertama! 🎯

---

*Made with 💖 untuk para future developer Indonesia 🇮🇩*
