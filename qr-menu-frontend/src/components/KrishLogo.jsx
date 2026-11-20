import React from "react";

/**
 * DEMO Cafe & Restaurant Official Brand Logo Component
 */
export default function KrishLogo({
  size = "md",
  showTagline = false,
  showMascot = false,
  taglineText = "Taste the Happiness",
  className = "",
  linkTo = null
}) {
  const content = (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <div className="relative flex items-center justify-center gap-2.5">
        <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-red-500/20 rounded-full blur-md opacity-70 pointer-events-none" />

        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/25 relative z-10 border border-amber-300/40">
          <svg className="w-5 h-5 text-stone-950 drop-shadow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.69 2 6 4.69 6 8c0 .54.08 1.05.21 1.54C4.93 10.15 4 11.46 4 13c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4 0-1.54-.93-2.85-2.21-3.46.13-.49.21-1 .21-1.54 0-3.31-2.69-6-6-6zm-5 17h10v2H7v-2z" />
          </svg>
        </div>

        <div className="flex flex-col relative z-10 text-left">
          <span className="font-black text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 font-sans leading-none drop-shadow-sm">
            DEMO
          </span>
          <span className="text-[9px] font-extrabold tracking-widest text-stone-300 uppercase leading-tight mt-0.5">
            CAFE &amp; RESTAURANT
          </span>
        </div>
      </div>

      {showTagline && (
        <span className="text-[11px] text-amber-300/80 tracking-wide mt-1">
          {taglineText}
        </span>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <a href={linkTo} className="inline-block cursor-pointer">
        {content}
      </a>
    );
  }

  return content;
}
