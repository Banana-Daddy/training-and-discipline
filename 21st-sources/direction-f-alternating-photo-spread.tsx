// Source: 21st.dev — "Section With Mockup" by fey.com / generic editorial pattern
// Query: "alternating photo magazine spread"
// Cached: 2026-04-30 for Training & Discipline · Direction F (Off Peak)
// What we borrowed: the alternating row composition (photo left/right, text on
// the opposite side), the secondary-image offset behind the primary, and the
// reverseLayout boolean flag pattern. Translated to vanilla HTML; stripped
// framer-motion + scroll viewport hooks; kept the dual-image card layered
// composition and the "title + description" rhythm.

'use client';

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  primaryImageSrc: string;
  secondaryImageSrc: string;
  reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title, description, primaryImageSrc, secondaryImageSrc, reverseLayout = false,
}) => {
  const layoutClasses = reverseLayout ? "md:grid-cols-2 md:grid-flow-col-dense" : "md:grid-cols-2";
  const textOrderClass = reverseLayout ? "md:col-start-2" : "";
  const imageOrderClass = reverseLayout ? "md:col-start-1" : "";

  return (
    <section className="relative py-24 md:py-48 bg-black overflow-hidden">
      <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
        <motion.div className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}>
          <motion.div className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 ${textOrderClass}`}>
            <h2 className="text-white text-3xl md:text-[40px] font-semibold leading-tight md:leading-[53px]">{title}</h2>
            <p className="text-[#868f97] text-sm md:text-[15px] leading-6">{description}</p>
          </motion.div>
          <motion.div className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[300px] md:max-w-[471px]`}>
            <motion.div className="absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-[#090909] rounded-[32px] z-0" />
            <motion.div className="relative w-full h-[405px] md:h-[637px] rounded-[32px] z-10 overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${primaryImageSrc})` }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWithMockup;
