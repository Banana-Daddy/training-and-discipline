// 21st.dev component cache — for HANDOFF MODE / React rebuild reference
// Query: "sticky bottom CTA bar floating"
// Component: Floating Consult Button (FloatingConsultButton)
// Date: 2026-04-28
// Used in: T&D Both Directions — persistent booking CTA
// What we borrowed: the always-visible-bottom-right floating CTA pattern with revolving SVG textPath and centered photo circle. We're keeping the textPath revolution as a flourish in Direction B; Direction A uses a simpler MTA-disc pill with the brand's exit-arrow icon.
// Translation notes: replaced framer-motion rotate with CSS @keyframes; swapped Bricks Studio avatar with brand-flat MTA exit arrow + "BOOK" wordmark; dropped backdrop modal in favor of simple anchor → Vagaro

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FloatingConsultButton = ({
  buttonSize, imageSize, imageSrc, revolvingText = "FREE 30 MINUTES - CONSULT - ",
  revolvingSpeed = 10, popupHeading = "30-minutes call", popupDescription, popupBadgeText = "Free",
  ctaButtonText = "Book a call", ctaButtonAction, position = { bottom: "2rem", right: "2rem" },
}) => {
  return (
    <div className="fixed z-50" style={position}>
      <motion.div className="relative cursor-pointer group" whileHover={{ scale: 1.05 }}>
        <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: revolvingSpeed, repeat: Infinity, ease: "linear" }}>
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"/>
            </defs>
            <text className="text-[20.4px] fill-gray-600 font-medium uppercase tracking-wider">
              <textPath href="#circlePath" startOffset="0%">{revolvingText}</textPath>
            </text>
          </svg>
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full overflow-hidden bg-gray-900 shadow-lg">
            <img src={imageSrc} alt="Consultant" className="w-full h-full object-cover"/>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
