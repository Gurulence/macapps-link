"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CommandOutputProps {
  command: string
  selectedCount: number
}

export function CommandOutput({ command, selectedCount }: CommandOutputProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (!command) return
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (selectedCount === 0) {
    return null
  }

  return (
    <div className="w-full rounded-xl bg-card border border-border shadow-2xl overflow-hidden">
      <div className="bg-emerald-500 px-4 py-3 text-white">
        <div className="flex items-center justify-between">
          <span className="font-medium">Nice!</span>
          <button
            onClick={handleCopy}
            className={cn(
              "flex items-center gap-1.5 rounded-lg bg-white/20 px-3 py-1.5 text-sm font-medium transition-all hover:bg-white/30"
            )}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                Copy Command
              </>
            )}
          </button>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-sm text-muted-foreground">
          To install selected apps ({selectedCount}), copy and paste this command into a Terminal...
        </p>
        <pre className="overflow-x-auto rounded-lg bg-zinc-900 text-zinc-100 p-4 text-sm font-mono whitespace-pre-wrap break-all">
          {command}
        </pre>
        <p className="text-sm text-muted-foreground">
          ...hit Enter and wait for your apps to be installed!
        </p>
        <p className="text-xs text-muted-foreground">
          <strong>TIP</strong> You can find <strong>Terminal.app</strong> in the Utilities folder inside your Applications folder or by searching in Spotlight.
        </p>
      </div>
    </div>
  )
}
