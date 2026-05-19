"use client";

type HeroBottomBandProps = {
  scrollHintOpacity: number;
  scrollHintLift: number;
};

export function HeroBottomBand({ scrollHintOpacity, scrollHintLift }: HeroBottomBandProps) {
  return (
    <div className="pointer-events-none relative z-20 mt-auto max-sm:mt-0 border-t border-white/10 bg-gradient-to-t from-zinc-950/95 via-zinc-950/70 to-transparent px-4 pb-[21rem] pt-2 max-sm:border-t-0 max-sm:bg-transparent max-sm:pb-[11.75rem] max-sm:pt-0 max-sm:backdrop-blur-none sm:pb-[15.5rem] sm:pt-4 lg:pb-[14rem]">
      <div className="mx-auto flex max-w-6xl justify-center lg:justify-end lg:px-6">
        <p
          className="pointer-events-none flex shrink-0 items-center justify-center gap-2 text-xs font-medium text-zinc-400/90 transition-[opacity,transform] duration-300 ease-out"
          style={{
            opacity: scrollHintOpacity,
            transform: `translate3d(0, -${scrollHintLift}px, 0)`,
          }}
          aria-hidden={scrollHintOpacity < 0.03}
        >
          <span className="max-sm:text-[11px]">Leistungen entdecken</span>
          <span
            className="inline-flex text-[#a8e055]/90 motion-safe:animate-bounce motion-reduce:animate-none"
            aria-hidden
          >
            ↓
          </span>
        </p>
      </div>
    </div>
  );
}
