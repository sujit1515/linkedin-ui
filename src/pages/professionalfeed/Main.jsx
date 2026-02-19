"use client"
import { useState } from "react";

// ── Import all separate section components ─────────────────────────────────
import ProfileCard from "./Profilecard";
import QuickActions from "./Quickactions";
import AppDownloadBanner from "./Appdownloadbanner";
import CreatePost from "./Createpost";
import PostCard from "./Postcard";
import JobMatchBanner from "./Jobmatchbanner";
import AlumniConnect from "./Alumniconnect";
import TrendingDiscussions from "./Trendingdiscussions";
import PromotedCard from "./Promotedcard";

// ── Navbar (inline, not a separate section) ────────────────────────────────
function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "#fff", borderBottom: "1px solid #e5e7eb",
      boxShadow: "0 1px 4px rgba(0,0,0,.06)", height: 56,
      display: "flex", alignItems: "center", padding: "0 24px", gap: 12
    }}>
      {/* Logo */}
      <div style={{
        width: 36, height: 36, borderRadius: 8, background: "#2563eb",
        color: "#fff", fontWeight: 900, fontSize: 18, display: "flex",
        alignItems: "center", justifyContent: "center", letterSpacing: -1
      }}>in</div>

      {/* Search bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#eff6ff", border: "1px solid #bfdbfe",
        borderRadius: 8, padding: "7px 14px", width: 240, color: "#9ca3af", fontSize: 14
      }}>
        🔍 <span>Search</span>
      </div>

      <div style={{ flex: 1 }} />

      {/* Nav icons */}
      {[
        { icon: "🏠", label: "Home",          active: true  },
        { icon: "👥", label: "Network",        active: false },
        { icon: "💼", label: "Jobs",           active: false },
        { icon: "💬", label: "Messages",       active: false },
        { icon: "🔔", label: "Notifications",  active: false },
      ].map(({ icon, label, active }) => (
        <button key={label} style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
          border: "none", background: "none", cursor: "pointer",
          fontSize: 12, fontWeight: 600, color: active ? "#2563eb" : "#6b7280",
          padding: "4px 12px", borderBottom: active ? "2px solid #2563eb" : "2px solid transparent",
          transition: "color .15s"
        }}>
          <span style={{ fontSize: 20 }}>{icon}</span>
          {label}
        </button>
      ))}

      <div style={{ width: 1, height: 32, background: "#e5e7eb", margin: "0 8px" }} />

      {/* Me */}
      <button style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
        border: "none", background: "none", cursor: "pointer",
        fontSize: 12, fontWeight: 600, color: "#6b7280"
      }}>
        <div style={{
          width: 24, height: 24, borderRadius: "50%", background: "#4f46e5",
          color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700
        }}>F</div>
        Me ▾
      </button>
    </nav>
  );
}

// ── Posts data ─────────────────────────────────────────────────────────────
const POSTS = [
  {
    author: "Sarah Jenkins",
    role: "Talent Acquisition Specialist at Google | Tech Evangelist",
    badge: "1st", time: "2h ago",
    content: "Excited to announce that we are officially hiring for 50+ roles in our Cloud Computing division! 🚀\n\nAt Google, we value diversity, innovation, and a passion for solving complex problems. If you're looking to make a global impact, check out the roles below.",
    showImage: true,
    imageBg: "linear-gradient(135deg,#1e3a8a 0%,#1d4ed8 60%,#60a5fa 100%)",
    imageEmoji: "📱",
    likes: 1245, comments: 84, shares: 42,
  },
  {
    author: "Michael Chen",
    role: "AI Research Fellow at Stanford University",
    badge: "1st", time: "5h ago",
    content: "Just published our latest research on Large Language Models and their impact on personalized education. The findings suggest that LLMs can significantly reduce the learning gap in under-served communities when used as auxiliary tutors.\n\nRead the full paper on arXiv!",
    showImage: false,
    likes: 892, comments: 112, shares: 42,
  },
  {
    author: "Professor Elena Rodriguez",
    role: "Dean of Students at MIT | Career Mentor",
    badge: "1st", time: "8h ago",
    content: "I've seen many students struggle with their first job application. Remember: your portfolio is a story of your problem-solving process, not just a gallery of final results. Show us how you think! 🧠✨",
    showImage: true,
    imageBg: "linear-gradient(135deg,#fef9ee,#fde68a,#fbbf24)",
    imageEmoji: "👥",
    likes: 2500, comments: 342, shares: 42,
  },
];

// ── Root App ───────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <Navbar />

      {/* Page body — pushed below fixed navbar */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 16px 40px", display: "grid", gridTemplateColumns: "280px 1fr 300px", gap: 20, alignItems: "start" }}>

        {/* ── LEFT SIDEBAR ─────────────────────────────────────────────── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 12, position: "sticky", top: 68 }}>
          {/* Section 1 */}
          <ProfileCard />

          {/* Section 2 */}
          <QuickActions />

          {/* Section 3 */}
          <AppDownloadBanner />
        </aside>

        {/* ── CENTER FEED ──────────────────────────────────────────────── */}
        <main style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {/* Section 4 — Create Post */}
          <CreatePost />

          {/* Feed header */}
          <p style={{
            textAlign: "center", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.1em", color: "#9ca3af", margin: 0,
            textTransform: "uppercase"
          }}>Professional Activity Feed</p>

          {/* Section 5 — Post 1 (Sarah Jenkins) */}
          <PostCard {...POSTS[0]} />

          {/* Section 5 — Post 2 (Michael Chen) */}
          <PostCard {...POSTS[1]} />

          {/* Section 6 — Job Match Banner (between posts) */}
          <JobMatchBanner />

          {/* Section 5 — Post 3 (Professor Elena) */}
          <PostCard {...POSTS[2]} />

          {/* Load more */}
          <button style={{
            background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12,
            padding: "14px 0", fontSize: 14, fontWeight: 600, color: "#2563eb",
            cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,.06)",
            transition: "background .15s"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#eff6ff"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
          >
            Load more posts ↓
          </button>
        </main>

        {/* ── RIGHT SIDEBAR ─────────────────────────────────────────────── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 14, position: "sticky", top: 68 }}>
          {/* People You May Know — inline here since it's simple */}
          <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
              <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>People You May Know</span>
              <button style={{ border: "none", background: "none", cursor: "pointer", color: "#9ca3af", fontSize: 20 }}>···</button>
            </div>
            {[
              { name: "Jessica Alba",  role: "UX Designer at InfoArt",    bg: "#dbeafe", color: "#2563eb" },
              { name: "David Kim",     role: "Data Scientist at Sony",     bg: "#fce7f3", color: "#be185d" },
              { name: "Priya Singh",   role: "ML Engineer at Tesla",       bg: "#dcfce7", color: "#15803d" },
            ].map(({ name, role, bg, color }) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: bg, color, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, flexShrink: 0 }}>{name[0]}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: "0 0 1px", fontWeight: 700, fontSize: 13, color: "#111827", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</p>
                  <p style={{ margin: 0, fontSize: 11, color: "#6b7280", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{role}</p>
                </div>
                <button style={{ border: "1.5px solid #2563eb", borderRadius: 20, padding: "5px 12px", background: "#fff", fontSize: 12, fontWeight: 700, color: "#2563eb", cursor: "pointer", flexShrink: 0 }}>+ Connect</button>
              </div>
            ))}
            <button style={{ border: "none", background: "none", color: "#2563eb", fontWeight: 700, fontSize: 13, cursor: "pointer", padding: 0 }}>See All Recommendations</button>
          </div>

          {/* Section 7 — Alumni Connect */}
          <AlumniConnect />

          {/* Section 8 — Trending Discussions */}
          <TrendingDiscussions />

          {/* Section 9 — Promoted + Footer */}
          <PromotedCard />
        </aside>

      </div>
    </div>
  );
}