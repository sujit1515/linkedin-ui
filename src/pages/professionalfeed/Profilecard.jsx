import { useState } from "react";

export default function ProfileCard() {
  return (
    <div style={{ background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb", overflow: "hidden", boxShadow: "0 1px 4px rgba(0,0,0,.07)", width: 280 }}>
      {/* Banner */}
      <div style={{ height: 80, background: "linear-gradient(135deg, #4f46e5 0%, #2563eb 50%, #f97316 100%)" }} />

      {/* Avatar */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: -44 }}>
        <div style={{
          width: 88, height: 88, borderRadius: "50%", border: "4px solid #fff",
          background: "#f3f4f6", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,.12)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 42
        }}>👤</div>
      </div>

      <div style={{ padding: "10px 20px 18px", textAlign: "center" }}>
        <h3 style={{ margin: "6px 0 4px", fontWeight: 700, fontSize: 17, color: "#111827" }}>Felix Henderson</h3>
        <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
          Senior Product Designer at TechFlow | UI/UX Mentor | Learning Cloud Computing
        </p>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "14px 0" }} />

        {/* Profile completion */}
        <div style={{ textAlign: "left" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
            <span style={{ color: "#374151" }}>Profile Completion</span>
            <span style={{ fontWeight: 700, color: "#111827" }}>85%</span>
          </div>
          <div style={{ height: 6, background: "#e5e7eb", borderRadius: 99 }}>
            <div style={{ height: "100%", width: "85%", background: "linear-gradient(90deg,#2563eb,#60a5fa)", borderRadius: 99 }} />
          </div>
          <button style={{
            width: "100%", marginTop: 14, padding: "9px 0", border: "1.5px solid #d1d5db",
            borderRadius: 8, background: "#fff", fontWeight: 700, fontSize: 14, color: "#374151", cursor: "pointer"
          }}>
            Complete Profile
          </button>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: "14px 0" }} />

        {/* Stats */}
        {[
          { label: "Profile viewers", value: "1,240" },
          { label: "Post impressions", value: "4,892" },
        ].map(({ label, value }) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "5px 0" }}>
            <span style={{ color: "#6b7280" }}>{label}</span>
            <span style={{ fontWeight: 700, color: "#2563eb" }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}