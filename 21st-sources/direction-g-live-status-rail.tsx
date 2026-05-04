// Source: 21st.dev — translated from common live-status / scroll-progress sidebar patterns
// Query: "live timetable sidebar fixed"
// Cached: 2026-04-30 for Training & Discipline · Direction G (All Aboard)
// What we borrowed: the fixed-position vertical status rail with progress-tracked
// active item and forthcoming items, common to scroll-spine and live-status UI patterns.
// Translated: rendered as a working MTA-style timetable with arrival-time display,
// "NOW BOARDING" highlight on the active section, route bullets per upcoming station.
// Stripped framer-motion and shadcn dependencies; rebuilt as vanilla HTML + CSS + IntersectionObserver.

'use client';

import { useEffect, useState } from 'react';

interface Station {
  id: string;
  name: string;
  line: 'T' | 'D' | 'C' | 'S' | 'P' | 'Y';
  arrival: string; // e.g. "+0:00 NOW", "+0:30", "+1:15"
}

const STATIONS: Station[] = [
  { id: 'platform',  name: 'Platform · Off Peak', line: 'T', arrival: '+0:00 NOW' },
  { id: 'about',     name: 'Studio',              line: 'D', arrival: '+0:30' },
  { id: 'programs',  name: 'Programs',            line: 'C', arrival: '+1:15' },
  { id: 'trainers',  name: 'Trainers',            line: 'S', arrival: '+2:00' },
  { id: 'pricing',   name: 'Fare Card',           line: 'P', arrival: '+2:45' },
  { id: 'visit',     name: 'Terminus',            line: 'Y', arrival: '+3:30' },
];

export function LiveTimetableRail() {
  const [active, setActive] = useState('platform');

  useEffect(() => {
    const sections = STATIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => s && io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <aside className="fixed top-1/2 left-6 -translate-y-1/2 z-40 hidden lg:block bg-black/85 backdrop-blur border border-white/15 p-5 w-[260px]">
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55 pb-3 border-b border-white/15 flex items-center justify-between">
        <span><span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-1.5 align-middle" />LIVE · NEXT ARRIVALS</span>
        <span className="text-white">06:42</span>
      </div>
      <ul className="mt-3 space-y-2.5">
        {STATIONS.map(s => (
          <li key={s.id} className={`flex items-center gap-2.5 ${active === s.id ? 'opacity-100' : 'opacity-55'}`}>
            <span className={`bullet bullet-${s.line}`}>{s.line}</span>
            <a href={`#${s.id}`} className="flex-1 text-[12px] tracking-wide">{s.name}</a>
            <span className="font-mono text-[10px] text-white/55">{s.arrival}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
