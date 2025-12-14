"use client"

import React from 'react'
import { Upload } from 'lucide-react'

interface ImageUploadFieldProps {
     selectedImage: File | null
     imagePreview: string | null
     onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
     selectedImage,
     imagePreview,
     onImageChange
}) => {
     return (
          <div>
               <label className="block text-surface-primary font-semibold mb-2">
                    Foto Kondisi Lingkungan <span className="text-accent">*</span>
               </label>
               <div className={`border-2 border-dashed rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer ${selectedImage ? 'border-green-500/50' : 'border-surface-primary/30'
                    }`}>
                    <input
                         type="file"
                         accept="image/*"
                         onChange={onImageChange}
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
                                   <p className="text-sm text-green-600 font-semibold">
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
     )
}

export default ImageUploadField
