import { useState } from "react";
import { 
  Code, 
  Brain, 
  Monitor, 
  Building2, 
  FileText, 
  Award, 
  ClipboardList, 
  Newspaper,
  TrendingUp,
  Users,
  BadgeCheck,
  Zap
} from 'lucide-react';

const techFeatures = [
  {
    icon: Code,
    title: "5000+ Practice Problems",
    desc: "Curated DSA, System Design, and Frontend/Backend challenges across all difficulty levels.",
  },
  {
    icon: Brain,
    title: "AI Difficulty Adaptation",
    desc: "Smart algorithms that adjust difficulty in real-time based on your solve rate and patterns.",
  },
  {
    icon: Monitor,
    title: "Real-time Coding Hub",
    desc: "Browser-based IDE with multi-language support, unit tests and instant feedback.",
  },
  {
    icon: Building2,
    title: "Company-Specific Prep",
    desc: "Targeted tracks for FAANG, product startups, and top Indian tech companies.",
  },
];

const govFeatures = [
  {
    icon: FileText,
    title: "Previous Year Papers (PYPs)",
    desc: "Archive of 20+ years of solved papers for UPSC, SSC, Banking & Railways.",
  },
  {
    icon: Award,
    title: "Topper Strategy Modules",
    desc: "Exclusive insights, notes, and study schedules from national top rankers.",
  },
  {
    icon: ClipboardList,
    title: "Weekly Mock Tests",
    desc: "Simulated exam environment with All-India ranking system and detailed analytics.",
  },
  {
    icon: Newspaper,
    title: "Current Affairs Digest",
    desc: "Daily summarized news curated specifically for competitive and administrative exams.",
  },
];


function FeatureItem({ icon: Icon, title, desc, accentColor }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-default group"
      style={{
        background: `${accentColor}08`,
        borderColor: isHovered ? accentColor : `${accentColor}20`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="p-2 rounded-lg transition-all duration-300"
        style={{
          background: isHovered ? accentColor : `${accentColor}10`,
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <Icon 
          className="w-5 h-5 transition-all duration-300" 
          style={{ color: isHovered ? 'white' : accentColor }}
        />
      </div>
      <div>
        <p className="font-bold text-slate-800 text-sm mb-1 group-hover:text-slate-900">{title}</p>
        <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

function TrackCard({ track, features, gradient, accent, buttonLabel, badge }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-all duration-500 w-full max-w-2xl mx-auto"
      style={{
        boxShadow: hovered
          ? `0 20px 60px ${accent}22, 0 4px 16px ${accent}10`
          : "0 2px 12px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Header */}
      <div
        className="relative p-8 h-56 flex flex-col justify-end overflow-hidden"
        style={{ background: gradient }}
      >
        {/* Background decoration */}
        <div
          className="absolute top-4 right-4 text-9xl opacity-10 select-none pointer-events-none text-white font-mono"
          style={{ lineHeight: 1 }}
        >
          {track === "tech" ? "</>" : "🏛️"}
        </div>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)",
          }}
        />
        
        {/* Floating particles effect */}
        {hovered && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${2 + i}s infinite`,
                }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10">
          <span
            className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 inline-block backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
          >
            {badge}
          </span>
          <h3 className="text-3xl font-black text-white leading-tight">
            {track === "tech" ? "Tech Mastery" : "Govt Exams"}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-8 flex flex-col gap-5 flex-1">
        <div className="flex flex-col gap-3">
          {features.map((f, i) => (
            <FeatureItem key={i} {...f} accentColor={accent} />
          ))}
        </div>
        <div className="mt-auto pt-2">
          <button
            className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:shadow-lg active:scale-[0.98] relative overflow-hidden group"
            style={{
              background: gradient,
              boxShadow: `0 4px 20px ${accent}40`,
            }}
          >
            <span className="relative z-10">{buttonLabel}</span>
            <span className="relative z-10 text-lg group-hover:translate-x-1 transition-transform">→</span>
            
            {/* Shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default function PracticePreparationTracks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-10">
        
        {/* Header - Centered */}
        <div className="flex flex-col gap-3 text-center items-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="w-8 h-1 rounded-full bg-blue-600 inline-block" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Preparation Hub
            </span>
            <span className="w-8 h-1 rounded-full bg-blue-600 inline-block" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight max-w-4xl">
            Ultimate Practice & Preparation Tracks
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed font-normal mx-auto">
            Tailored preparation tracks designed to help you ace your dream career —
            whether in big tech or the public sector.
          </p>
        </div>

        {/* Track Cards Grid - Centered with increased width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 relative justify-items-center">
          <TrackCard
            track="tech"
            features={techFeatures}
            gradient="linear-gradient(135deg, #137fec 0%, #0a4d8f 100%)"
            accent="#137fec"
            buttonLabel="Start Tech Practice"
            badge="Tech Career"
          />

          {/* Subtle divider (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-[15%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent -translate-x-1/2 pointer-events-none" />

          <TrackCard
            track="gov"
            features={govFeatures}
            gradient="linear-gradient(135deg, #ff9933 0%, #137fec 100%)"
            accent="#ff9933"
            buttonLabel="Start Govt Prep"
            badge="Public Service"
          />
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1 bg-gradient-to-r from-blue-100 via-blue-600 to-blue-100 mt-8" />
    </div>
  );
}