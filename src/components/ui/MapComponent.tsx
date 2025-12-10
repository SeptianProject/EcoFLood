import React from 'react'
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { FloodPredictionResponse } from '@/interface'

// Custom water drop icon for flood prediction
const createFloodIcon = (isActive: boolean) => new L.Icon({
     iconUrl: 'data:image/svg+xml;base64,' + btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${isActive ? 50 : 40}" height="${isActive ? 50 : 40}">
               <defs>
                    <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                         <stop offset="0%" style="stop-color:${isActive ? '#60a5fa' : '#3b82f6'};stop-opacity:1" />
                         <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
                    </linearGradient>
                    <filter id="glow">
                         <feGaussianBlur stdDeviation="${isActive ? '2' : '0'}" result="coloredBlur"/>
                         <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                         </feMerge>
                    </filter>
               </defs>
               <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" 
                     fill="url(#waterGradient)" 
                     stroke="#1e3a8a" 
                     stroke-width="1.5"
                     filter="url(#glow)"/>
               <ellipse cx="12" cy="15" rx="3" ry="2" fill="#60a5fa" opacity="0.6"/>
          </svg>
     `),
     iconSize: isActive ? [50, 50] : [40, 40],
     iconAnchor: isActive ? [25, 50] : [20, 40],
     popupAnchor: [0, -40],
})

interface MapComponentProps {
     location: [number, number]
     data?: FloodPredictionResponse
     onMarkerClick?: (data: FloodPredictionResponse) => void
     isActive?: boolean
}

const MarkerWithClick: React.FC<{
     position: [number, number]
     icon: L.Icon
     onClick: () => void
}> = ({ position, icon, onClick }) => {
     useMapEvents({
          click: () => {
          },
     })

     return (
          <Marker
               position={position}
               icon={icon}
               eventHandlers={{
                    click: (e) => {
                         e.originalEvent.stopPropagation()
                         onClick()
                    },
               }}
          />
     )
}

const MapComponent: React.FC<MapComponentProps> = ({ location, data, onMarkerClick, isActive = false }) => {
     const handleMarkerClick = () => {
          if (data && onMarkerClick) {
               onMarkerClick(data)
          }
     }

     return (
          <MapContainer
               center={location}
               zoom={13}
               attributionControl={false}
               zoomControl={false}
               scrollWheelZoom={true}
               className='h-full w-full rounded-lg shadow-2xl'
          >
               <TileLayer
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
               />

               {data && (
                    <MarkerWithClick
                         position={[data.lat, data.lng]}
                         icon={createFloodIcon(isActive)}
                         onClick={handleMarkerClick}
                    />
               )}
          </MapContainer>
     )
}

export default MapComponent
