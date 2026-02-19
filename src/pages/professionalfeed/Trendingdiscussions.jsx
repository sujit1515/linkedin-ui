export default function TrendingDiscussions() {
  const items = [
    { tag: "#EduConnect2024", posts: "2,491 posts", change: "+12%", up: true },
    { tag: "#CareerGrowth",   posts: "1,822 posts", change: "+8%",  up: true },
    { tag: "#UIPatterns",     posts: "945 posts",   change: "+5%",  up: true },
    { tag: "#FinTechCareers", posts: "612 posts",   change: "+22%", up: true },
    { tag: "#MastersAbroad",  posts: "430 posts",   change: "+15%", up: true },
  ];

  return (
    <div style={{
      background: "#fff", borderRadius: 12, border: "1px solid #e5e7eb",
      padding: "16px 20px", boxShadow: "0 1px 4px rgba(0,0,0,.07)", width: 280
    }}>
      {/* Title */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, fontWeight: 700, fontSize: 15, color: "#111827" }}>
        <span style={{ fontSize: 16 }}>📈</span> Trending Discussions
      </div>

      {/* Items */}
      {items.map(({ tag, posts, change, up }) => (
        <div
          key={tag}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 6px", borderRadius: 8, cursor: "pointer", transition: "background .15s" }}
          onMouseEnter={e => e.currentTarget.style.background = "#f9fafb"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          <div>
            <p style={{ margin: "0 0 2px", fontWeight: 700, fontSize: 13, color: "#111827" }}>{tag}</p>
            <p style={{ margin: 0, fontSize: 12, color: "#9ca3af" }}>{posts}</p>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: up ? "#16a34a" : "#dc2626" }}>{change}</span>
        </div>
      ))}
    </div>
  );
}