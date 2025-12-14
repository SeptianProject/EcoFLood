"use client"

import React from 'react'
import { TreePine, CloudRain, Sprout } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface SimulationControlsProps {
     forestCover: number
     rainfall: number
     soilAbsorption: 'low' | 'medium' | 'high'
     onForestCoverChange: (value: number) => void
     onRainfallChange: (value: number) => void
     onSoilAbsorptionChange: (value: 'low' | 'medium' | 'high') => void
}

const SimulationControls: React.FC<SimulationControlsProps> = ({
     forestCover,
     rainfall,
     soilAbsorption,
     onForestCoverChange,
     onRainfallChange,
     onSoilAbsorptionChange
}) => {
     // Animation hooks untuk setiap control
     const [titleRef, titleVisible] = useScrollAnimation({ initialAnimation: true, delay: 100, waitForPageLoad: true })
     const [forestRef, forestVisible] = useScrollAnimation({ initialAnimation: true, delay: 200, waitForPageLoad: true })
     const [rainfallRef, rainfallVisible] = useScrollAnimation({ initialAnimation: true, delay: 300, waitForPageLoad: true })
     const [soilRef, soilVisible] = useScrollAnimation({ initialAnimation: true, delay: 400, waitForPageLoad: true })

     return (
          <div className="bg-surface-primary/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 border-surface-primary/20">
               <h2
                    ref={titleRef}
                    className={`text-xl sm:text-2xl font-bold text-surface-primary mb-4 sm:mb-6 flex items-center gap-2 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                         }`}
               >
                    <div className="bg-primary/20 p-2 rounded-xl">
                         <TreePine className="w-4 h-4 sm:w-5 sm:h-5 text-surface-primary" />
                    </div>
                    <span className="text-lg sm:text-2xl">Parameter Simulasi</span>
               </h2>

               {/* Forest Cover Control */}
               <div
                    ref={forestRef}
                    className={`mb-6 sm:mb-8 transition-all duration-700 ${forestVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                         }`}
               >
                    <div className="flex justify-between items-center mb-3">
                         <label className="text-sm sm:text-base text-surface-primary font-semibold flex items-center gap-2">
                              <TreePine className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                              <span className="hidden sm:inline">Persentase Tutupan Hutan</span>
                              <span className="sm:hidden">Tutupan Hutan</span>
                         </label>
                         <span className="text-xl sm:text-2xl font-bold text-primary">{forestCover}%</span>
                    </div>
                    <input
                         type="range"
                         min="0"
                         max="100"
                         value={forestCover}
                         onChange={(e) => onForestCoverChange(Number(e.target.value))}
                         className="w-full h-3 bg-surface-primary/20 rounded-full appearance-none cursor-pointer slider-forest"
                    />
                    <div className="flex justify-between text-surface-primary/60 text-xs sm:text-sm mt-2">
                         <span>0%</span>
                         <span className="text-[10px] sm:text-xs hidden sm:inline">Lahan Gundul</span>
                         <span className="text-[10px] sm:text-xs hidden sm:inline">Hutan Primer</span>
                         <span>100%</span>
                    </div>
                    <div className="text-xs text-surface-primary/60 mt-2 italic">
                         Tutupan hutan ≥70% memberikan perlindungan optimal dari banjir
                    </div>
               </div>

               {/* Rainfall Control */}
               <div
                    ref={rainfallRef}
                    className={`mb-6 sm:mb-8 transition-all duration-700 ${rainfallVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                         }`}
               >
                    <div className="flex justify-between items-center mb-3">
                         <label className="text-sm sm:text-base text-surface-primary font-semibold flex items-center gap-2">
                              <CloudRain className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                              <span className="hidden sm:inline">Curah Hujan Harian</span>
                              <span className="sm:hidden">Curah Hujan</span>
                         </label>
                         <span className="text-lg sm:text-2xl font-bold text-accent">{rainfall} mm</span>
                    </div>
                    <input
                         type="range"
                         min="0"
                         max="300"
                         value={rainfall}
                         onChange={(e) => onRainfallChange(Number(e.target.value))}
                         className="w-full h-3 bg-surface-primary/20 rounded-full appearance-none cursor-pointer slider-rainfall"
                    />
                    <div className="flex justify-between text-surface-primary/60 text-xs sm:text-sm mt-2">
                         <span>0</span>
                         <span className="text-[10px] sm:text-xs hidden sm:inline">Ringan (&lt;50)</span>
                         <span className="text-[10px] sm:text-xs hidden sm:inline">Ekstrem (&gt;150)</span>
                         <span>300</span>
                    </div>
                    <div className="text-xs text-surface-primary/60 mt-2 italic">
                         Curah hujan &gt;150mm/hari dapat menyebabkan banjir di area rawan
                    </div>
               </div>

               {/* Soil Absorption Control */}
               <div
                    ref={soilRef}
                    className={`transition-all duration-700 ${soilVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                         }`}
               >
                    <label className="text-sm sm:text-base text-surface-primary font-semibold mb-3 flex items-center gap-2">
                         <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                         <span className="hidden sm:inline">Kapasitas Resapan Tanah</span>
                         <span className="sm:hidden">Resapan Tanah</span>
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2">
                         <SoilButton
                              label="Rendah"
                              value="low"
                              selected={soilAbsorption === 'low'}
                              onClick={() => onSoilAbsorptionChange('low')}
                              color="bg-red-500"
                         />
                         <SoilButton
                              label="Sedang"
                              value="medium"
                              selected={soilAbsorption === 'medium'}
                              onClick={() => onSoilAbsorptionChange('medium')}
                              color="bg-yellow-500"
                         />
                         <SoilButton
                              label="Tinggi"
                              value="high"
                              selected={soilAbsorption === 'high'}
                              onClick={() => onSoilAbsorptionChange('high')}
                              color="bg-green-500"
                         />
                    </div>
                    <div className="text-[10px] sm:text-xs text-surface-primary/60 mt-2 italic">
                         Rendah: lahan beton/gundul | Sedang: tanah biasa | Tinggi: tanah berpori + vegetasi
                    </div>
               </div>

               <style jsx>{`
                    .slider-forest::-webkit-slider-thumb {
                         -webkit-appearance: none;
                         appearance: none;
                         width: 24px;
                         height: 24px;
                         background: var(--color-primary);
                         cursor: pointer;
                         border-radius: 50%;
                         border: 3px solid var(--color-background);
                         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                    }

                    .slider-forest::-moz-range-thumb {
                         width: 24px;
                         height: 24px;
                         background: var(--color-primary);
                         cursor: pointer;
                         border-radius: 50%;
                         border: 3px solid var(--color-background);
                         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                    }

                    .slider-rainfall::-webkit-slider-thumb {
                         -webkit-appearance: none;
                         appearance: none;
                         width: 24px;
                         height: 24px;
                         background: var(--color-accent);
                         cursor: pointer;
                         border-radius: 50%;
                         border: 3px solid var(--color-background);
                         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                    }

                    .slider-rainfall::-moz-range-thumb {
                         width: 24px;
                         height: 24px;
                         background: var(--color-accent);
                         cursor: pointer;
                         border-radius: 50%;
                         border: 3px solid var(--color-background);
                         box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
                    }
               `}</style>
          </div>
     )
}

interface SoilButtonProps {
     label: string
     value: string
     selected: boolean
     onClick: () => void
     color: string
}

const SoilButton: React.FC<SoilButtonProps> = ({ label, selected, onClick, color }) => {
     return (
          <button
               onClick={onClick}
               className={`py-2 sm:py-3 px-2 sm:px-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 cursor-pointer ${selected
                    ? `${color} text-white scale-105 shadow-lg`
                    : 'bg-surface-primary/10 text-surface-primary hover:bg-surface-primary/20'
                    }`}
          >
               {label}
          </button>
     )
}

export default SimulationControls
