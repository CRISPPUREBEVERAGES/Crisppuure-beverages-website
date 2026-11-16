import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brand, navLinks } from "@/lib/brand";
import { LogoLockup } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border/80 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/90 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <LogoLockup imageClassName={cn("transition-all duration-300", scrolled ? "h-9" : "h-11")} />

        <nav className="hidden items-center gap-1 lg:gap-1.5 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-3 py-1.5 text-[13px] font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary data-[status=active]:font-bold lg:px-3.5 lg:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={brand.phoneHref}
            className="hidden items-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-85 xl:flex lg:text-sm"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <span>{brand.phone}</span>
          </a>
          <Button
            asChild
            className="rounded-full bg-primary px-5 font-semibold text-primary-foreground shadow-soft hover:bg-primary/90"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border text-primary transition-colors hover:bg-secondary md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white shadow-lg md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary data-[status=active]:bg-secondary data-[status=active]:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border/60 pt-3">
              <a
                href={brand.phoneHref}
                className="flex items-center gap-3 rounded-xl bg-secondary/50 px-4 py-3 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>{brand.phone}</span>
              </a>
              <Button asChild className="rounded-full font-semibold shadow-soft">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
