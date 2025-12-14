'use client'

import { MapIcon, Activity, MessageSquare, Shield } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function FeaturesHighlightSection() {
     const [card1Ref, card1Visible] = useScrollAnimation<HTMLDivElement>({ delay: 100 })
     const [card2Ref, card2Visible] = useScrollAnimation<HTMLDivElement>({ delay: 200 })
     const [card3Ref, card3Visible] = useScrollAnimation<HTMLDivElement>({ delay: 300 })
     const [card4Ref, card4Visible] = useScrollAnimation<HTMLDivElement>({ delay: 400 })

     return (
          <section className='py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-surface-primary'>
               <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                         <div
                              ref={card1Ref}
                              className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 transition-all duration-700 ${card1Visible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-8'
                                   }`}
                         >
                              <div className='flex justify-center mb-4'>
                                   <div className='p-3 bg-primary/20 rounded-xl'>
                                        <MapIcon className='text-primary' size={36} />
                                   </div>
                              </div>
                              <h3 className='text-2xl md:text-3xl font-bold text-background mb-2'>Real-time</h3>
                              <p className='text-background/80 text-sm md:text-base'>Data GFW Terintegrasi</p>
                         </div>
                         <div
                              ref={card2Ref}
                              className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 transition-all duration-700 ${card2Visible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-8'
                                   }`}
                         >
                              <div className='flex justify-center mb-4'>
                                   <div className='p-3 bg-primary/20 rounded-xl'>
                                        <Activity className='text-primary' size={36} />
                                   </div>
                              </div>
                              <h3 className='text-2xl md:text-3xl font-bold text-background mb-2'>AI-Powered</h3>
                              <p className='text-background/80 text-sm md:text-base'>Simulasi Prediksi</p>
                         </div>
                         <div
                              ref={card3Ref}
                              className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 transition-all duration-700 ${card3Visible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-8'
                                   }`}
                         >
                              <div className='flex justify-center mb-4'>
                                   <div className='p-3 bg-primary/20 rounded-xl'>
                                        <MessageSquare className='text-primary' size={36} />
                                   </div>
                              </div>
                              <h3 className='text-2xl md:text-3xl font-bold text-background mb-2'>Crowdsource</h3>
                              <p className='text-background/80 text-sm md:text-base'>Laporan Masyarakat</p>
                         </div>
                         <div
                              ref={card4Ref}
                              className={`text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 transition-all duration-700 ${card4Visible
                                   ? 'opacity-100 translate-y-0'
                                   : 'opacity-0 translate-y-8'
                                   }`}
                         >
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
     )
}
