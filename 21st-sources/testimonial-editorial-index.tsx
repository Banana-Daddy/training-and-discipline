// 21st.dev component cache — for HANDOFF MODE / React rebuild reference
// Query: "testimonial pull-quote serif"
// Component: Editorial Testimonial (TestimonialsEditorial)
// Date: 2026-04-28
// Used in: T&D Both Directions — large-numeral testimonial block
// What we borrowed: oversized index numeral (10% opacity) sitting next to a 3xl light-weight serif/sans quote, vertical-line nav selector beneath, grayscale→color avatar reveal on hover
// Translation notes: replaced framer-motion transitions with CSS opacity/transform + IntersectionObserver; swapped to brand fonts (Direction A: Inter Tight, Direction B: Fraunces); kept the 120px index numeral motif

"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "The attention to detail and creative vision transformed our brand identity completely.",
    author: "Sarah Chen",
    role: "Creative Director",
    company: "Studio Forma",
    image: "...",
  },
]

export default function TestimonialsEditorial() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <div className="w-full max-w-2xl mx-auto px-6 py-16">
      <div className="flex items-start gap-8">
        <span
          className="text-[120px] font-light leading-none text-foreground/10 select-none transition-all duration-500"
          style={{ fontFeatureSettings: '"tnum"' }}
        >
          {String(active + 1).padStart(2, "0")}
        </span>

        <div className="flex-1 pt-6">
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground tracking-tight">
            {current.quote}
          </blockquote>

          <div className="mt-10 group cursor-default">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-foreground/10 group-hover:ring-foreground/30 transition-all duration-300">
                <Image
                  src={current.image}
                  alt={current.author}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div>
                <p className="font-medium text-foreground">{current.author}</p>
                <p className="text-sm text-muted-foreground">
                  {current.role}
                  <span className="mx-2 text-foreground/20">/</span>
                  <span className="group-hover:text-foreground transition-colors duration-300">{current.company}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {testimonials.map((_, index) => (
            <button key={index} onClick={() => setActive(index)} className="group relative py-4">
              <span className={`block h-px transition-all duration-500 ease-out ${
                index === active ? "w-12 bg-foreground" : "w-6 bg-foreground/20 group-hover:w-8 group-hover:bg-foreground/40"
              }`}/>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
