export default function AboutSection() {
  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "#111827" }}>About</h2>
        <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18, color: "#6b7280" }}>✏️</button>
      </div>
      <p style={{ margin: 0, fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
        Passionate Product Designer with 8+ years of experience in creating human-centric digital experiences. Currently leading the design systems team at TechFlow, where I focus on bridging the gap between design and engineering. Previously, I spent 3 years at Google working on Search and Maps initiatives. I'm a frequent speaker at UI/UX conferences and love mentoring upcoming designers through the EduConnect platform.
      </p>
    </div>
  );
}