import type { TeamMember, PhilosophyItem } from "./types";

export interface BrandProject {
  title: string;
  category: string;
  imageUrl: string;
  url: string;
}

export const BRAND_PROJECTS: BrandProject[] = [
  {
    title: "Aaroma",
    category: "Fragrance & Scents",
    imageUrl: "/brands/aaroma.png",
    url: "https://aaroma.co",
  },
  {
    title: "Magic Perfume",
    category: "Luxury Perfumery",
    imageUrl: "/brands/magicperfume.png",
    url: "https://magicperfume.co",
  },
  {
    title: "Keans",
    category: "Premium Essentials",
    imageUrl: "/brands/keans.png",
    url: "https://keans.co",
  },
  {
    title: "TryScent",
    category: "Discovery Fragrances",
    imageUrl: "/brands/tryscent.png",
    url: "https://tryscent.co",
  },
  {
    title: "Branzio",
    category: "Modern Accessories",
    imageUrl: "/brands/branzio.png",
    url: "https://branzio.com",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Calvince",
    role: "Marketing Lead",
    description:
      "Brings brands to life in the digital world. Calvince crafts resonant campaigns that turn browsers into believers.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&h=800&fit=crop",
  },
  {
    name: "Ray",
    role: "Operations Manager",
    description:
      "The invisible force behind our logistics. Ray ensures seamless order fulfillment and operational excellence.",
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&h=800&fit=crop",
  },
  {
    name: "Anne",
    role: "Customer Service",
    description:
      "Passionate about positive experiences. Anne solves problems with care, making sure every customer feels valued.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&h=800&fit=crop",
  },
  {
    name: "Paul",
    role: "Customer Service",
    description:
      "Focused on building trust. Paul transforms one-time buyers into long-term supporters through thoughtful service.",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&h=800&fit=crop",
  },
  {
    name: "Mehdi",
    role: "Full-Stack Developer",
    description:
      "Architect of our digital ecosystem. Mehdi ensures our platforms are fast, reliable, and user-friendly.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&h=800&fit=crop",
  },
  {
    name: "Sara",
    role: "Brand Designer",
    description:
      "Guardian of the visual identity. Sara turns concepts into cohesive, memorable brand experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&h=800&fit=crop",
  },
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    title: "Purpose-led development",
    description:
      "We focus on building brands that solve real needs. Every product starts with a clear intention to add value.",
  },
  {
    title: "Strong design standards",
    description:
      "Aesthetic consistency builds trust. We maintain high standards of modern, clean, and timeless design.",
  },
  {
    title: "Customer-first thinking",
    description:
      "The experience is as important as the product. We prioritize the human at the other end of the screen.",
  },
  {
    title: "Practical luxury",
    description:
      "High-end quality without unnecessary markup. We provide premium products at accessible price points.",
  },
];
