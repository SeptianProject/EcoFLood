/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useState, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import MapSidebar from '@/components/peta/MapSidebar'
import MapLayers from '@/components/peta/MapLayers'
import {
     fetchTreeCoverLoss,
     fetchFloodHistory,
     fetchFireHotspots,
     fetchBiodiversityData
} from '@/services/data'

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

// Fix Leaflet default marker icon issue
if (typeof window !== 'undefined') {
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     delete (L.Icon.Default.prototype as any)._getIconUrl
     L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
     })
}

const Page = () => {
     const [isMounted, setIsMounted] = useState(false)
     const mapRef = useRef<L.Map | null>(null)
     const mapContainerRef = useRef<HTMLDivElement>(null)

     // Sidebar state
     const [selectedIsland, setSelectedIsland] = useState('all')
     const [selectedYear, setSelectedYear] = useState(2024)
     const [layers, setLayers] = useState({
          deforestation: true,
          floodHistory: true,
          fireHotspots: false,
          biodiversity: false
     })

     // Data state
     const [deforestationData, setDeforestationData] = useState<DeforestationData[]>([])
     const [floodData, setFloodData] = useState<FloodData[]>([])
     const [fireData, setFireData] = useState<FireData[]>([])
     const [biodiversityData, setBiodiversityData] = useState<BiodiversityData[]>([])
     const [isLoading, setIsLoading] = useState(true)

     // Island coordinates for centering map
     const islandCoordinates = {
          all: { center: [-0.7893, 113.9213] as [number, number], zoom: 5 },
          sumatra: { center: [0.0, 101.5] as [number, number], zoom: 6 },
          java: { center: [-7.5, 110.0] as [number, number], zoom: 7 },
          kalimantan: { center: [-1.0, 114.0] as [number, number], zoom: 6 },
          sulawesi: { center: [-1.5, 121.0] as [number, number], zoom: 6 },
          papua: { center: [-4.0, 137.0] as [number, number], zoom: 6 }
     }

     useEffect(() => {
          setIsMounted(true)
     }, [])

     // Initialize map
     useEffect(() => {
          if (!isMounted || !mapContainerRef.current || mapRef.current) return

          const map = L.map(mapContainerRef.current).setView([-0.7893, 113.9213], 5)

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
               attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map)

          mapRef.current = map

          return () => {
               if (mapRef.current) {
                    mapRef.current.remove()
                    mapRef.current = null
               }
          }
     }, [isMounted])

     // Load data when island or year changes
     useEffect(() => {
          if (!isMounted) return

          const loadData = async () => {
               setIsLoading(true)
               try {
                    const [deforest, flood, fire, bio] = await Promise.all([
                         fetchTreeCoverLoss(selectedYear),
                         fetchFloodHistory(selectedIsland, selectedYear),
                         fetchFireHotspots(selectedIsland, selectedYear),
                         fetchBiodiversityData(selectedIsland)
                    ])

                    setDeforestationData(deforest.data || [])
                    setFloodData((flood || []) as FloodData[])
                    setFireData((fire || []) as FireData[])
                    setBiodiversityData((bio || []) as BiodiversityData[])
               } catch (error) {
                    console.error('Error loading data:', error)
               } finally {
                    setIsLoading(false)
               }
          }

          loadData()
     }, [selectedIsland, selectedYear, isMounted])

     // Update map view when island changes
     useEffect(() => {
          if (!mapRef.current) return

          const coords = islandCoordinates[selectedIsland as keyof typeof islandCoordinates]
          if (coords) {
               mapRef.current.setView(coords.center, coords.zoom, {
                    animate: true,
                    duration: 1
               })
          }
     }, [selectedIsland])

     const handleLayerToggle = (layer: string) => {
          setLayers(prev => ({
               ...prev,
               [layer]: !prev[layer as keyof typeof prev]
          }))
     }

     if (!isMounted) {
          return (
               <div className='h-screen w-full flex items-center justify-center bg-background text-surface-primary'>
                    <div className='text-center'>
                         <div className='text-xl'>Loading...</div>
                    </div>
               </div>
          )
     }

     return (
          <div className='h-screen w-full flex bg-background overflow-hidden'>
               {/* Sidebar */}
               <MapSidebar
                    selectedIsland={selectedIsland}
                    onIslandChange={setSelectedIsland}
                    selectedYear={selectedYear}
                    onYearChange={setSelectedYear}
                    layers={layers}
                    onLayerToggle={handleLayerToggle}
               />

               {/* Map Container */}
               <div className='flex-1 relative'>
                    <div ref={mapContainerRef} className='w-full h-full' />

                    {/* Loading overlay */}
                    {isLoading && (
                         <div className='absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center' style={{ zIndex: 1000 }}>
                              <div className='bg-surface-primary text-background px-6 py-3 rounded-full shadow-lg'>
                                   <span className='font-semibold'>Memuat data...</span>
                              </div>
                         </div>
                    )}

                    {/* Map Layers */}
                    <MapLayers
                         map={mapRef.current}
                         layers={layers}
                         selectedIsland={selectedIsland}
                         selectedYear={selectedYear}
                         deforestationData={deforestationData}
                         floodData={floodData}
                         fireData={fireData}
                         biodiversityData={biodiversityData}
                    />
               </div>
          </div>
     )
}

export default Page