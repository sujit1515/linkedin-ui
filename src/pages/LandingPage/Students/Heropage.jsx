export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        {/* Background radial glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-800/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-indigo-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
            <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            </div>
            #1 Trusted Career Platform in India
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            From Learning to Earning&nbsp;—{" "}
            <br className="hidden sm:block" />
            <span className="text-blue-500">All in One Place</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our growing community of{" "}
            <span className="text-white font-semibold underline underline-offset-4 decoration-blue-500">
              50k+ students
            </span>{" "}
            and professionals across India. Unlock networking, exam prep, and job opportunities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0">
              Create Free Account
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/25 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              Watch Platform Tour
            </button>
          </div>

          {/* Rating & Quote */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pb-12 border-t border-white/10 pt-10">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">4.8</span>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="#FBBF24" className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <defs>
                    <linearGradient id="halfStar">
                      <stop offset="60%" stopColor="#FBBF24" />
                      <stop offset="60%" stopColor="#374151" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    fill="url(#halfStar)"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-500 mt-1.5 tracking-widest uppercase font-medium">
                Rating
              </span>
            </div>
            <div className="hidden sm:block w-px h-14 bg-white/10" />
            <p className="text-sm text-gray-400 italic max-w-xs text-center sm:text-left leading-relaxed">
              "The most comprehensive platform
              <br />
              for Indian job seekers."
            </p>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="border-t border-white/10 py-12 px-4 bg-[#080d1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs text-gray-600 tracking-[0.2em] uppercase mb-8 font-medium">
            Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
            {[
              { name: "ECONOMIC TIMES", italic: false },
              { name: "NDTV", italic: true },
              { name: "BusinessStandard", italic: false },
              { name: "Mint", italic: false },
              { name: "THE HINDU", italic: false },
            ].map(({ name, italic }) => (
              <span
                key={name}
                className="text-gray-500 hover:text-gray-300 transition-colors text-sm sm:text-base font-semibold tracking-wider cursor-pointer select-none"
                style={{ fontStyle: italic ? "italic" : "normal" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}