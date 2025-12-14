"use client"

import React from 'react'
import { DISASTER_TYPES, type DisasterType } from '@/interface'
import DisasterIcon from '@/components/common/DisasterIcon'

interface DisasterTypeSelectorProps {
     selectedType: DisasterType | ''
     onSelectType: (type: DisasterType) => void
}

const DisasterTypeSelector: React.FC<DisasterTypeSelectorProps> = ({
     selectedType,
     onSelectType
}) => {
     return (
          <div>
               <label className="block text-surface-primary font-semibold mb-3">
                    Jenis Kejadian <span className="text-accent">*</span>
               </label>
               <div className="grid grid-cols-2 gap-3">
                    {DISASTER_TYPES.map((type) => (
                         <button
                              key={type.value}
                              type="button"
                              onClick={() => onSelectType(type.value)}
                              className={`p-4 rounded-xl border-2 transition-all text-left hover:scale-[1.02] group ${selectedType === type.value
                                        ? 'shadow-lg'
                                        : 'hover:shadow-md bg-white'
                                   }`}
                              style={{
                                   borderColor: selectedType === type.value ? type.color : type.borderColor + '40',
                                   backgroundColor: selectedType === type.value ? type.bgColor : 'white'
                              }}
                         >
                              <div className="flex items-center gap-3 mb-2">
                                   <div
                                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                                        style={{
                                             backgroundColor: type.bgColor,
                                             color: type.color
                                        }}
                                   >
                                        <DisasterIcon iconName={type.iconName} size={20} />
                                   </div>
                                   <span
                                        className="font-semibold"
                                        style={{ color: selectedType === type.value ? type.color : '#2a6354' }}
                                   >
                                        {type.label}
                                   </span>
                              </div>
                              <p className="text-xs text-surface-primary/60 leading-relaxed pl-1">
                                   {type.description}
                              </p>
                         </button>
                    ))}
               </div>
               {selectedType && (
                    <p className="text-xs text-green-600 mt-2">
                         ✓ {DISASTER_TYPES.find(t => t.value === selectedType)?.label} dipilih
                    </p>
               )}
          </div>
     )
}

export default DisasterTypeSelector
