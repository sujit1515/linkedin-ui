export default function AppSection() {
  return (
    <section className="bg-[#080d1a] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-5 tracking-tight">
              Career Growth in{" "}
              <br className="hidden sm:block" />
              <span className="text-blue-500">Your Pocket</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Experience the full power of CareerIndia on the go. Optimized for performance,
              late-night study, and areas with limited connectivity.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* Dark Mode */}
              <div className="bg-[#0d1528] border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
                    <path
                      d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010 9.79z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-white mb-1">Dark Mode</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Easy on the eyes for those 2 AM prep sessions.
                  </p>
                </div>
              </div>

              {/* Offline Mode */}
              <div className="bg-[#0d1528] border border-white/10 rounded-xl p-4 flex items-start gap-3 hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
                    <path
                      d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7-2.88M8.53 16.11a6 6 0 016.95 0M12 20h.01"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-white mb-1">Offline Mode</p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Download courses and study without internet.
                  </p>
                </div>
              </div>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* App Store */}
              <button className="flex items-center gap-3 px-5 py-3 bg-white text-[#0a0f1e] rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 shadow-md w-full sm:w-auto justify-center sm:justify-start">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-500 leading-none">DOWNLOAD ON THE</p>
                  <p className="text-sm font-bold leading-tight">App Store</p>
                </div>
              </button>

              {/* Google Play */}
              <button className="flex items-center gap-3 px-5 py-3 bg-white text-[#0a0f1e] rounded-xl font-semibold text-sm hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 shadow-md w-full sm:w-auto justify-center sm:justify-start">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
                  <path d="M3.18 23.76c.3.17.64.24.99.19l12.49-7.22-2.79-2.79-10.69 9.82zM.34 1.27C.13 1.6 0 2.04 0 2.59v18.82c0 .55.13.99.34 1.32l.07.07L10.59 12.5v-.23L.41 1.2l-.07.07zM20.65 10.35l-2.75-1.59-3.1 3.1 3.1 3.1 2.77-1.6c.79-.46.79-1.55-.02-2.01zM3.18.24L15.67 7.46 12.88 10.25 2.19.43c.3-.19.66-.25.99-.19z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs text-gray-500 leading-none">GET IT ON</p>
                  <p className="text-sm font-bold leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Right — Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-56 sm:w-64">
              {/* Phone Shell */}
              <div className="bg-[#111827] border-4 border-[#1e293b] rounded-[2.5rem] shadow-2xl overflow-hidden">
                {/* Status Bar */}
                <div className="bg-[#0d1528] px-5 pt-3 pb-2 flex items-center justify-between">
                  <span className="text-white text-xs font-semibold">9:41</span>
                  <div className="flex items-center gap-1">
                    {/* Signal */}
                    <div className="flex items-end gap-0.5">
                      {[3, 5, 7, 9].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white rounded-sm"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                    {/* WiFi */}
                    <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5">
                      <path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                    {/* Battery */}
                    <div className="w-5 h-2.5 border border-white/60 rounded-sm relative">
                      <div className="absolute inset-0.5 right-0.5 bg-white rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* App Content */}
                <div className="bg-[#080d1a] min-h-[400px]">
                  {/* Welcome Row */}
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs leading-none">Welcome back</p>
                        <p className="text-white text-sm font-bold leading-tight">Aditya Verma</p>
                      </div>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                      </svg>
                    </button>
                  </div>

                  {/* Course Card */}
                  <div className="mx-3 mb-3">
                    <div className="bg-blue-700/30 border border-blue-500/30 rounded-xl overflow-hidden">
                      <div className="h-24 bg-gradient-to-br from-blue-800 to-blue-600 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" className="w-10 h-10">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                      <div className="p-3">
                        <p className="text-white text-xs font-bold mb-1.5">Full Stack Development</p>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-1.5">
                          <span>65% Completed</span>
                          <span className="text-green-400 text-xs">Offline Saved</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full">
                          <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "65%" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="flex items-center justify-around px-4 py-3 border-t border-white/5 mt-auto">
                    {[
                      <path key="home" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" />,
                      <path key="cap" d="M22 10v6M2 10l10-5 10 5-10 5-10-5z M6 12v5c3 3 9 3 12 0v-5" />,
                      <path key="bag" d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />,
                      <path key="users" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />,
                    ].map((icon, i) => (
                      <button
                        key={i}
                        className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                          i === 0 ? "text-blue-500" : "text-gray-500"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                          {icon}
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-40 h-20 bg-blue-600/20 blur-2xl rounded-full pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}