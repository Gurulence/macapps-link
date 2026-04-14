import { Terminal, Zap, Coffee } from "lucide-react"

export function Hero() {
  return (
    <header className="text-center space-y-6 py-12 md:py-16">
      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <Terminal className="h-4 w-4" />
        Like Ninite, but for Mac
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance">
        Get Mac apps{" "}
        <span className="text-primary">automatically!</span>
      </h1>

      <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed text-pretty">
        Choose what apps to install and{" "}
        <strong className="text-foreground">get them automatically installed</strong>,
        quietly, fast and easy. Use it to set up your new computer, deploy Mac
        apps in your company, or install apps while enjoying coffee.
      </p>

      <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-accent" />
          <span>One command</span>
        </div>
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-accent" />
          <span>Uses Homebrew</span>
        </div>
        <div className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-accent" />
          <span>Sit back & relax</span>
        </div>
      </div>
    </header>
  )
}
