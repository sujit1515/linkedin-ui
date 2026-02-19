// src/components/RevenueStreams.jsx
import React from 'react'
import {
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  ArrowRight,
  Zap,
  ShieldCheck,
  LineChart,
  Bell,
  BrainCircuit
} from 'lucide-react'

export default function RevenueStreams() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header - Centered */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-5 py-1.5 mb-3 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
            REVENUE STREAMS
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Three Income Streams
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Unlock your potential with our multi-revenue approach tailored for your career
            <br className="hidden sm:block" />
            growth. From stability to flexibility and passive earnings.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-7 lg:gap-9">

          {/* Card 1 – Government Jobs Hub */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-8 pb-4">
              {/* Icon with blue background */}
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
                <Building2 className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Government Jobs Hub
              </h3>

              <p className="text-gray-600 mb-5">
                Secure your future with verified government openings and exam preparation tools.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Bell size={16} className="text-blue-600" />
                  Real-Time Alerts
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-base group">
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2 – Freelance Marketplace */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-8 pb-4">
              {/* Icon with blue background */}
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-5">
                <BriefcaseBusiness className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Freelance Marketplace
              </h3>

              <p className="text-gray-600 mb-5">
                Connect with global clients and work on projects that match your unique skill set.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <Zap size={16} className="text-blue-600" />
                  Smart Matching
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-base group">
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3 – Course Marketplace */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
            <div className="p-8 pb-4">
              {/* Icon with blue background */}
              <div className="w-14 h-14 rounded-xl bg-[#1565c0] flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Course Marketplace
              </h3>

              <p className="text-gray-600 mb-5">
                Share your expertise by creating courses or upskill yourself with peer-led learning.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                  <GraduationCap size={16} className="text-blue-600" />
                  Learn & Earn
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 text-base group">
                Learn More
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}