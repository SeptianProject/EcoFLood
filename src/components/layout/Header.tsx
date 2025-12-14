"use client"

import Image from "next/image";
import Navigate, { NavigateType } from "../ui/Navigate";
import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Shield } from 'lucide-react'

const Header = () => {
     const pathname = usePathname()
     const router = useRouter()
     const [isAdmin, setIsAdmin] = useState(false)

     useEffect(() => {
          // Check if user is admin
          const token = localStorage.getItem("adminToken")
          setIsAdmin(!!token)
     }, [pathname])

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

     const handleAdminClick = () => {
          if (isAdmin) {
               router.push('/admin/dashboard')
          } else {
               router.push('/admin/login')
          }
     }

     return (
          <header className="py-12">
               <div className="mx-auto py-4 w-full px-20">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-4">
                              <Image src="/logo.png" alt="EcoFlood Logo" width={40} height={40} />
                              <h1 className="text-xl font-bold">EcoFlood</h1>
                         </div>
                         <nav className="flex items-center gap-3 px-8">
                              {navigate.map((item, index) => (
                                   <Navigate
                                        key={index}
                                        href={item.href}
                                        name={item.name}
                                        isActive={pathname === item.href}
                                   />
                              ))}
                              <button
                                   onClick={handleAdminClick}
                                   className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 cursor-pointer ${pathname.startsWith('/admin')
                                        ? 'bg-surface-primary text-background'
                                        : 'bg-surface-primary/10 text-surface-primary hover:bg-surface-primary/20'
                                        }`}
                              >
                                   <Shield className="w-4 h-4" />
                                   {isAdmin ? 'Dashboard' : 'Admin'}
                              </button>
                         </nav>
                    </div>
               </div>
          </header>
     );
}

export default Header
