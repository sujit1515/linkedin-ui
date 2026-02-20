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
    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" className="w-3 h-3">
        <circle cx="12" cy="12" r="1" fill="#9CA3AF" />
        <path d="M12 7v2M12 15v2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-white text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
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
                  ? "bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/10"
                  : "bg-white border border-gray-200 shadow-sm hover:shadow-md"
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
                <h3 className="text-base font-bold text-gray-900 mb-3">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">/mo</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{plan.desc}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <CheckIcon available={f.available} />
                    <span
                      className={`text-sm font-medium ${
                        f.available ? "text-gray-900" : "text-gray-400"
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
                    ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200"
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