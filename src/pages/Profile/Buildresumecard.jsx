export default function BuildResumeCard() {
  return (
    <div style={{ background: "linear-gradient(135deg,#2563eb,#3b82f6)", borderRadius: 12, padding: "20px", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }}>
      <h3 style={{ margin: "0 0 8px", fontWeight: 700, fontSize: 17, color: "#fff" }}>Build Your Resume</h3>
      <p style={{ margin: "0 0 16px", fontSize: 14, color: "#bfdbfe", lineHeight: 1.6 }}>
        Instantly export your professional profile into a polished, recruiter-ready PDF format.
      </p>
      <button style={{
        width: "100%", padding: "11px 0", background: "rgba(255,255,255,0.15)",
        border: "2px solid rgba(255,255,255,0.5)", borderRadius: 10,
        color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        transition: "background .15s"
      }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
        onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
      >
        📄 Export Professional CV
      </button>
    </div>
  );
}