"use client"

import { useState, useMemo } from "react"
import { apps, categories, generateInstallCommand, type App } from "@/lib/apps-data"
import { AppCard } from "./app-card"
import { CommandOutput } from "./command-output"

export function AppSelector() {
  const [selectedApps, setSelectedApps] = useState<App[]>([])

  const groupedApps = useMemo(() => {
    const groups: Record<string, App[]> = {}
    apps.forEach((app) => {
      if (!groups[app.category]) {
        groups[app.category] = []
      }
      groups[app.category].push(app)
    })
    return groups
  }, [])

  const handleToggleApp = (app: App) => {
    setSelectedApps((prev) => {
      const isSelected = prev.some((a) => a.id === app.id)
      if (isSelected) {
        return prev.filter((a) => a.id !== app.id)
      }
      return [...prev, app]
    })
  }

  const installCommand = generateInstallCommand(selectedApps)

  return (
    <div className="space-y-6">
      {/* Apps Grid by Category */}
      <div className="space-y-8">
        {categories.map((category) => {
          const categoryApps = groupedApps[category.id] || []
          if (categoryApps.length === 0) return null

          return (
            <section key={category.id}>
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-lg font-semibold text-foreground">
                  {category.name}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {category.count} apps
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {categoryApps.map((app) => (
                  <AppCard
                    key={app.id}
                    app={app}
                    selected={selectedApps.some((a) => a.id === app.id)}
                    onToggle={handleToggleApp}
                  />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* Command Output */}
      <div className="sticky bottom-4 mt-8">
        <CommandOutput
          command={installCommand}
          selectedCount={selectedApps.length}
        />
      </div>
    </div>
  )
}
