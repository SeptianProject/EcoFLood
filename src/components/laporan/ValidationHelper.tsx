"use client"

import React from 'react'

interface ValidationHelperProps {
     hasLocation: boolean
     hasDisasterType: boolean
     descriptionLength: number
     hasImage: boolean
}

const ValidationHelper: React.FC<ValidationHelperProps> = ({
     hasLocation,
     hasDisasterType,
     descriptionLength,
     hasImage
}) => {
     const showHelper = !hasLocation || !hasDisasterType || descriptionLength < 20 || !hasImage

     if (!showHelper) return null

     return (
          <div className="text-xs text-surface-primary/60 text-center space-y-1">
               {!hasLocation && <p>• Lokasi belum diisi</p>}
               {!hasDisasterType && <p>• Jenis kejadian belum dipilih</p>}
               {descriptionLength < 20 && (
                    <p>• Deskripsi minimal 20 karakter (saat ini: {descriptionLength})</p>
               )}
               {!hasImage && <p>• Foto belum diunggah</p>}
          </div>
     )
}

export default ValidationHelper
