import citykingLogo from "@/assets/Cityking Masala Logo.png";
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
  const sizeMap = {
    sm: "h-8 sm:h-9 max-w-[120px]",
    md: "h-10 sm:h-12 max-w-[150px] sm:max-w-[175px]",
    lg: "h-12 sm:h-14 max-w-[180px] sm:max-w-[210px]",
  };

  return (
    <span className={cn("inline-flex items-center gap-2 group", className)}>
      <span className="relative shrink-0 flex items-center justify-center">
        <img
          src={citykingLogo}
          alt="City King Official Logo - Sah Food Industries"
          className={cn(
            sizeMap[size],
            "w-auto object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105",
          )}
        />
      </span>

      {showText && (
        <span className="hidden sm:flex flex-col leading-tight border-l border-border/60 pl-2">
          <span
            className={cn(
              "font-display text-[0.88rem] sm:text-[0.98rem] font-black tracking-tight",
              tone === "light" ? "text-cocoa-foreground" : "text-foreground",
            )}
          >
            Sah Food Industries
          </span>
          <span
            className={cn(
              "text-[0.62rem] font-bold tracking-[0.16em] uppercase",
              tone === "light" ? "text-accent" : "text-primary",
            )}
          >
            Siliguri Hub • 100% Shuddh
          </span>
        </span>
      )}
    </span>
  );
}
