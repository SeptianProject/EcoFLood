'use client'

import { useEffect, useRef, useState } from 'react'
import { usePageLoad } from '@/contexts/PageLoadContext'

interface UseScrollAnimationOptions {
     threshold?: number
     triggerOnce?: boolean
     delay?: number
     rootMargin?: string
     initialAnimation?: boolean // Trigger animation immediately on mount
     waitForPageLoad?: boolean // Wait for page loader to finish before animating
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(options: UseScrollAnimationOptions = {}) {
     const {
          threshold = 0.1,
          triggerOnce = true,
          delay = 0,
          rootMargin = '0px',
          initialAnimation = false,
          waitForPageLoad = false,
     } = options

     const elementRef = useRef<T>(null)
     const [isVisible, setIsVisible] = useState(false)
     const { isPageLoaded } = usePageLoad()

     useEffect(() => {
          const element = elementRef.current
          if (!element) return

          // If waitForPageLoad is true, wait for page to load first
          if (waitForPageLoad && !isPageLoaded) {
               return
          }

          // If initialAnimation is true, trigger immediately after delay
          if (initialAnimation) {
               const timer = setTimeout(() => {
                    setIsVisible(true)
               }, delay)
               return () => clearTimeout(timer)
          }

          // Otherwise use IntersectionObserver
          const observer = new IntersectionObserver(
               ([entry]) => {
                    if (entry.isIntersecting) {
                         if (delay > 0) {
                              setTimeout(() => {
                                   setIsVisible(true)
                              }, delay)
                         } else {
                              setIsVisible(true)
                         }

                         if (triggerOnce) {
                              observer.unobserve(element)
                         }
                    } else if (!triggerOnce) {
                         setIsVisible(false)
                    }
               },
               {
                    threshold,
                    rootMargin,
               }
          )

          observer.observe(element)

          return () => {
               if (element) {
                    observer.unobserve(element)
               }
          }
     }, [threshold, triggerOnce, delay, rootMargin, initialAnimation, waitForPageLoad, isPageLoaded])

     return [elementRef, isVisible] as const
}
