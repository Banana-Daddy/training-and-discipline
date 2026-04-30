// Source: 21st.dev — "Minimalist Hero" by mnmlst.
// Query: "full-bleed hero minimal photograph"
// Cached: 2026-04-30 for Training & Discipline · Direction F (Off Peak)
// What we borrowed: the split-grid composition (left small body text, center
// portrait, right oversized two-line condensed display), and the negative-space
// header/footer minimal nav rhythm. Translated to vanilla HTML + Tailwind CDN;
// kept the breathing whitespace + the high-contrast didone display register but
// dropped the framer-motion entrance and the giant yellow circle behind the
// portrait (replaced with raw full-bleed photographs and slow scroll-cinema).

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, LucideIcon } from 'lucide-react';

interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: { part1: string; part2: string };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
}

export const MinimalistHero = ({
  logoText, navLinks, mainText, readMoreLink, imageSrc, imageAlt,
  overlayText, socialLinks, locationText,
}: MinimalistHeroProps) => (
  <div className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12">
    <header className="z-30 flex w-full max-w-7xl items-center justify-between">
      <div className="text-xl font-bold tracking-wider">{logoText}</div>
      <div className="hidden items-center space-x-8 md:flex">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground">{link.label}</a>
        ))}
      </div>
    </header>
    <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
      <div className="z-20 order-2 md:order-1 text-center md:text-left">
        <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
        <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">Read More</a>
      </div>
      <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
        <img src={imageSrc} alt={imageAlt} className="relative z-10 h-auto w-56 object-cover md:w-64 lg:w-72" />
      </div>
      <div className="z-20 order-3 flex items-center justify-center text-center md:justify-start">
        <h1 className="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl">
          {overlayText.part1}<br />{overlayText.part2}
        </h1>
      </div>
    </div>
    <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
      <div className="flex items-center space-x-4">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} className="text-foreground/60 transition-colors hover:text-foreground">
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <div className="text-sm font-medium text-foreground/80">{locationText}</div>
    </footer>
  </div>
);
