const footerLinks = {
  Resources: ["Exam Prep", "Govt Jobs", "Freelancing", "Skill Courses"],
  Company: ["About Us", "Careers", "Blog", "Press Kit"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function FooterFull() {
  return (
    <footer className="bg-[#080d1a] text-white border-t border-white/8">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">CareerIndia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Comprehensive career platform for students and job seekers in India. Networking,
              exam prep, government jobs, and more.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                /* Globe */
                <path key="globe" d="M12 3a9 9 0 100 18A9 9 0 0012 3zM12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" />,
                /* At / Email */
                <path key="at" d="M16 12a4 4 0 11-8 0 4 4 0 018 0zM16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />,
                /* Podcast / Mic */
                <path key="mic" d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v3M8 22h8" />,
              ].map((icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all duration-200"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    {icon}
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-white text-sm mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-500 text-xs">
              © 2024 CareerIndia Education Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="currentColor" stroke="none" />
                </svg>
                New Delhi, India
              </span>
              <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                support@careerindia.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}