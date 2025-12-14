'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MapIcon, Activity, CheckCircle2, AlertTriangle, ArrowRight, Shield } from 'lucide-react'

export default function HeroSection() {
     const router = useRouter()

     return (
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
     )
}
