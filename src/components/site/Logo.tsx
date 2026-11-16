import { Link } from "@tanstack/react-router";
import { LOGO_URL, brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function LogoMark({
  className,
  alt = "CRISPPURE BEVERAGES official logo",
}: {
  className?: string | undefined;
  alt?: string | undefined;
}) {
  return (
    <img
      src={LOGO_URL}
      alt={alt}
      className={cn("h-11 w-auto object-contain", className)}
      loading="eager"
    />
  );
}

export function LogoLockup({
  className,
  imageClassName,
  inverted = false,
}: {
  className?: string | undefined;
  imageClassName?: string | undefined;
  inverted?: boolean | undefined;
}) {
  return (
    <Link
      to="/"
      className={cn("group flex items-center gap-3 transition-opacity hover:opacity-90", className)}
    >
      <div className="relative flex items-center justify-center">
        <LogoMark
          className={cn(
            "h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105",
            imageClassName,
          )}
        />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-black tracking-tight sm:text-xl",
            inverted ? "text-white" : "text-primary",
          )}
        >
          {brand.name}
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.62rem] font-bold uppercase tracking-[0.28em]",
            inverted ? "text-sky-200" : "text-muted-foreground",
          )}
        >
          BEVERAGES
        </span>
      </div>
    </Link>
  );
}
