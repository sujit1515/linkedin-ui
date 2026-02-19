export default function SkillsSection() {
  const skills = [
    "Product Design", "UI/UX Design", "Design Systems", "Figma",
    "Prototyping", "User Research", "HTML/CSS", "React", "Motion Design",
  ];

  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "#111827" }}>Skills</h2>
        <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 20, color: "#374151" }}>+</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {skills.map(skill => (
          <div key={skill} style={{
            border: "1.5px solid #e5e7eb", borderRadius: 99,
            padding: "7px 16px", display: "flex", alignItems: "center", gap: 8,
            fontSize: 14, color: "#374151", fontWeight: 500, background: "#fafafa",
            cursor: "pointer", transition: "all .15s"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#eff6ff"; e.currentTarget.style.borderColor = "#93c5fd"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fafafa"; e.currentTarget.style.borderColor = "#e5e7eb"; }}
          >
            {skill}
            <span style={{
              background: "#e5e7eb", color: "#6b7280", borderRadius: 99,
              padding: "1px 7px", fontSize: 11, fontWeight: 700
            }}>20+</span>
          </div>
        ))}
      </div>

      <button style={{
        display: "block", margin: "20px auto 0", border: "none",
        background: "none", color: "#2563eb", fontWeight: 700,
        fontSize: 14, cursor: "pointer"
      }}>Show all 24 skills</button>
    </div>
  );
}