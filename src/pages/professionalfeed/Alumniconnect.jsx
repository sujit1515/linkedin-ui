export default function AlumniConnect() {
  const people = [
    { name: "Robert Wilson", sub: "Class of 2020 | CEO @ Stealth",   initials: "R", bg: "#dcfce7", color: "#15803d" },
    { name: "Emma Watson",   sub: "Class of 2018 | VP of Product",   initials: "E", bg: "#fce7f3", color: "#be185d" },
  ];

  return (
    <div style={{
      background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb",
      padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)", width: 280
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: "#111827" }}>Alumni Connect</span>
        <button style={{ border: "none", background: "none", cursor: "pointer", color: "#9ca3af", fontSize: 20 }}>···</button>
      </div>

      {/* People */}
      {people.map(({ name, sub, initials, bg, color }, i) => (
        <div key={name}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%", background: bg, color,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: 18, flexShrink: 0
            }}>{initials}</div>
            <div>
              <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 14, color: "#111827" }}>{name}</p>
              <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>{sub}</p>
            </div>
          </div>
          <button style={{
            display: "flex", alignItems: "center", gap: 6,
            border: "1.5px solid #d1d5db", borderRadius: 20,
            padding: "7px 16px", background: "#fff",
            fontSize: 13, fontWeight: 600, color: "#374151",
            cursor: "pointer", marginBottom: i < people.length - 1 ? 20 : 0,
            transition: "background .15s"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
          >
            👤 Message
          </button>
        </div>
      ))}

      {/* Footer link */}
      <button style={{
        border: "none", background: "none", color: "#2563eb",
        fontWeight: 700, fontSize: 13, cursor: "pointer", marginTop: 10, padding: 0
      }}>
        See All Recommendations
      </button>
    </div>
  );
}