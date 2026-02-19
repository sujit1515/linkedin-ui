export default function LaunchEducationSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-6 tracking-wide">
              Launch in minutes, not months
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-5">
              Launch Your Online
              <br />
              Education in Minutes
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-7 max-w-md">
              Create, host, and sell your courses globally. A unified LMS that supports hybrid
              learning and diversified revenue models for your institution.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-10">
              {[
                "Course builder with 100+ template libraries",
                "Subscription-based monetization models",
                "Advanced student progress tracking & analytics",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2.5"
                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                  >
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Revenue Growth Badge */}
            <div className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-xl px-5 py-4 w-fit">
              <div className="w-9 h-9 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" className="w-5 h-5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Revenue Growth</p>
                <p className="text-gray-400 text-xs">Global reach, zero transaction fees</p>
              </div>
              <p className="font-black text-gray-900 text-xl ml-4">$142k+</p>
            </div>
          </div>

          {/* Right — Browser Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              {/* Browser Chrome */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                {/* Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4 h-6 bg-white border border-gray-200 rounded-md" />
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gray-200" />
                    <div className="w-5 h-5 rounded-full bg-gray-200" />
                  </div>
                </div>

                {/* App Content */}
                <div className="p-4 bg-white">
                  {/* Course Cards Row */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Card 1 */}
                    <div className="rounded-xl overflow-hidden border border-gray-100">
                      <div className="h-20 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <div className="absolute top-1 right-1 text-[8px] text-white font-bold tracking-wide opacity-70">
                          PROSERV
                        </div>
                      </div>
                      <div className="p-2.5">
                        <p className="text-blue-600 text-xs font-bold uppercase tracking-wide">Design</p>
                        <p className="text-gray-800 text-xs font-semibold mt-0.5">UI/UX Principles</p>
                        <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                          <div className="h-1.5 bg-blue-500 rounded-full" style={{ width: "70%" }} />
                        </div>
                        <p className="text-gray-400 text-xs mt-1">70%</p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-xl overflow-hidden border border-gray-100">
                      <div className="h-20 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="2" className="w-8 h-8">
                          <polyline points="16 18 22 12 16 6" />
                          <polyline points="8 6 2 12 8 18" />
                        </svg>
                      </div>
                      <div className="p-2.5">
                        <p className="text-green-600 text-xs font-bold uppercase tracking-wide">Tech</p>
                        <p className="text-gray-800 text-xs font-semibold mt-0.5">Full-Stack Dev</p>
                        <div className="mt-2 h-1.5 bg-gray-100 rounded-full">
                          <div className="h-1.5 bg-green-500 rounded-full" style={{ width: "26%" }} />
                        </div>
                        <p className="text-gray-400 text-xs mt-1">26%</p>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Banner */}
                  <div className="bg-blue-600 rounded-xl px-5 py-4 flex items-center justify-between">
                    <div>
                      <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-1">
                        Monthly Recurring Revenue
                      </p>
                      <p className="text-white text-2xl font-black">$45,290.00</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-4 h-4">
                        <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}