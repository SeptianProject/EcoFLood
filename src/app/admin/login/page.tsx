"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Shield, Loader2 } from "lucide-react"

export default function AdminLoginPage() {
     const router = useRouter()
     const [formData, setFormData] = useState({
          username: "",
          password: "",
     })
     const [isLoading, setIsLoading] = useState(false)
     const [error, setError] = useState<string | null>(null)

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()
          setError(null)
          setIsLoading(true)

          try {
               const formDataToSend = new FormData()
               formDataToSend.append("username", formData.username)
               formDataToSend.append("password", formData.password)

               const response = await fetch("/api/login-admin", {
                    method: "POST",
                    body: formDataToSend,
               })

               if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error || "Gagal login")
               }

               const data = await response.json()

               // Store token in localStorage
               localStorage.setItem("adminToken", data.secretTokenKey)

               // Redirect to admin dashboard
               router.push("/admin/dashboard")
          } catch (err: unknown) {
               const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan saat login"
               setError(errorMessage)
          } finally {
               setIsLoading(false)
          }
     }

     return (
          <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
               <div className="max-w-md w-full">
                    <div className="bg-background rounded-3xl shadow-2xl overflow-hidden border-2 border-surface-primary/20">
                         {/* Header */}
                         <div className="bg-surface-primary px-8 py-10 text-background text-center">
                              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/30 backdrop-blur-sm rounded-full mb-4">
                                   <Shield className="w-10 h-10 text-primary" />
                              </div>
                              <h1 className="text-3xl font-bold">Admin Login</h1>
                              <p className="text-background/80 mt-2">
                                   Masuk untuk mengelola laporan warga
                              </p>
                         </div>

                         {/* Form */}
                         <div className="px-8 py-10">
                              <form onSubmit={handleSubmit} className="space-y-6">
                                   {/* Error Message */}
                                   {error && (
                                        <div className="p-4 bg-accent/10 border-2 border-accent/50 rounded-xl text-accent">
                                             <p className="font-semibold text-sm">⚠️ {error}</p>
                                        </div>
                                   )}

                                   {/* Username */}
                                   <div>
                                        <label className="block text-sm font-semibold text-surface-primary mb-2">
                                             Username
                                        </label>
                                        <input
                                             type="text"
                                             value={formData.username}
                                             onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                             className="w-full px-4 py-3 bg-background border-2 border-surface-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-surface-primary"
                                             placeholder="Masukkan username"
                                             required
                                        />
                                   </div>

                                   {/* Password */}
                                   <div>
                                        <label className="block text-sm font-semibold text-surface-primary mb-2">
                                             Password
                                        </label>
                                        <input
                                             type="password"
                                             value={formData.password}
                                             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                             className="w-full px-4 py-3 bg-background border-2 border-surface-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-surface-primary"
                                             placeholder="Masukkan password"
                                             required
                                        />
                                   </div>

                                   {/* Submit Button */}
                                   <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full px-6 py-4 bg-surface-primary text-background font-bold rounded-xl hover:bg-surface-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
                                   >
                                        {isLoading ? (
                                             <span className="flex items-center justify-center gap-2">
                                                  <Loader2 className="w-5 h-5 animate-spin" />
                                                  Memproses...
                                             </span>
                                        ) : (
                                             "Masuk"
                                        )}
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     )
}
