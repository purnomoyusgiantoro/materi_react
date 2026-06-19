# 🛠️ Panduan Persyaratan Tools & Instalasi (React + Express)

Untuk memulai belajar membuat website modern dengan React (Frontend) dan Express (Backend), kamu memerlukan beberapa software (tools) yang harus terpasang di komputermu.

Berikut adalah daftar tools yang dibutuhkan beserta langkah-langkah instalasi lengkapnya:

---

## 📋 Ringkasan Tools yang Diperlukan

| Software / Tools | Fungsi Utama | Status | Link Download |
| :--- | :--- | :--- | :--- |
| **Node.js (LTS)** | Runtime untuk menjalankan JavaScript di server & mengelola package/library | **Wajib** | [Download Node.js](https://nodejs.org/) |
| **Visual Studio Code** | Text editor (tempat kita mengetik kode program) | **Wajib** | [Download VS Code](https://code.visualstudio.com/) |
| **Google Chrome / Edge** | Browser untuk melihat hasil tampilan website & debugging | **Wajib** | *Sudah bawaan OS* |
| **Ekstensi VS Code** | Alat bantu di VS Code agar ngoding lebih cepat & rapi | *Sangat Disarankan* | *Instal via VS Code* |

---

## 1. Panduan Instalasi Node.js (LTS) 🟢

Node.js adalah mesin yang menjalankan JavaScript di luar browser (di komputer kita). Node.js juga menyertakan **NPM** (Node Package Manager) untuk mengunduh library program.

### Langkah-langkah:
1. Buka website resmi [nodejs.org](https://nodejs.org/).
2. Unduh versi **LTS** (Recommended For Most Users), misalnya versi `20.x.x` atau `22.x.x`. Versi LTS adalah versi yang paling stabil.
3. Buka file installer `.msi` yang sudah di-download.
4. Klik **Next** terus-menerus (biarkan semua pengaturan default/bawaan), centang persetujuan, lalu klik **Install**.
5. Tunggu proses instalasi sampai selesai, lalu klik **Finish**.

### Cara Memeriksa Apakah Node.js Sudah Terinstall:
1. Buka **Terminal** di VS Code atau **Command Prompt (cmd)** Windows.
2. Ketik perintah berikut lalu tekan Enter:
   ```bash
   node -v
   ```
   *(Harus muncul nomor versi, contoh: `v20.11.0`)*
3. Ketik perintah berikut untuk cek NPM:
   ```bash
   npm -v
   ```
   *(Harus muncul nomor versi, contoh: `10.2.4`)*

---

## 2. Panduan Instalasi Visual Studio Code (VS Code) 💙

VS Code adalah editor kode paling populer dan gratis yang dikembangkan oleh Microsoft.

### Langkah-langkah:
1. Buka website resmi [code.visualstudio.com](https://code.visualstudio.com/).
2. Klik tombol **Download for Windows** (atau OS lain jika kamu tidak menggunakan Windows).
3. Jalankan installer yang sudah diunduh.
4. Pilih **"I accept the agreement"**, lalu klik **Next**.
5. **Penting:** Di bagian *Select Additional Tasks*, centang semua pilihan, terutama:
   - *Add "Open with Code" action to Windows Explorer directory context menu* (agar bisa klik kanan folder dan langsung buka di VS Code).
   - *Add to PATH* (agar bisa memanggil perintah `code` dari terminal).
6. Klik **Next**, lalu **Install**, dan tunggu hingga selesai.

---

## 3. Ekstensi VS Code yang Direkomendasikan 🔌

Agar belajar coding menjadi jauh lebih mudah, buka VS Code, klik ikon **Extensions** di menu sebelah kiri (atau tekan `Ctrl + Shift + X`), cari dan install ekstensi berikut:

1. **Prettier - Code Formatter**
   * **Fungsi:** Merapikan baris kode otomatis saat disimpan (`Ctrl + S`).
   * **Cara aktifkan:** Setelah install, buka Settings (`Ctrl + ,`), cari "Default Formatter", pilih *Prettier - Code Formatter*. Lalu cari "Format On Save" dan centang pilihan tersebut.
2. **ES7+ React/Redux/React-Native Snippets**
   * **Fungsi:** Membuat struktur kode React instan hanya dengan mengetik singkatan (contoh: ketik `rafce` lalu Enter untuk membuat template komponen React).
3. **Thunder Client** (Alternatif ringan untuk Postman)
   * **Fungsi:** Menguji API backend Express langsung dari dalam VS Code tanpa perlu membuka browser atau software lain.

---

## 4. Cara Memulai Project di Folder Baru 🚀

Jika semua tools di atas sudah terpasang, kamu bisa memulai proyek baru dengan langkah berikut:

### Langkah A: Inisialisasi Backend Express
1. Buat folder baru untuk server backend:
   ```bash
   mkdir server-api
   cd server-api
   ```
2. Buat file konfigurasi project:
   ```bash
   npm init -y
   ```
3. Install library web server (Express & CORS):
   ```bash
   npm install express cors
   ```

### Langkah B: Inisialisasi Frontend React
1. Buka terminal baru (atau kembali ke folder utama), jalankan perintah:
   ```bash
   npm create vite@latest client-web -- --template react
   ```
2. Masuk ke folder frontend dan install library dasarnya:
   ```bash
   cd client-web
   npm install
   ```
3. Jalankan server local React:
   ```bash
   npm run dev
   ```
