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
    <section className="bg-white border-t border-gray-200 py-12">
      <p className="text-center text-xs font-bold tracking-[0.3em] text-blue-600/80 uppercase mb-8">
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
              className="flex-shrink-0 px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-500 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <span className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-bold tracking-wider">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}