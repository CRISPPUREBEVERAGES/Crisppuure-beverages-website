import logoTransparent from "@/assets/crisppure-logo-transparent.png";
import logoImg from "@/assets/crisppure-logo.jpg";
import bottle1L from "@/assets/bottle-1l.jpg";
import bottle500 from "@/assets/bottle-500ml.png";
import bottle250 from "@/assets/bottle-250ml.png";
import bottle200 from "@/assets/bottle-200ml.png";
import bottle2L from "@/assets/bottle-2l.png";
import bottle5L from "@/assets/bottle-5l.png";
import jar20L from "@/assets/jar-20l.png";

export const LOGO_URL = logoTransparent;
export const LOGO_JPG = logoImg;

export const brand = {
  company: "CRISPPURE BEVERAGES",
  name: "CRISPPURE",
  tagline: "Pure Water. Trusted Quality.",
  trustStatement: "Quality you can trust. Purity you can feel.",
  phone: "+91 70550 86832",
  phoneDisplay: "+91 70550 86832",
  phoneHref: "tel:+917055086832",
  email: "wecare@crisppure.info",
  emailHref: "mailto:wecare@crisppure.info",
  whatsapp: "https://wa.me/917055086832",
  whatsappDisplay: "+91 70550 86832",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Quality", to: "/quality" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Distributors", to: "/distributors" },
  { label: "Contact", to: "/contact" },
] as const;

export type Product = {
  size: string;
  slug: string;
  image: string;
  description: string;
  badge?: string;
};

export const products: Product[] = [
  {
    size: "1 Litre",
    slug: "1l",
    image: bottle1L,
    description: "Ideal for homes, offices, travel and everyday hydration.",
    badge: "Flagship Size",
  },
  {
    size: "500 ml",
    slug: "500ml",
    image: bottle500,
    description: "Convenient hydration for travel, work and everyday use.",
  },
  {
    size: "250 ml",
    slug: "250ml",
    image: bottle250,
    description:
      "Compact and convenient for events, hospitality and individual consumption.",
  },
  {
    size: "200 ml",
    slug: "200ml",
    image: bottle200,
    description: "Ideal for meetings, events, hospitality and quick refreshment.",
  },
];

export const extendedProducts: Product[] = [
  {
    size: "2 Litre",
    slug: "2l",
    image: bottle2L,
    description: "Generous hydration for family dining, long journeys and road trips.",
  },
  {
    size: "5 Litre",
    slug: "5l",
    image: bottle5L,
    description: "Convenient bulk water container for homes, small offices and kitchens.",
  },
  {
    size: "20 Litre Jar",
    slug: "20l",
    image: jar20L,
    description: "Commercial and residential dispenser jar for continuous refreshing supply.",
  },
];

export const allProducts: Product[] = [...products, ...extendedProducts];

export const bottle5LImage = bottle5L;
export const heroBottle = bottle1L;
