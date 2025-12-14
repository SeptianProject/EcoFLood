'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface PageLoadContextType {
     isPageLoaded: boolean
}

const PageLoadContext = createContext<PageLoadContextType>({ isPageLoaded: false })

export const usePageLoad = () => useContext(PageLoadContext)

export function PageLoadProvider({ children }: { children: ReactNode }) {
     const [isPageLoaded, setIsPageLoaded] = useState(false)

     useEffect(() => {
          // Wait for the PageLoader to finish (1000ms + 300ms buffer)
          const timer = setTimeout(() => {
               setIsPageLoaded(true)
          }, 1400)

          return () => clearTimeout(timer)
     }, [])

     return (
          <PageLoadContext.Provider value={{ isPageLoaded }}>
               {children}
          </PageLoadContext.Provider>
     )
}
