// src/components/MapLoader.tsx
"use client"; // <-- Wajib: Jadikan ini Client Component!

import dynamic from 'next/dynamic';

// Muat komponen MapLayout Anda secara dinamis DARI DALAM Client Component ini
const ClientMapLayout = dynamic(() => import('@/components/layout/MapLayout'), {
  ssr: false, // <-- Sekarang opsi ini DIIZINKAN karena MapLoader adalah Client Component
  loading: () => <p className="text-center p-4">Memuat Peta...</p>,
});

export default function MapLoader() {
  return (
    // Render komponen yang dimuat secara dinamis
    <ClientMapLayout />
  );
}