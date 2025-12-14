'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MapIcon, Activity, MessageSquare, Shield, TrendingUp, Users, Droplets, Trees, AlertTriangle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const Page = () => {
  const router = useRouter()

  return (
    <div className='bg-background'>
      <Header />

      {/* Hero Section - Clean Layout */}
      <section className='relative px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-32'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Content */}
            <div className='flex flex-col items-start gap-y-8 order-2 lg:order-1'>
              {/* Main Heading */}
              <div className='relative'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight font-bold text-surface-primary'>
                  Pantau Deforestasi. <span className='relative inline-block font-bold'>Cegah Banjir.
                    <div className='bg-primary h-3 sm:h-4 lg:h-5 xl:h-9 w-full -rotate-1 absolute bottom-0 left-0 -z-10' />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className='text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed'>
                Platform visualisasi data untuk melihat dampak nyata hilangnya hutan terhadap risiko air di wilayah Anda.
              </p>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4'>
                <button
                  onClick={() => router.push('/peta')}
                  className='bg-surface-primary text-background px-8 py-3.5 rounded-full font-semibold cursor-pointer hover:bg-surface-primary/90 transition-all duration-300 hover:shadow-lg text-center'>
                  Buka Peta
                </button>
                <button
                  onClick={() => router.push('/simulasi')}
                  className='bg-primary text-gray-800 px-8 py-3.5 rounded-full font-semibold cursor-pointer hover:bg-primary/90 transition-all duration-300 hover:shadow-lg text-center'>
                  Coba Simulasi
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className='relative order-1 lg:order-2'>
              <div className='relative w-full rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src="/hero-image.png"
                  alt="Banjir dan dampak deforestasi"
                  width={600}
                  height={500}
                  className='w-full h-auto object-cover'
                  priority
                />
                {/* Info Card Overlay */}
                <div className='absolute bottom-6 right-6 bg-background/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-200/50 max-w-[280px] sm:max-w-xs'>
                  <div className='flex items-start gap-3 mb-2'>
                    <div className='w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center shrink-0'>
                      <AlertTriangle className='text-accent' size={18} />
                    </div>
                    <div>
                      <h3 className='font-bold text-sm sm:text-base text-gray-900'>Banjir Sumatra, 2025</h3>
                    </div>
                  </div>
                  <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                    Damaged houses as seen in the flood-hit Aceh on Dec. 4, 2025. (Antara Photo/Bayu Pratama)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className='py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-purple-50 to-background'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-12 md:mb-16'>
            <div className='inline-block mb-4'>
              <span className='inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full text-sm font-semibold text-purple-800'>
                <Shield size={16} />
                Dampak & Manfaat
              </span>
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
              Mengapa Ini Penting?
            </h2>
            <p className='text-base md:text-lg text-gray-700 max-w-2xl mx-auto'>
              Pemantauan deforestasi bukan sekadar pilihan, tetapi kebutuhan. Mari kita pahami dampaknya.
            </p>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
            <div className='bg-gradient-to-br from-emerald-50 to-teal-50 p-6 md:p-8 rounded-2xl border border-emerald-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='w-14 h-14 bg-surface-primary rounded-xl flex items-center justify-center mb-5 shadow-md'>
                <Trees className='text-background' size={28} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-900'>Mengurangi Risiko Banjir</h3>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed'>
                Mencegah deforestasi untuk generasi masa depan melalui konservasi hutan yang berkelanjutan.
              </p>
            </div>

            <div className='bg-gradient-to-br from-teal-50 to-cyan-50 p-6 md:p-8 rounded-2xl border border-teal-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='w-14 h-14 bg-surface-primary rounded-xl flex items-center justify-center mb-5 shadow-md'>
                <Shield className='text-background' size={28} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-900'>Melindungi Ekosistem</h3>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed'>
                Menjaga keseimbangan ekosistem hutan untuk masa depan yang berkelanjutan dan hijau.
              </p>
            </div>

            <div className='bg-gradient-to-br from-cyan-50 to-blue-50 p-6 md:p-8 rounded-2xl border border-cyan-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='w-14 h-14 bg-surface-primary rounded-xl flex items-center justify-center mb-5 shadow-md'>
                <Users className='text-background' size={28} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-900'>Memberdayakan Masyarakat</h3>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed'>
                Mendorong inisiatif keberlanjutan lokal untuk keterlibatan dan pemberdayaan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced UX */}
      <section className='py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background relative'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-16 md:mb-20'>
            <div className='inline-block mb-4'>
              <span className='inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-surface-primary'>
                <Sparkles size={16} />
                Fitur Unggulan
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight'>
              Solusi Kami
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Teknologi terdepan untuk memantau dan mencegah dampak deforestasi terhadap banjir.
            </p>
          </div>

          {/* Features Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
            {/* Peta Feature */}
            <div className='group bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-8 md:p-10 rounded-3xl border-2 border-surface-primary/20 hover:border-surface-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1'>
              <div className='flex items-start gap-5 mb-6'>
                <div className='w-16 h-16 bg-surface-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                  <MapIcon className='text-background' size={30} />
                </div>
                <div>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>Peta Interaktif</h3>
                  <p className='text-surface-primary font-bold text-sm'>Visualisasi Data Real-time</p>
                </div>
              </div>
              <p className='text-gray-700 mb-8 text-base md:text-lg leading-relaxed'>
                Pantau deforestasi dan risiko banjir secara real-time dengan peta interaktif yang menampilkan data dari Global Forest Watch dan laporan warga.
              </p>
              <ul className='space-y-4 mb-8'>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-surface-primary flex-shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Data deforestasi terintegrasi dari GFW</span>
                </li>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-surface-primary flex-shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Laporan banjir dari masyarakat</span>
                </li>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-surface-primary flex-shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Filter berdasarkan pulau dan jenis bencana</span>
                </li>
              </ul>
              <button
                onClick={() => router.push('/peta')}
                className='group/btn bg-surface-primary text-background px-8 py-4 rounded-full font-bold hover:bg-surface-primary/90 transition-all duration-300 text-sm md:text-base w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2'>
                <span>Jelajahi Peta</span>
                <ArrowRight size={18} className='group-hover/btn:translate-x-1 transition-transform duration-300' />
              </button>
            </div>

            {/* Simulasi Feature */}
            <div className='group bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 p-8 md:p-10 rounded-3xl border-2 border-blue-300/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1'>
              <div className='flex items-start gap-5 mb-6'>
                <div className='w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                  <Activity className='text-white' size={30} />
                </div>
                <div>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>Simulasi Prediksi</h3>
                  <p className='text-blue-600 font-bold text-sm'>Analisis Risiko Banjir</p>
                </div>
              </div>
              <p className='text-gray-700 mb-8 text-base md:text-lg leading-relaxed'>
                Gunakan simulasi berbasis AI untuk memprediksi risiko banjir berdasarkan kondisi cuaca, curah hujan, dan data deforestasi wilayah.
              </p>
              <ul className='space-y-4 mb-8'>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-blue-600 flex-shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Prediksi berbasis machine learning</span>
                </li>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-blue-600 flex-shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Data cuaca real-time</span>
                </li>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-blue-600 flex-shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Skenario berbagai tingkat deforestasi</span>
                </li>
              </ul>
              <button
                onClick={() => router.push('/simulasi')}
                className='group/btn bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 text-sm md:text-base w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2'>
                <span>Coba Simulasi</span>
                <ArrowRight size={18} className='group-hover/btn:translate-x-1 transition-transform duration-300' />
              </button>
            </div>

            {/* Laporan Feature */}
            <div className='group bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 md:p-10 rounded-3xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 lg:col-span-2'>
              <div className='flex flex-col lg:flex-row lg:items-start gap-8'>
                <div className='flex-1'>
                  <div className='flex items-start gap-5 mb-6'>
                    <div className='w-16 h-16 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                      <MessageSquare className='text-white' size={30} />
                    </div>
                    <div>
                      <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2'>Laporan Warga</h3>
                      <p className='text-accent font-bold text-sm'>Partisipasi Masyarakat</p>
                    </div>
                  </div>
                  <p className='text-gray-700 mb-8 text-base md:text-lg leading-relaxed'>
                    Masyarakat dapat melaporkan kondisi banjir, longsor, atau bencana lainnya secara langsung dengan foto dan lokasi. Setiap laporan akan diverifikasi oleh admin.
                  </p>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
                    <div className='flex items-start gap-3 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent flex-shrink-0 mt-0.5' size={22} />
                      <span className='text-gray-700'>Upload foto bukti</span>
                    </div>
                    <div className='flex items-start gap-3 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent flex-shrink-0 mt-0.5' size={22} />
                      <span className='text-gray-700'>Lokasi otomatis terdeteksi</span>
                    </div>
                    <div className='flex items-start gap-3 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent flex-shrink-0 mt-0.5' size={22} />
                      <span className='text-gray-700'>Verifikasi admin</span>
                    </div>
                    <div className='flex items-start gap-3 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent flex-shrink-0 mt-0.5' size={22} />
                      <span className='text-gray-700'>Tampil di peta interaktif</span>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push('/laporan')}
                    className='group/btn bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-accent/90 transition-all duration-300 text-sm md:text-base w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2'>
                    <span>Buat Laporan</span>
                    <ArrowRight size={18} className='group-hover/btn:translate-x-1 transition-transform duration-300' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-emerald-50 to-background'>
        <div className='max-w-7xl mx-auto'>
          {/* Section Header */}
          <div className='text-center mb-12 md:mb-16'>
            <div className='inline-block mb-4'>
              <span className='inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full text-sm font-semibold text-emerald-800'>
                <Activity size={16} />
                Cara Kerja
              </span>
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900'>
              Proses Kerja Kami
            </h2>
            <p className='text-base md:text-lg text-gray-700 max-w-2xl mx-auto'>
              Empat langkah sederhana untuk memantau dan mencegah dampak deforestasi.
            </p>
          </div>

          {/* Steps Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
            {/* Step 1 */}
            <div className='text-center p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-surface-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'>
                <span className='text-2xl font-bold text-background'>01</span>
              </div>
              <h3 className='text-lg md:text-xl font-bold mb-3 text-gray-900'>Pengumpulan Data</h3>
              <p className='text-sm text-gray-700 leading-relaxed'>
                Mengintegrasikan data dari Global Forest Watch dan laporan warga.
              </p>
            </div>

            {/* Step 2 */}
            <div className='text-center p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'>
                <span className='text-2xl font-bold text-gray-900'>02</span>
              </div>
              <h3 className='text-lg md:text-xl font-bold mb-3 text-gray-900'>Analisis & Visualisasi</h3>
              <p className='text-sm text-gray-700 leading-relaxed'>
                Memproses data dalam bentuk peta interaktif.
              </p>
            </div>

            {/* Step 3 */}
            <div className='text-center p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'>
                <span className='text-2xl font-bold text-white'>03</span>
              </div>
              <h3 className='text-lg md:text-xl font-bold mb-3 text-gray-900'>Prediksi Risiko</h3>
              <p className='text-sm text-gray-700 leading-relaxed'>
                Memprediksi potensi banjir dengan machine learning.
              </p>
            </div>

            {/* Step 4 */}
            <div className='text-center p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md'>
                <span className='text-2xl font-bold text-white'>04</span>
              </div>
              <h3 className='text-lg md:text-xl font-bold mb-3 text-gray-900'>Aksi & Mitigasi</h3>
              <p className='text-sm text-gray-700 leading-relaxed'>
                Pengambilan keputusan dan tindakan pencegahan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-surface-primary'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
            <div className='text-center'>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary/20 rounded-xl'>
                  <Droplets className='text-primary' size={36} />
                </div>
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-background mb-2'>12K+</h3>
              <p className='text-background/80 text-sm md:text-base'>Hektar Dipantau</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary/20 rounded-xl'>
                  <MapIcon className='text-primary' size={36} />
                </div>
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-background mb-2'>50+</h3>
              <p className='text-background/80 text-sm md:text-base'>Area Terpantau</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary/20 rounded-xl'>
                  <Users className='text-primary' size={36} />
                </div>
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-background mb-2'>500+</h3>
              <p className='text-background/80 text-sm md:text-base'>Laporan Warga</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary/20 rounded-xl'>
                  <TrendingUp className='text-primary' size={36} />
                </div>
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-background mb-2'>95%</h3>
              <p className='text-background/80 text-sm md:text-base'>Akurasi Prediksi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-surface-primary to-emerald-900'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Heading */}
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background'>
            Mari Bangun Masa Depan yang Lebih Hijau Bersama
          </h2>

          {/* Description */}
          <p className='text-base md:text-lg text-background/90 mb-10 max-w-2xl mx-auto'>
            Bergabunglah dengan kami dalam memantau deforestasi dan mencegah banjir. Setiap data, setiap laporan, membuat perbedaan.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
              onClick={() => router.push('/peta')}
              className='bg-primary text-gray-900 px-10 py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-xl w-full sm:w-auto'>
              Mulai Sekarang →
            </button>
            <button
              onClick={() => router.push('/laporan')}
              className='bg-transparent border-2 border-background text-background px-10 py-4 rounded-full font-bold text-base hover:bg-background/10 transition-all duration-300 w-full sm:w-auto'>
              Buat Laporan
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page 