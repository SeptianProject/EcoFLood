"use client"

import React from 'react'

interface SimulationResultsProps {
     floodProbability: number
     waterRunoff: number
     environmentalHealth: number
     riskLevel: 'low' | 'medium' | 'high' | 'critical'
     factors: {
          forestImpact: number
          rainfallImpact: number
          soilImpact: number
     }
     recommendations: string[]
}

const SimulationResults: React.FC<SimulationResultsProps> = ({
     floodProbability,
     waterRunoff,
     environmentalHealth,
     riskLevel,
     factors,
     recommendations
}) => {
     const riskColors = {
          low: { bg: 'bg-green-500', text: 'text-green-500', label: 'Rendah' },
          medium: { bg: 'bg-yellow-500', text: 'text-yellow-500', label: 'Sedang' },
          high: { bg: 'bg-orange-500', text: 'text-orange-500', label: 'Tinggi' },
          critical: { bg: 'bg-red-600', text: 'text-red-600', label: 'Kritis' }
     }

     const currentRisk = riskColors[riskLevel]

     return (
          <div className="space-y-6">
               {/* Risk Level Banner */}
               <div className={`${currentRisk.bg} text-white rounded-3xl p-6 shadow-xl`}>
                    <div className="flex items-center justify-between">
                         <div>
                              <h3 className="text-lg font-semibold mb-1">Tingkat Risiko</h3>
                              <p className="text-3xl font-bold">{currentRisk.label.toUpperCase()}</p>
                         </div>
                         <div className="text-6xl">
                              {riskLevel === 'low' && '✅'}
                              {riskLevel === 'medium' && '⚠️'}
                              {riskLevel === 'high' && '🚨'}
                              {riskLevel === 'critical' && '🆘'}
                         </div>
                    </div>
               </div>

               {/* Key Metrics */}
               <div className="grid grid-cols-3 gap-4">
                    <MetricCard
                         title="Probabilitas Banjir"
                         value={floodProbability}
                         icon="💧"
                         color="blue"
                    />
                    <MetricCard
                         title="Aliran Air"
                         value={waterRunoff}
                         icon="🌊"
                         color="cyan"
                    />
                    <MetricCard
                         title="Kesehatan Lingkungan"
                         value={environmentalHealth}
                         icon="🌿"
                         color="green"
                    />
               </div>

               {/* Impact Factors */}
               <div className="bg-surface-primary/5 rounded-3xl p-6 border-2 border-surface-primary/20">
                    <h3 className="text-xl font-bold text-surface-primary mb-4">Faktor Dampak</h3>
                    <div className="space-y-4">
                         <FactorBar
                              label="Dampak Kehilangan Hutan"
                              value={factors.forestImpact}
                              color="bg-primary"
                         />
                         <FactorBar
                              label="Dampak Intensitas Hujan"
                              value={factors.rainfallImpact}
                              color="bg-accent"
                         />
                         <FactorBar
                              label="Dampak Kondisi Tanah"
                              value={factors.soilImpact}
                              color="bg-surface-primary"
                         />
                    </div>
               </div>

               {/* Recommendations */}
               <div className="bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl p-6 border-2 border-primary/30">
                    <h3 className="text-xl font-bold text-surface-primary mb-4">💡 Rekomendasi</h3>
                    <ul className="space-y-3">
                         {recommendations.map((rec, index) => (
                              <li key={index} className="flex items-start gap-3 text-surface-primary">
                                   <span className="text-lg mt-0.5">•</span>
                                   <span className="flex-1">{rec}</span>
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     )
}

interface MetricCardProps {
     title: string
     value: number
     icon: string
     color: 'blue' | 'cyan' | 'green'
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, color }) => {
     const colorClasses = {
          blue: 'from-blue-500 to-blue-600',
          cyan: 'from-cyan-500 to-cyan-600',
          green: 'from-green-500 to-green-600'
     }

     return (
          <div className={`bg-linear-to-br ${colorClasses[color]} text-white rounded-2xl p-5 shadow-lg`}>
               <div className="text-3xl mb-2">{icon}</div>
               <div className="text-sm font-medium opacity-90 mb-1">{title}</div>
               <div className="text-3xl font-bold">{value}%</div>
          </div>
     )
}

interface FactorBarProps {
     label: string
     value: number
     color: string
}

const FactorBar: React.FC<FactorBarProps> = ({ label, value, color }) => {
     return (
          <div>
               <div className="flex justify-between mb-2">
                    <span className="text-surface-primary font-medium text-sm">{label}</span>
                    <span className="text-surface-primary font-bold">{value}%</span>
               </div>
               <div className="w-full bg-surface-primary/10 rounded-full h-3 overflow-hidden">
                    <div
                         className={`${color} h-full rounded-full transition-all duration-500 ease-out`}
                         style={{ width: `${value}%` }}
                    />
               </div>
          </div>
     )
}

export default SimulationResults
