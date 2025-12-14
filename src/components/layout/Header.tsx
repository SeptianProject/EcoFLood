"use client"

import Image from "next/image";
import Link from "next/link";
import Navigate, { NavigateType } from "../ui/Navigate";
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Header = () => {
     const pathname = usePathname()
     const [isMenuOpen, setIsMenuOpen] = useState(false)
     const [isScrolled, setIsScrolled] = useState(false)

     // Handle scroll effect
     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 10)
          }

          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     const navigate: NavigateType[] = [
          {
               href: "/",
               name: "Beranda"
          },
          {
               href: "/peta",
               name: "Peta"
          },
          {
               href: "/simulasi",
               name: "Simulasi"
          },
     ]

     return (
          <>
               {/* Backdrop Overlay */}
               {isMenuOpen && (
                    <div
                         className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                         onClick={() => setIsMenuOpen(false)}
                         aria-hidden="true"
                    />
               )}

               <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'backdrop-blur-lg bg-white/30 shadow-sm py-4 md:py-5'
                    : 'bg-transparent py-6 md:py-8'
                    }`}>
                    <div className="mx-auto w-full px-6 md:px-12 lg:px-20">
                         <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                   <Image src="/logo.png" alt="EcoFlood Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
                                   <h1 className="text-lg md:text-xl font-bold text-surface-primary">EcoFlood</h1>
                              </div>

                              {/* Desktop Navigation */}
                              <nav className="hidden md:flex items-center gap-2 md:gap-3">
                                   {navigate.map((item, index) => (
                                        <Navigate
                                             key={index}
                                             href={item.href}
                                             name={item.name}
                                             isActive={pathname === item.href}
                                        />
                                   ))}
                              </nav>

                              {/* Hamburger Button - Mobile Only */}
                              <button
                                   onClick={() => setIsMenuOpen(!isMenuOpen)}
                                   className="md:hidden p-2 text-surface-primary hover:bg-gray-100 rounded-lg transition-colors relative z-50"
                                   aria-label="Toggle menu"
                              >
                                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                              </button>
                         </div>

                         {/* Mobile Navigation Menu */}
                         {isMenuOpen && (
                              <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg border border-gray-200 p-2 relative z-50">
                                   <div className="flex flex-col">
                                        {navigate.map((item, index) => (
                                             <Link
                                                  key={index}
                                                  href={item.href}
                                                  onClick={() => setIsMenuOpen(false)}
                                                  className={`w-full text-left px-4 py-3 rounded-lg font-medium text-base transition-all duration-200
                                                       ${pathname === item.href
                                                            ? 'bg-surface-primary text-white shadow-sm'
                                                            : 'text-gray-700 hover:bg-gray-100 active:bg-gray-200'
                                                       }`}
                                             >
                                                  {item.name}
                                             </Link>
                                        ))}
                                   </div>
                              </nav>
                         )}
                    </div>
               </header>
          </>
     );
}

export default Header
