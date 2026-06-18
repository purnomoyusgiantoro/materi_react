// ============================================================
// 🏪 WARUNG SEKOLAH DIGITAL — Frontend React
// ============================================================
// File ini berisi semua komponen untuk aplikasi Warung Digital.
// Ada 7 TANTANGAN (🔥) yang harus kamu kerjakan sendiri!
// Cari komentar "🔥 TANTANGAN" untuk menemukannya.
// ============================================================

import { useState, useEffect } from 'react';
import './App.css';

// Alamat server Express
const API_URL = 'http://localhost:3001/api/menu';

// ============================================================
// 🔥 TANTANGAN 2: Buat fungsi format harga Rupiah
// ============================================================
// Saat ini fungsi ini hanya mengembalikan angka biasa.
// Tugasmu: ubah agar mengembalikan format "Rp xx.xxx"
//
// Contoh yang BENAR:
//   formatRupiah(15000) → "Rp 15.000"
//   formatRupiah(8000)  → "Rp 8.000"
//
// 💡 HINT: Gunakan .toLocaleString('id-ID')
//    Contoh: (15000).toLocaleString('id-ID') → "15.000"
//    Tinggal tambahkan "Rp " di depannya!
// ============================================================
function formatRupiah(angka) {
  // 👇 GANTI BARIS DI BAWAH INI 👇
  return angka;
  // 👆 GANTI BARIS DI ATAS INI 👆
}

// ============================================================
// 🏠 KOMPONEN UTAMA: App
// ============================================================
function App() {
  // ===== STATE =====
  const [menus, setMenus] = useState([]);
  const [keranjang, setKeranjang] = useState([]);
  const [cariMenu, setCariMenu] = useState('');
  const [filterKategori, setFilterKategori] = useState('semua');
  const [loading, setLoading] = useState(true);

  // State untuk form tambah menu
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    harga: '',
    kategori: 'makanan',
    emoji: '🍽️',
    deskripsi: ''
  });

  // ===== AMBIL DATA DARI SERVER =====
  useEffect(() => {
    ambilMenu();
  }, []);

  async function ambilMenu() {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setMenus(data);
    } catch (error) {
      console.error('Gagal ambil data menu:', error);
    } finally {
      setLoading(false);
    }
  }

  // ============================================================
  // 🔥 TANTANGAN 3 & 4: Filter menu berdasarkan pencarian DAN kategori
  // ============================================================
  // Saat ini variabel menuFiltered hanya menampilkan SEMUA menu.
  // Tugasmu:
  //   1. Filter berdasarkan pencarian (cariMenu)
  //   2. Filter berdasarkan kategori (filterKategori)
  //   3. Kedua filter harus bekerja BERSAMAAN
  //
  // 💡 HINT untuk Tantangan 3 (Pencarian):
  //   menus.filter(menu =>
  //     menu.nama.toLowerCase().includes(cariMenu.toLowerCase())
  //   )
  //
  // 💡 HINT untuk Tantangan 4 (Kategori):
  //   Jika filterKategori === 'semua' → jangan filter
  //   Jika tidak → filter: menu.kategori === filterKategori
  //
  // 💡 HINT gabungan: Kamu bisa chain .filter() dua kali, atau
  //   gabungkan kedua kondisi dalam satu .filter() dengan &&
  // ============================================================

  // 👇 UBAH BARIS DI BAWAH INI 👇
  const menuFiltered = menus;
  // 👆 UBAH BARIS DI ATAS INI 👆

  // ===== FUNGSI KERANJANG =====

  // Tambah item ke keranjang
  function tambahKeKeranjang(menu) {
    const itemAda = keranjang.find(item => item.id === menu.id);

    if (itemAda) {
      // Jika item sudah ada, tambah jumlahnya
      setKeranjang(
        keranjang.map(item =>
          item.id === menu.id
            ? { ...item, jumlah: item.jumlah + 1 }
            : item
        )
      );
    } else {
      // Jika item belum ada, tambahkan baru dengan jumlah 1
      setKeranjang([...keranjang, { ...menu, jumlah: 1 }]);
    }
  }

  // ============================================================
  // 🔥 TANTANGAN 5: Buat fungsi hapus dari keranjang
  // ============================================================
  // Saat ini fungsi ini kosong (belum melakukan apa-apa).
  // Tugasmu: buat logika untuk menghapus/mengurangi item dari keranjang.
  //
  // Yang harus terjadi:
  //   - Jika jumlah item > 1 → kurangi jumlahnya 1
  //   - Jika jumlah item = 1 → hapus item dari keranjang
  //
  // 💡 HINT:
  //   1. Cari item di keranjang: const item = keranjang.find(...)
  //   2. Cek jumlahnya:
  //      - Jika > 1: gunakan setKeranjang dengan .map() untuk kurangi jumlah
  //        setKeranjang(keranjang.map(item =>
  //          item.id === id ? { ...item, jumlah: item.jumlah - 1 } : item
  //        ))
  //      - Jika === 1: gunakan setKeranjang dengan .filter() untuk hapus
  //        setKeranjang(keranjang.filter(item => item.id !== id))
  // ============================================================
  function hapusDariKeranjang(id) {
    // 👇 TULIS KODE KAMU DI BAWAH INI 👇

    // 👆 TULIS KODE KAMU DI ATAS INI 👆
  }

  // ============================================================
  // 🔥 TANTANGAN 6: Hitung total harga keranjang
  // ============================================================
  // Saat ini totalHarga selalu 0.
  // Tugasmu: hitung total harga semua item di keranjang.
  //
  // Ingat: total = harga × jumlah (untuk setiap item)
  //
  // 💡 HINT: Gunakan .reduce()
  //   keranjang.reduce((total, item) => total + (item.harga * item.jumlah), 0)
  //
  // Atau gunakan loop biasa:
  //   let total = 0;
  //   for (const item of keranjang) {
  //     total += item.harga * item.jumlah;
  //   }
  // ============================================================

  // 👇 UBAH BARIS DI BAWAH INI 👇
  const totalHarga = 0;
  // 👆 UBAH BARIS DI ATAS INI 👆

  // Hitung total item di keranjang
  const totalItem = keranjang.reduce((sum, item) => sum + item.jumlah, 0);

  // ============================================================
  // 🔥 TANTANGAN 7: Buat fungsi "Pesan Sekarang"
  // ============================================================
  // Saat ini fungsi ini hanya menampilkan alert biasa.
  // Tugasmu: buat alert yang menampilkan RINGKASAN PESANAN.
  //
  // Format yang diinginkan:
  //   📋 Ringkasan Pesanan:
  //   ──────────────────
  //   🍛 Nasi Goreng x2 = Rp 30.000
  //   🧃 Es Jeruk x1 = Rp 5.000
  //   ──────────────────
  //   💰 Total: Rp 35.000
  //
  //   Terima kasih sudah memesan! 🎉
  //
  // Setelah alert, kosongkan keranjang dengan: setKeranjang([])
  //
  // 💡 HINT:
  //   1. Buat daftar pesanan dengan .map():
  //      const daftar = keranjang.map(item =>
  //        `${item.emoji} ${item.nama} x${item.jumlah} = ${formatRupiah(item.harga * item.jumlah)}`
  //      );
  //   2. Gabungkan jadi string:
  //      const pesan = daftar.join('\n');
  //   3. Tampilkan:
  //      alert(`📋 Ringkasan Pesanan:\n──────────────────\n${pesan}\n──────────────────\n💰 Total: ${formatRupiah(totalHarga)}\n\nTerima kasih sudah memesan! 🎉`);
  //   4. Kosongkan:
  //      setKeranjang([]);
  // ============================================================
  function pesanSekarang() {
    if (keranjang.length === 0) {
      alert('Keranjang masih kosong! 🛒');
      return;
    }

    // 👇 GANTI KODE DI BAWAH INI DENGAN RINGKASAN PESANAN 👇
    alert('Fitur ini belum dibuat. Kerjakan TANTANGAN 7!');
    // 👆 GANTI KODE DI ATAS INI 👆
  }

  // ===== FUNGSI FORM TAMBAH MENU =====
  async function tambahMenu(e) {
    e.preventDefault();

    if (!formData.nama || !formData.harga) {
      alert('Nama dan harga harus diisi!');
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const menuBaru = await response.json();
      setMenus([...menus, menuBaru]);
      setFormData({ nama: '', harga: '', kategori: 'makanan', emoji: '🍽️', deskripsi: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Gagal menambah menu:', error);
    }
  }

  // ===== RENDER =====
  return (
    <div className="app">
      {/* ===== SIDEBAR KERANJANG ===== */}
      <aside className={`sidebar ${keranjang.length > 0 ? 'has-items' : ''}`}>
        <div className="sidebar-header">
          <h2>🛒 Keranjang</h2>
          {totalItem > 0 && <span className="badge">{totalItem}</span>}
        </div>

        {keranjang.length === 0 ? (
          <div className="cart-empty">
            <span className="cart-empty-icon">🛒</span>
            <p>Keranjang masih kosong</p>
            <p className="cart-empty-hint">Klik "+ Keranjang" pada menu untuk menambahkan</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {keranjang.map(item => (
                <ItemKeranjang
                  key={item.id}
                  item={item}
                  onHapus={hapusDariKeranjang}
                  formatRupiah={formatRupiah}
                />
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span className="cart-total-harga">{formatRupiah(totalHarga)}</span>
              </div>
              <button className="btn-pesan" onClick={pesanSekarang}>
                🛍️ Pesan Sekarang
              </button>
            </div>
          </>
        )}
      </aside>

      {/* ===== KONTEN UTAMA ===== */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-text">
            <h1>🏪 Warung Sekolah Digital</h1>
            <p>Pesan makanan & minuman favoritmu dengan mudah!</p>
          </div>
          <button
            className="btn-admin"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? '✕ Tutup' : '➕ Tambah Menu'}
          </button>
        </header>

        {/* Form Tambah Menu (Admin) */}
        {showForm && (
          <FormTambahMenu
            formData={formData}
            setFormData={setFormData}
            onSubmit={tambahMenu}
          />
        )}

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Cari menu..."
              value={cariMenu}
              onChange={(e) => setCariMenu(e.target.value)}
            />
          </div>
          <div className="filter-buttons">
            {['semua', 'makanan', 'minuman'].map(kat => (
              <button
                key={kat}
                className={`btn-filter ${filterKategori === kat ? 'active' : ''}`}
                onClick={() => setFilterKategori(kat)}
              >
                {kat === 'semua' ? '📋 Semua' : kat === 'makanan' ? '🍔 Makanan' : '🥤 Minuman'}
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="menu-info">
          <span>Menampilkan <strong>{menuFiltered.length}</strong> menu</span>
        </div>

        {/* Daftar Menu */}
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Memuat menu dari server...</p>
          </div>
        ) : menuFiltered.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">😕</span>
            <p>Menu tidak ditemukan</p>
            <p className="empty-hint">Coba kata kunci lain atau ubah filter</p>
          </div>
        ) : (
          <div className="menu-grid">
            {menuFiltered.map(menu => (
              <KartuMenu
                key={menu.id}
                menu={menu}
                onTambah={tambahKeKeranjang}
                formatRupiah={formatRupiah}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// ============================================================
// 🃏 KOMPONEN: KartuMenu
// ============================================================
// Menampilkan satu kartu menu dengan emoji, nama, harga,
// deskripsi, dan tombol tambah ke keranjang.
// ============================================================
function KartuMenu({ menu, onTambah, formatRupiah }) {
  return (
    <div className={`kartu-menu ${!menu.tersedia ? 'habis' : ''}`}>
      <div className="kartu-emoji">{menu.emoji}</div>
      <div className="kartu-info">
        <h3 className="kartu-nama">{menu.nama}</h3>
        <p className="kartu-deskripsi">{menu.deskripsi}</p>
        <div className="kartu-bottom">
          <span className="kartu-harga">{formatRupiah(menu.harga)}</span>
          {menu.tersedia ? (
            <button
              className="btn-tambah"
              onClick={() => onTambah(menu)}
            >
              + Keranjang
            </button>
          ) : (
            <span className="label-habis">Habis</span>
          )}
        </div>
      </div>
      {!menu.tersedia && <div className="overlay-habis">HABIS</div>}
    </div>
  );
}

// ============================================================
// 🛒 KOMPONEN: ItemKeranjang
// ============================================================
function ItemKeranjang({ item, onHapus, formatRupiah }) {
  return (
    <div className="cart-item">
      <span className="cart-item-emoji">{item.emoji}</span>
      <div className="cart-item-info">
        <span className="cart-item-nama">{item.nama}</span>
        <span className="cart-item-detail">
          {formatRupiah(item.harga)} × {item.jumlah}
        </span>
      </div>
      <span className="cart-item-subtotal">
        {formatRupiah(item.harga * item.jumlah)}
      </span>
      <button className="btn-hapus-item" onClick={() => onHapus(item.id)}>
        🗑️
      </button>
    </div>
  );
}

// ============================================================
// 📝 KOMPONEN: FormTambahMenu
// ============================================================
function FormTambahMenu({ formData, setFormData, onSubmit }) {
  const emojiOptions = ['🍛', '🍜', '🍲', '🍔', '🌮', '🍕', '🍤', '🍞', '🧃', '🥛', '🍊', '☕', '🍵', '🧋', '🍦', '🍽️'];

  return (
    <form className="form-tambah" onSubmit={onSubmit}>
      <h3>➕ Tambah Menu Baru</h3>
      <div className="form-grid">
        <div className="form-group">
          <label>Nama Menu</label>
          <input
            type="text"
            placeholder="contoh: Soto Ayam"
            value={formData.nama}
            onChange={e => setFormData({ ...formData, nama: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Harga (Rp)</label>
          <input
            type="number"
            placeholder="contoh: 12000"
            value={formData.harga}
            onChange={e => setFormData({ ...formData, harga: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Kategori</label>
          <select
            value={formData.kategori}
            onChange={e => setFormData({ ...formData, kategori: e.target.value })}
          >
            <option value="makanan">🍔 Makanan</option>
            <option value="minuman">🥤 Minuman</option>
          </select>
        </div>
        <div className="form-group">
          <label>Emoji</label>
          <div className="emoji-picker">
            {emojiOptions.map(em => (
              <button
                type="button"
                key={em}
                className={`emoji-btn ${formData.emoji === em ? 'selected' : ''}`}
                onClick={() => setFormData({ ...formData, emoji: em })}
              >
                {em}
              </button>
            ))}
          </div>
        </div>
        <div className="form-group full-width">
          <label>Deskripsi</label>
          <input
            type="text"
            placeholder="contoh: Soto ayam dengan nasi dan kerupuk"
            value={formData.deskripsi}
            onChange={e => setFormData({ ...formData, deskripsi: e.target.value })}
          />
        </div>
      </div>
      <button type="submit" className="btn-submit">✅ Tambah ke Menu</button>
    </form>
  );
}

export default App;
