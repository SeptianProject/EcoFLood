"use client"

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
     title: string
     value: number
     icon: LucideIcon
     bgColor: string
     textColor: string
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, bgColor, textColor }) => {
     return (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border-2 border-surface-primary/10 hover:shadow-2xl transition-all hover:scale-105">
               <div className="flex items-center justify-between mb-4">
                    <div
                         className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                         style={{ backgroundColor: bgColor }}
                    >
                         <Icon className="w-7 h-7" style={{ color: textColor }} />
                    </div>
                    <div className="text-right">
                         <p className="text-sm font-semibold text-surface-primary/60 uppercase tracking-wide">{title}</p>
                         <p className="text-4xl font-black mt-1" style={{ color: textColor }}>
                              {value}
                         </p>
                    </div>
               </div>
               <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: bgColor }}>
                    <div className="h-full rounded-full transition-all" style={{ backgroundColor: textColor, width: '100%' }} />
               </div>
          </div>
     )
}

export default StatsCard
