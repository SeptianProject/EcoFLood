"use client"

import React from 'react'
import { Plus, MessageSquare } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ReportButtonProps {
     onClick: () => void
}

const ReportButton: React.FC<ReportButtonProps> = ({ onClick }) => {
     const [buttonRef, buttonVisible] = useScrollAnimation({ initialAnimation: true, delay: 600, waitForPageLoad: true })

     return (
          <button
               ref={buttonRef}
               onClick={onClick}
               className={`group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-primary hover:bg-primary/90 text-surface-primary rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-700 hover:scale-110 active:scale-95 flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 font-bold cursor-pointer ${buttonVisible
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-50'
                    }`}
               style={{ zIndex: 9999 }}
               title="Laporkan Kejadian"
          >
               {/* Icon Container */}
               <div className="relative">
                    <div className="absolute inset-0 bg-surface-primary/20 rounded-full animate-ping opacity-75 "></div>
                    <MessageSquare className="p-1 w-6 h-6 sm:w-8 sm:h-8 relative z-10" />
               </div>

               {/* Text */}
               <span className="text-sm sm:text-lg">Laporkan</span>

               {/* Plus Icon */}
               <Plus className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-90 transition-transform duration-300" />

               <style jsx>{`
                    @keyframes ping {
                         0% {
                              transform: scale(1);
                              opacity: 1;
                         }
                         75%,
                         100% {
                              transform: scale(1.5);
                              opacity: 0;
                         }
                    }

                    .animate-ping {
                         animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                    }
               `}</style>
          </button>
     )
}

export default ReportButton
