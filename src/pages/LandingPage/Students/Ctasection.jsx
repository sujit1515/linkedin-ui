import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = () => {
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl sm:rounded-3xl px-6 sm:px-12 py-12 sm:py-14 overflow-hidden text-center shadow-xl">
          {/* Decorative briefcase icon top right */}
          <div className="absolute top-4 right-6 sm:top-6 sm:right-10 opacity-10">
            <svg viewBox="0 0 64 64" fill="white" className="w-16 h-16 sm:w-20 sm:h-20">
              <path d="M22 16v-4a2 2 0 012-2h16a2 2 0 012 2v4" />
              <rect x="6" y="16" width="52" height="36" rx="4" fill="white" opacity="0.3" />
              <path
                d="M22 16v-4a2 2 0 012-2h16a2 2 0 012 2v4M6 32h52"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <rect x="6" y="16" width="52" height="36" rx="4" stroke="white" strokeWidth="3" fill="none" />
            </svg>
          </div>

          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 pointer-events-none rounded-2xl sm:rounded-3xl" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Ready to level up your career?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Join 50,000+ others getting daily job alerts, free courses, and professional
              networking opportunities.
            </p>

            {/* Email Input Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                className="w-full flex-1 px-5 py-3 bg-white text-gray-800 placeholder-gray-400 rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-white/60 transition-all border border-gray-200"
              />
              <button
                onClick={handleJoin}
                className="w-full sm:w-auto flex-shrink-0 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md"
              >
                {submitted ? (
                  <span className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Joined!
                  </span>
                ) : (
                  "Join Now"
                )}
              </button>
            </div>

            {submitted && (
              <p className="text-blue-100 text-xs mt-3 animate-pulse">
                🎉 Welcome aboard! Check your inbox.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}