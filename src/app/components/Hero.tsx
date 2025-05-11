"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Hijacking: Vertical mouse wheel to horizontal scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-screen h-screen bg-black text-white snap-start flex-shrink-0 relative overflow-hidden"
    >
      {/* Left Content */}
      <div className="p-20 flex flex-col justify-center h-full w-full max-w-4xl">
        <h1 className="text-7xl font-extrabold leading-tight drop-shadow-[3px_3px_0px_rgba(0,0,0,0.6)]">
          Hello<span className="text-yellow-400">.</span><br />
          I am <br />
          Manishkumar
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Front-end Developer<br />with 3 years experience<br />based in India
        </p>
      </div>

      {/* Right Arrow Button */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
        <button className="bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-300 transition-all">
          <ArrowRight />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-10 text-yellow-400 text-sm">
        Scroll
        <div className="h-1 w-20 bg-yellow-400 mt-1 rounded-full" />
      </div>
    </section>
  );
}
