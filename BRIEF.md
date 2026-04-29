# Training &amp; Discipline — Design Brief

## Brand Synopsis

Training &amp; Discipline is a four-trainer boutique personal-training studio in downtown Palm Springs, owned by 35-year industry veteran Brian Guzman. The studio sits at 707 East Tahquitz Canyon Way, in a charcoal-walled space with a literal disco ball over the squat rack, mid-century yellow velvet armchairs, glass garage doors that open onto the San Jacinto mountains, and a bamboo-floored yoga room. Their differentiator: no membership required — sessions are paid one at a time or in 10/20-packs and booked by appointment through Vagaro. Pricing is transparent and starts at $50 for a 30-minute session.

The brand identity is the most distinctive thing about it: a deliberate riff on the **NYC subway / MTA system**. The studio name reads like a transit headline ("Training & Discipline"), and its abbreviation **TDCSPS** is rendered as colored route bullets — T/D in MTA red, C/S in MTA purple, P/S in MTA yellow — alongside the MTA "exit" arrow icon. Studio interiors carry the motif through painted subway-door wall murals and street-name signage props.

Their audience is Palm Springs locals (with a strong, explicit welcome to the LGBTQA+ community per Emma's bio), seasonal-home owners and travelers, and clients with medical/recovery considerations who need programming that works alongside their PT, chiropractor, or surgeon. The tone is **welcoming and inclusive** — the studio name sounds tougher than the brand actually is.

## Design Decisions

### Direction A — Transit Editorial

**The maximalist lean into the subway brand DNA.** Massimo Vignelli energy. Black ground throughout, route-bullet IA, oversized Helvetica-style display, station-board sticky nav, route-line vertical timeline for programs. High-contrast magazine layout density. Trainer specialties tagged with route bullets that color-code their disciplines.

- **Mood:** A 1970s Vignelli MTA poster meets a 2020s editorial broadsheet.
- **Fonts:** **Archivo Black** (display, all caps) + **Inter Tight** (body, 400/500/700) + **JetBrains Mono** (uppercase labels). Google Fonts links: [Archivo Black](https://fonts.google.com/specimen/Archivo+Black), [Inter Tight](https://fonts.google.com/specimen/Inter+Tight), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono).
- **Colors:**
  - Brand black `#0A0A0A` (canvas), pure white `#FFFFFF` (type)
  - MTA red `#EE352E` (T, D bullets)
  - MTA purple `#A626AA` (C, S bullets)
  - MTA yellow `#FCCC0A` (P, S bullets — also used for the marquee + "first consultation complimentary" CTA)
  - Tile grid charcoal `#0D0D0D` (programs section bg)
- **Layout patterns deployed:**
  1. Sticky **MTA station-board nav** — black bar with white horizontal rules above/below, route bullets inline next to each section name, scroll-x on mobile
  2. **Editorial 12-col asymmetric magazine grid** — VOL./ISSUE masthead, eyebrow + display headline + meta stats row
  3. **Route-line vertical timeline** — programs as "stops" on a line, each with a route bullet pin, mono eyebrow ("Stop 01 · Strength"), display headline, supporting body
  4. **MTA station-card contact block** — bordered box with header rule, address typography, route bullets in footer
  5. **Oversized typographic footer** — "Training & Disc[T]p[D]ne." with route bullets baked in mid-word
- **Signature move:** the route bullets are baked **into the headline typography itself** — "Palm Sp[T]ings trains he[C]e." and the footer's "Training & Disc[T]p[D]ne." treat the colored discs as letterforms.

### Direction B — Boutique Desert

**The Palm Springs side of the brand.** Hospitality-grade, soft and editorial. Sand canvas, Fraunces serif with terracotta italics, generous whitespace, alternating image/text editorial spreads for trainers. The transit identity is preserved as a quiet system (route bullets next to specialty labels, brand colors as small accents) but never the headline.

- **Mood:** A small luxury Palm Springs hotel landing page that happens to be about training. Korakia/Parker register, not Equinox.
- **Fonts:** **Fraunces** (display serif, regular + italic, with optical sizing) + **Inter Tight** (body). Google Fonts links: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Inter Tight](https://fonts.google.com/specimen/Inter+Tight).
- **Colors:**
  - Sand `#F4ECE0` (canvas), paper `#FAF6EE` (alternating sections)
  - Warm ink `#14110D` (text), soft ink `#2B2722`
  - **Desert terracotta `#B8593E`** (primary accent — italicised words, hover, terracotta consult card)
  - Studio charcoal `#14110D` (deep "trainers" section is full-bleed dark for contrast)
  - Route-bullet trio reserved for the system (specialty labels, footer)
  - MTA yellow `#FCCC0A` reappears in the dark section as the "Pick a trainer / pick a time" booking card
- **Layout patterns deployed:**
  1. **Editorial hero** with vertical photo aside (open glass doors of the studio) and quiet caption "The studio, this morning. — N° 01"
  2. **Marginalia column + body** — about section uses a sticky aside with italicised pull-quote
  3. **Numbered editorial program list** with row hover, mixed serif/italic display, and route-bullet specialty tags
  4. **Alternating image/text trainer spreads** — full-bleed dark canvas, each trainer gets a side, photos go to grayscale-de-saturate by default
  5. **Quiet pricing tables** with serif numerals and bordered rows
  6. **Masonry studio gallery** with column-balance layout
- **Signature move:** **the italic terracotta accent.** Display copy keeps a serif Fraunces base, but a single pivotal word per heading turns italic and terracotta — "Train in *the desert*" / "*unlike a gym*" / "*— amazing*." It carries the warmth of the brand without losing the editorial restraint.

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Hero (A) — typographic | "Hero 03" by aliimam.in | `hero editorial magazine bold` | `21st-sources/hero-editorial-typographic.tsx` | Word-broken oversized headline with inline iconography (we replaced ali's BadgeQuestionMark with our brand TDCSPS subway bullets); asymmetric eyebrow text + photo aside structure |
| Testimonial (A + B) | "Editorial Testimonial" | `testimonial pull-quote serif` | `21st-sources/testimonial-editorial-index.tsx` | Oversized index numeral at 10% opacity sitting next to a 3xl light-weight quote; vertical-line nav selector pattern |
| Trainers grid (A + B) | "Team" | `team grid editorial portraits` | `21st-sources/team-bordered-grid.tsx` | Section heading at top, sub-head pattern, top-border row, name + role + photo; we swapped circular avatars for full-bleed rectangular portraits and moved roles to route-bullet specialty tags |
| Studio gallery (A + B) | "Masonry Grid" | `gallery masonry interior architectural` | `21st-sources/masonry-image-gallery.tsx` | Column-based CSS masonry layout with `break-inside-avoid`, stagger reveal on scroll; replaced framer-motion parallax with simpler IntersectionObserver fade-up |
| Floating CTA (B mobile) | "Floating Consult Button" | `sticky bottom CTA bar floating` | `21st-sources/floating-cta-button.tsx` | Pattern of always-visible bottom-right floating CTA pill |

**Inspiration searches run** (during DIRECTION step, per CLAUDE.md PRO-MAX rules):
- `hero editorial magazine bold`
- `navigation horizontal sticky pill`
- `team grid editorial portraits`
- `pricing table editorial bordered`
- `testimonial pull-quote serif`
- `hero hotel hospitality serif`
- `sticky bottom CTA bar floating`
- `gallery masonry interior architectural`

**Logo Search**: not invoked. The brand has a custom NYC-subway-style identity that doesn't have a third-party logo equivalent. The original `logo-1241x261.png` is referenced directly; the route bullets and exit arrow are recreated in HTML+CSS using documented MTA hex values.

## Content Inventory

### Images used

All real, scraped from training-and-discipline.com. Total 15 images.

- `team.jpg` — 4-trainer hero photo, used as Direction A hero, OG image, and Direction B "studio" inline figure
- `logo-1241x261.png` — original logo for embedding (also recreated in HTML for accessibility)
- `brian.jpg`, `patrick.jpg`, `zac.jpg`, `emma.jpg` — 4 trainer headshots
- `studio-doors-open.jpg` — Direction B hero (glass garage doors + palms + mountains)
- `studio-disco.jpg` — disco ball + Rogue rack (used in Direction B about section + both galleries)
- `studio-floor.jpg`, `studio-rogue.jpg`, `studio-bench.jpg`, `studio-dumbbells.jpg`, `studio-ripbar.jpg`, `studio-lounge.jpg`, `studio-yoga.jpg` — 7 unique studio interiors used in masonry galleries

### Key copy used

- Headline: "Palm Springs destination for distinctive Personal Training" (verbatim) — Direction A treats it as an editorial subhead under the typographic display; Direction B reframes hero as "Train in *the desert*. Quietly, on your own clock."
- Tagline: "NO MEMBERSHIP REQUIRED!" — Direction A marquee, Direction B hero stat row ("*no* — Membership required")
- "Who We Are" paragraph and "Knowledgeable Training Expertise" paragraph — used verbatim
- All 4 trainer bios — used verbatim
- "Bring the Studio to You" copy — verbatim

### Links preserved

- Booking: `https://www.vagaro.com/traininganddiscipline` (verified live, 200)
- Phone: `tel:+17609044111`
- Instagram: `https://www.instagram.com/training.and.discipline/`
- Facebook: `https://www.facebook.com/p/Training-Discipline-100067459311149/`

## Share Preview

- **OG image source**: Real brand photography — the team-of-4 hero shot from the live site, downloaded locally to `images/team.jpg` and cropped to 1200×630 → `images/og.jpg`. Why real over generated: per CLAUDE.md "real > generated for the OG specifically; the preview card is the billboard, real people > beautiful-but-abstract."
- **OG title**:
  - Index: `Training & Discipline — Mockup directions · Banana Bytes`
  - Direction A: `Training & Discipline — Palm Springs personal training, by appointment.`
  - Direction B: `Training & Discipline — A boutique training studio in Palm Springs.`
- **OG description**:
  - A: "Boutique personal training in downtown Palm Springs. No membership required. Sessions from $50. Book by appointment with one of four certified trainers."
  - B: "A boutique personal-training studio in downtown Palm Springs. Four certified trainers. Sessions by appointment, no membership required. From $50."
- **Favicon source**: Custom — generated via Pillow, two MTA-red bullets with white "T" / "D" letters on black square, 512×512 + 96×96.
- **Theme color**: A → `#000000` (matches the dark canvas); B → `#F4ECE0` (matches the sand canvas).
- **Sub-pages with their own OG**: each direction has its own block of OG + Twitter + canonical tags, all pointing to the same `og.jpg` for consistent preview-card recall.

## Build Timing

| Phase | Notes |
|---|---|
| Step 1: READ | Skipped — done in research session prior |
| Step 2: DIRECTION | ~3 min — invoked `ui-ux-pro-max` skill, ran 8 21st.dev Inspiration searches, synthesized two distinct directions |
| Step 3: BUILD | ~12 min — Direction A (47KB), Direction B (49KB), index selector |
| Step 4: VERIFY | Direction A verified live in browser preview (hero, about, programs route-line, trainer grid, testimonial, pricing). Direction B disk file verified via curl; preview tool had a stale-tab issue but disk content is correct. |
| Step 5: BRIEF + ACCURACY | This file + ACCURACY.md |
| Step 6: PUBLISH | Pending |
| Step 7: DELIVER | Pending |
| **Total: kickoff to publish** | **~25 min** (excluding research session) |

## Suggested Next Mockups

1. **Trainer detail pages** (4 of them) — full bio, certifications grid, "what to expect with me" section, direct-to-trainer Vagaro deep-link, action photo (would need to be shot or generated atmospherically), client testimonials specific to that trainer
2. **The "Bring the Studio to You" detail page** — leaning into the all-aboard transit metaphor, "what's in your monthly delivery," a sample workout-clip player, FAQ for travelers/seasonal residents
3. **A small editorial blog ("The Desert Log")** — Patrick on the science behind a program, Zac on yoga therapy as recovery, Emma on inclusive training, Brian on what 35 years has taught him. Useful for SEO + relationship-building.
4. **Membership-style commit-to-frequency page** (without it being a membership) — "Train Often" — pre-paid weekly/biweekly recurring slots with a 5-10% loyalty discount, but without locking anyone in. Solves the customer-retention problem without compromising the no-membership pitch.
5. **Studio rental / partner page** — for trainers and small group leaders to rent the space off-hours. Already a real revenue lever for boutique studios; the building is gorgeous enough to support it.

## Production Notes

To build this into a real site, use Claude Code (Opus, high effort).

**Recommended stack**: Next.js 14 (app router) on **Vercel**, with:
- **Sanity** as the CMS for trainer bios, programs, pricing, gallery captions, blog posts (clean schema, real-time previews, no maintenance overhead)
- The existing **Vagaro** booking integration kept as the booking source-of-truth (deep-link to specific trainer/service)
- **Resend or Loops** for the contact form
- **Cal.com** as a fallback for in-studio consultation booking if Vagaro's UX feels heavy
- **Plausible** for analytics (privacy-respecting, fits the boutique register)
- **Vercel OG image generator** for dynamic per-trainer / per-blog-post OG cards
- The 21st.dev component sources cached in `21st-sources/` give the React/Next.js build a head start on Hero, Testimonial, Team, Masonry, and Floating CTA components — they can be dropped in and dependencies wired (Tailwind + Framer Motion already implied).

**Production build estimate**: 5–7 days for a single direction, including CMS schema, content migration, photo treatment pass, and a launch checklist (analytics, sitemap, robots, redirects from the old GoDaddy site, OG card factory). Plus ongoing photo work — the studio deserves a one-day proper shoot of action portraits and details, which would take all 4 mockups to a different level entirely.
