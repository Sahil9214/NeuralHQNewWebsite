import { PieChart, Sparkles, Shield } from "lucide-react";
interface Solution {
  name: string;
  description: string;
  icon: React.ElementType;
  link: string;
}

export interface NavItem {
  name: string;
  link: string;
  solutions?: Solution[];
}

export const navItems: NavItem[] = [
  {
    name: "Solutions",
    link: "#products",
  },
  {
    name: "About Us",
    link: "AboutUs",
  },
  {
    name: "Blog",
    link: "Blog",
  },
  {
    name: "Book a demo",
    link: "#contact",
  },
];
export const solutions: Solution[] = [
  {
    name: "Intelligent Catalogue",
    description: "AI-powered tagging and catalog enhancement for e-commerce",
    icon: PieChart,
    link: "#intelligent-catalogue",
  },
  {
    name: "Visual Generation",
    description: "Transform product imagery with AI-powered tools",
    icon: Sparkles,
    link: "#visual-catalogue",
  },
  {
    name: "Semantic Discovery",
    description: "Context-aware search and recommendations",
    icon: Shield,
    link: "#contextual-search",
  },
];
