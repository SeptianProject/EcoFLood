"use client"

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface PageHeaderProps {
     title: string
     subtitle?: string
     showBackButton?: boolean
     backTo?: string
     rightContent?: React.ReactNode
     className?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({
     title,
     subtitle,
     showBackButton = true,
     backTo = '/',
     rightContent,
     className = ''
}) => {
     const router = useRouter()

     return (
          <div className={`bg-surface-primary text-background shadow-lg ${className}`}>
               <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                         <div className='flex items-center gap-3 sm:gap-4 w-full sm:w-auto'>
                              {showBackButton && (
                                   <>
                                        <button
                                             onClick={() => router.push(backTo)}
                                             className='flex items-center gap-2 hover:text-primary transition-colors duration-300 cursor-pointer'
                                             aria-label='Kembali'
                                        >
                                             <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
                                             <span className='font-semibold text-sm sm:text-base'>Kembali</span>
                                        </button>
                                        <div className='h-6 sm:h-8 w-px bg-background/30' />
                                   </>
                              )}
                              <div>
                                   <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>{title}</h1>
                                   {subtitle && (
                                        <p className='text-background/80 text-xs sm:text-sm mt-1'>
                                             {subtitle}
                                        </p>
                                   )}
                              </div>
                         </div>
                         {rightContent && (
                              <div className='w-full sm:w-auto'>
                                   {rightContent}
                              </div>
                         )}
                    </div>
               </div>
          </div>
     )
}

export default PageHeader
