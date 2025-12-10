/* eslint-disable react-hooks/set-state-in-effect */
"use client"

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useQuery } from '@tanstack/react-query'
import { floodService } from '@/services'
import { FloodPredictionResponse } from '@/interface'

const MapComponent = dynamic(
     () => import('@/components/ui/MapComponent'),
     {
          ssr: false,
          loading: () => <div className='h-full w-full flex items-center justify-center'>Loading...</div>
     }
)

const FloodInfoCard = dynamic(
     () => import('@/components/ui/FloodInfoCard'),
     {
          ssr: false,
          loading: () => <div className='h-full w-full flex items-center justify-center'>Loading...</div>
     }
)

const Page = () => {
     const [isMounted, setIsMounted] = useState(false)
     const [selectedData, setSelectedData] = useState<FloodPredictionResponse | null>(null)
     const [showInfo, setShowInfo] = useState(false)

     const { data, isLoading, isError } = useQuery<FloodPredictionResponse>({
          queryKey: ['floodPrediction'],
          queryFn: () => floodService.getPrediction(-8.351325, 114.026634),
     })

     const location: [number, number] = [-8.351325, 114.026634]

     useEffect(() => {
          setIsMounted(true)
     }, [])

     const handleMarkerClick = (markerData: FloodPredictionResponse) => {
          setSelectedData(markerData)
          setShowInfo(true)
     }

     const handleCloseInfo = () => {
          setShowInfo(false)
          setSelectedData(null)
     }

     if (!isMounted || isLoading) {
          return <div className='h-screen w-full flex items-center justify-center text-foreground'>
               <div className='text-center'>
                    <div className='text-xl'>Loading...</div>
               </div>
          </div>
     }

     if (isError) {
          return <div className='h-screen w-full flex items-center justify-center text-foreground'>
               <div className='text-center'>
                    <div className='text-xl'>Terjadi kesalahan saat memuat data peta.</div>
               </div>
          </div>
     }

     return (
          <div className='h-screen w-full p-10'>
               <div className='h-full w-full flex'>
                    {/* Map Container */}
                    <div className={`transition-all duration-500 ease-in-out ${showInfo ? 'w-2/3' : 'w-full'}`}>
                         <MapComponent
                              location={location}
                              data={data}
                              onMarkerClick={handleMarkerClick}
                              isActive={showInfo}
                         />
                    </div>

                    {/* Info Card Container - Slide in from right */}
                    <div
                         className={`transition-all duration-500 ease-in-out ${showInfo ? 'w-1/3 opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-full'
                              } overflow-hidden`}
                    >
                         {selectedData && showInfo && (
                              <FloodInfoCard
                                   data={selectedData}
                                   onClose={handleCloseInfo}
                              />
                         )}
                    </div>
               </div>
          </div>
     )
}

export default Page