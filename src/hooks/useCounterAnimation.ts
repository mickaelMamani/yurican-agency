import { useState, useEffect, useRef } from 'react'

export function useCounterAnimation(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const steps = 60
          const increment = end / steps
          const stepDuration = duration / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, stepDuration)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return { count, ref }
}
