const plans = [
  {
    name: "Free Forever",
    price: "0",
    desc: "Perfect for exploring the community and starting your journey.",
    features: [
      { label: "Profile Creation", available: true },
      { label: "Community Access", available: true },
      { label: "AI Career Assistant", available: false },
      { label: "Premium Courses", available: false },
    ],
    cta: "Get Started",
    popular: false,
    ctaStyle: "secondary",
  },
  {
    name: "Professional",
    price: "499",
    desc: "Accelerate your growth with AI-powered tools and learning.",
    features: [
      { label: "AI Career Assistant", available: true },
      { label: "10 Premium Courses", available: true },
      { label: "Priority Job Matching", available: true },
      { label: "Ad-free Experience", available: true },
    ],
    cta: "Go Pro",
    popular: true,
    ctaStyle: "primary",
  },
  {
    name: "Premium",
    price: "999",
    desc: "Personalized coaching for high-stakes career moves.",
    features: [
      { label: "Unlimited Mock Interviews", available: true },
      { label: "Priority Support", available: true },
      { label: "Personal Career Coach", available: true },
      { label: "Unlimited Course Access", available: true },
    ],
    cta: "Go Premium",
    popular: false,
    ctaStyle: "secondary",
  },
];

function CheckIcon({ available }) {
  if (available) {
    return (
      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-3 h-3">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" className="w-3 h-3">
        <circle cx="12" cy="12" r="1" fill="#6B7280" />
        <path d="M12 7v2M12 15v2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-[#0a0f1e] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Invest in your future with flexible pricing options designed for every stage of
            your career journey in India.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col h-full transition-transform duration-200 hover:-translate-y-1 ${
                plan.popular
                  ? "bg-[#0d1528] border-2 border-blue-500 shadow-xl shadow-blue-500/20"
                  : "bg-[#0d1528] border border-white/10"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 bg-blue-600 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name & Price */}
              <div className="mb-5 mt-2">
                <h3 className="text-base font-bold text-white mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-400 text-sm font-medium">/mo</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <CheckIcon available={f.available} />
                    <span
                      className={`text-sm font-medium ${
                        f.available ? "text-white" : "text-gray-500"
                      }`}
                    >
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                  plan.ctaStyle === "primary"
                    ? "bg-blue-600 hover:bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-500/30"
                    : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}