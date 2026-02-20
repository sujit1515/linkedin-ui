export default function HireVerifyCTAFooter() {
  return (
    <>
      {/* ── CTA Section ── */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-blue-600 rounded-2xl sm:rounded-3xl px-6 sm:px-16 py-14 sm:py-16 text-center overflow-hidden">
            {/* Decorative wave lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              viewBox="0 0 800 300"
              preserveAspectRatio="none"
              fill="none"
            >
              <path d="M0 200 Q200 100 400 200 T800 200" stroke="white" strokeWidth="1.5" />
              <path d="M0 230 Q200 130 400 230 T800 230" stroke="white" strokeWidth="1" />
              <path d="M0 170 Q200 70 400 170 T800 170" stroke="white" strokeWidth="0.8" />
            </svg>

            {/* Inner glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-blue-400/30 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-10 tracking-tight">
                Ready to transform your
                <br />
                hiring process?
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-blue-600 font-black text-sm rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                  Get Started Free
                </button>
                <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-sm rounded-xl border-2 border-white/50 hover:border-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                  Request Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      {/* <footer className="bg-white border-t border-gray-200"> */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4"> */}
            {/* Logo */}
            {/* <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M12 2L3 7v10c0 5 9 9 9 9s9-4 9-9V7l-9-5z" />
                </svg>
              </div>
              <span className="font-black text-sm text-gray-900 tracking-tight">HireVerify</span>
            </div> */}

            {/* Links */}
            {/* <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service", "Security", "Status"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 hover:text-gray-700 text-xs transition-colors"
                >
                  {link}
                </a>
              ))}
            </div> */}

            {/* Copyright */}
            {/* <p className="text-gray-400 text-xs">© 2024 HireVerify India Pvt Ltd.</p> */}
          {/* </div>
        </div> */}
      {/* </footer> */}
    </>
  );
}