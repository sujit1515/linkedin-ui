export default function CampusHero() {
  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-600 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              New: AI-Driven Admissions 2.0
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-6">
              Future-Ready
              <br />
              Campus.
              <br />
              <span className="text-blue-600">Digitally</span>
              <br />
              <span className="text-blue-600">Empowered.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              The all-in-one ecosystem to digitize admissions, academic delivery, and campus
              management. Empower your institution with 24/7 digital accessibility.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 text-center">
                Register Your Institution
                <br />
                <span className="font-normal text-xs">(Free)</span>
              </button>
              <button className="px-6 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center shadow-sm">
                Request Personalized
                <br />
                <span className="font-normal text-xs">Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 sm:gap-12">
              {[
                { value: "500+", label: "Institutions" },
                { value: "10,000+", label: "Courses" },
                { value: "1M+", label: "Students" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900">{value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Teal header area with classroom image */}
                <div className="bg-teal-700 h-52 sm:h-64 relative flex items-center justify-center overflow-hidden">
                  {/* Simulated classroom scene */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800" />
                  {/* Whiteboard */}
                  <div className="absolute right-16 top-1/2 -translate-y-1/2 w-28 h-20 bg-white/90 rounded-lg shadow-lg" />
                  {/* Person 1 (standing) */}
                  <div className="absolute right-32 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                    <div className="w-7 h-7 rounded-full bg-blue-300" />
                    <div className="w-5 h-12 bg-teal-500 rounded-t-lg" />
                  </div>
                  {/* Person 2 (seated) */}
                  <div className="absolute right-10 top-1/2 translate-y-0 flex flex-col items-center gap-1">
                    <div className="w-6 h-6 rounded-full bg-pink-200" />
                    <div className="w-4 h-8 bg-teal-400 rounded-t-lg" />
                  </div>
                  {/* Desk plant */}
                  <div className="absolute right-4 bottom-6">
                    <div className="w-3 h-6 bg-green-500 rounded-full" />
                    <div className="w-4 h-2 bg-gray-400 rounded" />
                  </div>
                </div>

                {/* Bottom padding */}
                <div className="h-4 bg-white" />
              </div>

              {/* Floating Growth Badge */}
              <div className="absolute -bottom-4 left-4 sm:left-6 bg-white rounded-xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" className="w-4 h-4">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold leading-none mb-0.5">
                    Growth
                  </p>
                  <p className="text-gray-900 font-black text-base leading-none">+42%</p>
                  <p className="text-gray-500 text-xs">Enrolment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}