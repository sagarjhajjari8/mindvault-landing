export const siteConfig = {
  name: "MindVault",
  title: "MindVault – Instagram Saved Posts Manager",
  description:
    "A premium SaaS landing page for a Chrome extension that organizes Instagram saved posts into a structured, searchable vault.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://mindvault-landing.vercel.app",
  email: "hello@mindvault.app",
} as const;
