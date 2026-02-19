const barData = [
  { day: "MON", h: 35 },
  { day: "TUE", h: 50 },
  { day: "WED", h: 45 },
  { day: "THU", h: 60 },
  { day: "FRI", h: 90, active: true },
  { day: "SAT", h: 70 },
  { day: "SUN", h: 30 },
];

export default function DigitalCampusSection() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
            Your Official Digital Campus — Open 24/7
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Bridging the gap between physical infrastructure and digital reach. Provide a seamless
            institutional experience from first click to enrollment.
          </p>
        </div>

        {/* Two-Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {/* 360 Campus Showcase */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Card Header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <h3 className="font-bold text-gray-900 text-sm">360° Campus Showcase</h3>
                <span className="px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded-md tracking-wide">
                  LIVE PREVIEW
                </span>
              </div>

              {/* Library Image Mockup */}
              <div className="mx-4 mb-4 relative rounded-xl overflow-hidden bg-amber-50 h-44 sm:h-52">
                {/* Stylized library interior */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-100/60 to-amber-200/40" />
                {/* Bookshelves */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full h-3/4 bg-gradient-to-t from-amber-800/20 to-transparent" />
                </div>
                {/* Vertical shelf lines */}
                {[15, 30, 50, 65, 80].map((l, i) => (
                  <div
                    key={i}
                    className="absolute top-0 bottom-0 w-0.5 bg-amber-700/15"
                    style={{ left: `${l}%` }}
                  />
                ))}
                {/* Horizontal shelf lines */}
                {[30, 50, 70].map((t, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 h-0.5 bg-amber-700/10"
                    style={{ top: `${t}%` }}
                  />
                ))}
                {/* Colorful book spines */}
                {["bg-red-400", "bg-blue-400", "bg-green-500", "bg-yellow-400", "bg-purple-400", "bg-orange-400"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className={`absolute bottom-8 ${c} opacity-70 rounded-sm`}
                      style={{
                        left: `${10 + i * 13}%`,
                        width: "8px",
                        height: `${28 + (i % 3) * 8}px`,
                      }}
                    />
                  )
                )}
                {/* 360 play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center border border-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#1D4ED8" strokeWidth="2" className="w-6 h-6">
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" fill="#1D4ED8" stroke="none" />
                    </svg>
                  </div>
                </div>
                {/* Location pill */}
                <div className="absolute bottom-3 right-3 bg-gray-900/80 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                  Engineering Block A
                </div>
              </div>
            </div>

            {/* Bottom mini cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
                      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16M3 21h18M9 21V11h6v10" />
                    </svg>
                  ),
                  title: "Smart Facilities",
                  desc: "Automated resource booking and tracking.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Alumni Hub",
                  desc: "Lifetime networking for your graduates.",
                },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                    {icon}
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — AI Lead Scoring */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-1">
              <div>
                <h3 className="font-bold text-gray-900 text-base">AI Lead Scoring</h3>
                <p className="text-gray-400 text-xs mt-0.5">Intelligent applicant prioritizing</p>
              </div>
              <button className="text-gray-300 hover:text-gray-500 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
            </div>

            {/* Lead Items */}
            <div className="space-y-3 mt-5 mb-6">
              {[
                { initials: "JD", name: "Jane Doe", course: "M.Sc. Computer Science", score: 98, tag: "HOT LEAD", tagColor: "bg-orange-100 text-orange-600" },
                { initials: "MS", name: "Mark Smith", course: "B.A. Economics", score: 68, tag: "INTERESTED", tagColor: "bg-blue-100 text-blue-600" },
              ].map((lead) => (
                <div
                  key={lead.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-700 text-xs font-black">{lead.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 text-sm">{lead.name}</p>
                    <p className="text-gray-400 text-xs truncate">{lead.course}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${lead.tagColor}`}>
                      {lead.tag}
                    </span>
                    <span className="text-gray-400 text-xs">Score: {lead.score}/100</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="flex-1 flex flex-col justify-end">
              <div className="flex items-end gap-2 h-28">
                {barData.map(({ day, h, active }) => (
                  <div key={day} className="flex-1 flex flex-col items-center gap-1.5">
                    <div
                      className={`w-full rounded-t-md transition-all duration-500 ${
                        active ? "bg-blue-600" : "bg-blue-100"
                      }`}
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-gray-400 text-xs font-medium">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}