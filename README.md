# Dokumentasi Github Roasted

## Deskripsi Proyek
Github Roasted adalah aplikasi web yang menggunakan Gemini AI untuk menganalisis dan memberikan "roasting" (kritik humor) terhadap profil GitHub pengguna.

## Teknologi Utama
- **Framework:** Remix (v2.15.0)
- **UI Library:** React (v18.2.0) 
- **Styling:** Tailwind CSS (v3.4.4)
- **AI:** Google Generative AI (v0.21.0)
- **HTTP Client:** Axios (v1.7.8)
- **Animation:** Framer Motion (v11.12.0)

## Persyaratan Sistem
- Node.js ≥ 20.0.0
- API Key Gemini AI

## Instalasi
1. Clone repositori
2. Install dependensi:
   ```bash
   npm install
   ```
3. Salin .env.example menjadi .env dan isi API key Gemini AI

## Perintah yang Tersedia
- `npm run dev` - Menjalankan aplikasi dalam mode development
- `npm run build` - Membangun aplikasi untuk production
- `npm start` - Menjalankan aplikasi yang sudah di-build
- `npm run typecheck` - Memeriksa tipe TypeScript
- `npm run lint` - Menjalankan ESLint

## Fitur Utama
- Input username GitHub
- Fetching data profil GitHub
- Generasi roasting menggunakan Gemini AI
- UI responsif dengan animasi spotlight
- Tampilan terminal-style untuk hasil roasting

## Struktur Proyek
- **app/routes/_index.tsx** - Halaman utama aplikasi
- **app/routes/api.roasting.tsx** - Endpoint API untuk Gemini AI
- **tailwind.config.ts** - Konfigurasi Tailwind CSS
- **vite.config.ts** - Konfigurasi Vite & Remix

## Konfigurasi Environment
Buat file .env dengan variabel berikut: