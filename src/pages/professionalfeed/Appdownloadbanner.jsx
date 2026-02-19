export default function AppDownloadBanner() {
  return (
    <div style={{
      background: "#fff", borderRadius: 12,
      border: "1.5px dashed #93c5fd",
      padding: "18px 24px", textAlign: "center",
      boxShadow: "0 1px 4px rgba(0,0,0,.05)", width: 280
    }}>
      <p style={{ margin: "0 0 10px", fontSize: 13, color: "#374151", lineHeight: 1.6 }}>
        Get the EduConnect mobile app for better experience
      </p>
      <button style={{
        background: "none", border: "none", color: "#2563eb",
        fontWeight: 700, fontSize: 14, cursor: "pointer", padding: 0
      }}>
        Download Now
      </button>
    </div>
  );
}