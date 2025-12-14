"use client"

import React from 'react'
import { DISASTER_TYPES } from '@/interface'
import DisasterIcon from '@/components/common/DisasterIcon'

interface DisasterTypeStatsProps {
     reports: Array<{ type_disaster?: string }>
}

const DisasterTypeStats: React.FC<DisasterTypeStatsProps> = ({ reports }) => {
     const totalReports = reports.length

     return (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-surface-primary/10">
               <h3 className="text-xl font-bold text-surface-primary mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                         <DisasterIcon iconName="Waves" size={20} className="text-primary" />
                    </div>
                    Statistik Jenis Kejadian
               </h3>
               <div className="space-y-4">
                    {DISASTER_TYPES.map((type) => {
                         const count = reports.filter(r => r.type_disaster === type.value).length
                         const percentage = totalReports > 0 ? (count / totalReports) * 100 : 0

                         return (
                              <div key={type.value} className="space-y-2">
                                   <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                             <div
                                                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                                                  style={{ backgroundColor: type.bgColor }}
                                             >
                                                  <DisasterIcon iconName={type.iconName} size={16} style={{ color: type.color }} />
                                             </div>
                                             <span className="text-sm font-semibold text-surface-primary">{type.label}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                             <span className="text-xs font-bold text-surface-primary/60">
                                                  {count} laporan
                                             </span>
                                             <span className="text-sm font-bold" style={{ color: type.color }}>
                                                  {percentage.toFixed(0)}%
                                             </span>
                                        </div>
                                   </div>
                                   <div className="h-2 bg-surface-primary/5 rounded-full overflow-hidden">
                                        <div
                                             className="h-full rounded-full transition-all duration-500"
                                             style={{
                                                  width: `${percentage}%`,
                                                  backgroundColor: type.color
                                             }}
                                        />
                                   </div>
                              </div>
                         )
                    })}
               </div>
          </div>
     )
}

export default DisasterTypeStats
