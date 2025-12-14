"use client"

import React from 'react'
import { Filter, Clock, CheckCircle2, XCircle } from 'lucide-react'

interface FilterTabsProps {
     filterStatus: string
     onFilterChange: (status: string) => void
     counts: {
          all: number
          pending: number
          approved: number
          rejected: number
     }
}

const FilterTabs: React.FC<FilterTabsProps> = ({ filterStatus, onFilterChange, counts }) => {
     const tabs = [
          { value: "all", label: "Semua", icon: Filter, count: counts.all, color: "#2a6354" },
          { value: "pending", label: "Menunggu", icon: Clock, count: counts.pending, color: "#f59e0b" },
          { value: "approved", label: "Disetujui", icon: CheckCircle2, count: counts.approved, color: "#10b981" },
          { value: "rejected", label: "Ditolak", icon: XCircle, count: counts.rejected, color: "#ef4444" },
     ]

     return (
          <div className="flex flex-wrap gap-3 mb-8">
               {tabs.map((tab) => (
                    <button
                         key={tab.value}
                         onClick={() => onFilterChange(tab.value)}
                         className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all ${filterStatus === tab.value
                                   ? "shadow-xl scale-105"
                                   : "bg-white/80 hover:bg-white hover:shadow-lg"
                              }`}
                         style={{
                              backgroundColor: filterStatus === tab.value ? tab.color + "15" : undefined,
                              borderWidth: "2px",
                              borderColor: filterStatus === tab.value ? tab.color : "transparent",
                              color: filterStatus === tab.value ? tab.color : "#2a6354",
                         }}
                    >
                         <tab.icon className="w-5 h-5" />
                         <span>{tab.label}</span>
                         <span
                              className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                              style={{
                                   backgroundColor: tab.color + "20",
                                   color: tab.color,
                              }}
                         >
                              {tab.count}
                         </span>
                    </button>
               ))}
          </div>
     )
}

export default FilterTabs
