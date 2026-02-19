// src/components/HeroSection.jsx
import React from 'react';
import { Star, ArrowRight, PlayCircle } from 'lucide-react';
import TrustedBySection from './TrustedBy';
import NetworkingHero from './Network';
import PracticePreparationSection from './PracticePreparation';
import RevenueStreamsSection from './RevenueStream';

export default function HeroSection() {
  return (
    <div>
    <section className="relative bg-gradient-to-br from-white via-white-50 to-white pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      {/* Optional subtle background pattern or blob if you want */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT - Text Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Small tagline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              India's #1 Career Integration Platform
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              From Learning to
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Earning
              </span>{' '}
              — All in One Place.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              Unlock your professional potential with India's most integrated platform for networking, skill practice, and high-growth job placements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-blue-200/50 transition-all hover:shadow-xl hover:-translate-y-1">
                Create Free Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group inline-flex items-center justify-center gap-3 border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:bg-gray-50">
                <PlayCircle className="w-6 h-6 text-blue-600" />
                Watch Tour
              </button>
            </div>

            {/* Trust / Stats bar */}
            <div className="flex flex-wrap items-center gap-8 pt-6">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-lg font-bold text-gray-800">4.8/5</span>
                <span className="text-gray-600 text-sm">Average student rating</span>
              </div>

              {/* Active learners */}
              <div className="text-lg font-bold text-gray-800">
                50K<span className="text-gray-500 font-normal">+</span>
                <span className="block text-sm font-normal text-gray-600">
                  Active monthly learners
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT - Image - Appears second on mobile */}
          <div className="order-2 w-full mt-4 sm:mt-6 lg:mt-0">
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-sm xs:max-w-md sm:max-w-lg lg:max-w-full mx-auto">
                {/* Main image with subtle frame */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-gray-200/50">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration"
                    className="w-full h-auto object-cover aspect-[4/3] sm:aspect-auto"
                    loading="lazy"
                  />
                  
                  {/* Optional overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1565c0]/5 to-transparent"></div>
                </div>

                {/* Small floating badge - responsive positioning */}
                <div className="absolute -bottom-2 sm:-bottom-3 left-2 sm:left-4 bg-white rounded-lg shadow-lg px-3 sm:px-4 py-1.5 sm:py-2">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">✨ 92% placement rate</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
      <TrustedBySection />
      <NetworkingHero />
      <PracticePreparationSection />
      <RevenueStreamsSection />
    </div>
  );
}