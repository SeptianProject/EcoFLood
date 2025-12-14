'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapIcon, Activity, MessageSquare, ExternalLink, Leaf } from 'lucide-react'

export default function Footer() {
     const currentYear = new Date().getFullYear()

     return (
          <footer className="bg-surface-primary text-background relative overflow-hidden">
               {/* Decorative background elements */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
               <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

               <div className="relative z-10">
                    {/* Main footer content */}
                    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                              {/* Brand Column */}
                              <div className="lg:col-span-1">
                                   <div className="flex items-center gap-3 mb-4">
                                        <Image
                                             src="/logo.png"
                                             alt="EcoFlood Logo"
                                             width={40}
                                             height={40}
                                             className="w-10 h-10"
                                        />
                                        <h2 className="text-2xl font-bold text-background">EcoFlood</h2>
                                   </div>
                                   <p className="text-background/80 text-sm leading-relaxed mb-6">
                                        Platform monitoring deforestasi dan prediksi banjir untuk Indonesia yang lebih hijau dan berkelanjutan.
                                   </p>
                                   <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        <span className="text-xs text-background/70">Data real-time terintegrasi</span>
                                   </div>
                              </div>

                              {/* Quick Links */}
                              <div>
                                   <h3 className="text-lg font-bold text-background mb-4">Navigasi</h3>
                                   <ul className="space-y-3">
                                        <li>
                                             <Link
                                                  href="/peta"
                                                  className="text-background/80 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                                             >
                                                  <MapIcon size={14} />
                                                  <span className="group-hover:translate-x-1 transition-transform duration-200">Peta Interaktif</span>
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/simulasi"
                                                  className="text-background/80 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                                             >
                                                  <Activity size={14} />
                                                  <span className="group-hover:translate-x-1 transition-transform duration-200">Simulasi Prediksi</span>
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/laporan"
                                                  className="text-background/80 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                                             >
                                                  <MessageSquare size={14} />
                                                  <span className="group-hover:translate-x-1 transition-transform duration-200">Laporan Bencana</span>
                                             </Link>
                                        </li>
                                   </ul>
                              </div>

                              {/* Resources */}
                              <div>
                                   <h3 className="text-lg font-bold text-background mb-4">Sumber Data</h3>
                                   <ul className="space-y-3">
                                        <li>
                                             <a
                                                  href="https://www.globalforestwatch.org/"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-background/80 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                                             >
                                                  <Leaf size={14} />
                                                  <span className="group-hover:translate-x-1 transition-transform duration-200">Global Forest Watch</span>
                                                  <ExternalLink size={12} className="opacity-50" />
                                             </a>
                                        </li>
                                        <li>
                                             <a
                                                  href="https://openweathermap.org/"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-background/80 hover:text-primary transition-colors duration-200 text-sm flex items-center gap-2 group"
                                             >
                                                  <Activity size={14} />
                                                  <span className="group-hover:translate-x-1 transition-transform duration-200">OpenWeather API</span>
                                                  <ExternalLink size={12} className="opacity-50" />
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-background/10">
                         <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
                              <p className="text-background/70 text-sm text-center">
                                   © {currentYear} EcoFlood. All rights reserved.
                              </p>
                         </div>
                    </div>
               </div>
          </footer>
     )
}