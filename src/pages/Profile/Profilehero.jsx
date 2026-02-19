export default function ProfileHero() {
  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      {/* Banner */}
      <div style={{ position: "relative", height: 140, background: "linear-gradient(135deg, #bfdbfe 0%, #e0e7ff 40%, #fecdd3 100%)" }}>
        <button style={{
          position: "absolute", top: 12, right: 12,
          background: "rgba(255,255,255,0.9)", border: "1px solid #e5e7eb",
          borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 600,
          color: "#374151", cursor: "pointer", display: "flex", alignItems: "center", gap: 6
        }}>✏️ Edit Cover</button>
      </div>

      <div style={{ padding: "0 24px 24px" }}>
        {/* Avatar */}
        <div style={{
          width: 110, height: 110, borderRadius: 16, border: "4px solid #fff",
          background: "linear-gradient(135deg,#dbeafe,#bfdbfe)",
          marginTop: -55, marginBottom: 12, overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 52, boxShadow: "0 2px 12px rgba(0,0,0,.12)"
        }}>👨‍💼</div>

        {/* Name + buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h1 style={{ margin: "0 0 4px", fontWeight: 800, fontSize: 26, color: "#111827", letterSpacing: "-0.5px" }}>Alex Rivera</h1>
            <p style={{ margin: "0 0 12px", fontSize: 15, color: "#374151" }}>Senior Product Designer at TechFlow Solutions | UI/UX Mentor | Ex-Google</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, fontSize: 14, color: "#6b7280" }}>
              <span>📍 San Francisco, CA</span>
              <span>👥 500+ Connections</span>
              <a href="#" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>🌐 Portfolio</a>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <button style={{
              background: "#2563eb", color: "#fff", border: "none", borderRadius: 20,
              padding: "9px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer"
            }}>Open to</button>
            <button style={{
              background: "#fff", color: "#374151", border: "1.5px solid #d1d5db",
              borderRadius: 20, padding: "9px 22px", fontWeight: 700, fontSize: 14, cursor: "pointer"
            }}>Add profile section</button>
            <button style={{
              background: "#fff", border: "1.5px solid #d1d5db", borderRadius: 20,
              padding: "9px 14px", fontSize: 16, cursor: "pointer"
            }}>✏️</button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .profile-hero-buttons { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}