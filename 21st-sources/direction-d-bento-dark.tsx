// Source: 21st.dev Inspiration — "FUI Bento Grid Dark"
// Query: "bento gallery dark luxury"
// Date pulled: 2026-04-28
// Used in: Direction D (After Hours) — studio gallery as a dark bento with glassmorphism + amber glow inset
// Translation notes: Keep the asymmetric grid (lg:col-span-3 / lg:col-span-2) and the
//                    "shadow inset purple glow" (box-shadow:0 -20px 80px -20px #8686f01f inset).
//                    Replace the placeholder Framer images with our real studio photos.
//                    Drop the React framer-motion wrapper — we use a CSS hover + amber radial-glow on hover.

"use client"
import { clsx } from "clsx"
import { motion } from "framer-motion"

export default function FUIBentoGridDark() {
  return (
    <div className="pt-32 container mx-auto bg-[#] min-w-screen flex flex-col p-10 bg-gray-950/10">
      <h1 className="font-geistMono tracking-tight text-3xl md:text-5xl">Sales</h1>
      <p className="max-w-3xl text-2xl/8 font-medium tracking-tight mt-2 bg-gradient-to-br from-black/90 to-black/80 bg-clip-text text-transparent from-black to-gray-400/20 dark:from-white dark:to-white/40">
        Know more about your customers than they do.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="..."
          graphic={<div className="absolute inset-0 bg-[url(...)] object-fill" />}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
      </div>
    </div>
  )
}

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean
  className?: string
  eyebrow: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  graphic?: React.ReactNode
  fade?: ("top" | "bottom")[]
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-black dark:bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] bg-black shadow-sm ring-1 ring-white/10",
        "data-[dark]:bg-gray-800 data-[dark]:ring-white/15"
      )}
    >
      <div className="relative h-[29rem] shrink-0">
        {graphic}
      </div>
      <div className="relative p-10 z-20 isolate mt-[-110px] h-[14rem] backdrop-blur-xl text-white">
        <h1>{eyebrow}</h1>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight dark:text-gray-100 text-gray-150 group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-100 dark:text-gray-300 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
