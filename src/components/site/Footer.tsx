import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { LogoMark } from "./Logo";
import { brand, navLinks, products } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Left Column: Official Logo + Company */}
        <div className="space-y-4">
          <Link to="/" className="group inline-flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-2 shadow-soft transition-transform duration-300 group-hover:scale-105">
              <LogoMark className="h-10 w-auto object-contain" />
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg font-black tracking-tight text-white">
                {brand.name}
              </span>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-sky-200">
                BEVERAGES
              </span>
            </div>
          </Link>
          <p className="text-sm font-medium text-navy-foreground/80">{brand.tagline}</p>
          <p className="text-xs leading-relaxed text-navy-foreground/60">
            Refreshing packaged drinking water, manufactured with care for every occasion.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Links</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-navy-foreground/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Column: 1L, 500ml, 250ml, 200ml */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Products</h3>
          <ul className="mt-4 space-y-2.5">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products"
                  className="text-sm text-navy-foreground/80 transition-colors hover:text-white"
                >
                  {p.size} Bottle
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Contact</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={brand.phoneHref}
                className="group flex items-center gap-2.5 text-sm text-navy-foreground/80 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Phone className="h-4 w-4" />
                </span>
                <span>{brand.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={brand.emailHref}
                className="group flex items-center gap-2.5 text-sm text-navy-foreground/80 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all">{brand.email}</span>
              </a>
            </li>
            <li>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-sm text-navy-foreground/80 transition-colors hover:text-white"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-leaf transition-colors group-hover:bg-leaf group-hover:text-white">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span>WhatsApp Chat</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 {brand.company}. All Rights Reserved.</p>
          <p className="text-[11px] text-navy-foreground/50">
            Packaged Drinking Water Manufactured with Care.
          </p>
        </div>
      </div>
    </footer>
  );
}
