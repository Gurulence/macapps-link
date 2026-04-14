"use client"

import { cn } from "@/lib/utils"
import type { App } from "@/lib/apps-data"
import { Check, DollarSign } from "lucide-react"
import Image from "next/image"

interface AppCardProps {
  app: App
  selected: boolean
  onToggle: (app: App) => void
}

export function AppCard({ app, selected, onToggle }: AppCardProps) {
  return (
    <button
      onClick={() => onToggle(app)}
      className={cn(
        "group relative flex items-center gap-3 rounded-lg p-3 transition-all duration-200 text-left",
        "bg-card border border-border hover:border-primary/50 hover:shadow-md",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        selected && "border-primary bg-primary/5 shadow-sm"
      )}
    >
      {selected && (
        <div className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
          <Check className="h-3 w-3" strokeWidth={3} />
        </div>
      )}
      <div className="relative h-10 w-10 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
        <Image
          src={`https://macapps.link/img/${app.brewCask}.png`}
          alt={app.name}
          width={40}
          height={40}
          className="h-full w-full object-contain"
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/40x40/e5e7eb/9ca3af?text=${app.name.charAt(0)}`
          }}
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground truncate">
          {app.developer}
        </p>
        <p className="text-sm font-medium text-card-foreground truncate">
          {app.name}
        </p>
      </div>
      {app.isPaid && (
        <div className="flex-shrink-0 text-amber-500" title="Paid app">
          <DollarSign className="h-4 w-4" />
        </div>
      )}
    </button>
  )
}
