"use client"

import React, { useState, useEffect } from 'react'
import { MapPin, X, Loader2, Info } from 'lucide-react'
import { type DisasterType } from '@/interface'
import LocationInput from '@/components/laporan/LocationInput'
import DisasterTypeSelector from '@/components/laporan/DisasterTypeSelector'
import DescriptionInput from '@/components/laporan/DescriptionInput'
import ImageUploadField from '@/components/laporan/ImageUploadField'
import ValidationHelper from '@/components/laporan/ValidationHelper'

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
          type_disaster: '' as DisasterType | '',
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

          if (!formData.latitude || !formData.longitude || !formData.description || !selectedImage || !formData.type_disaster) {
               setError("Semua field wajib diisi!")
               setIsSubmitting(false)
               return
          }

          try {
               const formDataToSend = new FormData()
               formDataToSend.append("latitude", formData.latitude)
               formDataToSend.append("longitude", formData.longitude)
               formDataToSend.append("description", formData.description)
               formDataToSend.append("type_disaster", formData.type_disaster)
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
                    description: '',
                    type_disaster: ''
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
                         <LocationInput
                              latitude={formData.latitude}
                              longitude={formData.longitude}
                              isGettingLocation={isGettingLocation}
                              onLatitudeChange={(value) => setFormData({ ...formData, latitude: value })}
                              onLongitudeChange={(value) => setFormData({ ...formData, longitude: value })}
                              onGetLocation={handleGetLocation}
                         />

                         {/* Disaster Type Selection */}
                         <DisasterTypeSelector
                              selectedType={formData.type_disaster}
                              onSelectType={(type) => setFormData({ ...formData, type_disaster: type })}
                         />

                         {/* Description */}
                         <DescriptionInput
                              value={formData.description}
                              onChange={(value) => setFormData({ ...formData, description: value })}
                         />

                         {/* Image Upload */}
                         <ImageUploadField
                              selectedImage={selectedImage}
                              imagePreview={imagePreview}
                              onImageChange={handleImageChange}
                         />

                         {/* Info Box */}
                         <div className="bg-primary/10 border-l-4 border-primary rounded-xl p-4">
                              <div className="flex items-start gap-3">
                                   <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                                        <Info className="w-4 h-4 text-surface-primary" />
                                   </div>
                                   <div>
                                        <p className="text-sm font-semibold text-surface-primary mb-1">Tips Laporan</p>
                                        <p className="text-xs text-surface-primary/70 leading-relaxed">
                                             Pastikan laporan Anda akurat dan sertakan foto yang jelas. Laporan akan diverifikasi oleh admin sebelum ditampilkan di peta.
                                        </p>
                                   </div>
                              </div>
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
                                   disabled={isSubmitting || formData.description.length < 20 || !selectedImage || !formData.latitude || !formData.longitude || !formData.type_disaster}
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

                         {/* Validation Helper Text */}
                         <ValidationHelper
                              hasLocation={!!(formData.latitude && formData.longitude)}
                              hasDisasterType={!!formData.type_disaster}
                              descriptionLength={formData.description.length}
                              hasImage={!!selectedImage}
                         />
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
