// src/components/FeaturesComparison.jsx
import React from 'react';
import { Check, X, Zap, Award, QrCode, TrendingUp, DollarSign, MessageSquare, Users, FileText, Activity } from 'lucide-react';

export default function FeaturesComparison() {
  const standardFeatures = [
    { name: 'Connection Requests', icon: Users },
    { name: 'Direct Messaging', icon: MessageSquare },
    { name: 'Standard Profile Page', icon: FileText },
    { name: 'Activity Feed', icon: Activity },
  ];

  const advancedFeatures = [
    { name: 'AI-Powered Profile Builder', icon: Zap, badge: 'Smart Optimization' },
    { name: 'Skill Verification Badges', icon: Award, badge: 'Live Assessments' },
    { name: 'QR Code Digital Resume', icon: QrCode, badge: 'Instant Networking' },
    { name: 'Recruiter Visibility Score', icon: TrendingUp, badge: 'Real-time Feedback' },
    { name: 'Content Monetization', icon: DollarSign, badge: 'Earn Revenue' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Network That Actually Works{' '}
            <span className="text-[#1565c0]">for Your Career</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Most platforms stop at connections. We go further — turning your profile into an active career engine.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Standard Features Column */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-700">Essential Features</h2>
            </div>
            <div className="p-6 divide-y divide-gray-100">
              {standardFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                        <Icon className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{feature.name}</h3>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {feature.name === 'Connection Requests' && 'Standard tools to send and receive professional invites.'}
                          {feature.name === 'Direct Messaging' && 'Basic 1-to-1 text communication with your existing network.'}
                          {feature.name === 'Standard Profile Page' && 'A static summary of your job history and education.'}
                          {feature.name === 'Activity Feed' && 'Scroll through updates and posts from your connections.'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Advanced Features Column */}
          <div className="bg-white rounded-2xl shadow-lg border-2 border-[#1565c0]/20 overflow-hidden hover:shadow-xl transition-shadow relative">
            {/* Pro Badge */}
            <div className="absolute top-4 right-4 bg-[#1565c0] text-white text-xs font-bold px-3 py-1 rounded-full">
              PRO
            </div>
            
            <div className="bg-gradient-to-r from-[#1565c0]/5 to-indigo-50/50 px-6 py-4 border-b border-[#1565c0]/10">
              <h2 className="text-xl font-semibold text-[#1565c0]">Advanced Career Features</h2>
            </div>
            
            <div className="p-6 divide-y divide-gray-100">
              {advancedFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1565c0]/10 flex items-center justify-center mt-0.5">
                        <Icon className="w-4 h-4 text-[#1565c0]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center flex-wrap gap-2">
                          <h3 className="font-medium text-gray-900">{feature.name}</h3>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                            {feature.badge}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {feature.name === 'AI-Powered Profile Builder' && 'Smart optimization for ATS and deep recruiter discovery algorithms.'}
                          {feature.name === 'Skill Verification Badges' && 'Validate expertise via live assessments and certifications.'}
                          {feature.name === 'QR Code Digital Resume' && 'Instant networking and secure profile sharing for in-person events.'}
                          {feature.name === 'Recruiter Visibility Score' && 'Real-time feedback on your reach within specific target industries.'}
                          {feature.name === 'Content Monetization' && 'Earn direct revenue from your high-value industry insights and guides.'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feature Comparison Note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          *All essential features included in free plan. Advanced features available with SmartHub Pro subscription.
        </p>
      </div>
    </section>
  );
}