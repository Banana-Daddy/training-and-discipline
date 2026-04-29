// Source: 21st.dev Inspiration — "Creative Pricing"
// Query: "pricing tier cards editorial"
// Date pulled: 2026-04-28
// Used in: Direction C (Now Boarding) — pricing cards as "service tiers" with subway route bullet markers
// Translation notes: Drop the rotated/handwritten/sticker treatment. Keep the offset-shadow card structure
//                    (shadow-[4px_4px_0px_0px]) and translate to subway-poster discipline: black borders,
//                    MTA route circle in the position of the icon, transit-grade type, no sticker tilt.

import { Button } from "@/components/ui/button"
import { Check, Pencil, Star, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingTier {
  name: string
  icon: React.ReactNode
  price: number
  description: string
  features: string[]
  popular?: boolean
  color: string
}

function CreativePricing({
  tag = "Simple Pricing",
  title = "Make Short Videos That Pop",
  description = "Edit, enhance, and go viral in minutes",
  tiers,
}: {
  tag?: string
  title?: string
  description?: string
  tiers: PricingTier[]
}) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center space-y-6 mb-16">
        <div className="font-handwritten text-xl text-blue-500 rotate-[-1deg]">
          {tag}
        </div>
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold font-handwritten text-zinc-900 dark:text-white rotate-[-1deg]">
            {title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={cn(
              "relative group",
              "transition-all duration-300",
              index === 0 && "rotate-[-1deg]",
              index === 1 && "rotate-[1deg]",
              index === 2 && "rotate-[-2deg]"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 bg-white dark:bg-zinc-900",
                "border-2 border-zinc-900 dark:border-white",
                "rounded-lg shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
                "transition-all duration-300",
                "group-hover:shadow-[8px_8px_0px_0px]",
                "group-hover:translate-x-[-4px]",
                "group-hover:translate-y-[-4px]"
              )}
            />
            <div className="relative p-6">
              <div className="mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full mb-4",
                    "flex items-center justify-center",
                    "border-2 border-zinc-900 dark:border-white",
                    `text-${tier.color}-500`
                  )}
                >
                  {tier.icon}
                </div>
                <h3 className="font-handwritten text-2xl text-zinc-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="font-handwritten text-zinc-600 dark:text-zinc-400">
                  {tier.description}
                </p>
              </div>
              <div className="mb-6 font-handwritten">
                <span className="text-4xl font-bold text-zinc-900 dark:text-white">
                  ${tier.price}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">/month</span>
              </div>
              <div className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-zinc-900 dark:border-white flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-handwritten text-lg text-zinc-900 dark:text-white">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <Button className={cn("w-full h-12")}>
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { CreativePricing, type PricingTier }
