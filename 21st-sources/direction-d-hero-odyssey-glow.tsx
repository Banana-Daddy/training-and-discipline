// Source: 21st.dev Inspiration — "Hero Odyssey"
// Query: "cinematic dark hero glow"
// Date pulled: 2026-04-28
// Used in: Direction D (After Hours) — disco-ball radial glow + cinematic dark hero
// Translation notes: Drop the WebGL Lightning shader (overkill for a fitness mockup);
//                    keep the radial-glow stack: a giant gradient disc behind the headline,
//                    a soft purple-amber glow circle, and the dark canvas. We add a CSS
//                    "disco glint" — a tiny rotating mirrored sphere via radial-gradient + box-shadow.

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FeatureItemProps {
  name: string
  value: string
  position: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ name, value, position }) => {
  return (
    <div className={`absolute ${position} z-10 group transition-all duration-300 hover:scale-110`}>
      <div className="flex items-center gap-2 relative">
        <div className="relative">
          <div className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
          <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="text-white relative">
          <div className="font-medium group-hover:text-white transition-colors duration-300">{name}</div>
          <div className="text-white/70 text-sm group-hover:text-white/70 transition-colors duration-300">{value}</div>
        </div>
      </div>
    </div>
  )
}

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-screen">
        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-30 flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.h1 className="text-5xl md:text-7xl font-light mb-2">
            Hero Odyssey
          </motion.h1>
          <motion.h2 className="text-3xl md:text-5xl pb-3 font-light bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Lighting Up The Future
          </motion.h2>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/10 blur-3xl"></div>
        <div className="z-10 absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] backdrop-blur-3xl rounded-full bg-[radial-gradient(circle_at_25%_90%,_#1e386b_15%,_#000000de_70%,_#000000ed_100%)]"></div>
      </motion.div>
    </div>
  )
}
