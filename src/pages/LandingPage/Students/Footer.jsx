export default function Footer() {
  return (
    <footer className="bg-[#080d1a] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-sm text-white tracking-tight">Career Hub</span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-xs text-center order-last sm:order-none">
            © 2024 Career Hub Platform. All rights reserved. Made for the future of India.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Globe */}
            <button className="text-gray-500 hover:text-gray-300 transition-colors p-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" strokeLinecap="round" />
              </svg>
            </button>
            {/* Email / @ */}
            <button className="text-gray-500 hover:text-gray-300 transition-colors p-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" strokeLinecap="round" />
              </svg>
            </button>
            {/* Share */}
            <button className="text-gray-500 hover:text-gray-300 transition-colors p-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}