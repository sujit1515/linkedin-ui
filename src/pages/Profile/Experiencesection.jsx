export default function ExperienceSection() {
  const jobs = [
    {
      emoji: "🌊", bg: "#dbeafe", color: "#2563eb",
      title: "Senior Product Designer",
      company: "TechFlow Solutions",
      period: "Jan 2021 - Present · San Francisco, CA",
      points: [
        "Leading a cross-functional team of 12 designers and developers to maintain the company-wide design system.",
        "Reduced design-to-development handoff time by 35% through automated component syncing.",
      ],
    },
    {
      emoji: "🔴", bg: "#fee2e2", color: "#dc2626",
      title: "Interaction Designer",
      company: "Google",
      period: "Mar 2018 - Dec 2020 · Mountain View, CA",
      points: [
        "Worked on the core Search Experience team. Implemented accessibility standards across all Search result modules.",
        "Collaborated with AI researchers to design intuitive conversational interfaces.",
      ],
    },
    {
      emoji: "👥", bg: "#f3f4f6", color: "#374151",
      title: "UI/UX Designer",
      company: "Startup Hub",
      period: "Jun 2016 - Feb 2018 · Remote",
      points: [
        "Designed the MVP for a fintech application that secured $5M in Series A funding.",
        "Executed end-to-end user research, wireframing, and high-fidelity prototyping.",
      ],
    },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "24px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ margin: 0, fontWeight: 700, fontSize: 20, color: "#111827" }}>Experience</h2>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 20, color: "#374151" }}>+</button>
          <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18, color: "#6b7280" }}>✏️</button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {jobs.map(({ emoji, bg, color, title, company, period, points }, i) => (
          <div key={title}>
            <div style={{ display: "flex", gap: 16 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10, background: bg, color,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, flexShrink: 0, marginTop: 2
              }}>{emoji}</div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 15, color: "#111827" }}>{title}</p>
                <p style={{ margin: "0 0 2px", fontSize: 14, color: "#374151" }}>{company}</p>
                <p style={{ margin: "0 0 10px", fontSize: 13, color: "#9ca3af" }}>{period}</p>
                {points.map((pt, j) => (
                  <p key={j} style={{ margin: "0 0 4px", fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{pt}</p>
                ))}
              </div>
            </div>
            {i < jobs.length - 1 && <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "20px 0" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}