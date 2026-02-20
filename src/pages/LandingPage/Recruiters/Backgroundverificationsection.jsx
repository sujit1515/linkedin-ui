import { useEffect, useState } from "react";

const verifyItems = [
  { label: "Identity Verification", status: "verified" },
  { label: "Education Records", status: "verified" },
  { label: "Criminal Background", status: "pending" },
];

const checkItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
      </svg>
    ),
    title: "Identity Check",
    desc: "Real-time Aadhar/PAN verification",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" />
      </svg>
    ),
    title: "Education Audit",
    desc: "University record validation",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Criminal Records",
    desc: "Court & police record checks",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" className="w-5 h-5">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Employment History",
    desc: "Previous role verification",
  },
];

export default function BackgroundVerificationSection() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setPulse((p) => !p), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-[#060b17] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Comprehensive
              <br />
              Background Verification
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
              Ensure your new hires meet all corporate compliance standards with our real-time
              verification suite integrated directly into the hiring flow.
            </p>

            {/* Check Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {checkItems.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 bg-[#0d1528] border border-white/8 rounded-xl p-4 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-600/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {icon}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="bg-[#0d1528] border border-blue-500/20 rounded-2xl p-6 shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-4 w-28 bg-white/10 rounded-full" />
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold border transition-all duration-700 ${
                      pulse
                        ? "bg-blue-600/30 border-blue-500/50 text-blue-300"
                        : "bg-blue-600/20 border-blue-500/30 text-blue-400"
                    }`}
                  >
                    VERIFYING...
                  </span>
                </div>

                {/* Profile row */}
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/8">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-3 w-32 bg-white/15 rounded-full" />
                    <div className="h-2.5 w-24 bg-white/8 rounded-full" />
                  </div>
                </div>

                {/* Verification rows */}
                <div className="space-y-4">
                  {verifyItems.map(({ label, status }, i) => (
                    <div key={label} className="flex items-center justify-between">
                      <div className="h-2.5 rounded-full bg-white/10" style={{ width: `${55 + i * 15}%` }} />
                      {status === "verified" ? (
                        <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="w-3 h-3">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      ) : (
                        <div className={`w-5 h-5 rounded-full border-2 border-blue-500 flex-shrink-0 transition-all duration-700 ${pulse ? "bg-blue-500/30" : "bg-blue-500/10"}`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Empty lower space */}
                <div className="mt-6 h-20 bg-white/3 rounded-xl border border-white/5" />
              </div>

              {/* Floating "Background Clear" badge */}
              <div className="absolute -bottom-5 -right-4 sm:right-0 bg-[#0d1528] border border-green-500/30 rounded-xl px-4 py-3 flex items-center gap-3 shadow-2xl">
                <div className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-5 h-5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-none mb-0.5">Background Clear</p>
                  <p className="text-gray-400 text-xs">Candidate: Rahul Sharma</p>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl blur-2xl pointer-events-none -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}