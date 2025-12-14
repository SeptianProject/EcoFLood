'use client'

import { useRouter } from 'next/navigation'
import { MapIcon, Activity, MessageSquare, Shield, AlertTriangle, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CTASection() {
     const router = useRouter()
     const [badgeRef, badgeVisible] = useScrollAnimation<HTMLDivElement>({ delay: 100 })
     const [headingRef, headingVisible] = useScrollAnimation<HTMLHeadingElement>({ delay: 200 })
     const [descriptionRef, descriptionVisible] = useScrollAnimation<HTMLParagraphElement>({ delay: 300 })
     const [valuePropsRef, valuePropsVisible] = useScrollAnimation<HTMLDivElement>({ delay: 400 })
     const [buttonsRef, buttonsVisible] = useScrollAnimation<HTMLDivElement>({ delay: 500 })
     const [trustRef, trustVisible] = useScrollAnimation<HTMLDivElement>({ delay: 600 })

     return (
          <section className='relative py-20 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 bg-linear-to-br from-surface-primary via-emerald-800 to-teal-900 overflow-hidden'>
               {/* Background Pattern */}
               <div className='absolute inset-0 opacity-5'>
                    <div className='absolute inset-0' style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
               </div>

               <div className='max-w-4xl mx-auto text-center relative z-10'>
                    {/* Urgency Badge */}
                    <div
                         ref={badgeRef}
                         className={`inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6 transition-all duration-700 ${badgeVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 -translate-y-4'
                              }`}
                    >
                         <AlertTriangle className='text-accent' size={18} />
                         <span className='text-sm font-semibold text-background'>Indonesia kehilangan 1.5 juta hektar hutan/tahun</span>
                    </div>

                    {/* Heading */}
                    <h2
                         ref={headingRef}
                         className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-background leading-tight transition-all duration-700 ${headingVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-8'
                              }`}
                    >
                         Mari Bangun Masa Depan yang <span className='relative inline-block'>Lebih Hijau<div className='absolute bottom-0 left-0 w-full h-3 bg-primary/40 -rotate-1' /></span> Bersama
                    </h2>

                    {/* Description */}
                    <p
                         ref={descriptionRef}
                         className={`text-base md:text-lg text-background/90 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${descriptionVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-8'
                              }`}
                    >
                         Bergabunglah dalam memantau deforestasi dan mencegah banjir dengan teknologi terkini. Platform open-source yang menggabungkan data satelit, AI, dan partisipasi masyarakat.
                    </p>

                    {/* Value Props */}
                    <div
                         ref={valuePropsRef}
                         className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto transition-all duration-700 ${valuePropsVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-8'
                              }`}
                    >
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
                    <div
                         ref={buttonsRef}
                         className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${buttonsVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-8'
                              }`}
                    >
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
                    <p
                         ref={trustRef}
                         className={`mt-8 text-sm text-background/70 transition-all duration-700 ${trustVisible
                              ? 'opacity-100 translate-y-0'
                              : 'opacity-0 translate-y-4'
                              }`}
                    >
                         ✓ Data dari Global Forest Watch • ✓ Open source & transparan • ✓ Gratis untuk semua
                    </p>
               </div>
          </section>
     )
}
