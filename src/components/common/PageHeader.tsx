"use client"

import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

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

     // Animation hooks untuk setiap elemen
     const [backButtonRef, backButtonVisible] = useScrollAnimation({ initialAnimation: true, delay: 100, waitForPageLoad: true })
     const [titleRef, titleVisible] = useScrollAnimation({ initialAnimation: true, delay: 200, waitForPageLoad: true })
     const [buttonRef, buttonVisible] = useScrollAnimation({ initialAnimation: true, delay: 300, waitForPageLoad: true })

     return (
          <div className={`bg-surface-primary text-background shadow-lg ${className}`}>
               <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6'>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
                         <div className='flex items-center gap-3 sm:gap-4 w-full sm:w-auto'>
                              {showBackButton && (
                                   <>
                                        <button
                                             ref={backButtonRef}
                                             onClick={() => router.push(backTo)}
                                             className={`flex items-center gap-2 hover:text-primary transition-all duration-700 cursor-pointer ${backButtonVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                                  }`}
                                             aria-label='Kembali'
                                        >
                                             <ArrowLeft size={20} className="sm:w-6 sm:h-6" />
                                             <span className='font-semibold text-sm sm:text-base'>Kembali</span>
                                        </button>
                                        <div className='h-6 sm:h-8 w-px bg-background/30' />
                                   </>
                              )}
                              <div
                                   ref={titleRef}
                                   className={`transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                                        }`}
                              >
                                   <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold'>{title}</h1>
                                   {subtitle && (
                                        <p className='text-background/80 text-xs sm:text-sm mt-1'>
                                             {subtitle}
                                        </p>
                                   )}
                              </div>
                         </div>
                         {rightContent && (
                              <div
                                   ref={buttonRef}
                                   className={`w-full sm:w-auto transition-all duration-700 ${buttonVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                        }`}
                              >
                                   {rightContent}
                              </div>
                         )}
                    </div>
               </div>
          </div>
     )
}

export default PageHeader
