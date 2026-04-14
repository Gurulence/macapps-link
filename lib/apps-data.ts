export interface App {
  id: string
  name: string
  description: string
  icon: string
  category: string
  brewCask?: string
  brewFormula?: string
  masId?: string
}

export interface Category {
  id: string
  name: string
  icon: string
}

export const categories: Category[] = [
  { id: "browsers", name: "Browsers", icon: "🌐" },
  { id: "development", name: "Development", icon: "💻" },
  { id: "productivity", name: "Productivity", icon: "📊" },
  { id: "communication", name: "Communication", icon: "💬" },
  { id: "media", name: "Media", icon: "🎬" },
  { id: "utilities", name: "Utilities", icon: "🔧" },
  { id: "security", name: "Security", icon: "🔒" },
  { id: "design", name: "Design", icon: "🎨" },
]

export const apps: App[] = [
  // Browsers
  {
    id: "chrome",
    name: "Google Chrome",
    description: "Fast, secure browser by Google",
    icon: "chrome",
    category: "browsers",
    brewCask: "google-chrome",
  },
  {
    id: "firefox",
    name: "Firefox",
    description: "Privacy-focused browser by Mozilla",
    icon: "firefox",
    category: "browsers",
    brewCask: "firefox",
  },
  {
    id: "brave",
    name: "Brave",
    description: "Privacy-first browser with ad blocking",
    icon: "brave",
    category: "browsers",
    brewCask: "brave-browser",
  },
  {
    id: "arc",
    name: "Arc",
    description: "The browser built for a better internet",
    icon: "arc",
    category: "browsers",
    brewCask: "arc",
  },
  {
    id: "opera",
    name: "Opera",
    description: "Fast browser with built-in VPN",
    icon: "opera",
    category: "browsers",
    brewCask: "opera",
  },
  {
    id: "edge",
    name: "Microsoft Edge",
    description: "Chromium-based browser from Microsoft",
    icon: "edge",
    category: "browsers",
    brewCask: "microsoft-edge",
  },

  // Development
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "Powerful code editor by Microsoft",
    icon: "vscode",
    category: "development",
    brewCask: "visual-studio-code",
  },
  {
    id: "iterm2",
    name: "iTerm2",
    description: "Terminal emulator for macOS",
    icon: "iterm",
    category: "development",
    brewCask: "iterm2",
  },
  {
    id: "sublime",
    name: "Sublime Text",
    description: "Sophisticated text editor",
    icon: "sublime",
    category: "development",
    brewCask: "sublime-text",
  },
  {
    id: "github-desktop",
    name: "GitHub Desktop",
    description: "Git client for GitHub",
    icon: "github",
    category: "development",
    brewCask: "github",
  },
  {
    id: "docker",
    name: "Docker",
    description: "Container platform",
    icon: "docker",
    category: "development",
    brewCask: "docker",
  },
  {
    id: "postman",
    name: "Postman",
    description: "API development environment",
    icon: "postman",
    category: "development",
    brewCask: "postman",
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-first code editor",
    icon: "cursor",
    category: "development",
    brewCask: "cursor",
  },
  {
    id: "warp",
    name: "Warp",
    description: "Modern terminal with AI",
    icon: "warp",
    category: "development",
    brewCask: "warp",
  },

  // Productivity
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace",
    icon: "notion",
    category: "productivity",
    brewCask: "notion",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    description: "Knowledge base and notes",
    icon: "obsidian",
    category: "productivity",
    brewCask: "obsidian",
  },
  {
    id: "raycast",
    name: "Raycast",
    description: "Supercharged productivity",
    icon: "raycast",
    category: "productivity",
    brewCask: "raycast",
  },
  {
    id: "alfred",
    name: "Alfred",
    description: "Powerful launcher for Mac",
    icon: "alfred",
    category: "productivity",
    brewCask: "alfred",
  },
  {
    id: "1password",
    name: "1Password",
    description: "Password manager",
    icon: "1password",
    category: "productivity",
    brewCask: "1password",
  },
  {
    id: "rectangle",
    name: "Rectangle",
    description: "Window management",
    icon: "rectangle",
    category: "productivity",
    brewCask: "rectangle",
  },
  {
    id: "todoist",
    name: "Todoist",
    description: "Task management app",
    icon: "todoist",
    category: "productivity",
    brewCask: "todoist",
  },
  {
    id: "linear",
    name: "Linear",
    description: "Issue tracking tool",
    icon: "linear",
    category: "productivity",
    brewCask: "linear-linear",
  },

  // Communication
  {
    id: "slack",
    name: "Slack",
    description: "Team messaging platform",
    icon: "slack",
    category: "communication",
    brewCask: "slack",
  },
  {
    id: "discord",
    name: "Discord",
    description: "Voice and text chat",
    icon: "discord",
    category: "communication",
    brewCask: "discord",
  },
  {
    id: "zoom",
    name: "Zoom",
    description: "Video conferencing",
    icon: "zoom",
    category: "communication",
    brewCask: "zoom",
  },
  {
    id: "telegram",
    name: "Telegram",
    description: "Secure messaging",
    icon: "telegram",
    category: "communication",
    brewCask: "telegram",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    description: "Messaging app by Meta",
    icon: "whatsapp",
    category: "communication",
    brewCask: "whatsapp",
  },
  {
    id: "teams",
    name: "Microsoft Teams",
    description: "Team collaboration",
    icon: "teams",
    category: "communication",
    brewCask: "microsoft-teams",
  },

  // Media
  {
    id: "spotify",
    name: "Spotify",
    description: "Music streaming service",
    icon: "spotify",
    category: "media",
    brewCask: "spotify",
  },
  {
    id: "vlc",
    name: "VLC",
    description: "Media player",
    icon: "vlc",
    category: "media",
    brewCask: "vlc",
  },
  {
    id: "iina",
    name: "IINA",
    description: "Modern media player for macOS",
    icon: "iina",
    category: "media",
    brewCask: "iina",
  },
  {
    id: "handbrake",
    name: "HandBrake",
    description: "Video transcoder",
    icon: "handbrake",
    category: "media",
    brewCask: "handbrake",
  },
  {
    id: "obs",
    name: "OBS Studio",
    description: "Streaming and recording",
    icon: "obs",
    category: "media",
    brewCask: "obs",
  },

  // Utilities
  {
    id: "cleanmymac",
    name: "CleanMyMac",
    description: "Mac cleaning utility",
    icon: "cleanmymac",
    category: "utilities",
    brewCask: "cleanmymac",
  },
  {
    id: "appcleaner",
    name: "AppCleaner",
    description: "Uninstall apps completely",
    icon: "appcleaner",
    category: "utilities",
    brewCask: "appcleaner",
  },
  {
    id: "the-unarchiver",
    name: "The Unarchiver",
    description: "Archive extraction tool",
    icon: "unarchiver",
    category: "utilities",
    brewCask: "the-unarchiver",
  },
  {
    id: "keka",
    name: "Keka",
    description: "File archiver",
    icon: "keka",
    category: "utilities",
    brewCask: "keka",
  },
  {
    id: "coconutbattery",
    name: "coconutBattery",
    description: "Battery health monitor",
    icon: "coconut",
    category: "utilities",
    brewCask: "coconutbattery",
  },
  {
    id: "stats",
    name: "Stats",
    description: "System monitor in menu bar",
    icon: "stats",
    category: "utilities",
    brewCask: "stats",
  },

  // Security
  {
    id: "bitwarden",
    name: "Bitwarden",
    description: "Open source password manager",
    icon: "bitwarden",
    category: "security",
    brewCask: "bitwarden",
  },
  {
    id: "nordvpn",
    name: "NordVPN",
    description: "VPN service",
    icon: "nordvpn",
    category: "security",
    brewCask: "nordvpn",
  },
  {
    id: "mullvadvpn",
    name: "Mullvad VPN",
    description: "Privacy-focused VPN",
    icon: "mullvad",
    category: "security",
    brewCask: "mullvadvpn",
  },
  {
    id: "lulu",
    name: "LuLu",
    description: "Open source firewall",
    icon: "lulu",
    category: "security",
    brewCask: "lulu",
  },

  // Design
  {
    id: "figma",
    name: "Figma",
    description: "Collaborative design tool",
    icon: "figma",
    category: "design",
    brewCask: "figma",
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Design toolkit for Mac",
    icon: "sketch",
    category: "design",
    brewCask: "sketch",
  },
  {
    id: "imageoptim",
    name: "ImageOptim",
    description: "Image compression",
    icon: "imageoptim",
    category: "design",
    brewCask: "imageoptim",
  },
  {
    id: "colorsnapper",
    name: "ColorSnapper",
    description: "Color picker tool",
    icon: "colorsnapper",
    category: "design",
    brewCask: "colorsnapper",
  },
  {
    id: "canva",
    name: "Canva",
    description: "Online design platform",
    icon: "canva",
    category: "design",
    brewCask: "canva",
  },
]

export function generateInstallCommand(selectedApps: App[]): string {
  if (selectedApps.length === 0) return ""

  const casks = selectedApps
    .filter((app) => app.brewCask)
    .map((app) => app.brewCask)

  if (casks.length === 0) return ""

  // Generate a multi-line brew install command
  return `curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh | bash && brew install --cask ${casks.join(" ")}`
}
