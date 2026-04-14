import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center text-sm text-muted-foreground">
          <p>
            Trademarks and logos belong to their respective owners.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for Mac lovers
          </p>
        </div>
      </div>
    </footer>
  )
}
