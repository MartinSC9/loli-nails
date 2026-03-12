import { useEffect, useState, useRef } from 'react'
import useInView from '../hooks/useInView'

function AnimatedNumber({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const [sectionRef, inView] = useInView()

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const steps = 40
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={sectionRef}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsBar() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className={`border-y border-primary/10 bg-white/50 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 gap-8">
        <div className="text-center">
          <p className="text-3xl font-black text-primary">
            <AnimatedNumber target={500} prefix="+" />
          </p>
          <p className="text-sm text-slate-500 font-medium mt-1">Diseños Realizados</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-black text-primary">
            <AnimatedNumber target={5} prefix="+" />
          </p>
          <p className="text-sm text-slate-500 font-medium mt-1">Años de Experiencia</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-black text-primary">
            <AnimatedNumber target={100} suffix="%" />
          </p>
          <p className="text-sm text-slate-500 font-medium mt-1">Productos Premium</p>
        </div>
      </div>
    </section>
  )
}
