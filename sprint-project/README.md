# SPRINT - Pembuat Surat Perintah

Proyek frontend statis (HTML, CSS, JavaScript murni). Tidak perlu install apa pun.

## Struktur
```
sprint-project/
  index.html     kerangka halaman (formulir, pratinjau, riwayat)
  css/style.css  token warna, layout, kertas surat, gaya cetak A4
  js/app.js      data (state), render surat, formulir, riwayat, QR contoh
```

## Menjalankan
Buka `index.html` di peramban, atau jalankan server lokal:
```
npx serve .
```

## Catatan
- Riwayat disimpan di localStorage (per peramban).
- QR di surat hanya contoh tampilan, bukan QR valid.
