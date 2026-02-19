// ── Main Profile Page ─────────────────────────────────────────────────────────
// Imports all separate section components and assembles them into the full
// LinkedIn-style Profile Page layout, matching the reference screenshots.
// Fully responsive: single-column on mobile, 2-column on desktop.
"use client"
import ProfileHero            from "./Profilehero";
import AboutSection           from "./Aboutsection";
import Featuredsection        from "./Featuredsection";
import ExperienceSection      from "./Experiencesection";
import EducationSection       from "./Educationsection";
import LicensesCertifications from "./Licensescertifications";
import SkillsSection          from "./Skillssection";
import RecommendationsSection from "./Recommendationssection";
import AccomplishmentsSection from "./Accomplishmentssection";
import BuildResumeCard        from "./Buildresumecard";
import ProfileStrengthCard    from "./Profilestrengthcard";
import ProfileAnalyticsCard   from "./Profileanalyticscard";
import UpgradeToProCard       from "./Upgradetoprocard";
import NetworkSuggestionsCard from "./Networksuggestionscard";

// ── Responsive styles injected once ──────────────────────────────────────────
const responsiveCSS = `
  * { box-sizing: border-box; }

  .profile-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 20px;
    max-width: 960px;
    margin: 0 auto;
    padding: 72px 16px 40px;
    align-items: start;
  }

  .profile-left  { display: flex; flex-direction: column; gap: 16px; }
  .profile-right { display: flex; flex-direction: column; gap: 14px; position: sticky; top: 68px; }

  /* Tablet */
  @media (max-width: 768px) {
    .profile-layout {
      grid-template-columns: 1fr;
    }
    .profile-right {
      position: static;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .profile-layout {
      padding: 64px 10px 32px;
      gap: 12px;
    }
  }
`;

// ── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "#fff", borderBottom: "1px solid #e5e7eb",
      boxShadow: "0 1px 4px rgba(0,0,0,.06)", height: 56,
      display: "flex", alignItems: "center", padding: "0 24px", gap: 10
    }}>
      {/* Logo */}
      <div style={{
        width: 34, height: 34, borderRadius: 7, background: "#2563eb",
        color: "#fff", fontWeight: 900, fontSize: 17,
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>in</div>

      {/* Search */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#eff6ff", border: "1px solid #bfdbfe",
        borderRadius: 8, padding: "6px 14px", fontSize: 14,
        color: "#9ca3af", minWidth: 0, maxWidth: 220, flex: "0 1 220px"
      }}>🔍 <span>Search</span></div>

      <div style={{ flex: 1 }} />

      {/* Nav links */}
      {[
        { icon: "🏠", label: "Home" },
        { icon: "👥", label: "Network" },
        { icon: "💼", label: "Jobs" },
        { icon: "💬", label: "Messages" },
        { icon: "🔔", label: "Notifications" },
      ].map(({ icon, label }, i) => (
        <button key={label} style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 1,
          border: "none", background: "none", cursor: "pointer",
          fontSize: 11, fontWeight: 600,
          color: label === "Home" ? "#2563eb" : "#6b7280",
          padding: "4px 8px",
          borderBottom: label === "Home" ? "2px solid #2563eb" : "2px solid transparent",
        }} className="nav-item">
          <span style={{ fontSize: 19 }}>{icon}</span>
          <span className="nav-label">{label}</span>
        </button>
      ))}

      <div style={{ width: 1, height: 30, background: "#e5e7eb", margin: "0 4px" }} />

      <button style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 1,
        border: "none", background: "none", cursor: "pointer",
        fontSize: 11, fontWeight: 600, color: "#6b7280", padding: "4px 8px"
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: "50%", background: "#4f46e5",
          color: "#fff", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 11, fontWeight: 700
        }}>A</div>
        Me ▾
      </button>

      <style>{`
        @media (max-width: 600px) {
          .nav-label { display: none; }
          .nav-item { padding: 4px 6px !important; }
        }
      `}</style>
    </nav>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function ProfileApp() {
  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <style>{responsiveCSS}</style>
      <Navbar />

      <div className="profile-layout">

        {/* ══ LEFT COLUMN — Main Profile Content ══════════════════════════ */}
        <div className="profile-left">

          {/* 1. Hero — Banner, Avatar, Name, Buttons */}
          <ProfileHero />

          {/* 2. About */}
          <AboutSection />

          {/* 3. Featured Articles/PDFs */}
          <Featuredsection />

          {/* 4. Experience */}
          <ExperienceSection />

          {/* 5. Education */}
          <EducationSection />

          {/* 6. Licenses & Certifications */}
          <LicensesCertifications />

          {/* 7. Skills */}
          <SkillsSection />

          {/* 8. Recommendations */}
          <RecommendationsSection />

          {/* 9. Accomplishments */}
          <AccomplishmentsSection />
        </div>

        {/* ══ RIGHT COLUMN — Sidebar Widgets ══════════════════════════════ */}
        <div className="profile-right">

          {/* 10. Build Your Resume */}
          <BuildResumeCard />

          {/* 11. Profile Strength */}
          <ProfileStrengthCard />

          {/* 12. Profile Analytics */}
          <ProfileAnalyticsCard />

          {/* 13. Upgrade to Pro */}
          <UpgradeToProCard />

          {/* 14. Network Suggestions */}
          <NetworkSuggestionsCard />
        </div>

      </div>
    </div>
  );
}