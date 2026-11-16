import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Boxes,
  Briefcase,
  Building2,
  CalendarHeart,
  CheckCircle2,
  ChefHat,
  Droplets,
  Factory,
  FlaskConical,
  Hotel,
  Mail,
  MessageCircle,
  Package,
  PackageCheck,
  Phone,
  Plane,
  Recycle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  Users,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { brand, heroBottle, LOGO_URL, products, type Product } from "@/lib/brand";
import { LogoMark } from "./Logo";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  inverted = false,
}: {
  eyebrow?: string | undefined;
  title: ReactNode;
  subtitle?: string | undefined;
  align?: "center" | "left" | undefined;
  inverted?: boolean | undefined;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.28em]",
            inverted ? "text-accent" : "text-sky",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          inverted ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            inverted ? "text-white/80" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function WaterBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-28 -top-10 h-96 w-96 rounded-full bg-sky/15 blur-3xl" />
      <div className="absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-soft/40 blur-2xl" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f8fc] via-[#f7fbfe] to-white pt-6 pb-16 lg:py-24">
      <WaterBackdrop />

      {/* Subtle background water wave decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-40 [background:radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.25)_0%,transparent_75%)]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left Side */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-primary shadow-sm backdrop-blur-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Droplets className="h-3 w-3" />
            </span>
            {brand.company}
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pure Water.
            <br />
            <span className="bg-gradient-to-r from-primary via-[#0ea5e9] to-primary bg-clip-text text-transparent">
              Trusted Quality.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Refreshing packaged drinking water, manufactured with care for every occasion.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary px-8 font-bold text-primary-foreground shadow-soft transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90"
            >
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary/30 bg-white/80 px-8 font-bold text-primary transition-all duration-300 hover:bg-secondary hover:text-primary"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2.5 rounded-2xl border border-primary/10 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-sm">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold text-primary">
              {brand.trustStatement}
            </span>
          </div>
        </div>

        {/* Right Side: CRISPPURE 1 Litre Bottle Showcase */}
        <div className="relative flex items-center justify-center py-6">
          {/* Subtle CRISPPURE Official Logo in Background */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <img
              src={LOGO_URL}
              alt=""
              className="h-[460px] w-auto max-w-full opacity-[0.06] select-none"
            />
          </div>

          {/* Soft blue glow backdrop */}
          <div
            aria-hidden
            className="absolute h-80 w-80 rounded-full bg-gradient-to-tr from-sky/35 via-primary/20 to-sky-soft blur-3xl"
          />

          {/* Decorative water waves ring */}
          <div
            aria-hidden
            className="absolute h-[380px] w-[380px] rounded-full border border-sky/30 opacity-60 animate-pulse"
          />
          <div
            aria-hidden
            className="absolute h-[460px] w-[460px] rounded-full border border-sky/20 opacity-40"
          />

          {/* Floating water drops badges */}
          <div className="absolute left-4 top-12 z-20 hidden items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2 shadow-soft backdrop-blur-md sm:flex animate-float-slow">
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-sky/20 text-primary">
              <Droplets className="h-4 w-4" />
            </span>
            <span className="text-xs font-bold text-foreground">Hygienic Process</span>
          </div>

          <div
            className="absolute right-4 bottom-16 z-20 hidden items-center gap-2 rounded-2xl border border-white/80 bg-white/90 px-3.5 py-2 shadow-soft backdrop-blur-md sm:flex animate-float-slow"
            style={{ animationDelay: "1.8s" }}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-accent/25 text-accent-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
            </span>
            <span className="text-xs font-bold text-foreground">1 Litre Bottle</span>
          </div>

          {/* CRISPPURE 1L Bottle Image */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src={heroBottle}
              alt="CRISPPURE 1 Litre Packaged Drinking Water Bottle"
              className="max-h-[520px] w-auto object-contain transition-transform duration-700 hover:scale-[1.03] drop-shadow-[0_25px_35px_rgba(20,70,160,0.22)] mix-blend-multiply"
              loading="eager"
            />
            {/* Soft bottle shadow underneath */}
            <div
              aria-hidden
              className="mt-[-12px] h-6 w-52 rounded-full bg-primary/25 blur-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutPillars = [
  {
    icon: Sparkles,
    title: "Company Overview",
    text: "CRISPPURE BEVERAGES is a packaged drinking water manufacturing company delivering reliable, refreshing drinking water in multiple convenient bottle sizes.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Commitment",
    text: "Consistent attention to quality is maintained throughout each stage of our water sourcing, treatment and bottling operations.",
  },
  {
    icon: Factory,
    title: "Manufacturing Focus",
    text: "Modern bottling lines and hygienic production environments guide every step of our packaging and sealing process.",
  },
  {
    icon: Users,
    title: "Customer Commitment",
    text: "Dependable supply and dedicated service for retail stores, hospitality venues, offices, events and distributors.",
  },
];

export function AboutSection({ withCta = true }: { withCta?: boolean }) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About CRISPPURE"
              title="Refreshing Lives with CRISPPURE"
            />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              CRISPPURE BEVERAGES is a packaged drinking water manufacturing company focused on
              delivering refreshing, reliable and quality drinking water in convenient bottle sizes
              for everyday consumption, hospitality, events, businesses and retail.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Built on a foundation of responsible manufacturing practices and unwavering attention
              to customer satisfaction, CRISPPURE brings clean, refreshing hydration to consumers
              and businesses across all requirements.
            </p>
            {withCta && (
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary px-8 font-bold shadow-soft hover:bg-primary/90"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary/25 px-8 font-bold text-primary hover:bg-secondary"
                >
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {aboutPillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-float"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProductsSection({
  eyebrow = "Our Products",
  title = "Our Products",
  subtitle = "Refreshing hydration for every occasion.",
  showHeading = true,
  productList = products,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  showHeading?: boolean;
  productList?: Product[];
} = {}) {
  return (
    <section className="relative overflow-hidden bg-sky-soft/60 py-20 lg:py-24">
      <WaterBackdrop />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {showHeading ? (
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        ) : null}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productList.map((p) => (
            <article
              key={p.slug}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-float"
            >
              {/* Product Visual Container */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-b from-[#f2f8fc] to-white p-6">
                {p.badge && (
                  <span className="absolute top-4 left-4 z-20 rounded-full bg-accent px-3 py-1 text-[11px] font-black uppercase tracking-wider text-accent-foreground shadow-sm">
                    {p.badge}
                  </span>
                )}
                {/* Soft backdrop glow */}
                <div
                  aria-hidden
                  className="absolute h-36 w-36 rounded-full bg-sky/20 blur-2xl group-hover:bg-sky/30 transition-colors"
                />
                <img
                  src={p.image}
                  alt={`CRISPPURE ${p.size} packaged drinking water bottle`}
                  loading="lazy"
                  className="relative z-10 max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 mix-blend-multiply"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-black text-primary">{p.size}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Bottle
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <Button
                  asChild
                  className="mt-6 w-full rounded-full bg-primary font-bold text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  <Link to="/contact">Enquire Now</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    text: "Consistent attention to quality throughout our production process.",
  },
  {
    icon: Sparkles,
    title: "Hygienic Manufacturing",
    text: "Focused on maintaining hygienic production and packaging practices.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    text: "Dependable supply for retail and business requirements.",
  },
  {
    icon: Boxes,
    title: "Convenient Sizes",
    text: "Multiple bottle sizes for different occasions and requirements.",
  },
  {
    icon: Package,
    title: "Modern Packaging",
    text: "Clean and practical packaging designed for convenience.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    text: "Committed to serving customers and business partners reliably.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why CRISPPURE"
          title="Why Choose CRISPPURE?"
          subtitle="Built on values of purity, reliability and genuine commitment to every bottle we deliver."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-border/80 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-float"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft transition-transform group-hover:scale-105">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Droplets, title: "Water Source", desc: "Carefully selected raw water source" },
  { icon: FlaskConical, title: "Purification", desc: "Multi-stage filtration and purification" },
  { icon: ShieldCheck, title: "Quality Checks", desc: "Rigorous monitoring and testing" },
  { icon: Waves, title: "Bottle Filling", desc: "Controlled automated bottling" },
  { icon: PackageCheck, title: "Sealing", desc: "Tamper-evident hygiene cap sealing" },
  { icon: Package, title: "Packaging", desc: "Secure carton packing for transit" },
  { icon: Truck, title: "Distribution", desc: "Prompt dispatch and delivery" },
];

export function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(60%_50%_at_20%_0%,oklch(0.72_0.115_235/0.4),transparent),radial-gradient(50%_60%_at_90%_100%,oklch(0.42_0.175_262/0.6),transparent)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          inverted
          eyebrow="Our Process"
          title="Quality at Every Step"
          subtitle="From source to distribution, each stage of our process is handled with care and consistency."
        />

        <div className="mt-14">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <li
                key={title}
                className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.1]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs font-black tracking-widest text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="hidden text-white/30 lg:inline">→</span>
                  )}
                </div>
                <span className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-white">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-white/70">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const manufacturingPoints = [
  {
    icon: Sparkles,
    title: "Hygienic production environment",
    desc: "Enclosed, sanitized clean rooms preventing external contamination.",
  },
  {
    icon: Waves,
    title: "Controlled bottling process",
    desc: "Automated filling and sealing machinery ensuring consistent hygiene.",
  },
  {
    icon: ShieldCheck,
    title: "Quality monitoring",
    desc: "Standardized inspection protocols followed across every production run.",
  },
  {
    icon: PackageCheck,
    title: "Secure packaging",
    desc: "Durable bottles and secure tamper-evident seals built for travel and retail.",
  },
  {
    icon: Recycle,
    title: "Consistent production practices",
    desc: "Systematic workflows ensuring uniform water taste and bottle finish.",
  },
];

export function ManufacturingSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Manufacturing"
            title="Modern Manufacturing. Consistent Quality."
            subtitle="Built for reliability and precision at every stage of the bottling line."
          />
          <ul className="mt-8 space-y-3.5">
            {manufacturingPoints.map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:shadow-soft"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{title}</h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Manufacturing Visual Showcase */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand-gradient p-8 text-white shadow-float sm:p-12">
            <div
              aria-hidden
              className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(115deg,transparent_0_18px,rgba(255,255,255,0.2)_18px_20px)]"
            />
            <div className="relative flex flex-col items-center gap-6 text-center">
              <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white p-3 shadow-soft">
                <LogoMark className="h-16 w-auto object-contain" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-black">Controlled Bottling Facility</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                  Every CRISPPURE bottle is filled, sealed and packed through a controlled,
                  monitored process engineered for consistency and purity.
                </p>
              </div>

              <div className="grid w-full grid-cols-3 gap-2 border-t border-white/20 pt-6">
                <div>
                  <span className="block font-display text-xl font-black text-accent">Stage 1</span>
                  <span className="text-xs text-white/80">Rinsing</span>
                </div>
                <div>
                  <span className="block font-display text-xl font-black text-accent">Stage 2</span>
                  <span className="text-xs text-white/80">Filling</span>
                </div>
                <div>
                  <span className="block font-display text-xl font-black text-accent">Stage 3</span>
                  <span className="text-xs text-white/80">Sealing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  { icon: ShoppingBag, title: "Retail Stores", desc: "Supermarkets, grocery & convenience stores" },
  { icon: Hotel, title: "Hotels & Restaurants", desc: "Fine dining, cafes, guest rooms & banquet dining" },
  { icon: Building2, title: "Offices", desc: "Daily corporate desks, pantries & boardrooms" },
  { icon: CalendarHeart, title: "Events & Functions", desc: "Weddings, exhibitions & cultural gatherings" },
  { icon: ChefHat, title: "Catering", desc: "Outdoor catering, celebrations & buffet setups" },
  { icon: Plane, title: "Travel & Hospitality", desc: "Transit lounges, tours, coaches & resorts" },
  { icon: Briefcase, title: "Corporate Requirements", desc: "Annual general meetings, seminars & bulk orders" },
  { icon: Truck, title: "Distributors", desc: "Wholesale & regional distribution networks" },
];

export function WhoWeServeSection() {
  return (
    <section className="bg-sky-soft/70 py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Water for Every Occasion"
          subtitle="From retail shelves to corporate boardrooms, CRISPPURE provides dependable packaged water."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col items-center rounded-3xl border border-white/80 bg-white/90 p-7 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-float"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">{title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DistributorSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/80 bg-card p-8 shadow-soft sm:p-14">
          <WaterBackdrop />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="B2B Partnerships"
                title="Partner With CRISPPURE"
              />
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Looking for a reliable packaged drinking water supplier for your retail outlet,
                hotel, restaurant, office, event or business? Connect with CRISPPURE BEVERAGES.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-foreground/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Consistent Supply
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Multiple Bottle Sizes
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Dedicated Partner Support
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3.5 lg:justify-end">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary px-7 font-bold text-primary-foreground shadow-soft hover:bg-primary/90"
              >
                <Link to="/distributors">Become a Distributor</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary/30 px-7 font-bold text-primary hover:bg-secondary"
              >
                <Link to="/contact">Business Enquiry</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeEnquirySection() {
  return (
    <section className="bg-sky-soft/50 py-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quick Enquiry"
          title="Send Us An Enquiry"
          subtitle="Get in touch with CRISPPURE BEVERAGES for bulk orders, dealership inquiries, or general questions."
        />
        <div className="mt-12">
          <EnquiryForm />
        </div>
      </div>
    </section>
  );
}

export function ContactChannels() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <a
        href={brand.phoneHref}
        className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Phone className="h-5 w-5" />
        </span>
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Call Us
          </span>
          <span className="block text-sm font-bold text-foreground">{brand.phone}</span>
        </div>
      </a>

      <a
        href={brand.emailHref}
        className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            Email Us
          </span>
          <span className="block text-sm font-bold text-foreground break-all">{brand.email}</span>
        </div>
      </a>

      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-leaf/40 hover:shadow-soft"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/10 text-leaf transition-colors group-hover:bg-leaf group-hover:text-white">
          <MessageCircle className="h-5 w-5" />
        </span>
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            WhatsApp
          </span>
          <span className="block text-sm font-bold text-foreground">Chat With Us</span>
        </div>
      </a>
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have a business enquiry? We're here to help."
        />
        <div className="mt-8 text-center">
          <p className="font-display text-xl font-black text-primary">{brand.company}</p>
        </div>
        <div className="mt-8">
          <ContactChannels />
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 text-white lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(50%_60%_at_50%_0%,rgba(255,255,255,0.7),transparent)]"
      />
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <span className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white p-3 shadow-float">
          <LogoMark className="h-14 w-auto object-contain" />
        </span>
        <h2 className="mt-7 font-display text-3xl font-black tracking-tight sm:text-4xl">
          Stay Refreshed with CRISPPURE
        </h2>
        <p className="mt-4 text-base font-medium text-white/90 sm:text-lg">
          Quality packaged drinking water for every occasion.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent px-8 font-black text-accent-foreground shadow-soft transition-transform hover:scale-105 hover:bg-accent/95"
          >
            <Link to="/products">Explore Products</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-white/40 bg-transparent px-8 font-bold text-white transition-colors hover:bg-white/10 hover:text-white"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string | undefined;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f8fc] to-white py-16 lg:py-20">
      <WaterBackdrop />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={<h1 className="contents">{title}</h1>}
          subtitle={subtitle}
        />
      </div>
    </section>
  );
}
