import {
  Chrome,
  Globe,
  Code2,
  Terminal,
  FileCode,
  Github,
  Container,
  Send,
  FileText,
  Brain,
  Zap,
  Search,
  Key,
  LayoutGrid,
  CheckSquare,
  LineChart,
  MessageSquare,
  Headphones,
  Video,
  Phone,
  MessageCircle,
  Music,
  Play,
  Film,
  Clapperboard,
  Monitor,
  Trash2,
  Archive,
  FolderArchive,
  Battery,
  Activity,
  Shield,
  Lock,
  Eye,
  Flame,
  Palette,
  PenTool,
  Image,
  Pipette,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  // Browsers
  chrome: Chrome,
  firefox: Globe,
  brave: Shield,
  arc: Globe,
  opera: Globe,
  edge: Globe,

  // Development
  vscode: Code2,
  iterm: Terminal,
  sublime: FileCode,
  github: Github,
  docker: Container,
  postman: Send,
  cursor: Code2,
  warp: Terminal,

  // Productivity
  notion: FileText,
  obsidian: Brain,
  raycast: Zap,
  alfred: Search,
  "1password": Key,
  rectangle: LayoutGrid,
  todoist: CheckSquare,
  linear: LineChart,

  // Communication
  slack: MessageSquare,
  discord: Headphones,
  zoom: Video,
  telegram: Send,
  whatsapp: Phone,
  teams: MessageCircle,

  // Media
  spotify: Music,
  vlc: Play,
  iina: Film,
  handbrake: Clapperboard,
  obs: Monitor,

  // Utilities
  cleanmymac: Trash2,
  appcleaner: Trash2,
  unarchiver: Archive,
  keka: FolderArchive,
  coconut: Battery,
  stats: Activity,

  // Security
  bitwarden: Lock,
  nordvpn: Shield,
  mullvad: Eye,
  lulu: Flame,

  // Design
  figma: Palette,
  sketch: PenTool,
  imageoptim: Image,
  colorsnapper: Pipette,
  canva: Sparkles,
}

interface AppIconProps {
  icon: string
  name: string
  className?: string
}

export function AppIcon({ icon, name, className }: AppIconProps) {
  const Icon = iconMap[icon] || Globe

  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-muted to-muted/50 p-3 ${className || ""}`}
    >
      <Icon className="h-8 w-8 text-foreground/80" />
      <span className="sr-only">{name}</span>
    </div>
  )
}
