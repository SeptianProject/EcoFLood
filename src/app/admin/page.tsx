"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Shield } from "lucide-react"

export default function AdminRedirectPage() {
     const router = useRouter()

     useEffect(() => {
          // Check if admin is logged in
          const token = localStorage.getItem("adminToken")

          if (token) {
               // If token exists, redirect to dashboard
               router.push("/admin/dashboard")
          } else {
               // If no token, redirect to login
               router.push("/admin/login")
          }
     }, [router])

     return (
          <div className="min-h-screen bg-linear-to-br from-background via-background to-primary/10 flex items-center justify-center">
               <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-pulse">
                         <Shield className="w-10 h-10 text-surface-primary" />
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-4">
                         <Loader2 className="w-8 h-8 animate-spin text-surface-primary" />
                         <p className="text-surface-primary font-semibold text-xl">Memuat Admin Panel...</p>
                    </div>
                    <p className="text-surface-primary/60 text-sm">Mohon tunggu sebentar</p>
               </div>
          </div>
     )
}
