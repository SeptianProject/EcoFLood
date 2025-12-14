'use client'

import { useRouter } from 'next/navigation'
import { MapIcon, Activity, MessageSquare, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function FeaturesSection() {
     const router = useRouter()
     const [headerRef, headerVisible] = useScrollAnimation({ delay: 100 })
     const [petaRef, petaVisible] = useScrollAnimation({ delay: 200 })
     const [simulasiRef, simulasiVisible] = useScrollAnimation({ delay: 300 })
     const [laporanRef, laporanVisible] = useScrollAnimation({ delay: 400 })

     return (
          <section className='py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-background relative'>
               <div className='max-w-7xl mx-auto'>
                    {/* Section Header */}
                    <div
                         ref={headerRef}
                         className={`text-center mb-16 md:mb-20 transition-all duration-700 ${headerVisible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-8'
                              }`}
                    >
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
                         <div
                              ref={petaRef}
                              className={`group bg-linear-to-br from-emerald-50 via-green-50 to-teal-50 p-8 md:p-10 rounded-3xl border-2 border-surface-primary/20 hover:border-surface-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${petaVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-12'
                                   }`}
                         >
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
                         <div
                              ref={simulasiRef}
                              className={`group bg-linear-to-br from-blue-50 via-cyan-50 to-sky-50 p-8 md:p-10 rounded-3xl border-2 border-blue-300/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${simulasiVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-12'
                                   }`}
                         >
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
                         <div
                              ref={laporanRef}
                              className={`group bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 md:p-10 rounded-3xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 lg:col-span-2 ${laporanVisible
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-12'
                                   }`}
                         >
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
     )
}
