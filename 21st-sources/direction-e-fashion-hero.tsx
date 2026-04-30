// Source: 21st.dev — "Hero 04" by aliimam.in
// Query: "hero oversized editorial typography"
// Cached: 2026-04-30 for Training & Discipline · Direction E (Intersections)
// What we borrowed: oversized condensed display headline with eyebrow text, grayscale portrait
// in offset frame, editorial broadsheet rhythm, mono caption block. Translated to vanilla HTML +
// Tailwind CDN. Replaced the grid-mask background with a full-bleed B&W training photograph.

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ArrowDownRight } from "@aliimam/icons";
import { Button } from "@/components/ui/button";

export function HeroSection04() {
  return (
    <section className="min-h-screen overflow-hidden relative py-20">
      <div className="mx-auto max-w-7xl relative z-20 px-6">
        <div className="relative">
          <p className="text-sm absolute -top-4 left-20 font-medium tracking-wider">1,996</p>
          <h1 className="z-20 text-primary relative font-bold text-center tracking-[-7px] text-7xl md:text-9xl xl:tracking-[-1rem] md:tracking-[-14px] xl:text-[10rem]">
            CREATIVE DESIGNER
          </h1>
          <p className="text-4xl hidden xl:block absolute -bottom-12 right-24 font-thin tracking-[6px]">
            ALI IMAM
          </p>
        </div>
        <div className="grid relative">
          <div className="space-y-8 pt-20 flex gap-6 justify-center">
            <div className="flex gap-6 bg-secondary w-full max-w-xl h-fit p-10 items-end space-y-2 text-xl font-bold md:text-2xl lg:text-3xl">
              <div className="font-semibold text-xl">
                <div>/ ART DIRECTION</div>
                <div>/ WEB DESIGN (UX/UI)</div>
                <div>/ WEB DEVELOPMENT</div>
              </div>
              <div className="absolute hidden md:flex left-1/2 -top-10 w-fit overflow-hidden bg-secondary">
                <img src="/portrait.jpg" alt="Designer portrait" className="h-100 w-full object-contain grayscale" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
