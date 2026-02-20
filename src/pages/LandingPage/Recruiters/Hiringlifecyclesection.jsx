const cards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" strokeLinecap="round" />
      </svg>
    ),
    title: "AI Sourcing",
    desc: "Discovery talent across LinkedIn, GitHub, and internal databases with AI-powered matching algorithms.",
    features: ["Multi-channel reach", "Diversity tracking"],
    accent: "from-blue-600/20 to-blue-800/5",
    iconBg: "bg-blue-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" strokeLinecap="round" />
      </svg>
    ),
    title: "Smart Screening",
    desc: "Automated technical and behavioral assessments that reduce time-to-hire by up to 60%.",
    features: ["Skill-based tests", "Video proctoring"],
    accent: "from-blue-600/30 to-blue-800/10",
    iconBg: "bg-blue-600",
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-6 h-6">
        <path d="M15 10l4.553-2.277A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14" strokeLinecap="round" />
        <rect x="3" y="6" width="12" height="12" rx="2" />
      </svg>
    ),
    title: "Unified Interviews",
    desc: "A secure video platform designed for technical interviews with live coding and collaborative whiteboards.",
    features: ["Real-time feedback", "Automated scheduling"],
    accent: "from-blue-600/20 to-blue-800/5",
    iconBg: "bg-blue-600",
  },
];

export default function HiringLifecycleSection() {
  return (
    <section className="bg-[#080d1a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            The Complete Hiring Lifecycle
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Everything you need from sourcing to onboarding in a single workflow.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`relative rounded-2xl border p-6 sm:p-7 flex flex-col gap-5 transition-transform duration-200 hover:-translate-y-1 bg-gradient-to-br ${card.accent} ${
                card.featured
                  ? "border-blue-500/40 shadow-lg shadow-blue-500/10"
                  : "border-white/8"
              }`}
              style={{ backgroundColor: "#0d1528" }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${card.iconBg} flex items-center justify-center shadow-lg`}>
                {card.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-white font-black text-lg mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
              </div>

              {/* Feature bullets */}
              <ul className="space-y-2">
                {card.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-2.5 h-2.5">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}