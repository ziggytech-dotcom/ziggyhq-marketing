import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features — ZiggyHQ",
  description: "Everything ZiggyHQ includes. See every feature built for small business teams.",
}

const ACCENT = "#ff006e"
const SIGNUP = "https://app.ziggyhq.com/signup"

const sections = [
  {
    name: "Core Features",
    features: [
            {
              icon: "🎯",
              title: "Visual Sales Pipeline",
              desc: "Drag-and-drop deal stages. See your entire pipeline at a glance. Customize stages to match how you actually sell.",
            },
            {
              icon: "📧",
              title: "Email Sequences",
              desc: "Automated follow-up sequences that run while you sleep. Never lose a lead to silence again.",
            },
            {
              icon: "🗂️",
              title: "Smart Lists",
              desc: "Dynamic contact segments that auto-update. Target the right people without manual sorting.",
            },
            {
              icon: "⚡",
              title: "Action Plans",
              desc: "Repeatable workflow templates. Onboard a client. Follow up a quote. Run it the same way every time.",
            },
            {
              icon: "👥",
              title: "Contact Management",
              desc: "Full CRM — unlimited contacts, activity history, notes, and tags. Everything about a lead in one place.",
            },
            {
              icon: "📋",
              title: "Forms",
              desc: "Embed lead capture forms anywhere. Responses flow directly into your pipeline.",
            },
    ],
  },
  {
    name: "Integrations",
    features: [
            {
              icon: "📅",
              title: "Google Calendar Sync",
              desc: "Sync meetings and follow-ups to your calendar. Zero double-booking. (Coming soon)",
            },
            {
              icon: "💬",
              title: "SMS via Twilio (BYOK)",
              desc: "Automated text follow-ups. Bring your own Twilio account — you control cost and compliance. (In development)",
            },
            {
              icon: "🤖",
              title: "AI Calling via Bland.ai",
              desc: "AI-powered outbound calls that qualify leads and book appointments. (In development)",
            },
    ],
  },
  {
    name: "Advanced",
    features: [
            {
              icon: "📊",
              title: "Reports & Analytics",
              desc: "Pipeline velocity, email open rates, and conversion metrics at a glance.",
            },
            {
              icon: "🔐",
              title: "Team Roles & Permissions",
              desc: "Control what each team member can see and do.",
            },
            {
              icon: "📤",
              title: "Data Export",
              desc: "Export contacts, deals, and activity to CSV at any time. Your data is always yours.",
            },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <style>{`@media(max-width:768px){.nav-links{display:none!important}}`}</style>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f", padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.5px" }}>
            Ziggy<span style={{ color: ACCENT }}>HQ</span>
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[["Features", "/features"], ["Pricing", "/#pricing"], ["Contact", "/contact"], ["Blog", "/blog"], ["Sign In", `https://app.ziggyhq.com/login`]].map(([l, h]) => (
              <a key={l} href={h} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </div>
          <a href={SIGNUP} style={{ background: ACCENT, color: "#fff", textDecoration: "none", padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      <section style={{ padding: "80px 24px 40px", textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
        <h1 style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, letterSpacing: "-1.5px", marginBottom: 16 }}>
          Everything ZiggyHQ includes
        </h1>
        <p style={{ fontSize: 18, color: "#777", lineHeight: 1.6, marginBottom: 36 }}>
          Every feature. One flat price. No paywalls, no feature tiers.
        </p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
          padding: "13px 26px", borderRadius: 10, fontSize: 15, fontWeight: 700,
        }}>
          Start Free Trial — $49/mo after trial
        </a>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 100px" }}>
        {sections.map((section) => (
          <div key={section.name} style={{ marginBottom: 64 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.3px", marginBottom: 24, color: "#fff", borderBottom: "1px solid #1f1f1f", paddingBottom: 16 }}>
              {section.name}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 16 }}>
              {section.features.map((f) => (
                <div key={f.title} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 14, padding: "24px 22px" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.65 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Suite callout */}
        <div style={{ background: `rgba(255,0,110,0.06)`, border: `1px solid rgba(255,0,110,0.2)`, borderRadius: 16, padding: "32px 36px", textAlign: "center" }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Part of the ZiggyTech Business Suite</h3>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 24, maxWidth: 560, margin: "0 auto 24px" }}>
            ZiggyHQ is one of 10 integrated apps. Get all of them — CRM, payroll, docs, scheduling, and more — for 
            <strong style={{ color: "#fff" }}>$179/mo flat</strong>.
          </p>
          <a href="https://ziggybusiness.com" style={{
            display: "inline-block", background: ACCENT, color: "#fff", textDecoration: "none",
            padding: "12px 24px", borderRadius: 9, fontSize: 14, fontWeight: 700,
          }}>
            See the Full Suite →
          </a>
        </div>
      </section>

      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "40px 24px", textAlign: "center" }}>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", marginBottom: 16 }}>
          {[["Home", "/"], ["Features", "/features"], ["Pricing", "/#pricing"], ["Contact", "/contact"], ["Blog", "/blog"]].map(([l, h]) => (
            <a key={l} href={h} style={{ color: "#555", fontSize: 14, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#2a2a2a" }}>© 2026 ZiggyHQ. All rights reserved.</p>
      </footer>
    </>
  )
}
