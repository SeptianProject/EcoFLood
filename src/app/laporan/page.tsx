"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function LaporanPage() {
     const router = useRouter()

     useEffect(() => {
          // Redirect to map page
          router.push("/peta")
     }, [router])

     return (
          <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
               <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-600 font-semibold">Mengalihkan ke halaman peta...</p>
               </div>
          </div>
     )
}
