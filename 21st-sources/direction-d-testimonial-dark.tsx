// Source: 21st.dev Inspiration — "TestimonialSection (animated)"
// Query: "dark testimonial card glow"
// Date pulled: 2026-04-28
// Used in: Direction D (After Hours) — large editorial pull-quote card with avatar + soft halo
// Translation notes: Keep the QuoteIcon SVG glyph and the "type: quote" centered card layout.
//                    For our use case both quotes (J. Heersink + T. Kramer) get cards on a dark
//                    canvas with a warm amber radial-glow behind each card and a soft disco halo
//                    on the avatar circle.

import * as React from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export interface Testimonial {
  type: "user" | "quote"
  quote: string
  name?: string
  role?: string
  avatarSrc?: string
  avatarFallback?: string
}

const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="48" height="36" viewBox="0 0 48 36" fill="none" {...props}>
    <path
      d="M14.9951 36C12.4951 36 10.2285 35.0167 8.19513 33.05C6.1618 31.0833 5.14513 28.8333 5.14513 26.3C5.14513 22.8 6.2118 19.4833 8.34513 16.35C10.4785 13.2167 13.2285 10.1 16.5951 7L21.4951 11.25C19.3618 13.1333 17.6785 14.8833 16.4451 16.5C15.2118 18.1167 14.5951 19.9833 14.5951 22.1H19.9951V36H14.9951Z"
      fill="currentColor"
    />
  </svg>
)

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const isQuoteType = testimonial.type === "quote"
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
      <Card className="h-full w-full">
        <CardContent className="flex flex-col items-start gap-4 p-6 h-full">
          {isQuoteType ? (
            <>
              <QuoteIcon className="h-9 w-12 text-muted-foreground/50" />
              <p className="text-xl font-medium leading-relaxed">"{testimonial.quote}"</p>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">"{testimonial.quote}"</p>
              <div className="flex flex-row items-center gap-4 mt-auto">
                <Avatar>
                  <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export { TestimonialCard, QuoteIcon }
