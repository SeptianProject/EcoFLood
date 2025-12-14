"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Shield, MapPin, Clock, CheckCircle2, XCircle, Loader2, LogOut, X } from "lucide-react"

interface Report {
     id: number
     latitude: number
     longitude: number
     description: string
     imageUrl: string
     status: string
     createdAt: number
}

export default function AdminDashboardPage() {
     const router = useRouter()
     const [reports, setReports] = useState<Report[]>([])
     const [isLoading, setIsLoading] = useState(true)
     const [error, setError] = useState<string | null>(null)
     const [processingId, setProcessingId] = useState<number | null>(null)
     const [selectedImage, setSelectedImage] = useState<string | null>(null)

     useEffect(() => {
          // Check if admin is logged in
          const token = localStorage.getItem("adminToken")
          if (!token) {
               router.push("/admin/login")
               return
          }

          fetchReports()
     }, [router])

     const fetchReports = async () => {
          setIsLoading(true)
          setError(null)

          try {
               const response = await fetch("/api/report-disaster")

               if (!response.ok) {
                    throw new Error("Gagal mengambil data laporan")
               }

               const data = await response.json()
               setReports(data)
          } catch (err: unknown) {
               const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan"
               setError(errorMessage)
          } finally {
               setIsLoading(false)
          }
     }

     const handleApprove = async (reportId: number) => {
          setProcessingId(reportId)
          setError(null)

          try {
               const token = localStorage.getItem("adminToken")
               const formData = new FormData()
               formData.append("secretTokenKey", token || "")

               const response = await fetch(`/api/approve-report-disaster/${reportId}`, {
                    method: "PATCH",
                    body: formData,
               })

               if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error || "Gagal menyetujui laporan")
               }

               // Refresh reports
               await fetchReports()
          } catch (err: unknown) {
               const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan"
               setError(errorMessage)
          } finally {
               setProcessingId(null)
          }
     }

     const handleLogout = () => {
          localStorage.removeItem("adminToken")
          router.push("/admin/login")
     }

     const formatDate = (timestamp: number) => {
          const date = new Date(timestamp)
          return date.toLocaleDateString("id-ID", {
               year: "numeric",
               month: "long",
               day: "numeric",
               hour: "2-digit",
               minute: "2-digit"
          })
     }

     const getStatusBadge = (status: string) => {
          switch (status) {
               case "pending":
                    return (
                         <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold">
                              <Clock className="w-4 h-4" />
                              Menunggu
                         </span>
                    )
               case "success":
                    return (
                         <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/30 text-surface-primary rounded-full text-sm font-semibold">
                              <CheckCircle2 className="w-4 h-4" />
                              Disetujui
                         </span>
                    )
               case "rejected":
                    return (
                         <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/30 text-accent rounded-full text-sm font-semibold">
                              <XCircle className="w-4 h-4" />
                              Ditolak
                         </span>
                    )
               default:
                    return null
          }
     }

     const pendingReports = reports.filter(r => r.status === "pending")
     const approvedReports = reports.filter(r => r.status === "success")

     return (
          <div className="min-h-screen bg-background">
               {/* Header */}
               <div className="bg-surface-primary text-background shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                         <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                   <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/30 backdrop-blur-sm rounded-xl">
                                        <Shield className="w-6 h-6 text-primary" />
                                   </div>
                                   <div>
                                        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
                                        <p className="text-background/80 text-sm">Kelola laporan warga EcoFlood</p>
                                   </div>
                              </div>
                              <button
                                   onClick={handleLogout}
                                   className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-background rounded-xl transition-all font-semibold hover:scale-105 cursor-pointer"
                              >
                                   <LogOut className="w-5 h-5" />
                                   Keluar
                              </button>
                         </div>
                    </div>
               </div>

               {/* Stats */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                         <div className="bg-background rounded-2xl shadow-lg p-6 border-l-4 border-primary">
                              <div className="flex items-center justify-between">
                                   <div>
                                        <p className="text-sm text-surface-primary/70 font-semibold">Total Laporan</p>
                                        <p className="text-3xl font-bold text-surface-primary mt-1">{reports.length}</p>
                                   </div>
                                   <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-surface-primary" />
                                   </div>
                              </div>
                         </div>

                         <div className="bg-background rounded-2xl shadow-lg p-6 border-l-4 border-accent">
                              <div className="flex items-center justify-between">
                                   <div>
                                        <p className="text-sm text-surface-primary/70 font-semibold">Menunggu Persetujuan</p>
                                        <p className="text-3xl font-bold text-surface-primary mt-1">{pendingReports.length}</p>
                                   </div>
                                   <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-accent" />
                                   </div>
                              </div>
                         </div>

                         <div className="bg-background rounded-2xl shadow-lg p-6 border-l-4 border-primary">
                              <div className="flex items-center justify-between">
                                   <div>
                                        <p className="text-sm text-surface-primary/70 font-semibold">Disetujui</p>
                                        <p className="text-3xl font-bold text-surface-primary mt-1">{approvedReports.length}</p>
                                   </div>
                                   <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-surface-primary" />
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                         <div className="mb-6 p-4 bg-accent/10 border-2 border-accent/50 rounded-xl text-accent">
                              <p className="font-semibold">⚠️ {error}</p>
                         </div>
                    )}

                    {/* Loading State */}
                    {isLoading ? (
                         <div className="flex items-center justify-center py-20">
                              <div className="text-center">
                                   <Loader2 className="w-12 h-12 animate-spin text-surface-primary mx-auto mb-4" />
                                   <p className="text-surface-primary font-semibold">Memuat laporan...</p>
                              </div>
                         </div>
                    ) : (
                         <>
                              {/* Pending Reports */}
                              <div className="mb-8">
                                   <h2 className="text-xl font-bold text-surface-primary mb-4">
                                        Laporan Menunggu Persetujuan ({pendingReports.length})
                                   </h2>
                                   {pendingReports.length === 0 ? (
                                        <div className="bg-background rounded-2xl shadow-lg p-8 text-center border-2 border-surface-primary/10">
                                             <Clock className="w-12 h-12 text-surface-primary/40 mx-auto mb-3" />
                                             <p className="text-surface-primary/70">Tidak ada laporan yang menunggu persetujuan</p>
                                        </div>
                                   ) : (
                                        <div className="grid grid-cols-1 gap-4">
                                             {pendingReports.map((report) => (
                                                  <div
                                                       key={report.id}
                                                       className="bg-background rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-2 border-surface-primary/10"
                                                  >
                                                       <div className="flex flex-col md:flex-row gap-6">
                                                            {/* Image */}
                                                            <div className="shrink-0">
                                                                 <div
                                                                      className="w-full md:w-48 h-48 bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                                                                      onClick={() => setSelectedImage(report.imageUrl)}
                                                                 >
                                                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                      <img
                                                                           src={report.imageUrl}
                                                                           alt="Laporan"
                                                                           className="w-full h-full object-cover"
                                                                      />
                                                                 </div>
                                                            </div>

                                                            {/* Content */}
                                                            <div className="flex-1">
                                                                 <div className="flex items-start justify-between mb-3">
                                                                      <div>
                                                                           <h3 className="text-lg font-bold text-gray-800 mb-1">
                                                                                Laporan #{report.id}
                                                                           </h3>
                                                                           {getStatusBadge(report.status)}
                                                                      </div>
                                                                      <p className="text-sm text-gray-500">
                                                                           {formatDate(report.createdAt)}
                                                                      </p>
                                                                 </div>

                                                                 <div className="space-y-2 mb-4">
                                                                      <div className="flex items-start gap-2">
                                                                           <MapPin className="w-5 h-5 text-surface-primary/40 shrink-0 mt-0.5" />
                                                                           <p className="text-sm text-surface-primary/80">
                                                                                <span className="font-semibold">Koordinat:</span>{" "}
                                                                                {report.latitude.toFixed(6)}, {report.longitude.toFixed(6)}
                                                                           </p>
                                                                      </div>
                                                                      <div className="flex items-start gap-2">
                                                                           <p className="text-sm text-gray-700 leading-relaxed">
                                                                                {report.description}
                                                                           </p>
                                                                      </div>
                                                                 </div>

                                                                 {/* Actions */}
                                                                 <div className="flex gap-3">
                                                                      <button
                                                                           onClick={() => handleApprove(report.id)}
                                                                           disabled={processingId === report.id}
                                                                           className="flex-1 px-4 py-2 bg-primary text-surface-primary font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-105"
                                                                      >
                                                                           {processingId === report.id ? (
                                                                                <span className="flex items-center justify-center gap-2">
                                                                                     <Loader2 className="w-4 h-4 animate-spin" />
                                                                                     Memproses...
                                                                                </span>
                                                                           ) : (
                                                                                <span className="flex items-center justify-center gap-2">
                                                                                     <CheckCircle2 className="w-4 h-4" />
                                                                                     Setujui Laporan
                                                                                </span>
                                                                           )}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                   )}
                              </div>

                              {/* Approved Reports */}
                              <div>
                                   <h2 className="text-xl font-bold text-surface-primary mb-4">
                                        Laporan Disetujui ({approvedReports.length})
                                   </h2>
                                   {approvedReports.length === 0 ? (
                                        <div className="bg-background rounded-2xl shadow-lg p-8 text-center border-2 border-surface-primary/10">
                                             <CheckCircle2 className="w-12 h-12 text-surface-primary/40 mx-auto mb-3" />
                                             <p className="text-surface-primary/70">Belum ada laporan yang disetujui</p>
                                        </div>
                                   ) : (
                                        <div className="grid grid-cols-1 gap-4">
                                             {approvedReports.map((report) => (
                                                  <div
                                                       key={report.id}
                                                       className="bg-background rounded-2xl shadow-lg p-6 opacity-75 border-2 border-surface-primary/10"
                                                  >
                                                       <div className="flex flex-col md:flex-row gap-6">
                                                            {/* Image */}
                                                            <div className="shrink-0">
                                                                 <div
                                                                      className="w-full md:w-48 h-48 bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                                                                      onClick={() => setSelectedImage(report.imageUrl)}
                                                                 >
                                                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                      <img
                                                                           src={report.imageUrl}
                                                                           alt="Laporan"
                                                                           className="w-full h-full object-cover"
                                                                      />
                                                                 </div>
                                                            </div>

                                                            {/* Content */}
                                                            <div className="flex-1">
                                                                 <div className="flex items-start justify-between mb-3">
                                                                      <div>
                                                                           <h3 className="text-lg font-bold text-gray-800 mb-1">
                                                                                Laporan #{report.id}
                                                                           </h3>
                                                                           {getStatusBadge(report.status)}
                                                                      </div>
                                                                      <p className="text-sm text-gray-500">
                                                                           {formatDate(report.createdAt)}
                                                                      </p>
                                                                 </div>

                                                                 <div className="space-y-2">
                                                                      <div className="flex items-start gap-2">
                                                                           <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                                                                           <p className="text-sm text-gray-600">
                                                                                <span className="font-semibold">Koordinat:</span>{" "}
                                                                                {report.latitude.toFixed(6)}, {report.longitude.toFixed(6)}
                                                                           </p>
                                                                      </div>
                                                                      <div className="flex items-start gap-2">
                                                                           <p className="text-sm text-gray-700 leading-relaxed">
                                                                                {report.description}
                                                                           </p>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                   )}
                              </div>
                         </>
                    )}
               </div>

               {/* Image Modal */}
               {selectedImage && (
                    <div
                         className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 cursor-pointer"
                         onClick={() => setSelectedImage(null)}
                    >
                         <div className="relative max-w-4xl max-h-[90vh]">
                              <button
                                   onClick={() => setSelectedImage(null)}
                                   className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer"
                              >
                                   <X className="w-8 h-8" />
                              </button>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                   src={selectedImage}
                                   alt="Laporan Fullsize"
                                   className="max-w-full max-h-[90vh] rounded-2xl object-contain"
                              />
                         </div>
                    </div>
               )}
          </div>
     )
}
