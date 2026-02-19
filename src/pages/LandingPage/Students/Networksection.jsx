export default function NetworkSection() {
  return (
    <section className="bg-[#0a0f1e] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Network That Actually Works
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We bridge the gap between talented individuals and top recruiters using data-driven
            matching and verified digital identities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left — Candidate Profile Card */}
          <div className="relative">
            <div className="bg-[#0d1528] border border-white/10 rounded-2xl p-5 sm:p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-700 flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                      alt="Arjun Sharma"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML =
                          '<div class="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xl">A</div>';
                      }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-base text-white">Arjun Sharma</span>
                      <svg viewBox="0 0 24 24" fill="#3B82F6" className="w-4 h-4 flex-shrink-0">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm">Full Stack Developer</p>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-blue-600/20 text-blue-400 text-xs font-semibold rounded-md tracking-wide">
                      AI-VERIFIED
                    </span>
                  </div>
                </div>
                {/* QR / ID Card Icon */}
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-gray-400">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <path d="M14 14h1v1h-1zM17 14h1v1h-1zM14 17h1v1h-1zM17 17h3v3h-3z" fill="currentColor" stroke="none" />
                  </svg>
                </div>
              </div>

              {/* Recent Experience */}
              <div className="bg-[#080d1a] rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">
                  Recent Experience
                </p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  Senior Dev @ Tech-Solutions India
                </p>
                <p className="text-gray-400 text-sm mt-0.5">2021 — Present</p>
              </div>

              {/* Tags + Profile Views */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex gap-2 flex-wrap">
                  {["Remote", "Bilingual", "Available"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-gray-300 border border-white/15 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Profile Views Bubble */}
                <div className="flex items-center gap-2.5 bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" className="w-4 h-4">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold leading-none mb-0.5">
                      Profile Views
                    </p>
                    <p className="text-white font-bold text-sm leading-none">+124% this week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Recruiter Insight Card */}
          <div className="bg-[#0d1528] border border-white/10 rounded-2xl p-5 sm:p-6">
            {/* Card Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-base text-white">Recruiter Insight</h3>
              <button className="text-gray-500 hover:text-gray-300 transition-colors p-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>

            {/* Circular Progress */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                  {/* Background ring */}
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="8"
                  />
                  {/* Progress ring — 95% */}
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 42 * 0.95} ${2 * Math.PI * 42}`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-extrabold text-blue-400">95%</span>
                </div>
              </div>
              <p className="font-bold text-white mt-3">Discoverability Score</p>
              <p className="text-gray-400 text-xs mt-1">Top 1% of candidates in your region</p>
            </div>

            {/* Top Verified Skills */}
            <div className="mb-5">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">
                Top Verified Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Python", verified: true, active: true },
                  { name: "UI Design", verified: true, active: true },
                  { name: "Node.js", verified: false, active: false },
                  { name: "PostgreSQL", verified: false, active: false },
                ].map((skill) => (
                  <span
                    key={skill.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold ${
                      skill.active
                        ? "bg-blue-600 text-white"
                        : "bg-white/8 text-gray-300 border border-white/10"
                    }`}
                  >
                    {skill.name}
                    {skill.verified && (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 opacity-80">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <button className="w-full py-3.5 bg-white hover:bg-gray-100 text-[#0a0f1e] font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
              Contact Candidate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}