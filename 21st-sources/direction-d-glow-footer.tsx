// Source: 21st.dev Inspiration — "Glowing Footer"
// Query: "dark oversized typographic footer"
// Date pulled: 2026-04-28
// Used in: Direction D (After Hours) — glassmorphism footer card with rose+amber radial halos
// Translation notes: Keep the radial halo positioning (-top-32 left-1/4, -bottom-24 right-1/4),
//                    the backdrop-blur, and the layered .glass card. Swap rose-600/20 for our
//                    amber+mauve disco palette: rgba(255,181,71,.18) and rgba(255,111,145,.12).
//                    The big background brand-name typographic mark is also reused for the foot ticker.

"use client"

export default function FooterGlow() {
  return (
    <footer className="relative z-10 mt-8 w-full overflow-hidden pt-16 pb-8">
      <style jsx global>{`
        .glass {
          backdrop-filter: blur(3px) saturate(180%);
          background: radial-gradient(circle, #fff9 0%, #ffdce64d 60%, #f9f2f4 100%);
          border: 1px solid #ff96b41a;
          justify-content: center;
          align-items: center;
          transition: all .3s;
          display: flex;
        }
        .glass:where(.dark, .dark *) {
          backdrop-filter: blur(2px) !important;
          background: radial-gradient(circle, #ffffff1a 0%, #1e00001a 60%, #2a0e0e 100%) !important;
          border: 1px solid #ffffff0d !important;
          border-radius: 16px !important;
        }
      `}</style>
      <div className="pointer-events-none absolute top-0 left-1/2 z-0 h-full w-full -translate-x-1/2 select-none">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl"></div>
        <div className="absolute right-1/4 -bottom-24 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl"></div>
      </div>
      <div className="glass relative mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-2xl px-6 py-10 md:flex-row md:items-start md:justify-between md:gap-12">
        Footer card content here
      </div>
    </footer>
  )
}
