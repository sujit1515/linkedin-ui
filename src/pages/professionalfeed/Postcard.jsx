import { useState } from "react";

export default function PostCard({
  author = "Sarah Jenkins",
  role = "Talent Acquisition Specialist at Google | Tech Evangelist",
  badge = "1st",
  time = "2h ago",
  content = "Excited to announce that we are officially hiring for 50+ roles in our Cloud Computing division! 🚀\n\nAt Google, we value diversity, innovation, and a passion for solving complex problems. If you're looking to make a global impact, check out the roles below.",
  imageEmoji = "📱",
  imageBg = "linear-gradient(135deg,#1e3a8a,#2563eb)",
  showImage = true,
  likes = 1245,
  comments = 84,
  shares = 42,
}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likes);

  const handleLike = () => {
    setLiked(prev => !prev);
    setCount(c => liked ? c - 1 : c + 1);
  };

  const actions = [
    { label: "Like",    emoji: "👍", action: handleLike, active: liked },
    { label: "Comment", emoji: "💬" },
    { label: "Share",   emoji: "↗️" },
    { label: "Send",    emoji: "✉️" },
  ];

  const initials = author[0];
  const avatarColors = ["#dbeafe|#2563eb","#fce7f3|#be185d","#dcfce7|#15803d","#fef3c7|#d97706"];
  const [bg, color] = avatarColors[(initials.charCodeAt(0)) % avatarColors.length].split("|");

  return (
    <div style={{
      background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb",
      boxShadow: "0 1px 4px rgba(0,0,0,.07)", overflow: "hidden", width: "100%", maxWidth: 560
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "16px 20px 12px" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
          <div style={{
            width: 46, height: 46, borderRadius: "50%", background: bg,
            color, display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 18, flexShrink: 0
          }}>{initials}</div>
          <div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ fontWeight: 700, fontSize: 14, color: "#111827", cursor: "pointer" }}>{author}</span>
              <span style={{ fontSize: 12, color: "#6b7280" }}>• {badge}</span>
            </div>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "#6b7280" }}>{role}</p>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "#9ca3af" }}>{time}</p>
          </div>
        </div>
        <button style={{ border: "none", background: "none", cursor: "pointer", color: "#9ca3af", fontSize: 20, lineHeight: 1, padding: 4 }}>···</button>
      </div>

      {/* Text content */}
      <div style={{ padding: "0 20px 14px", fontSize: 14, color: "#374151", lineHeight: 1.65, whiteSpace: "pre-line" }}>
        {content}
      </div>

      {/* Image */}
      {showImage && (
        <div style={{
          width: "100%", height: 240, background: imageBg,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64
        }}>
          {imageEmoji}
        </div>
      )}

      {/* Reaction row */}
      <div style={{ padding: "10px 20px 8px", display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span>👍❤️</span>
          <span>{count.toLocaleString()}</span>
        </div>
        <span>{comments} comments · {shares} shares</span>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid #e5e7eb", margin: 0 }} />

      {/* Action buttons */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "4px 8px 8px" }}>
        {actions.map(({ label, emoji, action, active }) => (
          <button
            key={label}
            onClick={action}
            style={{
              display: "flex", alignItems: "center", gap: 6, border: "none",
              background: active ? "#eff6ff" : "none", cursor: "pointer",
              fontSize: 13, fontWeight: 600, color: active ? "#2563eb" : "#6b7280",
              padding: "8px 14px", borderRadius: 8, transition: "all .15s"
            }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.background = "#f3f4f6"; }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.background = "none"; }}
          >
            <span style={{ fontSize: 15 }}>{emoji}</span> {label}
          </button>
        ))}
      </div>
    </div>
  );
}