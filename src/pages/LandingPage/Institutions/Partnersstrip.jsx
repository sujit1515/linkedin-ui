import { useRef, useEffect } from "react";

const partners = [
  "NAAC",
  "NPTEL",
  "QS WORLD",
  "THE RANKING",
  "AICTE",
  "UGC",
  "NBA",
  "IIT MADRAS",
  "NASSCOM",
  "ISO 9001",
];

// Duplicate for seamless infinite loop
const doubled = [...partners, ...partners];

export default function PartnersStrip() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animFrame;
    let position = 0;
    const speed = 0.6; // px per frame

    // Get the width of ONE set of items (half the total)
    const singleSetWidth = track.scrollWidth / 2;

    const animate = () => {
      position += speed;
      if (position >= singleSetWidth) {
        position = 0;
      }
      track.style.transform = `translateX(-${position}px)`;
      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animFrame);
    const resume = () => { animFrame = requestAnimationFrame(animate); };

    track.parentElement.addEventListener("mouseenter", pause);
    track.parentElement.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animFrame);
      track.parentElement?.removeEventListener("mouseenter", pause);
      track.parentElement?.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="bg-white border-y border-gray-100 py-10 overflow-hidden">
      {/* Label */}
      <p className="text-center text-xs font-bold tracking-[0.25em] text-blue-400 uppercase mb-6">
        Featured Partners &amp; Accreditations
      </p>

      {/* Marquee track */}
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div
          ref={trackRef}
          className="flex items-center gap-16 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {doubled.map((name, i) => (
            <span
              key={i}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base font-black tracking-widest uppercase cursor-pointer select-none flex-shrink-0"
              style={{ fontStyle: ["NPTEL", "THE RANKING"].includes(name) ? "italic" : "normal" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}