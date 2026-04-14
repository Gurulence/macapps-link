"use client"

import { useState } from "react"
import { Copy, Check, Terminal } from "lucide-react"
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

  return (
    <div className="w-full rounded-2xl bg-card border border-border shadow-xl overflow-hidden">
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-foreground">
            Installation Command
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            {selectedCount} app{selectedCount !== 1 ? "s" : ""} selected
          </span>
          <button
            onClick={handleCopy}
            disabled={!command}
            className={cn(
              "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all",
              command
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground cursor-not-allowed"
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
                Copy
              </>
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        {command ? (
          <pre className="overflow-x-auto rounded-lg bg-foreground/5 p-4 text-sm text-foreground font-mono whitespace-pre-wrap break-all">
            {command}
          </pre>
        ) : (
          <div className="flex items-center justify-center py-8 text-muted-foreground">
            <p>Select apps above to generate an install command</p>
          </div>
        )}
      </div>
    </div>
  )
}
