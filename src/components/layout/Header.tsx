"use client"

import Image from "next/image";
import Navigate, { NavigateType } from "../ui/Navigate";
import { usePathname } from 'next/navigation'

const Header = () => {
     const pathname = usePathname()

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
          <header className="absolute top-0 left-0 right-0 z-50 py-6 md:py-8">
               <div className="mx-auto w-full px-6 md:px-12 lg:px-20">
                    <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                              <Image src="/logo.png" alt="EcoFlood Logo" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
                              <h1 className="text-lg md:text-xl font-bold text-surface-primary">EcoFlood</h1>
                         </div>
                         <nav className="flex items-center gap-2 md:gap-3">
                              {navigate.map((item, index) => (
                                   <Navigate
                                        key={index}
                                        href={item.href}
                                        name={item.name}
                                        isActive={pathname === item.href}
                                   />
                              ))}
                         </nav>
                    </div>
               </div>
          </header>
     );
}

export default Header
