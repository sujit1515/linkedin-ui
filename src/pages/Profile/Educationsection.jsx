export default function EducationSection() {
  const schools = [
    {
      emoji: "🌅", bg: "linear-gradient(135deg,#fb923c,#f97316)",
      name: "Stanford University",
      degree: "Master of Science, Human-Computer Interaction",
      years: "2014 - 2016",
    },
    {
      emoji: "🎨", bg: "linear-gradient(135deg,#86efac,#4ade80)",
      name: "RISD",
      degree: "Bachelor of Fine Arts, Graphic Design",
      years: "2010 - 2014",
    },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "#111827" }}>Education</h2>
        <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 20, color: "#374151" }}>+</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {schools.map(({ emoji, bg, name, degree, years }, i) => (
          <div key={name}>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%", background: bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0
              }}>{emoji}</div>
              <div>
                <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 15, color: "#111827" }}>{name}</p>
                <p style={{ margin: "0 0 2px", fontSize: 14, color: "#374151" }}>{degree}</p>
                <p style={{ margin: 0, fontSize: 13, color: "#9ca3af" }}>{years}</p>
              </div>
            </div>
            {i < schools.length - 1 && <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "20px 0" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}