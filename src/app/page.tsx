'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MapIcon, Activity, MessageSquare, Shield, TrendingUp, Users, Droplets, Trees, AlertTriangle, CheckCircle2 } from 'lucide-react'

const Page = () => {
  const router = useRouter()

  return (
    <div className='bg-background'>
      <Header />

      {/* Hero Section - Responsive */}
      <section className='relative min-h-screen flex flex-col lg:flex-row justify-between items-center px-6 md:px-12 lg:px-20 py-20 lg:py-0 overflow-hidden'>
        {/* Left Content */}
        <div className='w-full lg:w-2/5 flex flex-col items-start gap-y-8 md:gap-y-14 z-10'>
          <div className='relative'>
            <h1 className='text-4xl md:text-6xl lg:text-[80px] leading-tight md:leading-20 w-fit'>
              Pantau Deforestasi. <span className='font-bold'>Cegah Banjir.</span>
              <div className='bg-primary h-4 md:h-6 lg:h-9 w-full -rotate-1 absolute -bottom-1 left-0 -z-10' />
            </h1>
          </div>
          <p className='text-gray-600 text-base md:text-xl lg:text-2xl w-full lg:w-[90%]'>
            Platform visualisasi data untuk melihat dampak nyata hilangnya hutan terhadap risiko air di wilayah Anda.
          </p>
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto'>
            <button
              onClick={() => router.push('/peta')}
              className='bg-surface-primary text-background px-6 md:px-9 py-3 rounded-full font-semibold cursor-pointer hover:bg-surface-primary/80 transition duration-300 hover:translate-y-0.5 text-center flex items-center justify-center gap-2'>
              <MapIcon size={20} />
              Buka Peta
            </button>
            <button
              onClick={() => router.push('/simulasi')}
              className='bg-primary text-foreground px-6 md:px-9 py-3 rounded-full font-semibold cursor-pointer hover:bg-primary/80 transition duration-300 hover:translate-y-0.5 text-center flex items-center justify-center gap-2'>
              <Activity size={20} />
              Coba Simulasi
            </button>
          </div>

          {/* Stats Preview */}
          <div className='flex flex-wrap gap-6 mt-4'>
            <div className='flex items-center gap-2'>
              <div className='flex -space-x-2'>
                <div className='w-8 h-8 rounded-full bg-surface-primary border-2 border-background' />
                <div className='w-8 h-8 rounded-full bg-primary border-2 border-background' />
                <div className='w-8 h-8 rounded-full bg-accent border-2 border-background' />
              </div>
              <div>
                <p className='text-sm font-semibold text-gray-800'>500+</p>
                <p className='text-xs text-gray-600'>Laporan Warga</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className='relative w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2'>
          <div className='relative w-full max-w-md lg:max-w-2xl aspect-square lg:aspect-auto lg:h-[600px]'>
            <Image
              src="/hero-image.png"
              alt="EcoFlood - Monitoring Deforestation"
              width={600}
              height={600}
              className='object-contain w-full h-full'
              priority
            />
            <div className='absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-10 max-w-[280px]'>
              <div className='bg-background/95 backdrop-blur-sm rounded-2xl lg:rounded-4xl p-4 lg:p-5 shadow-xl border border-gray-200'>
                <h3 className='font-bold text-sm lg:text-lg mb-1'>Banjir Sumatra, 2025</h3>
                <p className='font-medium text-[10px] lg:text-[12px] text-gray-600'>
                  Damaged houses as seen in the flood-hit Aceh on Dec. 4, 2025. (Antara Photo/Bayu Pratama)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className='bg-gradient-to-br from-purple-100 to-purple-200 py-16 md:py-24 px-6 md:px-12 lg:px-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-gray-800'>
              Mengapa Ini Penting?
            </h2>
            <p className='text-base md:text-xl text-gray-700 max-w-3xl mx-auto'>
              Pemantauan deforestasi bukan sekadar pilihan, tetapi kebutuhan. Mari kita pahami dampaknya.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
            <div className='bg-gradient-to-br from-lime-200 to-lime-300 p-6 md:p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-surface-primary rounded-2xl flex items-center justify-center mb-4'>
                <Trees className='text-background' size={28} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-800'>Mengurangi Risiko Banjir</h3>
              <p className='text-sm md:text-base text-gray-700'>
                Mencegah deforestasi untuk generasi masa depan melalui konservasi hutan yang berkelanjutan.
              </p>
            </div>

            <div className='bg-gradient-to-br from-lime-200 to-lime-300 p-6 md:p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-surface-primary rounded-2xl flex items-center justify-center mb-4'>
                <Shield className='text-background' size={28} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-800'>Melindungi Ekosistem</h3>
              <p className='text-sm md:text-base text-gray-700'>
                Beralih ke solusi energi berkelanjutan untuk mencapai masa depan yang lebih hijau dan bersih.
              </p>
            </div>

            <div className='bg-gradient-to-br from-lime-200 to-lime-300 p-6 md:p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
              <div className='w-12 h-12 md:w-16 md:h-16 bg-surface-primary rounded-2xl flex items-center justify-center mb-4'>
                <Users className='text-background' size={28} />
              </div>
              <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-800'>Memberdayakan Masyarakat</h3>
              <p className='text-sm md:text-base text-gray-700'>
                Mendorong inisiatif keberlanjutan lokal untuk keterlibatan dan pemberdayaan masyarakat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-background'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-gray-800'>
              Solusi Kami
            </h2>
            <p className='text-base md:text-xl text-gray-600 max-w-3xl mx-auto'>
              Teknologi terdepan untuk memantau dan mencegah dampak deforestasi terhadap banjir.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
            {/* Peta Feature */}
            <div className='bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-10 rounded-3xl border-2 border-surface-primary/20 hover:border-surface-primary/40 transition-all duration-300 hover:shadow-xl'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-14 h-14 bg-surface-primary rounded-2xl flex items-center justify-center flex-shrink-0'>
                  <MapIcon className='text-background' size={28} />
                </div>
                <div>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>Peta Interaktif</h3>
                  <p className='text-primary font-semibold'>Visualisasi Data Real-time</p>
                </div>
              </div>
              <p className='text-gray-700 mb-6 text-sm md:text-base'>
                Pantau deforestasi dan risiko banjir secara real-time dengan peta interaktif yang menampilkan data dari Global Forest Watch dan laporan warga.
              </p>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2 text-sm md:text-base'>
                  <CheckCircle2 className='text-surface-primary flex-shrink-0 mt-1' size={20} />
                  <span>Data deforestasi terintegrasi dari GFW</span>
                </li>
                <li className='flex items-start gap-2 text-sm md:text-base'>
                  <CheckCircle2 className='text-surface-primary flex-shrink-0 mt-1' size={20} />
                  <span>Laporan banjir dari masyarakat</span>
                </li>
                <li className='flex items-start gap-2 text-sm md:text-base'>
                  <CheckCircle2 className='text-surface-primary flex-shrink-0 mt-1' size={20} />
                  <span>Filter berdasarkan pulau dan jenis bencana</span>
                </li>
              </ul>
              <button
                onClick={() => router.push('/peta')}
                className='bg-surface-primary text-background px-6 py-3 rounded-full font-semibold hover:bg-surface-primary/90 transition duration-300 text-sm md:text-base w-full sm:w-auto'>
                Jelajahi Peta →
              </button>
            </div>

            {/* Simulasi Feature */}
            <div className='bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-10 rounded-3xl border-2 border-blue-300/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0'>
                  <Activity className='text-white' size={28} />
                </div>
                <div>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>Simulasi Prediksi</h3>
                  <p className='text-blue-600 font-semibold'>Analisis Risiko Banjir</p>
                </div>
              </div>
              <p className='text-gray-700 mb-6 text-sm md:text-base'>
                Gunakan simulasi berbasis AI untuk memprediksi risiko banjir berdasarkan kondisi cuaca, curah hujan, dan data deforestasi wilayah.
              </p>
              <ul className='space-y-3 mb-6'>
                <li className='flex items-start gap-2 text-sm md:text-base'>
                  <CheckCircle2 className='text-blue-600 flex-shrink-0 mt-1' size={20} />
                  <span>Prediksi berbasis machine learning</span>
                </li>
                <li className='flex items-start gap-2 text-sm md:text-base'>
                  <CheckCircle2 className='text-blue-600 flex-shrink-0 mt-1' size={20} />
                  <span>Data cuaca real-time</span>
                </li>
                <li className='flex items-start gap-2 text-sm md:text-base'>
                  <CheckCircle2 className='text-blue-600 flex-shrink-0 mt-1' size={20} />
                  <span>Skenario berbagai tingkat deforestasi</span>
                </li>
              </ul>
              <button
                onClick={() => router.push('/simulasi')}
                className='bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 text-sm md:text-base w-full sm:w-auto'>
                Coba Simulasi →
              </button>
            </div>

            {/* Laporan Feature */}
            <div className='bg-gradient-to-br from-orange-50 to-amber-50 p-8 md:p-10 rounded-3xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl lg:col-span-2'>
              <div className='flex flex-col md:flex-row md:items-start gap-6'>
                <div className='flex-1'>
                  <div className='flex items-start gap-4 mb-6'>
                    <div className='w-14 h-14 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0'>
                      <MessageSquare className='text-white' size={28} />
                    </div>
                    <div>
                      <h3 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>Laporan Warga</h3>
                      <p className='text-accent font-semibold'>Partisipasi Masyarakat</p>
                    </div>
                  </div>
                  <p className='text-gray-700 mb-6 text-sm md:text-base'>
                    Masyarakat dapat melaporkan kondisi banjir, longsor, atau bencana lainnya secara langsung dengan foto dan lokasi. Setiap laporan akan diverifikasi oleh admin.
                  </p>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6'>
                    <div className='flex items-start gap-2 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent flex-shrink-0 mt-1' size={20} />
                      <span>Upload foto bukti</span>
                    </div>
                    <div className='flex items-start gap-2 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent flex-shrink-0 mt-1' size={20} />
                      <span>Lokasi otomatis terdeteksi</span>
                    </div>
                    <div className='flex items-start gap-2 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent flex-shrink-0 mt-1' size={20} />
                      <span>Verifikasi admin</span>
                    </div>
                    <div className='flex items-start gap-2 text-sm md:text-base'>
                      <CheckCircle2 className='text-accent flex-shrink-0 mt-1' size={20} />
                      <span>Tampil di peta interaktif</span>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push('/laporan')}
                    className='bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition duration-300 text-sm md:text-base w-full sm:w-auto'>
                    Buat Laporan →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className='bg-gradient-to-br from-emerald-50 to-teal-50 py-16 md:py-24 px-6 md:px-12 lg:px-20'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-gray-800'>
              Proses Kerja Kami
            </h2>
            <p className='text-base md:text-xl text-gray-600 max-w-3xl mx-auto'>
              Empat langkah sederhana untuk memantau dan mencegah dampak deforestasi.
            </p>
          </div>

          <div className='relative'>
            {/* Connecting line - hidden on mobile */}
            <div className='hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-surface-primary via-primary to-accent -translate-y-1/2 -z-0' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative'>
              {/* Step 1 */}
              <div className='text-center'>
                <div className='relative inline-block mb-6'>
                  <div className='w-20 h-20 md:w-24 md:h-24 bg-surface-primary rounded-full flex items-center justify-center mx-auto shadow-lg relative z-10'>
                    <span className='text-3xl md:text-4xl font-bold text-background'>01</span>
                  </div>
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-800'>Pengumpulan Data</h3>
                <p className='text-sm md:text-base text-gray-600'>
                  Mengintegrasikan data dari Global Forest Watch dan laporan warga untuk analisis menyeluruh.
                </p>
              </div>

              {/* Step 2 */}
              <div className='text-center'>
                <div className='relative inline-block mb-6'>
                  <div className='w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg relative z-10'>
                    <span className='text-3xl md:text-4xl font-bold text-gray-800'>02</span>
                  </div>
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-800'>Analisis & Visualisasi</h3>
                <p className='text-sm md:text-base text-gray-600'>
                  Memproses data dan menampilkan hasil dalam bentuk peta interaktif yang mudah dipahami.
                </p>
              </div>

              {/* Step 3 */}
              <div className='text-center'>
                <div className='relative inline-block mb-6'>
                  <div className='w-20 h-20 md:w-24 md:h-24 bg-accent rounded-full flex items-center justify-center mx-auto shadow-lg relative z-10'>
                    <span className='text-3xl md:text-4xl font-bold text-white'>03</span>
                  </div>
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-800'>Prediksi Risiko</h3>
                <p className='text-sm md:text-base text-gray-600'>
                  Menggunakan machine learning untuk memprediksi potensi banjir berdasarkan deforestasi dan cuaca.
                </p>
              </div>

              {/* Step 4 */}
              <div className='text-center'>
                <div className='relative inline-block mb-6'>
                  <div className='w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg relative z-10'>
                    <span className='text-3xl md:text-4xl font-bold text-white'>04</span>
                  </div>
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-3 text-gray-800'>Aksi & Mitigasi</h3>
                <p className='text-sm md:text-base text-gray-600'>
                  Memberikan informasi untuk pengambilan keputusan dan tindakan pencegahan yang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-surface-primary'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
            <div className='text-center'>
              <div className='flex justify-center mb-3'>
                <Droplets className='text-primary' size={40} />
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-background mb-2'>12K+</h3>
              <p className='text-background/80 text-sm md:text-base'>Hektar Dipantau</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-3'>
                <MapIcon className='text-primary' size={40} />
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-background mb-2'>50+</h3>
              <p className='text-background/80 text-sm md:text-base'>Area Terpantau</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-3'>
                <Users className='text-primary' size={40} />
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-background mb-2'>500+</h3>
              <p className='text-background/80 text-sm md:text-base'>Laporan Warga</p>
            </div>
            <div className='text-center'>
              <div className='flex justify-center mb-3'>
                <TrendingUp className='text-primary' size={40} />
              </div>
              <h3 className='text-3xl md:text-5xl font-bold text-background mb-2'>95%</h3>
              <p className='text-background/80 text-sm md:text-base'>Akurasi Prediksi</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-br from-surface-primary to-emerald-900 py-16 md:py-24 px-6 md:px-12 lg:px-20'>
        <div className='max-w-5xl mx-auto text-center'>
          <div className='mb-8'>
            <div className='inline-block p-4 bg-primary/20 rounded-2xl mb-6'>
              <AlertTriangle className='text-primary' size={48} />
            </div>
          </div>
          <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-background'>
            Mari Bangun Masa Depan yang Lebih Hijau Bersama
          </h2>
          <p className='text-lg md:text-xl text-background/90 mb-8 md:mb-10 max-w-3xl mx-auto'>
            Bergabunglah dengan kami dalam memantau deforestasi dan mencegah banjir. Setiap data, setiap laporan, membuat perbedaan.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
              onClick={() => router.push('/peta')}
              className='bg-primary text-gray-800 px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-primary/90 transition duration-300 hover:scale-105 w-full sm:w-auto shadow-xl'>
              Mulai Sekarang →
            </button>
            <button
              onClick={() => router.push('/laporan')}
              className='bg-transparent border-2 border-background text-background px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-background/10 transition duration-300 w-full sm:w-auto'>
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