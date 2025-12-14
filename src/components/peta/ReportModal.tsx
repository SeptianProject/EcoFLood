"use client"

import React, { useState, useEffect } from 'react'
import { MapPin, X, Upload, Loader2, MapPinned } from 'lucide-react'

interface ReportModalProps {
     isOpen: boolean
     onClose: () => void
     onSuccess?: () => void
     currentPosition?: { lat: number; lng: number } | null
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, onSuccess, currentPosition }) => {
     const [formData, setFormData] = useState({
          latitude: currentPosition?.lat.toString() || '',
          longitude: currentPosition?.lng.toString() || '',
          description: '',
     })
     const [selectedImage, setSelectedImage] = useState<File | null>(null)
     const [imagePreview, setImagePreview] = useState<string | null>(null)
     const [isSubmitting, setIsSubmitting] = useState(false)
     const [error, setError] = useState<string | null>(null)
     const [isGettingLocation, setIsGettingLocation] = useState(false)

     // Update coordinates when currentPosition changes
     useEffect(() => {
          if (currentPosition) {
               setFormData(prev => ({
                    ...prev,
                    latitude: currentPosition.lat.toFixed(6),
                    longitude: currentPosition.lng.toFixed(6)
               }))
          }
     }, [currentPosition])

     const handleGetLocation = () => {
          setIsGettingLocation(true)
          setError(null)

          if (navigator.geolocation) {
               navigator.geolocation.getCurrentPosition(
                    (position) => {
                         setFormData(prev => ({
                              ...prev,
                              latitude: position.coords.latitude.toFixed(6),
                              longitude: position.coords.longitude.toFixed(6)
                         }))
                         setIsGettingLocation(false)
                    },
                    (error) => {
                         setError("Tidak dapat mengakses lokasi Anda. Pastikan izin lokasi diaktifkan.")
                         setIsGettingLocation(false)
                         console.error(error)
                    }
               )
          } else {
               setError("Browser Anda tidak mendukung geolocation.")
               setIsGettingLocation(false)
          }
     }

     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files[0]) {
               const file = e.target.files[0]

               if (file.size > 5 * 1024 * 1024) {
                    setError("Ukuran file maksimal 5MB")
                    return
               }

               if (!file.type.startsWith("image/")) {
                    setError("File harus berupa gambar")
                    return
               }

               setSelectedImage(file)
               const reader = new FileReader()
               reader.onloadend = () => {
                    setImagePreview(reader.result as string)
               }
               reader.readAsDataURL(file)
               setError(null)
          }
     }

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()
          setError(null)
          setIsSubmitting(true)

          if (!formData.latitude || !formData.longitude || !formData.description || !selectedImage) {
               setError("Semua field wajib diisi!")
               setIsSubmitting(false)
               return
          }

          try {
               const formDataToSend = new FormData()
               formDataToSend.append("latitude", formData.latitude)
               formDataToSend.append("longitude", formData.longitude)
               formDataToSend.append("description", formData.description)
               formDataToSend.append("imageUrl", selectedImage)

               const response = await fetch("/api/report-disaster", {
                    method: "POST",
                    body: formDataToSend,
               })

               if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error || "Gagal mengirim laporan")
               }

               // Success
               if (onSuccess) {
                    onSuccess()
               }

               // Reset form
               setFormData({
                    latitude: currentPosition?.lat.toFixed(6) || '',
                    longitude: currentPosition?.lng.toFixed(6) || '',
                    description: ''
               })
               setSelectedImage(null)
               setImagePreview(null)

               onClose()
          } catch (err: unknown) {
               const errorMessage = err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim laporan"
               setError(errorMessage)
          } finally {
               setIsSubmitting(false)
          }
     }

     if (!isOpen) return null

     return (
          <div className="fixed inset-0 flex items-center justify-center p-4 bg-surface-primary/80 backdrop-blur-sm animate-fadeIn" style={{ zIndex: 2000 }}>
               <div className="bg-background rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slideUp">
                    {/* Header */}
                    <div className="sticky top-0 bg-surface-primary text-background px-6 py-4 rounded-t-3xl flex items-center justify-between z-10">
                         <div className="flex items-center gap-3">
                              <MapPin className="w-6 h-6 text-primary" />
                              <h2 className="text-2xl font-bold">Laporkan Kondisi Lingkungan</h2>
                         </div>
                         <button
                              onClick={onClose}
                              className="p-2 hover:bg-primary/20 rounded-full transition-colors cursor-pointer"
                         >
                              <X size={24} />
                         </button>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                         {/* Error Message */}
                         {error && (
                              <div className="p-4 bg-accent/10 border-2 border-accent/50 rounded-xl text-accent">
                                   <p className="font-semibold">⚠️ {error}</p>
                              </div>
                         )}

                         {/* Location Section */}
                         <div className="space-y-3">
                              <label className="block text-surface-primary font-semibold mb-2">
                                   Lokasi Kejadian <span className="text-accent">*</span>
                              </label>

                              <button
                                   type="button"
                                   onClick={handleGetLocation}
                                   disabled={isGettingLocation}
                                   className="w-full px-4 py-3 bg-primary/20 hover:bg-primary/30 border-2 border-primary/40 rounded-xl text-surface-primary font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                              >
                                   {isGettingLocation ? (
                                        <>
                                             <Loader2 className="w-5 h-5 animate-spin" />
                                             Mendapatkan Lokasi...
                                        </>
                                   ) : (
                                        <>
                                             <MapPinned className="w-5 h-5" />
                                             Gunakan Lokasi Saya
                                        </>
                                   )}
                              </button>

                              <div className="grid grid-cols-2 gap-3">
                                   <div>
                                        <label className="block text-sm text-surface-primary/70 mb-1">Latitude</label>
                                        <input
                                             type="text"
                                             value={formData.latitude}
                                             onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                                             placeholder="-6.2088"
                                             className="w-full px-4 py-2 bg-background rounded-lg border-2 border-surface-primary/20 focus:border-primary focus:outline-none transition-colors text-surface-primary"
                                             required
                                        />
                                   </div>
                                   <div>
                                        <label className="block text-sm text-surface-primary/70 mb-1">Longitude</label>
                                        <input
                                             type="text"
                                             value={formData.longitude}
                                             onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                                             placeholder="106.8456"
                                             className="w-full px-4 py-2 bg-background rounded-lg border-2 border-surface-primary/20 focus:border-primary focus:outline-none transition-colors text-surface-primary"
                                             required
                                        />
                                   </div>
                              </div>

                              {formData.latitude && formData.longitude && (
                                   <p className="text-xs text-surface-primary/60">
                                        📍 Koordinat: {formData.latitude}, {formData.longitude}
                                   </p>
                              )}
                         </div>

                         {/* Description */}
                         <div>
                              <label className="block text-surface-primary font-semibold mb-2">
                                   Deskripsi Kondisi Lingkungan <span className="text-accent">*</span>
                              </label>
                              <textarea
                                   required
                                   value={formData.description}
                                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                   placeholder="Jelaskan kondisi yang Anda temukan (contoh: kerusakan hutan, aliran air tersumbat, erosi kecil, dll)"
                                   rows={4}
                                   className="w-full px-4 py-3 bg-background rounded-xl border-2 border-surface-primary/20 focus:border-primary focus:outline-none transition-colors text-surface-primary resize-none"
                              />
                              <p className="text-xs text-surface-primary/60 mt-1">
                                   Minimal 20 karakter ({formData.description.length}/20)
                              </p>
                         </div>

                         {/* Image Upload */}
                         <div>
                              <label className="block text-surface-primary font-semibold mb-2">
                                   Foto Kondisi Lingkungan <span className="text-accent">*</span>
                              </label>
                              <div className="border-2 border-dashed border-surface-primary/30 rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
                                   <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="hidden"
                                        id="image-upload"
                                        required
                                   />
                                   <label htmlFor="image-upload" className="cursor-pointer">
                                        {imagePreview ? (
                                             <div className="space-y-2">
                                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                                  <img
                                                       src={imagePreview}
                                                       alt="Preview"
                                                       className="max-h-48 mx-auto rounded-lg object-cover"
                                                  />
                                                  <p className="text-sm text-surface-primary font-semibold">
                                                       ✓ {selectedImage?.name}
                                                  </p>
                                                  <p className="text-xs text-surface-primary/60">
                                                       Klik untuk mengganti gambar
                                                  </p>
                                             </div>
                                        ) : (
                                             <>
                                                  <Upload className="w-8 h-8 mx-auto mb-2 text-surface-primary/60" />
                                                  <p className="text-sm text-surface-primary font-semibold">
                                                       Klik untuk mengunggah foto
                                                  </p>
                                                  <p className="text-xs text-surface-primary/60 mt-1">
                                                       JPG, PNG, atau JPEG (Maks. 5MB)
                                                  </p>
                                             </>
                                        )}
                                   </label>
                              </div>
                         </div>

                         {/* Info Box */}
                         <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-4">
                              <p className="text-sm text-surface-primary">
                                   <span className="font-semibold">💡 Tips:</span> Pastikan laporan Anda akurat dan
                                   sertakan foto yang jelas. Laporan akan diverifikasi oleh admin sebelum ditampilkan di peta.
                              </p>
                         </div>

                         {/* Submit Button */}
                         <div className="flex gap-3 pt-2">
                              <button
                                   type="button"
                                   onClick={onClose}
                                   disabled={isSubmitting}
                                   className="flex-1 px-6 py-3 rounded-full border-2 border-surface-primary/20 text-surface-primary font-semibold hover:bg-surface-primary/5 transition-colors disabled:opacity-50 cursor-pointer"
                              >
                                   Batal
                              </button>
                              <button
                                   type="submit"
                                   disabled={isSubmitting || formData.description.length < 20}
                                   className="flex-1 px-6 py-3 rounded-full bg-surface-primary text-background font-semibold hover:bg-surface-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                              >
                                   {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                             <Loader2 className="w-5 h-5 animate-spin" />
                                             Mengirim...
                                        </span>
                                   ) : (
                                        'Kirim Laporan'
                                   )}
                              </button>
                         </div>
                    </form>
               </div>

               <style jsx>{`
                    @keyframes fadeIn {
                         from {
                              opacity: 0;
                         }
                         to {
                              opacity: 1;
                         }
                    }

                    @keyframes slideUp {
                         from {
                              opacity: 0;
                              transform: translateY(20px);
                         }
                         to {
                              opacity: 1;
                              transform: translateY(0);
                         }
                    }

                    .animate-fadeIn {
                         animation: fadeIn 0.2s ease-out;
                    }

                    .animate-slideUp {
                         animation: slideUp 0.3s ease-out;
                    }
               `}</style>
          </div>
     )
}

export default ReportModal
