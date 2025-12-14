"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Shield, MapPin, Clock, CheckCircle2, XCircle, Loader2, LogOut, X, AlertTriangle } from "lucide-react"
import { type Report as ReportType } from "@/interface"
import StatsCard from "@/components/admin/StatsCard"
import DisasterTypeStats from "@/components/admin/DisasterTypeStats"
import FilterTabs from "@/components/admin/FilterTabs"
import ReportCard from "@/components/admin/ReportCard"
import DeleteConfirmModal from "@/components/admin/DeleteConfirmModal"

type Report = ReportType

export default function AdminDashboardPage() {
     const router = useRouter()
     const [reports, setReports] = useState<Report[]>([])
     const [isLoading, setIsLoading] = useState(true)
     const [error, setError] = useState<string | null>(null)
     const [processingId, setProcessingId] = useState<number | null>(null)
     const [selectedImage, setSelectedImage] = useState<string | null>(null)
     const [deletingId, setDeletingId] = useState<number | null>(null)
     const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null)
     const [rejectingId, setRejectingId] = useState<number | null>(null)
     const [filterStatus, setFilterStatus] = useState<string>("all")

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

     const handleReject = async (reportId: number) => {
          setRejectingId(reportId)
          setError(null)

          try {
               const token = localStorage.getItem("adminToken")
               const formData = new FormData()
               formData.append("secretTokenKey", token || "")

               const response = await fetch(`/api/reject-report-disaster/${reportId}`, {
                    method: "PATCH",
                    body: formData,
               })

               if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error || "Gagal menolak laporan")
               }

               // Refresh reports
               await fetchReports()
          } catch (err: unknown) {
               const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan"
               setError(errorMessage)
          } finally {
               setRejectingId(null)
          }
     }

     const handleDelete = async (reportId: number) => {
          setDeletingId(reportId)
          setError(null)

          try {
               const token = localStorage.getItem("adminToken")
               const formData = new FormData()
               formData.append("secretTokenKey", token || "")

               const response = await fetch(`/api/delete-report-disaster/${reportId}`, {
                    method: "DELETE",
                    body: formData,
               })

               if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error || "Gagal menghapus laporan")
               }

               // Refresh reports
               setDeleteConfirmId(null)
               await fetchReports()
          } catch (err: unknown) {
               const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan"
               setError(errorMessage)
          } finally {
               setDeletingId(null)
          }
     }

     const handleLogout = () => {
          localStorage.removeItem("adminToken")
          router.push("/admin/login")
     }

     const pendingReports = reports.filter(r => r.status === "pending")
     const approvedReports = reports.filter(r => r.status === "success")
     const rejectedReports = reports.filter(r => r.status === "rejected")

     // Get filtered reports based on selected filter
     const getFilteredReports = () => {
          switch (filterStatus) {
               case "pending":
                    return pendingReports
               case "success":
                    return approvedReports
               case "rejected":
                    return rejectedReports
               default:
                    return reports
          }
     }

     const filteredReports = getFilteredReports()

     return (
          <div className="min-h-screen bg-linear-to-br from-gray-50 via-background to-primary/5">
               {/* Header */}
               <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-md border-b-2 border-surface-primary/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                         <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                   <div className="relative">
                                        <div className="absolute inset-0 bg-linear-to-r from-primary to-surface-primary rounded-2xl blur-sm opacity-50"></div>
                                        <div className="relative inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-surface-primary to-[#1f4d40] rounded-2xl shadow-lg">
                                             <Shield className="w-7 h-7 text-primary" />
                                        </div>
                                   </div>
                                   <div>
                                        <h1 className="text-2xl font-bold text-surface-primary">Dashboard Admin</h1>
                                        <div className="flex items-center gap-2 mt-0.5">
                                             <div className="flex items-center gap-1.5">
                                                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                  <span className="text-xs font-medium text-surface-primary/60">Online</span>
                                             </div>
                                             <span className="text-surface-primary/40">•</span>
                                             <span className="text-xs text-surface-primary/60">Sistem Monitoring EcoFlood</span>
                                        </div>
                                   </div>
                              </div>
                              <button
                                   onClick={handleLogout}
                                   className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-accent to-[#ff9f85] hover:from-accent/90 hover:to-[#ff9f85]/90 text-white rounded-xl transition-all font-semibold hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
                              >
                                   <LogOut className="w-4 h-4" />
                                   Keluar
                              </button>
                         </div>
                    </div>
               </header>

               {/* Stats */}
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                         <StatsCard
                              title="Total Laporan"
                              value={reports.length}
                              icon={MapPin}
                              bgColor="#b4e25115"
                              textColor="#2a6354"
                         />
                         <StatsCard
                              title="Menunggu"
                              value={pendingReports.length}
                              icon={Clock}
                              bgColor="#ff8b7115"
                              textColor="#ff8b71"
                         />
                         <StatsCard
                              title="Disetujui"
                              value={approvedReports.length}
                              icon={CheckCircle2}
                              bgColor="#10b98115"
                              textColor="#10b981"
                         />
                         <StatsCard
                              title="Ditolak"
                              value={rejectedReports.length}
                              icon={XCircle}
                              bgColor="#ef444415"
                              textColor="#ef4444"
                         />
                    </div>

                    {/* Disaster Type Statistics */}
                    <div className="mt-8">
                         <DisasterTypeStats reports={reports} />
                    </div>

                    {/* Filter Tabs */}
                    <div className="mt-8 mb-6">
                         <FilterTabs
                              filterStatus={filterStatus}
                              onFilterChange={setFilterStatus}
                              counts={{
                                   all: reports.length,
                                   pending: pendingReports.length,
                                   approved: approvedReports.length,
                                   rejected: rejectedReports.length
                              }}
                         />
                    </div>

                    {/* Error Message */}
                    {error && (
                         <div className="mb-6 p-5 bg-accent/10 border-l-4 border-accent rounded-2xl text-accent shadow-lg backdrop-blur-sm">
                              <div className="flex items-center gap-3">
                                   <AlertTriangle className="w-6 h-6 shrink-0" />
                                   <p className="font-semibold">{error}</p>
                              </div>
                         </div>
                    )}

                    {/* Loading State */}
                    {isLoading ? (
                         <div className="flex items-center justify-center py-20">
                              <div className="text-center">
                                   <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Loader2 className="w-10 h-10 animate-spin text-surface-primary" />
                                   </div>
                                   <p className="text-surface-primary font-semibold text-lg">Memuat laporan...</p>
                                   <p className="text-surface-primary/60 text-sm mt-1">Mohon tunggu sebentar</p>
                              </div>
                         </div>
                    ) : (
                         <>
                              {/* Reports List */}
                              <div className="mb-8">
                                   <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl font-bold text-surface-primary flex items-center gap-3">
                                             <div className="w-1 h-8 bg-primary rounded-full"></div>
                                             {filterStatus === "all" && `Semua Laporan (${filteredReports.length})`}
                                             {filterStatus === "pending" && `Menunggu Persetujuan (${filteredReports.length})`}
                                             {filterStatus === "success" && `Laporan Disetujui (${filteredReports.length})`}
                                             {filterStatus === "rejected" && `Laporan Ditolak (${filteredReports.length})`}
                                        </h2>
                                   </div>
                                   {filteredReports.length === 0 ? (
                                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 text-center border-2 border-surface-primary/10">
                                             <div className="w-20 h-20 bg-surface-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                  <MapPin className="w-10 h-10 text-surface-primary/40" />
                                             </div>
                                             <p className="text-surface-primary/70 text-lg font-semibold">Tidak ada laporan</p>
                                             <p className="text-surface-primary/50 text-sm mt-1">Belum ada laporan dalam kategori ini</p>
                                        </div>
                                   ) : (
                                        <div className="grid grid-cols-1 gap-6">
                                             {filteredReports.map((report) => (
                                                  <ReportCard
                                                       key={report.id}
                                                       report={report}
                                                       processingId={processingId}
                                                       deletingId={deletingId}
                                                       rejectingId={rejectingId}
                                                       onApprove={handleApprove}
                                                       onReject={handleReject}
                                                       onDelete={setDeleteConfirmId}
                                                       onImageClick={setSelectedImage}
                                                  />
                                             ))}
                                        </div>
                                   )}
                              </div>

                         </>
                    )}
               </div>

               {/* Delete Confirmation Modal */}
               <DeleteConfirmModal
                    reportId={deleteConfirmId}
                    isDeleting={deletingId === deleteConfirmId}
                    onConfirm={() => deleteConfirmId && handleDelete(deleteConfirmId)}
                    onCancel={() => setDeleteConfirmId(null)}
               />

               {/* Image Modal */}
               {selectedImage && (
                    <div
                         className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50 cursor-pointer animate-fadeIn"
                         onClick={() => setSelectedImage(null)}
                    >
                         <div className="relative max-w-6xl max-h-[95vh] animate-scaleIn">
                              <button
                                   onClick={() => setSelectedImage(null)}
                                   className="absolute -top-14 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
                              >
                                   <X className="w-6 h-6" />
                              </button>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                   src={selectedImage}
                                   alt="Laporan Fullsize"
                                   className="max-w-full max-h-[95vh] rounded-3xl object-contain shadow-2xl ring-4 ring-white/20"
                              />
                         </div>
                    </div>
               )}
          </div>
     )
}
