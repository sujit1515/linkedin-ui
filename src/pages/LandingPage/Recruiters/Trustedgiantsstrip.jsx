import { useRef, useEffect } from "react";

const companies = ["TCS", "Google", "Amazon", "Microsoft", "Infosys", "Wipro", "HCL", "Accenture", "Flipkart", "Razorpay"];
const doubled = [...companies, ...companies];

export default function TrustedGiantsStrip() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animFrame;
    let position = 0;
    const speed = 0.7;
    const singleWidth = track.scrollWidth / 2;

    const animate = () => {
      position += speed;
      if (position >= singleWidth) position = 0;
      track.style.transform = `translateX(-${position}px)`;
      animFrame = requestAnimationFrame(animate);
    };
    animFrame = requestAnimationFrame(animate);

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
    <section className="bg-[#080d1a] border-t border-white/8 py-12">
      <p className="text-center text-xs font-bold tracking-[0.3em] text-blue-400/70 uppercase mb-8">
        Trusted by Global Giants
      </p>

      {/* Marquee */}
      <div
        className="relative overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-10 whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/8 transition-colors cursor-pointer"
            >
              <span className="text-gray-400 hover:text-gray-200 transition-colors text-sm font-bold tracking-wider">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}