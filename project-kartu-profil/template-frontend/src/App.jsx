import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // ⏳ State untuk animasi skill bar
  const [animasi, setAnimasi] = useState(false);

  useEffect(() => {
    // Skill bar mulai animasi setelah 500ms
    const timer = setTimeout(() => setAnimasi(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // =============================================
  // 🎮 DATA PROFIL KAMU — EDIT DI SINI!
  // =============================================

  // ✏️ GANTI DENGAN NAMAMU
  const profil = {
    nama: "Nama Kamu Di Sini",
    // ✏️ GANTI DENGAN BIO-MU
    bio: "Klik Misi 2 untuk mengubah bio ini! 🚀",
    // ✏️ GANTI EMOJI AVATARMU
    emoji: "🎮",
    // ✏️ PILIH WARNA TEMAMU (pilih salah satu!)
    // 🌊 Ocean:  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    // 🌅 Sunset: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    // 🌿 Forest: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    // 🔥 Fire:   "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    // 🌌 Galaxy: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
    warna: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

    // ✏️ GANTI DENGAN SKILL-MU (level: 0-100)
    skills: [
      { nama: "Rebahan", level: 95, emoji: "😴" },
      { nama: "Scroll TikTok", level: 100, emoji: "📱" },
      { nama: "Makan Mi Instan", level: 80, emoji: "🍜" },
      { nama: "Begadang", level: 90, emoji: "🌙" },
    ],

    // ✏️ GANTI DENGAN SOCIAL MEDIA-MU
    links: [
      { platform: "Instagram", url: "https://instagram.com/username", emoji: "📸" },
      { platform: "TikTok", url: "https://tiktok.com/@username", emoji: "🎵" },
      { platform: "YouTube", url: "https://youtube.com/@username", emoji: "📺" },
      { platform: "Discord", url: "https://discord.gg/xxxxx", emoji: "🎮" },
    ],

    // ✏️ GANTI DENGAN FAKTA SERU TENTANGMU
    fakta_seru: [
      "Bisa ngetik tanpa liat keyboard 🤓",
      "Pernah main game 12 jam non-stop 🎮",
      "Koleksi meme di HP lebih dari 1000 📱",
    ],
  };

  // =============================================
  // 🎨 RENDER KARTU PROFIL
  // =============================================

  return (
    <div className="app-background">
      {/* ✨ Floating particles */}
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* 🃏 KARTU PROFIL */}
      <div className="card">
        {/* 🎭 Avatar */}
        <div className="avatar-container">
          <div className="avatar" style={{ background: profil.warna }}>
            <span className="avatar-emoji">{profil.emoji}</span>
          </div>
          <div className="avatar-ring" style={{ background: profil.warna }} />
        </div>

        {/* 📝 Nama & Bio */}
        <h1 className="nama">{profil.nama}</h1>
        <p className="bio">{profil.bio}</p>

        {/* ⚡ Skill Bars */}
        <div className="skills-section">
          <h3 className="section-title">⚡ Skills</h3>
          {profil.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">
                  {skill.emoji} {skill.nama}
                </span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: animasi ? `${skill.level}%` : "0%",
                    background: profil.warna,
                    transitionDelay: `${index * 150}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 🔗 Social Links */}
        <div className="links-section">
          <h3 className="section-title">🔗 Links</h3>
          <div className="links-grid">
            {profil.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn"
                style={{ animationDelay: `${index * 100 + 800}ms` }}
              >
                <span className="link-emoji">{link.emoji}</span>
                <span className="link-name">{link.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 💡 Fun Facts */}
        <div className="facts-section">
          <h3 className="section-title">💡 Fun Facts</h3>
          <ul className="facts-list">
            {profil.fakta_seru.map((fakta, index) => (
              <li key={index} className="fact-item">
                {fakta}
              </li>
            ))}
          </ul>
        </div>

        {/* 🏷️ Footer */}
        <div className="card-footer">
          <span>Made with 💖 & React</span>
        </div>
      </div>
    </div>
  );
}

export default App;
