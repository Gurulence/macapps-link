import { Hero } from "@/components/hero"
import { AppSelector } from "@/components/app-selector"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <AppSelector />
        </div>
      </main>
      <Footer />
    </div>
  )
}
