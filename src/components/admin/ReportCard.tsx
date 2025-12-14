"use client"

import React from 'react'
import { MapPin, CheckCircle2, XCircle, Trash2, Loader2, Calendar } from 'lucide-react'
import { DISASTER_TYPES } from '@/interface'
import DisasterIcon from '@/components/common/DisasterIcon'

interface Report {
     id: number
     latitude: number
     longitude: number
     description: string
     imageUrl: string
     status: string
     type_disaster?: string
     createdAt: string | number
}

interface ReportCardProps {
     report: Report
     processingId: number | null
     deletingId: number | null
     rejectingId: number | null
     onApprove: (id: number) => void
     onReject: (id: number) => void
     onDelete: (id: number) => void
     onImageClick: (url: string) => void
}

const ReportCard: React.FC<ReportCardProps> = ({
     report,
     processingId,
     deletingId,
     rejectingId,
     onApprove,
     onReject,
     onDelete,
     onImageClick
}) => {
     const formatDate = (dateString: string | number) => {
          try {
               const date = new Date(dateString)
               if (isNaN(date.getTime())) {
                    return 'Tanggal tidak valid'
               }

               const now = new Date()
               const diffMs = now.getTime() - date.getTime()
               const diffMins = Math.floor(diffMs / 60000)
               const diffHours = Math.floor(diffMs / 3600000)
               const diffDays = Math.floor(diffMs / 86400000)

               // Jika dalam 1 menit terakhir
               if (diffMins < 1) return 'Baru saja'
               // Jika dalam 1 jam terakhir
               if (diffMins < 60) return `${diffMins} menit yang lalu`
               // Jika dalam 24 jam terakhir
               if (diffHours < 24) return `${diffHours} jam yang lalu`
               // Jika dalam 7 hari terakhir
               if (diffDays < 7) return `${diffDays} hari yang lalu`

               // Lebih dari 7 hari, tampilkan format lengkap
               return new Intl.DateTimeFormat('id-ID', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
               }).format(date)
          } catch {
               return 'Tanggal tidak valid'
          }
     }

     const getStatusBadge = (status: string) => {
          const statusConfig = {
               pending: { label: "Menunggu", color: "#f59e0b", bg: "#fef3c7" },
               success: { label: "Disetujui", color: "#10b981", bg: "#d1fae5" },
               rejected: { label: "Ditolak", color: "#ef4444", bg: "#fee2e2" },
          }[status] || { label: status, color: "#6b7280", bg: "#f3f4f6" }

          return (
               <span
                    className="px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
                    style={{ backgroundColor: statusConfig.bg, color: statusConfig.color }}
               >
                    {statusConfig.label}
               </span>
          )
     }

     const getDisasterTypeBadge = (typeValue: string) => {
          const type = DISASTER_TYPES.find(t => t.value === typeValue)
          if (!type) return null

          return (
               <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm"
                    style={{ backgroundColor: type.bgColor, color: type.color }}
               >
                    <DisasterIcon iconName={type.iconName} size={14} />
                    {type.label}
               </div>
          )
     }

     const isDisabled = processingId === report.id || deletingId === report.id || rejectingId === report.id

     return (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all border-2 border-surface-primary/10 hover:border-primary/30">
               <div className="flex flex-col md:flex-row gap-6">
                    {/* Image */}
                    <div className="shrink-0">
                         <div
                              className="w-full md:w-56 h-56 bg-linear-to-br from-surface-primary/10 to-primary/10 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-lg ring-2 ring-surface-primary/20"
                              onClick={() => onImageClick(report.imageUrl)}
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
                         <div className="flex items-start justify-between mb-4">
                              <div className="space-y-2">
                                   <div className="flex items-center gap-3">
                                        <h3 className="text-xl font-bold text-surface-primary">
                                             Laporan #{report.id}
                                        </h3>
                                        {getStatusBadge(report.status)}
                                   </div>
                                   {report.type_disaster && getDisasterTypeBadge(report.type_disaster)}
                              </div>
                              <div className="text-right">
                                   <p className="text-sm text-surface-primary/60 font-medium flex items-center gap-2 justify-end">
                                        <Calendar className="w-4 h-4" />
                                        {formatDate(report.createdAt)}
                                   </p>
                              </div>
                         </div>

                         <div className="space-y-3 mb-5">
                              <div className="flex items-start gap-3 p-3 bg-surface-primary/5 rounded-xl">
                                   <MapPin className="w-5 h-5 text-surface-primary shrink-0 mt-0.5" />
                                   <div>
                                        <p className="text-xs text-surface-primary/60 font-semibold mb-1">KOORDINAT LOKASI</p>
                                        <p className="text-sm text-surface-primary font-mono">
                                             {report.latitude.toFixed(6)}, {report.longitude.toFixed(6)}
                                        </p>
                                   </div>
                              </div>
                              <div className="p-3 bg-surface-primary/5 rounded-xl">
                                   <p className="text-xs text-surface-primary/60 font-semibold mb-2">DESKRIPSI</p>
                                   <p className="text-sm text-surface-primary leading-relaxed">
                                        {report.description}
                                   </p>
                              </div>
                         </div>

                         {/* Actions */}
                         <div className="flex gap-3">
                              {report.status === "pending" && (
                                   <>
                                        <button
                                             onClick={() => onApprove(report.id)}
                                             disabled={isDisabled}
                                             className="flex-1 px-5 py-3 bg-linear-to-r from-primary to-[#d4f567] text-surface-primary font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:scale-105"
                                        >
                                             {processingId === report.id ? (
                                                  <span className="flex items-center justify-center gap-2">
                                                       <Loader2 className="w-5 h-5 animate-spin" />
                                                       Memproses...
                                                  </span>
                                             ) : (
                                                  <span className="flex items-center justify-center gap-2">
                                                       <CheckCircle2 className="w-5 h-5" />
                                                       Setujui
                                                  </span>
                                             )}
                                        </button>
                                        <button
                                             onClick={() => onReject(report.id)}
                                             disabled={isDisabled}
                                             className="flex-1 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:scale-105"
                                        >
                                             {rejectingId === report.id ? (
                                                  <span className="flex items-center justify-center gap-2">
                                                       <Loader2 className="w-5 h-5 animate-spin" />
                                                       Memproses...
                                                  </span>
                                             ) : (
                                                  <span className="flex items-center justify-center gap-2">
                                                       <XCircle className="w-5 h-5" />
                                                       Tolak
                                                  </span>
                                             )}
                                        </button>
                                   </>
                              )}
                              <button
                                   onClick={() => onDelete(report.id)}
                                   disabled={isDisabled}
                                   className={`${report.status === "pending" ? "px-5" : "flex-1"} py-3 bg-accent/90 hover:bg-accent text-white font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:scale-105 hover:shadow-lg`}
                              >
                                   <span className="flex items-center justify-center gap-2">
                                        <Trash2 className="w-5 h-5" />
                                        Hapus
                                   </span>
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default ReportCard
