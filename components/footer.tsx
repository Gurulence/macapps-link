import { Heart, Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> for
            Mac lovers everywhere
          </p>

          <div className="text-xs text-muted-foreground space-y-1">
            <p>
              This tool uses{" "}
              <a
                href="https://brew.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Homebrew
              </a>{" "}
              to install apps. Homebrew must be installed on your Mac.
            </p>
            <p>
              TIP: You can find <strong>Terminal.app</strong> in the Utilities
              folder inside your Applications folder or by searching in
              Spotlight.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
