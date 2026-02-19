export default function CreatePost() {
  const actions = [
    { icon: "🖼️", label: "Photo" },
    { icon: "🎬", label: "Video" },
    { icon: "📄", label: "Document" },
    { icon: "📊", label: "Poll" },
  ];

  return (
    <div style={{
      background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb",
      padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)", width: "100%", maxWidth: 560
    }}>
      {/* Input row */}
      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 14 }}>
        {/* Avatar */}
        <div style={{
          width: 44, height: 44, borderRadius: "50%", background: "#d1fae5",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 22, flexShrink: 0, overflow: "hidden"
        }}>👩</div>

        {/* Input placeholder */}
        <div style={{
          flex: 1, border: "1.5px solid #d1d5db", borderRadius: 99,
          padding: "10px 18px", fontSize: 14, color: "#9ca3af",
          cursor: "pointer", background: "#fff",
          transition: "border-color .15s",
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "#6b7280"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "#d1d5db"}
        >
          Share an update, poll, or achievement...
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "0 0 12px" }} />

      {/* Action buttons */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {actions.map(({ icon, label }) => (
          <button
            key={label}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              border: "none", background: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 600, color: "#374151",
              padding: "6px 12px", borderRadius: 8, transition: "background .15s"
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#f3f4f6"}
            onMouseLeave={e => e.currentTarget.style.background = "none"}
          >
            <span style={{ fontSize: 17 }}>{icon}</span> {label}
          </button>
        ))}
      </div>
    </div>
  );
}