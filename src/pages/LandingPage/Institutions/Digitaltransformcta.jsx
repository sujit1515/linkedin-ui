export default function DigitalTransformCTA() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-blue-600 rounded-2xl sm:rounded-3xl px-6 sm:px-16 py-14 sm:py-16 text-center overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-500/40 pointer-events-none" />
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-blue-500/30 pointer-events-none" />
          <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-blue-500/40 pointer-events-none" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-blue-500/30 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 tracking-tight">
              Ready to Lead the
              <br />
              Digital Transformation?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Join 500+ institutions worldwide that are redefining education for the 21st century.
              No setup fees, no complexity.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-blue-600 font-black text-sm rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0">
                Start Free Setup
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white font-bold text-sm rounded-xl border-2 border-white/60 hover:border-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}