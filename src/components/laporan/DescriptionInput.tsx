"use client"

import React from 'react'

interface DescriptionInputProps {
     value: string
     onChange: (value: string) => void
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({ value, onChange }) => {
     return (
          <div>
               <label className="block text-surface-primary font-semibold mb-2">
                    Deskripsi Kondisi Lingkungan <span className="text-accent">*</span>
               </label>
               <textarea
                    required
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Jelaskan kondisi yang Anda temukan (contoh: kerusakan hutan, aliran air tersumbat, erosi kecil, dll)"
                    rows={4}
                    className={`w-full px-4 py-3 bg-background rounded-xl border-2 focus:outline-none transition-colors text-surface-primary resize-none ${value.length > 0 && value.length < 20
                              ? 'border-accent/50 focus:border-accent'
                              : value.length >= 20
                                   ? 'border-green-500/50 focus:border-green-500'
                                   : 'border-surface-primary/20 focus:border-primary'
                         }`}
               />
               <p className={`text-xs mt-1 ${value.length >= 20
                         ? 'text-green-600'
                         : value.length > 0
                              ? 'text-accent'
                              : 'text-surface-primary/60'
                    }`}>
                    {value.length >= 20 ? '✓' : '○'} Minimal 20 karakter ({value.length}/20)
               </p>
          </div>
     )
}

export default DescriptionInput
