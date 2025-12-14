"use client"

import React from 'react'
import { MapPin, MapPinned, Loader2 } from 'lucide-react'

interface LocationInputProps {
     latitude: string
     longitude: string
     isGettingLocation: boolean
     onLatitudeChange: (value: string) => void
     onLongitudeChange: (value: string) => void
     onGetLocation: () => void
}

const LocationInput: React.FC<LocationInputProps> = ({
     latitude,
     longitude,
     isGettingLocation,
     onLatitudeChange,
     onLongitudeChange,
     onGetLocation
}) => {
     return (
          <div className="space-y-3">
               <label className="block text-surface-primary font-semibold mb-2">
                    Lokasi Kejadian <span className="text-accent">*</span>
               </label>

               <button
                    type="button"
                    onClick={onGetLocation}
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
                              value={latitude}
                              onChange={(e) => onLatitudeChange(e.target.value)}
                              placeholder="-6.2088"
                              className="w-full px-4 py-2 bg-background rounded-lg border-2 border-surface-primary/20 focus:border-primary focus:outline-none transition-colors text-surface-primary"
                              required
                         />
                    </div>
                    <div>
                         <label className="block text-sm text-surface-primary/70 mb-1">Longitude</label>
                         <input
                              type="text"
                              value={longitude}
                              onChange={(e) => onLongitudeChange(e.target.value)}
                              placeholder="106.8456"
                              className="w-full px-4 py-2 bg-background rounded-lg border-2 border-surface-primary/20 focus:border-primary focus:outline-none transition-colors text-surface-primary"
                              required
                         />
                    </div>
               </div>

               {latitude && longitude && (
                    <div className="flex items-center gap-2 text-xs text-surface-primary/60 bg-surface-primary/5 px-3 py-2 rounded-lg">
                         <MapPin className="w-3.5 h-3.5" />
                         <span>Koordinat: {latitude}, {longitude}</span>
                    </div>
               )}
          </div>
     )
}

export default LocationInput
