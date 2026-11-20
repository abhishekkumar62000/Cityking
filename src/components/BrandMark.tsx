import citykingLogo from "@/assets/CitykingMasala Logo.png";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  tone = "dark",
  showText = true,
  size = "md",
}: {
  className?: string;
  tone?: "dark" | "light";
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const heightMap = {
    sm: "h-8 sm:h-9",
    md: "h-9 sm:h-11",
    lg: "h-12 sm:h-14",
  };

  return (
    <span className={cn("inline-flex items-center gap-2.5 group", className)}>
      <span className="relative shrink-0 flex items-center justify-center">
        <img
          src={citykingLogo}
          alt="City King Official Logo - Sah Food Industries"
          className={cn(
            heightMap[size],
            "w-auto max-w-[160px] sm:max-w-[210px] object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105",
          )}
        />
      </span>

      {showText && (
        <span className="hidden sm:flex flex-col leading-tight border-l border-border/60 pl-2.5">
          <span
            className={cn(
              "font-display text-[1.05rem] font-black tracking-tight",
              tone === "light" ? "text-cocoa-foreground" : "text-foreground",
            )}
          >
            City King
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-bold tracking-[0.16em] uppercase",
              tone === "light" ? "text-accent" : "text-primary",
            )}
          >
            Sah Food Industries
          </span>
        </span>
      )}
    </span>
  );
}
