"use client"

import { useState, useMemo } from "react"
import { apps, categories, generateInstallCommand, type App } from "@/lib/apps-data"
import { AppCard } from "./app-card"
import { CategoryFilter } from "./category-filter"
import { CommandOutput } from "./command-output"
import { Button } from "@/components/ui/button"
import { Sparkles, RotateCcw } from "lucide-react"

export function AppSelector() {
  const [selectedApps, setSelectedApps] = useState<App[]>([])
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredApps = useMemo(() => {
    if (!activeCategory) return apps
    return apps.filter((app) => app.category === activeCategory)
  }, [activeCategory])

  const groupedApps = useMemo(() => {
    const groups: Record<string, App[]> = {}
    filteredApps.forEach((app) => {
      if (!groups[app.category]) {
        groups[app.category] = []
      }
      groups[app.category].push(app)
    })
    return groups
  }, [filteredApps])

  const handleToggleApp = (app: App) => {
    setSelectedApps((prev) => {
      const isSelected = prev.some((a) => a.id === app.id)
      if (isSelected) {
        return prev.filter((a) => a.id !== app.id)
      }
      return [...prev, app]
    })
  }

  const handleSelectAll = () => {
    setSelectedApps(apps)
  }

  const handleClearAll = () => {
    setSelectedApps([])
  }

  const installCommand = generateInstallCommand(selectedApps)

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Action Buttons */}
      <div className="flex justify-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={handleSelectAll}
          className="gap-2"
        >
          <Sparkles className="h-4 w-4" />
          Select All
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleClearAll}
          disabled={selectedApps.length === 0}
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Clear Selection
        </Button>
      </div>

      {/* Apps Grid */}
      <div className="space-y-10">
        {Object.entries(groupedApps).map(([categoryId, categoryApps]) => {
          const category = categories.find((c) => c.id === categoryId)
          if (!category) return null

          return (
            <section key={categoryId}>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <span aria-hidden="true">{category.icon}</span>
                {category.name}
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
      <div className="sticky bottom-4 mt-12">
        <CommandOutput
          command={installCommand}
          selectedCount={selectedApps.length}
        />
      </div>
    </div>
  )
}
