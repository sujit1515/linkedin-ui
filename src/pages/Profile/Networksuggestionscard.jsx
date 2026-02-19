export default function NetworkSuggestionsCard() {
  const people = [
    { name: "Jordan Smith", role: "UX Lead at Adobe",           emoji: "👨", bg: "#dbeafe", color: "#2563eb" },
    { name: "Claire Zhang", role: "Fullstack Dev at Meta",      emoji: "👩", bg: "#fce7f3", color: "#be185d" },
    { name: "Marcus Bell",  role: "Hiring Manager at SpaceX",   emoji: "👨‍🚀", bg: "#dcfce7", color: "#15803d" },
  ];

  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)" }}>
      <h3 style={{ margin: "0 0 16px", fontWeight: 700, fontSize: 16, color: "#111827" }}>Network Suggestions</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {people.map(({ name, role, emoji, bg, color }) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%", background: bg, color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, flexShrink: 0
            }}>{emoji}</div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ margin: "0 0 1px", fontWeight: 700, fontSize: 13, color: "#111827", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{name}</p>
              <p style={{ margin: 0, fontSize: 12, color: "#6b7280", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{role}</p>
            </div>

            <button style={{
              width: 32, height: 32, borderRadius: "50%", border: "1.5px solid #d1d5db",
              background: "#fff", cursor: "pointer", display: "flex",
              alignItems: "center", justifyContent: "center", fontSize: 18,
              flexShrink: 0, transition: "all .15s"
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#eff6ff"; e.currentTarget.style.borderColor = "#2563eb"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "#d1d5db"; }}
            >+</button>
          </div>
        ))}
      </div>

      <button style={{
        display: "block", width: "100%", marginTop: 14,
        border: "none", background: "none", color: "#2563eb",
        fontWeight: 700, fontSize: 13, cursor: "pointer", textAlign: "center"
      }}>View More Suggestions</button>
    </div>
  );
}