'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MapIcon, Activity, MessageSquare, Shield, TrendingUp, Users, Trees, AlertTriangle, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const Page = () => {
  const router = useRouter()

  return (
    <div className='bg-background'>
      <Header />

      {/* Hero Section - Enhanced Full Screen */}
      <section className='relative min-h-screen flex items-center px-6 md:px-12 lg:px-20 pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden'>
        {/* Decorative Background */}
        <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 left-0 w-80 h-80 bg-surface-primary/5 rounded-full blur-3xl' />

        <div className='max-w-7xl mx-auto relative w-full'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
            {/* Left Content */}
            <div className='flex flex-col items-start gap-y-6 order-2 lg:order-1'>
              {/* Trust Badge */}
              <div className='inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2'>
                <div className='w-2 h-2 bg-emerald-500 rounded-full animate-pulse' />
                <span className='text-sm font-semibold text-emerald-800'>Platform Monitoring Deforestasi & Banjir</span>
              </div>

              {/* Main Heading */}
              <div className='relative'>
                <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-[80px] leading-tight font-bold text-surface-primary'>
                  Pantau Deforestasi. <span className='relative inline-block font-bold'>Cegah Banjir.
                    <div className='bg-primary h-3 sm:h-4 lg:h-5 xl:h-9 w-full -rotate-1 absolute bottom-0 left-0 -z-10' />
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className='text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl'>
                Platform visualisasi data untuk melihat dampak nyata hilangnya hutan terhadap risiko banjir di wilayah Anda dengan teknologi AI dan data real-time.
              </p>

              {/* Key Features List */}
              <div className='flex flex-col gap-3 my-2'>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0'>
                    <CheckCircle2 className='text-surface-primary' size={16} />
                  </div>
                  <span className='text-sm md:text-base text-gray-700'>Data deforestasi real-time dari Global Forest Watch</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0'>
                    <CheckCircle2 className='text-surface-primary' size={16} />
                  </div>
                  <span className='text-sm md:text-base text-gray-700'>Prediksi banjir berbasis AI & Machine Learning</span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0'>
                    <CheckCircle2 className='text-surface-primary' size={16} />
                  </div>
                  <span className='text-sm md:text-base text-gray-700'>Sistem pelaporan partisipatif masyarakat</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2'>
                <button
                  onClick={() => router.push('/peta')}
                  className='group bg-surface-primary text-background px-8 py-4 rounded-full font-semibold cursor-pointer hover:bg-surface-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2'>
                  <MapIcon size={20} />
                  <span>Lihat Peta Interaktif</span>
                  <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform duration-300' />
                </button>
                <button
                  onClick={() => router.push('/simulasi')}
                  className='group bg-primary text-gray-800 px-8 py-4 rounded-full font-semibold cursor-pointer hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2 border-2 border-transparent hover:border-primary'>
                  <Activity size={20} />
                  <span>Coba Simulasi AI</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className='flex items-center gap-6 mt-4 pt-4 border-t border-gray-200'>
                <div className='flex items-center gap-2'>
                  <div className='w-10 h-10 bg-surface-primary/10 rounded-xl flex items-center justify-center'>
                    <Shield className='text-surface-primary' size={20} />
                  </div>
                  <div className='text-sm'>
                    <p className='font-bold text-gray-900'>Data Terverifikasi</p>
                    <p className='text-gray-600 text-xs'>Sistem verifikasi admin</p>
                  </div>
                </div>
                <div className='h-8 w-px bg-gray-300' />
                <div className='flex items-center gap-2'>
                  <div className='w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center'>
                    <MapIcon className='text-surface-primary' size={20} />
                  </div>
                  <div className='text-sm'>
                    <p className='font-bold text-gray-900'>Open Source</p>
                    <p className='text-gray-600 text-xs'>Gratis & Transparan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className='relative order-1 lg:order-2'>
              <div className='relative w-full h-112.5 sm:h-137.5 lg:h-162.5 xl:h-175 rounded-3xl overflow-hidden shadow-2xl'>
                <Image
                  src="/hero-image.png"
                  alt="Banjir dan dampak deforestasi"
                  fill
                  className='object-cover'
                  priority
                  sizes='(max-width: 768px) 100vw, 50vw'
                />
                {/* Info Card Overlay */}
                <div className='absolute bottom-6 right-6 bg-background/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-200/50 max-w-70 sm:max-w-xs'>
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
      <section className='py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-linear-to-b from-purple-50 via-blue-50/30 to-background'>
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
            <p className='text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed'>
              Pemantauan deforestasi bukan sekadar pilihan, tetapi kebutuhan mendesak. Indonesia kehilangan <span className='font-bold text-surface-primary'>1.5 juta hektar</span> hutan setiap tahun, meningkatkan risiko banjir hingga <span className='font-bold text-accent'>300%</span>.
            </p>
          </div>

          {/* Cards Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8'>
            <div className='group bg-linear-to-br from-emerald-50 to-teal-50 p-6 md:p-8 rounded-2xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2'>
              <div className='w-14 h-14 bg-surface-primary rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                <Trees className='text-background' size={28} />
              </div>
              <div className='mb-4'>
                <div className='inline-flex items-center gap-2 bg-emerald-100 px-3 py-1 rounded-full mb-3'>
                  <TrendingUp size={14} className='text-emerald-700' />
                  <span className='text-xs font-bold text-emerald-700'>-60% Risiko</span>
                </div>
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-900'>Mengurangi Risiko Banjir</h3>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-4'>
                Monitoring deforestasi real-time dari Global Forest Watch untuk mencegah kerusakan hutan dan dampak banjir.
              </p>
              <div className='pt-4 border-t border-emerald-200'>
                <p className='text-xs text-gray-600'><span className='font-bold text-surface-primary'>Data Global Forest Watch</span> terintegrasi</p>
              </div>
            </div>

            <div className='group bg-linear-to-br from-teal-50 to-cyan-50 p-6 md:p-8 rounded-2xl border border-teal-200/50 hover:shadow-2xl hover:border-teal-300 transition-all duration-300 hover:-translate-y-2'>
              <div className='w-14 h-14 bg-surface-primary rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                <Shield className='text-background' size={28} />
              </div>
              <div className='mb-4'>
                <div className='inline-flex items-center gap-2 bg-teal-100 px-3 py-1 rounded-full mb-3'>
                  <CheckCircle2 size={14} className='text-teal-700' />
                  <span className='text-xs font-bold text-teal-700'>Terintegrasi</span>
                </div>
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-900'>Melindungi Ekosistem</h3>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-4'>
                Menjaga keseimbangan ekosistem hutan untuk masa depan yang berkelanjutan dan hijau.
              </p>
              <div className='pt-4 border-t border-teal-200'>
                <p className='text-xs text-gray-600'><span className='font-bold text-surface-primary'>Algoritma berbasis riset</span> hidrologi</p>
              </div>
            </div>

            <div className='group bg-linear-to-br from-cyan-50 to-blue-50 p-6 md:p-8 rounded-2xl border border-cyan-200/50 hover:shadow-2xl hover:border-cyan-300 transition-all duration-300 hover:-translate-y-2'>
              <div className='w-14 h-14 bg-surface-primary rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                <Users className='text-background' size={28} />
              </div>
              <div className='mb-4'>
                <div className='inline-flex items-center gap-2 bg-cyan-100 px-3 py-1 rounded-full mb-3'>
                  <Users size={14} className='text-cyan-700' />
                  <span className='text-xs font-bold text-cyan-700'>Partisipatif</span>
                </div>
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-900'>Memberdayakan Masyarakat</h3>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-4'>
                Mendorong partisipasi aktif masyarakat dalam pelaporan bencana dan monitoring lingkungan.
              </p>
              <div className='pt-4 border-t border-cyan-200'>
                <p className='text-xs text-gray-600'><span className='font-bold text-surface-primary'>Sistem crowdsourcing</span> terbuka untuk umum</p>
              </div>
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
              Solusi Komprehensif Kami
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Teknologi terdepan untuk memantau dan mencegah dampak deforestasi terhadap banjir. <span className='text-surface-primary font-semibold'>Mudah digunakan, akurat, dan terpercaya.</span>
            </p>
          </div>

          {/* Features Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
            {/* Peta Feature */}
            <div className='group bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 p-8 md:p-10 rounded-3xl border-2 border-surface-primary/20 hover:border-surface-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1'>
              <div className='flex items-start gap-5 mb-6'>
                <div className='w-16 h-16 bg-surface-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
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
                  <CheckCircle2 className='text-surface-primary shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Data deforestasi terintegrasi dari GFW</span>
                </li>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-surface-primary shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Laporan banjir dari masyarakat</span>
                </li>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-surface-primary shrink-0 mt-0.5' size={22} />
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
            <div className='group bg-linear-to-br from-blue-50 via-cyan-50 to-sky-50 p-8 md:p-10 rounded-3xl border-2 border-blue-300/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1'>
              <div className='flex items-start gap-5 mb-6'>
                <div className='w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
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
                  <CheckCircle2 className='text-blue-600 shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Prediksi berbasis machine learning</span>
                </li>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-blue-600 shrink-0 mt-0.5' size={22} />
                  <span className='text-gray-700'>Data cuaca real-time</span>
                </li>
                <li className='flex items-start gap-3 text-sm md:text-base'>
                  <CheckCircle2 className='text-blue-600 shrink-0 mt-0.5' size={22} />
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
            <div className='group bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 md:p-10 rounded-3xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 lg:col-span-2'>
              <div className='flex flex-col lg:flex-row lg:items-start gap-8'>
                <div className='flex-1'>
                  <div className='flex items-start gap-5 mb-6'>
                    <div className='w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
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
                      <CheckCircle2 className='text-accent shrink-0 mt-0.5' size={22} />
                      <span className='text-gray-700'>Upload foto bukti</span>
                    </div>
                    <div className='flex items-start gap-3 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent shrink-0 mt-0.5' size={22} />
                      <span className='text-gray-700'>Lokasi otomatis terdeteksi</span>
                    </div>
                    <div className='flex items-start gap-3 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent shrink-0 mt-0.5' size={22} />
                      <span className='text-gray-700'>Verifikasi admin</span>
                    </div>
                    <div className='flex items-start gap-3 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent shrink-0 mt-0.5' size={22} />
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
      <section className='py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-linear-to-b from-emerald-50 to-background'>
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

      {/* Features Highlight Section */}
      <section className='py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-surface-primary'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            <div className='text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20'>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary/20 rounded-xl'>
                  <MapIcon className='text-primary' size={36} />
                </div>
              </div>
              <h3 className='text-2xl md:text-3xl font-bold text-background mb-2'>Real-time</h3>
              <p className='text-background/80 text-sm md:text-base'>Data GFW Terintegrasi</p>
            </div>
            <div className='text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20'>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary/20 rounded-xl'>
                  <Activity className='text-primary' size={36} />
                </div>
              </div>
              <h3 className='text-2xl md:text-3xl font-bold text-background mb-2'>AI-Powered</h3>
              <p className='text-background/80 text-sm md:text-base'>Simulasi Prediksi</p>
            </div>
            <div className='text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20'>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary/20 rounded-xl'>
                  <MessageSquare className='text-primary' size={36} />
                </div>
              </div>
              <h3 className='text-2xl md:text-3xl font-bold text-background mb-2'>Crowdsource</h3>
              <p className='text-background/80 text-sm md:text-base'>Laporan Masyarakat</p>
            </div>
            <div className='text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20'>
              <div className='flex justify-center mb-4'>
                <div className='p-3 bg-primary/20 rounded-xl'>
                  <Shield className='text-primary' size={36} />
                </div>
              </div>
              <h3 className='text-2xl md:text-3xl font-bold text-background mb-2'>Verified</h3>
              <p className='text-background/80 text-sm md:text-base'>Sistem Verifikasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-linear-to-br from-surface-primary via-emerald-800 to-teal-900 overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute inset-0' style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        </div>

        <div className='max-w-4xl mx-auto text-center relative z-10'>
          {/* Urgency Badge */}
          <div className='inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6'>
            <AlertTriangle className='text-accent' size={18} />
            <span className='text-sm font-semibold text-background'>Indonesia kehilangan 1.5 juta hektar hutan/tahun</span>
          </div>

          {/* Heading */}
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background leading-tight'>
            Mari Bangun Masa Depan yang <span className='relative inline-block'>Lebih Hijau<div className='absolute bottom-0 left-0 w-full h-3 bg-primary/40 -rotate-1' /></span> Bersama
          </h2>

          {/* Description */}
          <p className='text-base md:text-lg text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Bergabunglah dalam memantau deforestasi dan mencegah banjir dengan teknologi terkini. Platform open-source yang menggabungkan data satelit, AI, dan partisipasi masyarakat.
          </p>

          {/* Value Props */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto'>
            <div className='bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-background/20'>
              <div className='flex items-center justify-center gap-2 mb-2'>
                <MapIcon className='text-primary' size={20} />
                <span className='font-bold text-background'>Open Source</span>
              </div>
              <p className='text-sm text-background/80'>Gratis & transparan</p>
            </div>
            <div className='bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-background/20'>
              <div className='flex items-center justify-center gap-2 mb-2'>
                <Activity className='text-primary' size={20} />
                <span className='font-bold text-background'>Real-time Data</span>
              </div>
              <p className='text-sm text-background/80'>Dari Global Forest Watch</p>
            </div>
            <div className='bg-background/10 backdrop-blur-sm rounded-xl p-4 border border-background/20'>
              <div className='flex items-center justify-center gap-2 mb-2'>
                <Shield className='text-primary' size={20} />
                <span className='font-bold text-background'>Terverifikasi</span>
              </div>
              <p className='text-sm text-background/80'>Sistem verifikasi admin</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
              onClick={() => router.push('/peta')}
              className='group bg-primary text-gray-900 px-10 py-4 rounded-full font-bold text-base hover:bg-primary/90 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2'>
              <span>Mulai Sekarang</span>
              <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform duration-300' />
            </button>
            <button
              onClick={() => router.push('/laporan')}
              className='group bg-transparent border-2 border-background text-background px-10 py-4 rounded-full font-bold text-base hover:bg-background hover:text-surface-primary transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 hover:scale-105 active:scale-95'>
              <MessageSquare size={20} />
              <span>Buat Laporan</span>
            </button>
          </div>

          {/* Trust Indicator */}
          <p className='mt-8 text-sm text-background/70'>
            ✓ Data dari Global Forest Watch • ✓ Open source & transparan • ✓ Gratis untuk semua
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Page 