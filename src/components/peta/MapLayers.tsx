"use client"

import React, { useEffect } from 'react'
import L from 'leaflet'

interface DeforestationData {
     lat: number
     lng: number
     region: string
     island: string
     intensity: number
     area_hectares: number
}

interface FloodData {
     id: string
     year: number
     island: string
     lat: number
     lng: number
     location: string
     severity: 'low' | 'medium' | 'high' | 'critical'
     casualties: number
     affected: number
     description: string
}

interface FireData {
     id: string
     year: number
     island: string
     lat: number
     lng: number
     location: string
     confidence: string
     brightness: number
     frp: number
     type: string
}

interface BiodiversityData {
     id: string
     island: string
     lat: number
     lng: number
     location: string
     type: string
     species: string[]
     area_km2: number
}

interface MapLayersProps {
     map: L.Map | null
     layers: {
          deforestation: boolean
          floodHistory: boolean
          fireHotspots: boolean
          biodiversity: boolean
     }
     selectedIsland: string
     selectedYear: number
     deforestationData: DeforestationData[]
     floodData: FloodData[]
     fireData: FireData[]
     biodiversityData: BiodiversityData[]
}

const MapLayers: React.FC<MapLayersProps> = ({
     map,
     layers,
     deforestationData,
     floodData,
     fireData,
     biodiversityData
}) => {
     useEffect(() => {
          if (!map) return

          // Clear existing layers
          map.eachLayer((layer) => {
               if (layer instanceof L.Marker || layer instanceof L.Circle) {
                    map.removeLayer(layer)
               }
          })

          // Deforestation Layer
          if (layers.deforestation && deforestationData.length > 0) {
               deforestationData.forEach(point => {
                    const circle = L.circle([point.lat, point.lng], {
                         color: '#dc2626',
                         fillColor: '#ef4444',
                         fillOpacity: 0.4,
                         radius: point.intensity * 50,
                         weight: 2
                    }).addTo(map)

                    circle.bindPopup(`
                         <div class="p-3">
                              <h3 class="font-bold text-lg text-red-600 mb-2">🌳 Deforestasi</h3>
                              <p class="text-sm"><strong>Lokasi:</strong> ${point.region}</p>
                              <p class="text-sm"><strong>Luas:</strong> ${point.area_hectares} ha</p>
                              <p class="text-sm"><strong>Intensitas:</strong> ${point.intensity}%</p>
                         </div>
                    `)
               })
          }

          // Flood History Layer
          if (layers.floodHistory && floodData.length > 0) {
               floodData.forEach(flood => {
                    const severityColors = {
                         low: '#60a5fa',
                         medium: '#3b82f6',
                         high: '#1e40af',
                         critical: '#1e3a8a'
                    }

                    const marker = L.circleMarker([flood.lat, flood.lng], {
                         radius: 8,
                         fillColor: severityColors[flood.severity],
                         color: '#fff',
                         weight: 2,
                         opacity: 1,
                         fillOpacity: 0.8
                    }).addTo(map)

                    marker.bindPopup(`
                         <div class="p-3">
                              <h3 class="font-bold text-lg text-blue-600 mb-2">💧 Banjir ${flood.year}</h3>
                              <p class="text-sm"><strong>Lokasi:</strong> ${flood.location}</p>
                              <p class="text-sm"><strong>Tingkat:</strong> <span class="capitalize">${flood.severity}</span></p>
                              <p class="text-sm"><strong>Korban:</strong> ${flood.casualties} orang</p>
                              <p class="text-sm"><strong>Terdampak:</strong> ${flood.affected.toLocaleString()} orang</p>
                              <p class="text-sm mt-1">${flood.description}</p>
                         </div>
                    `)
               })
          }

          // Fire Hotspots Layer
          if (layers.fireHotspots && fireData.length > 0) {
               fireData.forEach(fire => {
                    const marker = L.marker([fire.lat, fire.lng], {
                         icon: L.divIcon({
                              className: 'fire-marker',
                              html: '<div style="background: #f97316; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(249, 115, 22, 0.8);"></div>',
                              iconSize: [12, 12]
                         })
                    }).addTo(map)

                    marker.bindPopup(`
                         <div class="p-3">
                              <h3 class="font-bold text-lg text-orange-600 mb-2">🔥 Titik Api</h3>
                              <p class="text-sm"><strong>Lokasi:</strong> ${fire.location}</p>
                              <p class="text-sm"><strong>Kepercayaan:</strong> <span class="capitalize">${fire.confidence}</span></p>
                              <p class="text-sm"><strong>Brightness:</strong> ${fire.brightness}K</p>
                              <p class="text-sm"><strong>FRP:</strong> ${fire.frp} MW</p>
                              <p class="text-sm"><strong>Tipe:</strong> <span class="capitalize">${fire.type}</span></p>
                         </div>
                    `)
               })
          }

          // Biodiversity Layer
          if (layers.biodiversity && biodiversityData.length > 0) {
               biodiversityData.forEach(area => {
                    const marker = L.circleMarker([area.lat, area.lng], {
                         radius: 10,
                         fillColor: '#10b981',
                         color: '#fff',
                         weight: 2,
                         opacity: 1,
                         fillOpacity: 0.7
                    }).addTo(map)

                    marker.bindPopup(`
                         <div class="p-3">
                              <h3 class="font-bold text-lg text-green-600 mb-2">🦜 Kawasan Lindung</h3>
                              <p class="text-sm"><strong>Nama:</strong> ${area.location}</p>
                              <p class="text-sm"><strong>Tipe:</strong> ${area.type}</p>
                              <p class="text-sm"><strong>Luas:</strong> ${area.area_km2.toLocaleString()} km²</p>
                              <p class="text-sm"><strong>Spesies:</strong> ${area.species.join(', ')}</p>
                         </div>
                    `)
               })
          }

     }, [map, layers, deforestationData, floodData, fireData, biodiversityData])

     return null
}

export default MapLayers
