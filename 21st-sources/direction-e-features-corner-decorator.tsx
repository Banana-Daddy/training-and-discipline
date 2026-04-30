// Source: 21st.dev — "Features 10" by tailark
// Query: "editorial programs grid bordered"
// Cached: 2026-04-30 for Training & Discipline · Direction E (Intersections)
// What we borrowed: the CardDecorator pattern (corner ticks at -1px on each corner of a rounded-none
// bordered card) for the "intersection station" cards. Sharp Bauhaus discipline + breathing card.
// Translated to vanilla HTML + Tailwind CDN. Stripped React/shadcn scaffolding; kept the 8px
// border-l-2 + border-t-2 corner glyphs and the rounded-none + dashed-rule footer pattern.

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'

export function ProgramCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Card className={`group relative rounded-none shadow-zinc-950/5 ${className ?? ''}`}>
      <CardDecorator />
      {children}
    </Card>
  )
}

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
)
