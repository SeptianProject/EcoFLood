"use client"

import React from 'react'
import { AlertTriangle, Loader2 } from 'lucide-react'

interface DeleteConfirmModalProps {
     reportId: number | null
     isDeleting: boolean
     onConfirm: () => void
     onCancel: () => void
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
     reportId,
     isDeleting,
     onConfirm,
     onCancel
}) => {
     if (!reportId) return null

     return (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
               <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border-2 border-accent/20">
                    <div className="flex items-center justify-center mb-6">
                         <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                              <AlertTriangle className="w-10 h-10 text-accent" />
                         </div>
                    </div>
                    <h3 className="text-2xl font-bold text-surface-primary text-center mb-3">
                         Konfirmasi Penghapusan
                    </h3>
                    <p className="text-surface-primary/70 text-center mb-8 leading-relaxed">
                         Apakah Anda yakin ingin menghapus laporan <span className="font-bold">#{reportId}</span>? Tindakan ini tidak dapat dibatalkan.
                    </p>
                    <div className="flex gap-4">
                         <button
                              onClick={onCancel}
                              disabled={isDeleting}
                              className="flex-1 px-6 py-3 bg-surface-primary/10 hover:bg-surface-primary/20 text-surface-primary font-semibold rounded-xl transition-all disabled:opacity-50"
                         >
                              Batal
                         </button>
                         <button
                              onClick={onConfirm}
                              disabled={isDeleting}
                              className="flex-1 px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl transition-all disabled:opacity-50 shadow-lg hover:shadow-xl"
                         >
                              {isDeleting ? (
                                   <span className="flex items-center justify-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Menghapus...
                                   </span>
                              ) : (
                                   "Ya, Hapus"
                              )}
                         </button>
                    </div>
               </div>
          </div>
     )
}

export default DeleteConfirmModal
