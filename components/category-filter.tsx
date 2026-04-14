"use client"

import { cn } from "@/lib/utils"
import type { Category } from "@/lib/apps-data"

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: string | null
  onCategoryChange: (categoryId: string | null) => void
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <button
        onClick={() => onCategoryChange(null)}
        className={cn(
          "rounded-full px-4 py-2 text-sm font-medium transition-all",
          "border border-border hover:border-primary/50",
          activeCategory === null
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-card text-card-foreground hover:bg-accent/10"
        )}
      >
        All Apps
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all",
            "border border-border hover:border-primary/50",
            activeCategory === category.id
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-card-foreground hover:bg-accent/10"
          )}
        >
          <span className="mr-1.5" aria-hidden="true">
            {category.icon}
          </span>
          {category.name}
        </button>
      ))}
    </div>
  )
}
