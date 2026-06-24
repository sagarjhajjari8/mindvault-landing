import type { LucideIcon } from "lucide-react";
import {
  Archive,
  BadgeCheck,
  Fingerprint,
  FolderTree,
  History,
  Layers3,
  LockKeyhole,
  MapPinned,
  Palette,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  UtensilsCrossed,
} from "lucide-react";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Security", href: "#security" },
] as const;

export const heroStats = [
  { value: "7x", label: "faster retrieval than endless scrolling" },
  { value: "∞", label: "saved posts organized across all accounts" },
  { value: "24/7", label: "real-time sync visibility in the dashboard" },
] as const;

export const problemPoints: IconItem[] = [
  {
    title: "Endless scrolling, no search",
    description:
      "Saved posts pile up in one long feed, so finding a specific reference becomes guesswork instead of recall.",
    icon: Search,
  },
  {
    title: "No real organization",
    description:
      "Without folders or categories, ideas for design, travel, food, and research all blur together.",
    icon: FolderTree,
  },
  {
    title: "Hard to find old posts",
    description:
      "The further back a post is saved, the less likely it is to ever be rediscovered when it actually matters.",
    icon: History,
  },
  {
    title: "No multi-account support",
    description:
      "Managing inspiration across personal, creator, or client profiles quickly turns into fragmented chaos.",
    icon: Layers3,
  },
];

export const featureCards: IconItem[] = [
  {
    title: "Automated Syncing",
    description:
      "Automatically fetch saved posts so your vault stays fresh without manual busywork.",
    icon: RefreshCw,
  },
  {
    title: "Advanced Categorization",
    description:
      "Organize with custom folders that make saved content feel structured and useful.",
    icon: FolderTree,
  },
  {
    title: "Favorites & Pinning",
    description:
      "Keep key inspiration within reach by pinning the posts you return to most.",
    icon: Star,
  },
  {
    title: "Powerful Search & Filters",
    description:
      "Find anything instantly with fast search and smarter filtering across your vault.",
    icon: Search,
  },
  {
    title: "Multi-Account Support",
    description:
      "Manage all of your Instagram accounts in one calm, unified workspace.",
    icon: Layers3,
  },
  {
    title: "Secure & Private",
    description:
      "Protect access with AES-256 encryption, Google Auth, and a privacy-first product story.",
    icon: ShieldCheck,
  },
  {
    title: "Real-time Updates",
    description:
      "See new saves reflected immediately so your dashboard always matches your actual activity.",
    icon: Sparkles,
  },
];

export const howItWorksSteps = [
  {
    title: "Connect Instagram account",
    description:
      "Start with a secure connection flow that brings your account into MindVault without forcing a clunky setup ritual.",
  },
  {
    title: "Sync saved posts automatically",
    description:
      "MindVault handles the background syncing so your content lands inside a clean dashboard instead of a backlog.",
  },
  {
    title: "Organize & search effortlessly",
    description:
      "Use folders, favorites, and search to surface the right saved post exactly when you need it.",
  },
] as const;

export const useCases = [
  {
    title: "Design inspiration",
    audience: "Designers",
    description:
      "Build moodboards, collect UI references, and bring scattered saved posts into a single inspiration system.",
    icon: Palette,
  },
  {
    title: "Food planning",
    audience: "Food lovers",
    description:
      "Keep recipes, restaurants, and hidden spots organized so great finds are easy to revisit later.",
    icon: UtensilsCrossed,
  },
  {
    title: "Trip mapping",
    audience: "Travelers",
    description:
      "Turn destination saves into travel-ready collections for itineraries, neighborhoods, and must-see places.",
    icon: MapPinned,
  },
  {
    title: "Everyday retrieval",
    audience: "Everyday users",
    description:
      "Capture life hacks, products, tutorials, and references in a vault designed for everyday recall.",
    icon: Archive,
  },
] as const;

export const testimonials = [
  {
    name: "Amelia Ross",
    role: "Brand Designer",
    initials: "AR",
    quote:
      "I went from a graveyard of saved posts to a clean inspiration vault I can actually use during client work.",
  },
  {
    name: "Jordan Kim",
    role: "Travel Creator",
    initials: "JK",
    quote:
      "MindVault makes my destination saves feel like a searchable itinerary instead of a chaotic scroll marathon.",
  },
  {
    name: "Priya Patel",
    role: "Everyday Power User",
    initials: "PP",
    quote:
      "The multi-account view is the part that sold me. Everything finally lives in one calm place with instant search.",
  },
] as const;

export const securityHighlights: IconItem[] = [
  {
    title: "Encrypted credentials",
    description:
      "Positioned with AES-256 protection so sensitive access details feel handled with the same care as financial software.",
    icon: LockKeyhole,
  },
  {
    title: "Secure authentication",
    description:
      "Google Auth keeps sign-in familiar, streamlined, and credible for a premium productivity tool.",
    icon: BadgeCheck,
  },
  {
    title: "User-owned privacy",
    description:
      "MindVault is framed around your data ownership, transparent controls, and a privacy-first relationship with saved content.",
    icon: Fingerprint,
  },
];
