"use client"

import { cn } from "@/lib/utils"
import type { App } from "@/lib/apps-data"
import { Check } from "lucide-react"
import { AppIcon } from "./app-icon"

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
        "group relative flex flex-col items-center gap-2 rounded-xl p-4 transition-all duration-200",
        "bg-card border border-border hover:border-primary/50 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        selected && "border-primary bg-primary/5 shadow-md"
      )}
    >
      {selected && (
        <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
          <Check className="h-4 w-4" />
        </div>
      )}
      <div className="relative h-14 w-14 flex-shrink-0">
        <AppIcon icon={app.icon} name={app.name} />
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-card-foreground leading-tight">
          {app.name}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
          {app.description}
        </p>
      </div>
    </button>
  )
}
