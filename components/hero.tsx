import Link from "next/link"

export function Hero() {
  return (
    <header className="text-center space-y-4 py-8 md:py-12">
      <Link href="/" className="inline-block text-2xl font-bold text-foreground">
        mac<span className="font-black">apps</span>.link
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
        Get Mac apps{" "}
        <span className="text-primary">automatically!</span>
      </h1>

      <h2 className="text-lg text-muted-foreground">
        The best alternative to{" "}
        <strong className="text-foreground">Ninite for Mac.</strong>
      </h2>

      <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-pretty">
        Just choose what apps to install and{" "}
        <strong className="text-foreground">get apps automatically installed</strong>,
        quietly, fast and easy. Use it to setup your new computer, deploy Mac
        apps in your company or to install apps while enjoying coffee.
      </p>
    </header>
  )
}
