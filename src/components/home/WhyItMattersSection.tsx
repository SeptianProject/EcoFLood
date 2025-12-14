'use client'

import { Shield, TrendingUp, CheckCircle2, Trees, Users } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function WhyItMattersSection() {
     const [headerRef, headerVisible] = useScrollAnimation<HTMLDivElement>({ delay: 100 })
     const [card1Ref, card1Visible] = useScrollAnimation<HTMLDivElement>({ delay: 200 })
     const [card2Ref, card2Visible] = useScrollAnimation<HTMLDivElement>({ delay: 300 })
     const [card3Ref, card3Visible] = useScrollAnimation<HTMLDivElement>({ delay: 400 })

     return (
          <section className='py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-linear-to-b from-purple-50 via-blue-50/30 to-background'>
               <div className='max-w-7xl mx-auto'>
                    {/* Section Header */}
                    <div
                         ref={headerRef}
                         className={`text-center mb-12 md:mb-16 transition-all duration-700 ${headerVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-8'
                              }`}
                    >
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
                         <div
                              ref={card1Ref}
                              className={`group bg-linear-to-br from-emerald-50 to-teal-50 p-6 md:p-8 rounded-2xl border border-emerald-200/50 hover:shadow-2xl hover:border-emerald-300 transition-all duration-700 hover:-translate-y-2 ${card1Visible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-12'
                                   }`}
                         >
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

                         <div
                              ref={card2Ref}
                              className={`group bg-linear-to-br from-teal-50 to-cyan-50 p-6 md:p-8 rounded-2xl border border-teal-200/50 hover:shadow-2xl hover:border-teal-300 transition-all duration-700 hover:-translate-y-2 ${card2Visible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-12'
                                   }`}
                         >
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

                         <div
                              ref={card3Ref}
                              className={`group bg-linear-to-br from-cyan-50 to-blue-50 p-6 md:p-8 rounded-2xl border border-cyan-200/50 hover:shadow-2xl hover:border-cyan-300 transition-all duration-700 hover:-translate-y-2 ${card3Visible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-12'
                                   }`}
                         >
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
     )
}
