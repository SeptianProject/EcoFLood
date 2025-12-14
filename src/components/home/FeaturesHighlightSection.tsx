'use client'

import { MapIcon, Activity, MessageSquare, Shield } from 'lucide-react'

export default function FeaturesHighlightSection() {
     return (
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
     )
}
