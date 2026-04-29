// 21st.dev component cache — for HANDOFF MODE / React rebuild reference
// Query: "gallery masonry interior architectural"
// Component: Masonry Grid (MasonryGrid)
// Date: 2026-04-28
// Used in: T&D Both Directions — Studio Tour gallery
// What we borrowed: column-based CSS masonry layout (`columns: 1 / 2 / 3 / 4` responsive), break-inside-avoid, stagger reveal on scroll, hover lift
// Translation notes: replaced framer-motion + parallax tilt with simpler IntersectionObserver fade-up; kept the CSS columns layout because it adapts cleanly to our 9 unique studio shots; Direction A uses 4 cols charcoal-treated, Direction B uses 3 cols larger format with warm tone mapping

import * as React from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';

const GridItem = ({ children }) => {
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);
  return (
    <motion.div ref={ref} style={{ transformStyle: 'preserve-3d', perspective: '1000px' }} className="relative">
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} whileTap={{ scale: 0.95 }} className="w-full h-full">
        {children}
      </motion.div>
    </motion.div>
  );
};

const MasonryGrid = ({ items, renderItem, className, gap = '1rem', staggerDelay = 0.05 }) => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } };
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div ref={containerRef} className={className} style={{ columnGap: gap }}
      initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants} role="list">
      {items.map((item, index) => (
        <motion.div key={index} className="mb-4 break-inside-avoid" variants={itemVariants} role="listitem">
          <GridItem>{renderItem(item, index)}</GridItem>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MasonryGrid;
