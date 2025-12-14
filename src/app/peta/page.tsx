/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useState, useRef, useMemo } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import MapSidebar from '@/components/peta/MapSidebar'
import MapLayers from '@/components/peta/MapLayers'
import ReportButton from '@/components/peta/ReportButton'
import ReportModal from '@/components/peta/ReportModal'
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

interface UserReport {
     id: string
     lat: number
     lng: number
     location?: string
     island: string
     type?: 'flood' | 'deforestation' | 'fire' | 'other'
     description: string
     date: string
     status: 'pending' | 'success' | 'rejected'
     imageUrl?: string
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
          biodiversity: false,
          userReports: true
     })

     // Data state
     const [deforestationData, setDeforestationData] = useState<DeforestationData[]>([])
     const [floodData, setFloodData] = useState<FloodData[]>([])
     const [fireData, setFireData] = useState<FireData[]>([])
     const [biodiversityData, setBiodiversityData] = useState<BiodiversityData[]>([])
     const [userReports, setUserReports] = useState<UserReport[]>([])
     const [isLoading, setIsLoading] = useState(true)

     // Modal state
     const [isModalOpen, setIsModalOpen] = useState(false)
     const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number } | null>(null)

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

          const map = L.map(mapContainerRef.current, {
               zoomControl: false,
               attributionControl: false
          }).setView([-0.7893, 113.9213], 5)

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

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
                    const [deforest, flood, fire, bio, reports] = await Promise.all([
                         fetchTreeCoverLoss(selectedYear),
                         fetchFloodHistory(selectedIsland, selectedYear),
                         fetchFireHotspots(selectedIsland, selectedYear),
                         fetchBiodiversityData(selectedIsland),
                         fetch('/api/report-disaster').then(res => res.json())
                    ])

                    setDeforestationData(deforest.data || [])
                    setFloodData((flood || []) as FloodData[])
                    setFireData((fire || []) as FireData[])
                    setBiodiversityData((bio || []) as BiodiversityData[])

                    // Only show approved reports
                    const approvedReports = (reports || [])
                         .filter((r: { status: string }) => r.status === 'success')
                         .map((r: { id: number; latitude: number; longitude: number; description: string; createdAt: number; imageUrl: string }) => ({
                              id: r.id,
                              lat: r.latitude,
                              lng: r.longitude,
                              description: r.description,
                              date: new Date(r.createdAt).toISOString().split('T')[0],
                              status: 'success' as const,
                              island: getIslandFromCoords(r.latitude, r.longitude),
                              imageUrl: r.imageUrl
                         }))
                    setUserReports(approvedReports)
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

     // Helper function to determine island from coordinates
     const getIslandFromCoords = (lat: number, lng: number): string => {
          if (lng < 108) return 'sumatra'
          if (lng > 108 && lng < 120 && lat > -5) return 'kalimantan'
          if (lng > 105 && lng < 116 && lat < -5) return 'java'
          if (lng > 119 && lng < 126) return 'sulawesi'
          if (lng > 130) return 'papua'
          return 'other'
     }

     // Handle report success
     const handleReportSuccess = () => {
          // Show success notification
          if (typeof window !== 'undefined') {
               const notification = document.createElement('div')
               notification.className = 'fixed top-20 right-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl shadow-2xl font-bold animate-slideIn'
               notification.style.zIndex = '2001'
               notification.innerHTML = '✓ Laporan berhasil dikirim! Menunggu persetujuan admin.'
               document.body.appendChild(notification)

               setTimeout(() => {
                    notification.remove()
               }, 4000)
          }
     }

     // Update map center when map moves
     useEffect(() => {
          if (mapRef.current) {
               const map = mapRef.current
               const updateCenter = () => {
                    const center = map.getCenter()
                    setMapCenter({ lat: center.lat, lng: center.lng })
               }

               map.on('move', updateCenter)
               updateCenter() // Set initial center

               return () => {
                    map.off('move', updateCenter)
               }
          }
     }, [isMounted])

     // Filter data based on selected island
     const filteredDeforestationData = useMemo(() => {
          if (selectedIsland === 'all') return deforestationData
          return deforestationData.filter(item => item.island === selectedIsland)
     }, [deforestationData, selectedIsland])

     const filteredUserReports = useMemo(() => {
          if (selectedIsland === 'all') return userReports
          return userReports.filter(report => report.island === selectedIsland)
     }, [userReports, selectedIsland])

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
                         deforestationData={filteredDeforestationData}
                         floodData={floodData}
                         fireData={fireData}
                         biodiversityData={biodiversityData}
                         userReports={filteredUserReports}
                    />

                    {/* Floating Report Button */}
                    <ReportButton
                         onClick={() => setIsModalOpen(true)}
                    />

                    {/* Report Modal */}
                    <ReportModal
                         isOpen={isModalOpen}
                         onClose={() => setIsModalOpen(false)}
                         onSuccess={handleReportSuccess}
                         currentPosition={mapCenter}
                    />
               </div>
          </div>
     )
}

export default Page