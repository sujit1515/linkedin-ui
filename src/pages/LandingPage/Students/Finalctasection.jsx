export default function FinalCTASection() {
  return (
    <section className="bg-[#0a0f1e] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
          Ready to transform your career?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Join 1M+ students and professionals today and take the first step towards your dream job.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0">
            Start Free Now
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#1a2236] hover:bg-[#1e2a40] text-white font-bold text-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
            Talk to Counselor
          </button>
        </div>
      </div>
    </section>
  );
}