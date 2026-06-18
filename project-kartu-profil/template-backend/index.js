const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// =============================================
// 🎮 DATA PROFIL DEFAULT
// Nanti kamu bisa ganti data ini lewat API!
// =============================================

let profil = {
  nama: "Nama Kamu Di Sini",
  bio: "Klik Misi 2 untuk mengubah bio ini! 🚀",
  emoji: "🎮",
  warna: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

  skills: [
    { nama: "Rebahan", level: 95, emoji: "😴" },
    { nama: "Scroll TikTok", level: 100, emoji: "📱" },
    { nama: "Makan Mi Instan", level: 80, emoji: "🍜" },
    { nama: "Begadang", level: 90, emoji: "🌙" },
  ],

  links: [
    { platform: "Instagram", url: "https://instagram.com/username", emoji: "📸" },
    { platform: "TikTok", url: "https://tiktok.com/@username", emoji: "🎵" },
    { platform: "YouTube", url: "https://youtube.com/@username", emoji: "📺" },
    { platform: "Discord", url: "https://discord.gg/xxxxx", emoji: "🎮" },
  ],

  fakta_seru: [
    "Bisa ngetik tanpa liat keyboard 🤓",
    "Pernah main game 12 jam non-stop 🎮",
    "Koleksi meme di HP lebih dari 1000 📱",
  ],
};

// =============================================
// 📡 API ENDPOINTS
// =============================================

// GET profil — ambil data profil
app.get("/api/profil", (req, res) => {
  res.json(profil);
});

// PUT profil — update data profil
app.put("/api/profil", (req, res) => {
  profil = { ...profil, ...req.body };
  res.json({ pesan: "✅ Profil berhasil diupdate!", data: profil });
});

// =============================================
// 🚀 START SERVER
// =============================================
const PORT = 3001;
app.listen(PORT, () => {
  console.log("");
  console.log("╔══════════════════════════════════════════╗");
  console.log("║  🚀 Server jalan di http://localhost:" + PORT + "  ║");
  console.log("║  📡 API: http://localhost:" + PORT + "/api/profil ║");
  console.log("╚══════════════════════════════════════════╝");
  console.log("");
});
