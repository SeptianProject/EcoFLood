# 🌊 EcoFlood - Sistem Monitoring & Prediksi Banjir Indonesia

**EcoFlood** adalah platform monitoring lingkungan dan prediksi banjir berbasis web yang mengintegrasikan data deforestasi real-time dari Global Forest Watch, data cuaca, dan laporan warga untuk membantu mitigasi bencana banjir di Indonesia.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0-green?style=flat&logo=mongodb)](https://www.mongodb.com/)

## 🎯 Tentang Proyek

EcoFlood adalah solusi inovatif untuk memantau dan memprediksi risiko banjir dengan mempertimbangkan faktor lingkungan seperti deforestasi, curah hujan, dan kondisi tanah. Platform ini dirancang khusus untuk Indonesia dengan fitur:

- **Peta Interaktif Multi-Layer** dengan visualisasi data deforestasi, riwayat banjir, titik api, dan kawasan biodiversitas
- **Simulasi Prediksi Banjir** berbasis parameter lingkungan yang dapat disesuaikan
- **Sistem Pelaporan Warga** dengan verifikasi admin dan visualisasi real-time
- **Filter Timeline Dinamis** untuk analisis data historis per tahun (2001-2024)
- **Filter Regional** per pulau besar di Indonesia (Sumatra, Jawa, Kalimantan, Sulawesi, Papua)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 atau lebih tinggi
- npm atau yarn
- MongoDB (local atau Atlas)
- Akun Cloudinary (untuk upload gambar)

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/EcoFlood.git
cd EcoFlood

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local dengan kredensial Anda

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi.

### Build untuk Production

```bash
# Build aplikasi
npm run build

# Start production server
npm start
```

## ✨ Fitur Utama

### 🗺️ Peta Interaktif

- **Multi-layer visualization** dengan data dari berbagai sumber
- **Timeline selector** untuk melihat data historis (2001-2024)
- **Island filter** untuk fokus pada wilayah tertentu
- **Custom markers** dengan popup informatif dan gambar
- **Responsive design** yang mobile-friendly

### 🌳 Monitoring Deforestasi

- Data kehilangan tutupan hutan dari **Global Forest Watch API**
- Visualisasi tingkat keparahan (Rendah, Sedang, Tinggi, Kritis)
- Update data tahunan dengan proxy server untuk mengatasi CORS
- Informasi detail area (hektar) dan intensitas

### 💧 Simulasi Prediksi Banjir

- **Parameter yang dapat disesuaikan:**
  - Tutupan hutan (0-100%)
  - Intensitas curah hujan (mm/hari)
  - Tingkat penyerapan tanah (Rendah/Sedang/Tinggi)
- **Real-time calculation** dengan algoritma prediksi custom
- **Visual feedback** dengan indikator warna dan grafik
- **Rekomendasi aksi** berdasarkan tingkat risiko
- **Educational scenarios** untuk pembelajaran

### 📱 Sistem Pelaporan Warga

- Form pelaporan dengan **validasi lokasi real-time**
- **Upload foto** dengan Cloudinary integration
- **Reverse geocoding** otomatis untuk nama lokasi
- **Status tracking** (Pending/Approved/Rejected)
- **Admin dashboard** untuk moderasi laporan
- **Filter berdasarkan tahun** untuk analisis temporal

### 🔥 Data Tambahan

- **Fire Hotspots** dari NASA FIRMS
- **Riwayat Banjir** dengan severity levels
- **Kawasan Biodiversitas** dan area konservasi
- **Weather data** integration

### 🎨 User Experience

- **Smooth animations** dengan scroll triggers
- **Loading states** yang informatif
- **Error handling** dengan fallback data
- **Notification system** untuk user feedback
- **Responsive sidebar** dengan mobile-friendly navigation

## 🏗️ Tech Stack

### Frontend

- **Framework:** Next.js 16 (App Router + Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **State Management:** Redux Toolkit + React Query
- **Maps:** Leaflet.js dengan custom layers
- **Icons:** Lucide React
- **Animations:** Custom CSS transitions

### Backend

- **Runtime:** Node.js 18+
- **Database:** MongoDB dengan Mongoose ODM
- **Image Storage:** Cloudinary
- **API Proxy:** Next.js API Routes
- **Authentication:** Session-based (Admin)

### External APIs

- **Global Forest Watch** - Deforestation data
- **Open-Meteo** - Weather & climate data
- **Nominatim (OpenStreetMap)** - Geocoding
- **NASA FIRMS** - Fire hotspot detection
- **Cloudinary** - Image hosting & optimization

## 📁 Struktur Proyek

```
EcoFlood/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/                      # API Routes
│   │   │   ├── gfw-proxy/           # Proxy untuk Global Forest Watch API
│   │   │   │   ├── tree-cover-loss/ # Data deforestasi
│   │   │   │   └── integrated-alerts/ # Alert data
│   │   │   ├── report-disaster/     # CRUD laporan warga
│   │   │   ├── approve-report-disaster/ # Approve laporan (admin)
│   │   │   ├── reject-report-disaster/  # Reject laporan (admin)
│   │   │   ├── delete-report-disaster/  # Delete laporan (admin)
│   │   │   ├── login-admin/         # Admin authentication
│   │   │   └── predict-flood/       # Flood prediction API
│   │   ├── admin/                   # Admin dashboard
│   │   │   ├── dashboard/           # Main dashboard
│   │   │   └── login/               # Admin login page
│   │   ├── peta/                    # Halaman Peta Interaktif
│   │   ├── laporan/                 # Halaman Form Pelaporan
│   │   ├── simulasi/                # Halaman Simulasi Prediksi
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Homepage
│   │   └── globals.css              # Global styles
│   │
│   ├── components/                   # React Components
│   │   ├── common/                  # Komponen umum
│   │   │   ├── DisasterIcon.tsx     # Icon bencana custom
│   │   │   ├── InfoBanner.tsx       # Banner informasi
│   │   │   ├── LoadingBar.tsx       # Loading indicator
│   │   │   ├── LoadingOverlay.tsx   # Overlay loading
│   │   │   ├── Notification.tsx     # Toast notifications
│   │   │   ├── PageHeader.tsx       # Header halaman
│   │   │   ├── PageLoader.tsx       # Page loader
│   │   │   └── SectionContainer.tsx # Container section
│   │   ├── home/                    # Komponen homepage
│   │   │   ├── HeroSection.tsx      # Hero section
│   │   │   ├── FeaturesSection.tsx  # Features showcase
│   │   │   ├── ProcessSection.tsx   # Process flow
│   │   │   ├── CTASection.tsx       # Call to action
│   │   │   └── WhyItMattersSection.tsx
│   │   ├── peta/                    # Komponen peta
│   │   │   ├── MapLayers.tsx        # Layer management
│   │   │   ├── MapSidebar.tsx       # Sidebar filter
│   │   │   ├── ReportButton.tsx     # Tombol lapor
│   │   │   ├── ReportModal.tsx      # Modal pelaporan
│   │   │   └── UserReportsLegend.tsx # Legend
│   │   ├── laporan/                 # Komponen laporan
│   │   │   ├── LocationPicker.tsx   # Map picker
│   │   │   ├── ImageUpload.tsx      # Upload gambar
│   │   │   ├── DisasterTypeSelector.tsx
│   │   │   └── ValidationHelper.tsx
│   │   ├── simulasi/                # Komponen simulasi
│   │   │   ├── SimulationControls.tsx
│   │   │   └── SimulationResults.tsx
│   │   ├── admin/                   # Komponen admin
│   │   │   ├── ReportCard.tsx       # Card laporan
│   │   │   ├── FilterTabs.tsx       # Filter status
│   │   │   ├── StatsCard.tsx        # Statistik
│   │   │   └── DisasterTypeStats.tsx
│   │   ├── layout/                  # Layout components
│   │   │   ├── Header.tsx           # Navigation header
│   │   │   ├── Footer.tsx           # Footer
│   │   │   └── MapLayout.tsx        # Map layout wrapper
│   │   └── ui/                      # UI primitives
│   │       ├── Button.tsx
│   │       ├── EducationCard.tsx
│   │       └── ScenarioButton.tsx
│   │
│   ├── hooks/                        # Custom React Hooks
│   │   ├── useScrollAnimation.ts    # Scroll animation hook
│   │   └── map/                     # Map-related hooks
│   │       ├── useMapData.ts        # Data fetching
│   │       └── useIslandFilter.ts   # Island filtering
│   │
│   ├── services/                     # API Services
│   │   ├── data.ts                  # External API calls
│   │   ├── reports.ts               # Report services
│   │   └── simulation.ts            # Simulation logic
│   │
│   ├── lib/                          # Utilities
│   │   ├── cloudinary.ts            # Cloudinary config
│   │   ├── connect-db.ts            # MongoDB connection
│   │   ├── initialize-db.ts         # DB initialization
│   │   ├── logger.ts                # Logging utility
│   │   ├── fetch-flood-api.ts       # GFW API client
│   │   ├── fetch-weather-api.ts     # Weather API
│   │   └── logic-flood-prediction.ts # Prediction algorithm
│   │
│   ├── store/                        # Redux Store
│   │   ├── store.ts                 # Store configuration
│   │   ├── hooks.ts                 # Typed hooks
│   │   └── slices/                  # Redux slices
│   │
│   ├── interface/                    # TypeScript Interfaces
│   │   ├── index.ts                 # Exported interfaces
│   │   ├── flood-api.ts             # API types
│   │   └── weather-api.ts           # Weather types
│   │
│   ├── config/                       # Configuration
│   │   └── index.ts                 # App config
│   │
│   ├── helper/                       # Helper Functions
│   │   ├── disaster-type.ts         # Disaster type mapping
│   │   ├── format-data-api.ts       # Data formatting
│   │   └── image-converter.ts       # Image utilities
│   │
│   └── contexts/                     # React Contexts
│       └── PageLoadContext.tsx      # Page load state
│
├── public/                           # Static Assets
│   └── images/                      # Public images
│
├── .env.local                        # Environment variables
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json                      # Dependencies
```

## 🔧 Perbaikan & Update Terbaru (Desember 2024)

### ✅ CORS Error Resolution

- **Issue:** GFW API diblokir oleh CORS policy
- **Solution:** Implementasi Next.js API routes sebagai server-side proxy
- **Files:** `src/app/api/gfw-proxy/*`
- **Impact:** Data deforestasi dapat diakses tanpa error CORS

### ✅ Invalid Time Value Error Fix

- **Issue:** `RangeError: Invalid time value` pada parsing tanggal
- **Solution:** Validasi tanggal dengan fallback ke tanggal saat ini
- **Files:** `src/hooks/map/useMapData.ts`
- **Impact:** Aplikasi tidak crash saat menerima data tanggal invalid

### ✅ TypeScript Generic Type Fix

- **Issue:** Type mismatch pada `useScrollAnimation` hook untuk berbagai elemen HTML
- **Solution:** Implementasi generic type `<T extends HTMLElement>`
- **Files:** `src/hooks/useScrollAnimation.ts` dan semua components
- **Impact:** Build berhasil tanpa error TypeScript, deployment ke Vercel lancar

### ✅ Year Filter untuk User Reports

- **Issue:** Laporan warga ditampilkan semua tanpa filter tahun
- **Solution:** Filter laporan berdasarkan selectedYear
- **Files:** `src/app/peta/page.tsx`
- **Impact:** Marker laporan warga hanya muncul sesuai tahun yang dipilih di timeline

## � Dokumentasi Lengkap

### Panduan Integrasi

- **[GFW_API_INTEGRATION.md](./docs/GFW_API_INTEGRATION.md)** - Panduan lengkap integrasi Global Forest Watch API
- **[REDUX_REACT_QUERY_SETUP.md](./docs/REDUX_REACT_QUERY_SETUP.md)** - Setup state management

### Troubleshooting

- **[TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)** - Panduan troubleshooting cepat
- **[FIX_SUMMARY.md](./docs/FIX_SUMMARY.md)** - Ringkasan bug fixes & improvements

### API Reference

Dokumentasi lengkap API endpoints tersedia di `/api/docs` (ketika server berjalan)

## 🧪 Testing

### Manual Testing - API Endpoints

```bash
# Test GFW Proxy - Tree Cover Loss
curl "http://localhost:3000/api/gfw-proxy/tree-cover-loss?year=2023"

# Test GFW Proxy - Integrated Alerts
curl "http://localhost:3000/api/gfw-proxy/integrated-alerts?days=30"

# Test Flood Prediction
curl -X POST "http://localhost:3000/api/predict-flood" \
  -H "Content-Type: application/json" \
  -d '{"latitude": -6.2, "longitude": 106.8}'

# Test Get Reports
curl "http://localhost:3000/api/report-disaster"

# Test Admin Login
curl -X POST "http://localhost:3000/api/login-admin" \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_password"}'
```

### Browser Testing

1. **Test Map Functionality:**

   - Buka `http://localhost:3000/peta`
   - Coba ganti filter pulau dan tahun
   - Pastikan markers muncul sesuai filter
   - Test semua layer (deforestation, flood, fire, biodiversity, user reports)

2. **Test Report Submission:**

   - Buka `http://localhost:3000/laporan`
   - Isi form dan upload gambar
   - Submit laporan
   - Cek notifikasi sukses

3. **Test Simulation:**

   - Buka `http://localhost:3000/simulasi`
   - Adjust sliders (forest cover, rainfall, soil absorption)
   - Lihat perubahan real-time pada hasil prediksi

4. **Test Admin Dashboard:**
   - Login di `http://localhost:3000/admin/login`
   - Cek dashboard di `http://localhost:3000/admin/dashboard`
   - Test approve/reject/delete laporan

### Check Browser Console

Buka Developer Tools (F12) untuk melihat:

- Network requests ke API
- Console logs dari logger utility
- Error messages jika ada
- Data yang di-fetch dari API

## 🔑 Environment Variables

Buat file `.env.local` di root directory:

```env
# MongoDB Database
MONGODB_URI=mongodb://localhost:27017/ecoflood
# atau gunakan MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecoflood

# Cloudinary (untuk upload gambar laporan)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

# Global Forest Watch API (opsional, untuk rate limit lebih tinggi)
GFW_API_KEY=your_gfw_api_key

# Admin Dashboard Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password_here

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Setup Cloudinary

1. Daftar di [Cloudinary](https://cloudinary.com/)
2. Buat upload preset:
   - Settings → Upload → Add upload preset
   - Signing Mode: Unsigned
   - Folder: `ecoflood-reports`
3. Copy Cloud Name dan Upload Preset ke `.env.local`

### Setup MongoDB

1. **Local:** Install MongoDB dan jalankan `mongod`
2. **Atlas (Recommended):**
   - Buat cluster di [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Whitelist IP address Anda (0.0.0.0/0 untuk development)
   - Copy connection string ke `MONGODB_URI`

## 🚨 Troubleshooting

### CORS Error pada GFW API

**Status:** ✅ **Fixed**

- **Solution:** Semua request GFW sekarang melalui proxy `/api/gfw-proxy/*`
- **Action:** Tidak perlu action, sudah teratasi

### Build Error: Type Mismatch

**Status:** ✅ **Fixed**

- **Error:** `Type 'RefObject<HTMLElement>' is not assignable...`
- **Solution:** Generic types sudah ditambahkan pada semua `useScrollAnimation` calls
- **Action:** Run `npm run build` untuk verify

### No Data Showing on Map

**Kemungkinan Penyebab:**

1. **API timeout** - Check console untuk error messages
2. **Filter terlalu spesifik** - Coba ganti tahun atau pilih "Semua Pulau"
3. **Database empty** - Submit laporan baru atau check MongoDB connection

**Debug Steps:**

```bash
# 1. Check if backend is running
curl http://localhost:3000/api/report-disaster

# 2. Check MongoDB connection
# Lihat terminal untuk message "MongoDB connected"

# 3. Check browser console
# Buka DevTools (F12) → Console tab
# Look for: ⚠️ Using fallback data
```

### Image Upload Gagal

**Kemungkinan Penyebab:**

1. Cloudinary credentials salah
2. Upload preset tidak di-configure
3. File size terlalu besar (max 10MB)

**Solution:**

- Verify `.env.local` Cloudinary settings
- Check upload preset di Cloudinary dashboard
- Compress image sebelum upload

### MongoDB Connection Error

**Error:** `MongooseServerSelectionError`

**Solutions:**

```bash
# Local MongoDB
1. Start MongoDB service
   - Windows: net start MongoDB
   - Mac: brew services start mongodb-community
   - Linux: sudo systemctl start mongod

# MongoDB Atlas
1. Whitelist IP: 0.0.0.0/0 (development)
2. Check username/password di connection string
3. Ensure network access di Atlas dashboard
```

### Deployment ke Vercel Gagal

**Common Issues:**

1. **Build error** - Run `npm run build` locally first
2. **Environment variables** - Add semua vars di Vercel dashboard
3. **MongoDB connection** - Use MongoDB Atlas, bukan local
4. **Node version** - Set Node.js version ke 18.x di Vercel

**Vercel Setup:**

```
Settings → Environment Variables → Add:
- MONGODB_URI
- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- ADMIN_USERNAME
- ADMIN_PASSWORD
```

### Performance Issues

**Slow map loading:**

- Data terlalu banyak untuk tahun tertentu
- Reduce marker count dengan filter island
- Enable browser hardware acceleration

**High memory usage:**

- Clear browser cache
- Restart dev server
- Check for memory leaks di React DevTools

## 🛠️ Development Guide

### Code Standards

```typescript
// TypeScript strict mode enabled
"strict": true
"noUnusedLocals": true
"noUnusedParameters": true

// ESLint rules
- Enforce type safety
- No unused variables
- Consistent naming conventions
```

### Logging System

Gunakan centralized logger untuk consistency:

```typescript
import { logger } from "@/lib/logger";

// Info logging
logger.info("Fetching data", { year: 2024, island: "java" });

// Warning logging
logger.warn("API slow response", { responseTime: 5000 });

// Error logging
logger.error("Failed to fetch", error, { context: "GFW API" });
```

### API Routes Best Practices

**Structure:**

```typescript
export async function GET(request: NextRequest) {
  try {
    // 1. Validate input
    const { searchParams } = new URL(request.url);
    const year = searchParams.get("year");

    // 2. Process request
    const data = await fetchData(year);

    // 3. Return success response
    return NextResponse.json({
      success: true,
      data: data,
    });
  } catch (error) {
    // 4. Handle errors gracefully
    logger.error("API Error", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error fetching data",
        useFallback: true,
      },
      { status: 200 }
    ); // Always return 200 for client handling
  }
}
```

**Guidelines:**

- Always return 200 status dengan `success: boolean`
- Include `useFallback` flag untuk error handling
- Add comprehensive logging
- Set appropriate timeouts (15s recommended)
- Validate all inputs
- Handle edge cases

### Component Development

**Naming Conventions:**

- Components: PascalCase (`MapSidebar.tsx`)
- Hooks: camelCase with 'use' prefix (`useMapData.ts`)
- Utils: camelCase (`format-data-api.ts`)
- Constants: UPPER_SNAKE_CASE

**Component Structure:**

```typescript
// 1. Imports
import React from "react";
import { useCustomHook } from "@/hooks";

// 2. Types/Interfaces
interface ComponentProps {
  title: string;
  onAction: () => void;
}

// 3. Component
export const Component: React.FC<ComponentProps> = ({ title, onAction }) => {
  // 4. Hooks
  const [state, setState] = useState();

  // 5. Effects
  useEffect(() => {
    // ...
  }, []);

  // 6. Handlers
  const handleClick = () => {
    // ...
  };

  // 7. Render
  return <div>...</div>;
};
```

### State Management

**Redux Store:**

```typescript
// Create slice
import { createSlice } from "@reduxjs/toolkit";

export const exampleSlice = createSlice({
  name: "example",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Use in component
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const value = useAppSelector((state) => state.example.value);
const dispatch = useAppDispatch();
```

### Testing Workflow

1. **Develop locally:** `npm run dev`
2. **Check types:** `npm run build` (TypeScript check included)
3. **Test functionality:** Manual testing di browser
4. **Check console:** No errors atau warnings
5. **Commit:** Git commit dengan message yang jelas
6. **Deploy:** Push ke Vercel

### Git Workflow

```bash
# Feature development
git checkout -b feature/nama-fitur
# ... develop ...
git add .
git commit -m "feat: tambah fitur X"
git push origin feature/nama-fitur

# Bug fix
git checkout -b fix/nama-bug
# ... fix ...
git commit -m "fix: perbaiki bug Y"

# Commit message format:
# feat: new feature
# fix: bug fix
# docs: documentation
# style: formatting
# refactor: code refactoring
# test: testing
# chore: maintenance
```

## 📊 API Endpoints Reference

### Internal API Routes

#### Reports Management

- **`GET /api/report-disaster`**

  - Get all disaster reports
  - Query params: none (returns all approved reports)
  - Response: Array of report objects

- **`POST /api/report-disaster`**

  - Submit new disaster report
  - Body: `{ latitude, longitude, type, description, imageUrl }`
  - Response: `{ success, message, reportId }`

- **`POST /api/approve-report-disaster/[reportId]`** 🔒 Admin only

  - Approve pending report
  - Response: `{ success, message }`

- **`POST /api/reject-report-disaster/[reportId]`** 🔒 Admin only

  - Reject pending report
  - Response: `{ success, message }`

- **`DELETE /api/delete-report-disaster/[reportId]`** 🔒 Admin only
  - Delete report permanently
  - Response: `{ success, message }`

#### Authentication

- **`POST /api/login-admin`** 🔒
  - Admin login
  - Body: `{ username, password }`
  - Response: `{ success, message, token }`

#### Prediction

- **`POST /api/predict-flood`**
  - Flood risk prediction
  - Body: `{ latitude, longitude, forestCover?, rainfall?, soilType? }`
  - Response: `{ success, data: { riskLevel, score, factors, recommendations } }`

### GFW Proxy Routes (Server-side)

- **`GET /api/gfw-proxy/tree-cover-loss`**

  - Get deforestation data
  - Query params: `year` (2001-2024)
  - Response: `{ success, data: DeforestationData[] }`

- **`GET /api/gfw-proxy/integrated-alerts`**
  - Get forest alerts
  - Query params: `days` (default: 30)
  - Response: `{ success, data: AlertData[] }`

### Response Format

**Success:**

```json
{
  "success": true,
  "data": {
    /* result data */
  },
  "message": "Optional success message"
}
```

**Error:**

```json
{
  "success": false,
  "message": "Error description",
  "useFallback": true // Indicates fallback data will be used
}
```

## 🌐 External APIs Integration

### Global Forest Watch (GFW)

- **Purpose:** Data deforestasi dan kehilangan tutupan hutan
- **Endpoint:** `https://data-api.globalforestwatch.org/`
- **Rate Limit:** 1000 requests/day (tanpa API key)
- **Data:** Tree cover loss, integrated alerts, GLAD alerts
- **Implementation:** Server-side proxy di `/api/gfw-proxy/*`

### Open-Meteo

- **Purpose:** Data cuaca dan curah hujan real-time
- **Endpoint:** `https://api.open-meteo.com/v1/forecast`
- **Rate Limit:** Unlimited (free tier)
- **Data:** Temperature, precipitation, humidity, wind
- **Used in:** Flood prediction algorithm

### Nominatim (OpenStreetMap)

- **Purpose:** Geocoding dan reverse geocoding
- **Endpoint:** `https://nominatim.openstreetmap.org/`
- **Rate Limit:** 1 request/second
- **Data:** Location names from coordinates
- **Used in:** Report form location picker

### NASA FIRMS

- **Purpose:** Fire hotspot detection
- **Data:** Active fire locations dengan confidence levels
- **Update:** Near real-time (updated every few hours)
- **Implementation:** Fallback mock data (API integration optional)

### Cloudinary

- **Purpose:** Image upload dan hosting
- **Features:** Automatic optimization, CDN delivery
- **Used in:** Report image uploads
- **Configuration:** Unsigned upload preset

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. **Push ke GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ecoflood.git
git push -u origin main
```

2. **Connect Vercel:**

   - Login ke [Vercel](https://vercel.com)
   - Import repository dari GitHub
   - Configure project:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Environment Variables di Vercel:**

   - Settings → Environment Variables
   - Add semua variables dari `.env.local`
   - Deploy ulang setelah add variables

4. **MongoDB Atlas Setup:**
   - Whitelist Vercel IPs: `0.0.0.0/0`
   - Update `MONGODB_URI` di Vercel env vars

### Deploy Manual

```bash
# Build untuk production
npm run build

# Start production server
npm start

# Atau dengan PM2 (recommended)
npm install -g pm2
pm2 start npm --name "ecoflood" -- start
pm2 save
pm2 startup
```

### Performance Optimization

- ✅ Next.js Image Optimization
- ✅ Code splitting otomatis
- ✅ Static page generation
- ✅ API route caching
- ✅ Cloudinary CDN untuk images
- ✅ Turbopack untuk fast refresh

## 🤝 Contributing

Kontribusi sangat diterima! Ikuti langkah berikut:

1. **Fork repository**
2. **Create feature branch:**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit changes:**
   ```bash
   git commit -m 'feat: add some AmazingFeature'
   ```
4. **Push to branch:**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open Pull Request**

### Contribution Guidelines

- Follow existing code style
- Add comments untuk logic yang complex
- Test functionality sebelum PR
- Update documentation jika perlu
- Gunakan conventional commits format

## 📝 License

Project ini menggunakan **MIT License** - lihat file [LICENSE](LICENSE) untuk detail.

```
MIT License

Copyright (c) 2024 EcoFlood

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 🙏 Acknowledgments

Terima kasih kepada:

- **[Global Forest Watch](https://www.globalforestwatch.org/)** - Data deforestasi berkualitas tinggi
- **[NASA FIRMS](https://firms.modaps.eosdis.nasa.gov/)** - Fire hotspot detection
- **[Open-Meteo](https://open-meteo.com/)** - Free weather API
- **[OpenStreetMap](https://www.openstreetmap.org/)** - Geocoding service
- **[Cloudinary](https://cloudinary.com/)** - Image hosting & optimization
- **[BNPB Indonesia](https://bnpb.go.id/)** - Disaster management insights
- **[MongoDB](https://www.mongodb.com/)** - Database platform
- **[Vercel](https://vercel.com/)** - Deployment platform

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 📞 Support

Jika ada pertanyaan atau issue:

- 🐛 [Report Bug](https://github.com/yourusername/ecoflood/issues)
- 💡 [Request Feature](https://github.com/yourusername/ecoflood/issues)
- 📧 Email: support@ecoflood.com

## 🗺️ Roadmap

### Planned Features

- [ ] Mobile app (React Native)
- [ ] Real-time notifications
- [ ] Weather forecast integration
- [ ] ML-based flood prediction
- [ ] Multi-language support (EN/ID)
- [ ] Export data to PDF/CSV
- [ ] Historical data comparison
- [ ] Community forum
- [ ] Push notifications untuk alert

### In Progress

- [x] Year-based filtering untuk user reports
- [x] TypeScript strict mode
- [x] Admin dashboard improvements

### Completed ✅

- [x] GFW API integration
- [x] Interactive map dengan multi-layers
- [x] User report system
- [x] Flood risk simulation
- [x] Admin moderation system
- [x] Responsive design
- [x] Image upload via Cloudinary

---

<div align="center">

**EcoFlood** - Monitoring Lingkungan untuk Indonesia yang Lebih Hijau 🌿

**Status:** ✅ Production Ready | **Version:** 1.0.0 | **Last Updated:** December 14, 2024

[🌐 Live Demo](https://ecoflood.vercel.app) | [📖 Documentation](./docs) | [🐛 Report Issue](https://github.com/yourusername/ecoflood/issues)

⭐ **Star this repo jika project ini bermanfaat!** ⭐

</div>
