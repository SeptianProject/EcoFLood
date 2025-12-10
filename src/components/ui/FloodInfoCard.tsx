import React from 'react'
import { FloodPredictionResponse } from '@/interface'

interface FloodInfoCardProps {
     data: FloodPredictionResponse
     onClose?: () => void
}

const FloodInfoCard: React.FC<FloodInfoCardProps> = ({ data, onClose }) => {
     const getStatusColor = (status: string) => {
          if (status.toLowerCase().includes('tinggi') || status.toLowerCase().includes('bahaya')) {
               return '#ef4444' // red
          } else if (status.toLowerCase().includes('sedang') || status.toLowerCase().includes('waspada')) {
               return '#f59e0b' // orange
          } else {
               return '#10b981' // green
          }
     }

     const getStatusIcon = (status: string) => {
          if (status.toLowerCase().includes('tinggi') || status.toLowerCase().includes('bahaya')) {
               return '🚨'
          } else if (status.toLowerCase().includes('sedang') || status.toLowerCase().includes('waspada')) {
               return '⚠️'
          } else {
               return '✅'
          }
     }

     const statusColor = getStatusColor(data.floodPrediction.hasil_prediksi_potensi_banjir)
     const statusIcon = getStatusIcon(data.floodPrediction.hasil_prediksi_potensi_banjir)

     return (
          <div className='h-full overflow-y-auto bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-2xl border-4 border-blue-900'>
               {/* Header */}
               <div className='flex justify-between items-start mb-4'>
                    <div>
                         <h2 className='text-2xl font-bold text-blue-900 mb-1'>
                              🌊 EcoFlood Prediction
                         </h2>
                         <p className='text-sm text-gray-600'>
                              Analisis Prediksi Banjir Real-time
                         </p>
                    </div>
                    {onClose && (
                         <button
                              onClick={onClose}
                              className='text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors'
                              aria-label='Close'
                         >
                              ×
                         </button>
                    )}
               </div>

               {/* Koordinat */}
               <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
                    <p className='text-xs text-gray-500 mb-2'>📍 KOORDINAT LOKASI</p>
                    <div className='grid grid-cols-2 gap-2'>
                         <div>
                              <p className='text-xs text-gray-600'>Latitude</p>
                              <p className='font-mono font-bold text-blue-900'>{data.lat.toFixed(6)}</p>
                         </div>
                         <div>
                              <p className='text-xs text-gray-600'>Longitude</p>
                              <p className='font-mono font-bold text-blue-900'>{data.lng.toFixed(6)}</p>
                         </div>
                    </div>
                    <div className='mt-3 pt-3 border-t border-gray-200'>
                         <p className='text-xs text-gray-600'>Ketinggian Daratan</p>
                         <p className='font-bold text-blue-900'>{data.floodPrediction.ketinggian_daratan}m MDPL</p>
                    </div>
               </div>

               {/* Status Prediksi - Highlight */}
               <div
                    className='p-5 rounded-xl shadow-xl mb-6 border-l-8 transform transition-all duration-300 hover:scale-[1.02]'
                    style={{
                         borderColor: statusColor,
                         background: `linear-gradient(135deg, ${statusColor}15 0%, ${statusColor}05 100%)`
                    }}
               >
                    <div className='flex items-center gap-3 mb-2'>
                         <span className='text-4xl'>{statusIcon}</span>
                         <div>
                              <p className='text-xs text-gray-600 uppercase tracking-wide'>Status Prediksi Banjir</p>
                              <p className='font-bold text-xl' style={{ color: statusColor }}>
                                   {data.floodPrediction.hasil_prediksi_potensi_banjir}
                              </p>
                         </div>
                    </div>
               </div>

               {/* Data Cuaca & Lingkungan */}
               <div className='space-y-3 mb-6'>
                    <h3 className='font-bold text-lg text-blue-900 mb-3 border-b-2 border-blue-300 pb-2'>
                         📊 Data Cuaca & Lingkungan
                    </h3>

                    <div className='bg-white p-4 rounded-lg shadow-md'>
                         <div className='flex items-start gap-3'>
                              <span className='text-2xl'>💧</span>
                              <div className='flex-1'>
                                   <p className='text-xs text-gray-600 mb-1'>Curah Hujan Hari Ini</p>
                                   <p className='font-bold text-blue-900 mb-2'>{data.floodPrediction.jumlah_hujan_turun_hari_ini}</p>
                                   <p className='text-sm text-gray-700 bg-blue-50 p-2 rounded'>
                                        {data.floodPrediction.hasil.analisis_hujan}
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className='bg-white p-4 rounded-lg shadow-md'>
                         <div className='flex items-start gap-3'>
                              <span className='text-2xl'>🌱</span>
                              <div className='flex-1'>
                                   <p className='text-xs text-gray-600 mb-1'>Kadar Air Tanah</p>
                                   <p className='font-bold text-blue-900 mb-2'>{data.floodPrediction.kadar_air_pada_tanah}</p>
                                   <p className='text-sm text-gray-700 bg-blue-50 p-2 rounded'>
                                        {data.floodPrediction.hasil.kondisi_tanah}
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className='bg-white p-4 rounded-lg shadow-md'>
                         <div className='flex items-start gap-3'>
                              <span className='text-2xl'>🌊</span>
                              <div className='flex-1'>
                                   <p className='text-xs text-gray-600 mb-1'>Debit Sungai</p>
                                   <p className='font-bold text-blue-900 mb-2'>{data.floodPrediction.debit_sungai_rata_rata}</p>
                                   <p className='text-sm text-gray-700 bg-blue-50 p-2 rounded'>
                                        {data.floodPrediction.hasil.status_sungai}
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className='bg-white p-4 rounded-lg shadow-md'>
                         <div className='flex items-start gap-3'>
                              <span className='text-2xl'>💦</span>
                              <div className='flex-1'>
                                   <p className='text-xs text-gray-600 mb-1'>Sistem Drainase</p>
                                   <p className='text-sm text-gray-700 bg-blue-50 p-2 rounded'>
                                        {data.floodPrediction.hasil.drainase_alami}
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Footer */}
               <div className='mt-6 pt-4 border-t-2 border-blue-300'>
                    <div className='flex items-center justify-between text-sm text-gray-600'>
                         <span>🕐 Data pada pukul {data.floodPrediction.jam_saat_ini}:00 WIB</span>
                         <span className='bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                              LIVE
                         </span>
                    </div>
               </div>
          </div>
     )
}

export default FloodInfoCard
