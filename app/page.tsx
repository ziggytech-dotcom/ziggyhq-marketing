import Script from "next/script"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "ZiggyHQ",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://ziggyhq.com",
      "description": "CRM and business operations platform for small business. Visual pipeline, email sequences, smart lists, forms, and team management.",
      "offers": {
        "@type": "Offer",
        "price": "49.00",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "49.00",
          "priceCurrency": "USD",
          "unitText": "MONTH",
          "description": "Base plan — includes 5 seats. Additional seats $10/seat/mo."
        }
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does ZiggyHQ cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ZiggyHQ starts at $49/mo and includes 5 seats. Need more users? Add seats for $10/seat/mo. You can also get all 10 ZiggyTech apps for $179/mo flat."
          }
        },
        {
          "@type": "Question",
          "name": "How many users are included in the base plan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your $49/mo base plan includes 5 seats. You can add more team members for $10 per seat per month — no tiers, no surprises."
          }
        },
        {
          "@type": "Question",
          "name": "Do I own my data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Your contacts and pipeline data are yours. You can export everything as a CSV at any time. We will never sell your data or hold it hostage."
          }
        },
        {
          "@type": "Question",
          "name": "How does the free trial work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You get 14 days free — no credit card required. Full access to all live features from day one. If it's not for you, just walk away."
          }
        },
        {
          "@type": "Question",
          "name": "How do I switch from GoHighLevel to ZiggyHQ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Easy. Export your contacts from GoHighLevel as a CSV and import them into ZiggyHQ in minutes. We have an onboarding flow that walks you through it step by step."
          }
        },
        {
          "@type": "Question",
          "name": "What are the BYOK integrations for SMS and AI calling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SMS sequences use Twilio (Bring Your Own Key) and AI calling uses Bland.ai (Bring Your Own Key). Both are currently in development. You connect your own account so you control costs and compliance — we just power the workflow."
          }
        }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f",
        padding: "0 24px",
      }}>
        <div style={{
          maxWidth: 1120,
          margin: "0 auto",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.5px" }}>
            Ziggy<span style={{ color: "#ff006e" }}>HQ</span>
          </a>

          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div style={{ display: "flex", gap: 28 }}>
              {[["Features", "#features"], ["Pricing", "#pricing"], ["Blog", "/blog"], ["Sign In", "https://app.ziggyhq.com/login"]].map(([label, href]) => (
                <a key={label} href={href} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888")}>
                  {label}
                </a>
              ))}
            </div>
            <a href="https://app.ziggyhq.com/signup" style={{
              background: "#ff006e",
              color: "#fff",
              textDecoration: "none",
              padding: "9px 20px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}>
              Start Free Trial
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        padding: "100px 24px 80px",
        textAlign: "center",
        maxWidth: 800,
        margin: "0 auto",
      }}>
        <div style={{
          display: "inline-block",
          background: "rgba(255,0,110,0.1)",
          border: "1px solid rgba(255,0,110,0.25)",
          borderRadius: 99,
          padding: "6px 16px",
          fontSize: 13,
          color: "#ff006e",
          fontWeight: 600,
          marginBottom: 28,
          letterSpacing: "0.02em",
        }}>
          GoHighLevel Alternative · Half the price
        </div>

        <h1 style={{
          fontSize: "clamp(42px, 6vw, 68px)",
          fontWeight: 700,
          lineHeight: 1.08,
          letterSpacing: "-1.5px",
          marginBottom: 24,
          color: "#fff",
        }}>
          The CRM that closes deals,<br />
          <span style={{
            background: "linear-gradient(135deg, #fff 0%, #ff006e 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>not your wallet.</span>
        </h1>

        <p style={{ fontSize: 19, color: "#888", lineHeight: 1.6, marginBottom: 40, maxWidth: 580, margin: "0 auto 40px" }}>
          GoHighLevel charges $97–$297/mo and takes weeks to set up. ZiggyHQ gives you a full CRM, visual pipeline, and email automation for <strong style={{ color: "#fff" }}>$49/mo</strong> — and you're live in minutes.
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
          <a href="https://app.ziggyhq.com/signup" style={{
            background: "#ff006e",
            color: "#fff",
            textDecoration: "none",
            padding: "15px 30px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
          }}>
            Start Free Trial — 14 days free
          </a>
          <a href="#pricing" style={{
            background: "transparent",
            color: "#fff",
            textDecoration: "none",
            padding: "15px 30px",
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            border: "1px solid #333",
          }}>
            See Pricing
          </a>
        </div>

        <p style={{ fontSize: 13, color: "#555", letterSpacing: "0.03em" }}>
          No credit card · 14-day free trial · Cancel anytime
        </p>
      </section>

      {/* ── PROBLEM STRIP ── */}
      <section style={{
        background: "#0f0f0f",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "56px 24px",
      }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 32,
          textAlign: "center",
        }}>
          {[
            {
              emoji: "😤",
              headline: "GoHighLevel is overkill.",
              body: "You don't need an agency-grade platform with 200 features you'll never touch. You need something that works on day one.",
            },
            {
              emoji: "📊",
              headline: "Spreadsheets don't scale.",
              body: "You're losing leads in a Google Sheet. You forget to follow up. Deals die in your inbox. You already know the problem.",
            },
            {
              emoji: "💸",
              headline: "You're paying for bloat.",
              body: "HubSpot locks the good stuff behind $400/mo plans. Salesforce costs more than your rent. There's a better way.",
            },
          ].map(({ emoji, headline, body }) => (
            <div key={headline}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{headline}</h3>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "96px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16 }}>
            Everything you need. Nothing you don't.
          </h2>
          <p style={{ fontSize: 17, color: "#666", maxWidth: 500, margin: "0 auto" }}>
            Built for small business owners who want results, not a second job learning software.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}>
          {[
            {
              icon: "🎯",
              title: "Visual Sales Pipeline",
              desc: "Drag-and-drop deal stages. See your entire pipeline at a glance. Customize stages to match how you actually sell.",
            },
            {
              icon: "📧",
              title: "Email Sequences & Follow-Up",
              desc: "Set up automated follow-up sequences that run while you sleep. Never lose a lead to silence again.",
            },
            {
              icon: "🗂️",
              title: "Smart Lists",
              desc: "Dynamic contact segments that update automatically. Target the right people at the right time — without manual sorting.",
            },
            {
              icon: "⚡",
              title: "Action Plans",
              desc: "Repeatable workflow templates for your most common processes. Onboard a client. Follow up a quote. Run it the same way every time.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: "#111",
              border: "1px solid #1f1f1f",
              borderRadius: 16,
              padding: "28px 24px",
              transition: "border-color 0.2s",
            }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Additional features list */}
        <div style={{
          marginTop: 32,
          background: "#111",
          border: "1px solid #1f1f1f",
          borderRadius: 16,
          padding: "28px 32px",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px 40px",
        }}>
          <p style={{ color: "#555", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", width: "100%", marginBottom: 4 }}>
            Also included
          </p>
          {["Contact & lead management", "Forms (embed anywhere)", "Team management & roles", "Reports & analytics", "Lead import (CSV)", "Notifications center", "Customizable pipeline stages", "Onboarding flow"].map(f => (
            <span key={f} style={{ fontSize: 14, color: "#888", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#ff006e", fontWeight: 700 }}>✓</span> {f}
            </span>
          ))}
        </div>
      </section>

      {/* ── COMING SOON STRIP ── */}
      <section style={{
        background: "#0d0d0d",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
        padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>What's coming next</h2>
            <p style={{ color: "#555", fontSize: 15 }}>We ship fast. Here's what's already in development.</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
          }}>
            {[
              {
                icon: "💬",
                title: "SMS Sequences",
                sub: "via Twilio (BYOK)",
                badge: "In Development",
                badgeColor: "#ff9500",
                desc: "Automated text follow-ups. Bring your own Twilio account — you control the cost.",
              },
              {
                icon: "🤖",
                title: "AI Calling",
                sub: "via Bland.ai (BYOK)",
                badge: "In Development",
                badgeColor: "#ff9500",
                desc: "AI-powered outbound calls that qualify leads and book appointments automatically.",
              },
              {
                icon: "📅",
                title: "Google Calendar Sync",
                sub: "",
                badge: "Coming Soon",
                badgeColor: "#0066ff",
                desc: "Sync meetings and follow-ups straight to your calendar. Zero double-booking.",
              },
            ].map(({ icon, title, sub, badge, badgeColor, desc }) => (
              <div key={title} style={{
                background: "#111",
                border: "1px solid #1f1f1f",
                borderRadius: 14,
                padding: "24px 22px",
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{icon}</span>
                  <span style={{
                    background: `${badgeColor}20`,
                    color: badgeColor,
                    border: `1px solid ${badgeColor}40`,
                    borderRadius: 99,
                    padding: "3px 10px",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}>{badge}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{title}</h3>
                {sub && <p style={{ fontSize: 12, color: "#555", marginBottom: 8 }}>{sub}</p>}
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPETITOR COMPARISON ── */}
      <section style={{ padding: "96px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12 }}>
            ZiggyHQ vs GoHighLevel
          </h2>
          <p style={{ color: "#666", fontSize: 16 }}>
            Same core features. Half the price. A fraction of the learning curve.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: 15,
          }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#ff006e", fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: "rgba(255,0,110,0.05)", borderRadius: "8px 8px 0 0" }}>ZiggyHQ</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>GoHighLevel</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Price", "$49/mo", "$97–$297/mo"],
                ["Seats included", "5 seats", "1 user (Starter)"],
                ["Contacts limit", "Unlimited", "Unlimited"],
                ["Visual pipeline", "✅ Yes", "✅ Yes"],
                ["Email sequences", "✅ Yes", "✅ Yes"],
                ["SMS sequences", "🔧 Coming (BYOK Twilio)", "✅ Yes"],
                ["AI calling", "🔧 Coming (BYOK Bland.ai)", "✅ Yes"],
                ["Setup complexity", "Low — live in minutes", "High — days to configure"],
                ["Contract required", "No — cancel anytime", "No"],
              ].map(([feature, ziggy, ghl], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "14px 20px", color: "#888", borderBottom: "1px solid #161616" }}>{feature}</td>
                  <td style={{ padding: "14px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: "rgba(255,0,110,0.03)", fontWeight: 500 }}>{ziggy}</td>
                  <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616" }}>{ghl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "#444" }}>
          Pricing data sourced from GoHighLevel.com · Updated March 2026
        </p>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{
        padding: "96px 24px",
        background: "#080808",
        borderTop: "1px solid #1f1f1f",
        borderBottom: "1px solid #1f1f1f",
      }}>
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12 }}>
            Simple pricing. No surprises.
          </h2>
          <p style={{ color: "#666", fontSize: 16, marginBottom: 48 }}>
            One plan. Everything included. Scales with your team.
          </p>

          <div style={{
            background: "#111",
            border: "2px solid #ff006e",
            borderRadius: 20,
            padding: "40px 36px",
            marginBottom: 20,
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#ff006e", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              ZiggyHQ — Base Plan
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 64, fontWeight: 700, color: "#fff", letterSpacing: "-2px" }}>$49</span>
              <span style={{ fontSize: 18, color: "#555" }}>/mo</span>
            </div>
            <p style={{ color: "#555", fontSize: 14, marginBottom: 32 }}>
              5 seats included · +$10/seat/mo after that
            </p>

            <ul style={{ listStyle: "none", padding: 0, marginBottom: 32, textAlign: "left" }}>
              {[
                "Contact & lead management",
                "Visual sales pipeline",
                "Email sequences & automation",
                "Smart lists",
                "Action plans",
                "Forms (embed anywhere)",
                "Team management (up to 5 seats)",
                "Reports & analytics",
                "CSV import",
                "Notifications center",
              ].map(item => (
                <li key={item} style={{ padding: "7px 0", fontSize: 15, color: "#ccc", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #1a1a1a" }}>
                  <span style={{ color: "#ff006e", fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                </li>
              ))}
            </ul>

            <a href="https://app.ziggyhq.com/signup" style={{
              display: "block",
              background: "#ff006e",
              color: "#fff",
              textDecoration: "none",
              padding: "16px",
              borderRadius: 10,
              fontSize: 16,
              fontWeight: 700,
              textAlign: "center",
            }}>
              Start Free Trial — No credit card required
            </a>
          </div>

          {/* Bundle callout */}
          <div style={{
            background: "#111",
            border: "1px solid #1f1f1f",
            borderRadius: 14,
            padding: "22px 24px",
            textAlign: "center",
          }}>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6 }}>
              🏢 <strong style={{ color: "#fff" }}>Running a full business?</strong> Get all 10 ZiggyTech apps — including ZiggyHQ — for{" "}
              <strong style={{ color: "#ff006e" }}>$179/mo flat</strong> with the ZiggyTech Business Suite.{" "}
              <a href="https://ziggybusiness.com" style={{ color: "#ff006e", textDecoration: "underline" }}>Learn more →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "96px 24px", maxWidth: 740, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 700, letterSpacing: "-0.6px", marginBottom: 48, textAlign: "center" }}>
          Questions? We've got answers.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            {
              q: "How much does ZiggyHQ cost?",
              a: "$49/mo. That includes 5 seats. Need more team members? Add them for $10/seat/mo. No tiered plans, no annual lock-in, no surprise fees.",
            },
            {
              q: "How many users are included in the base plan?",
              a: "Five. Most small business teams run with 2–4 people, so your whole team is covered. If you grow beyond that, extra seats are $10 each — not $97/mo like GoHighLevel charges for their next tier.",
            },
            {
              q: "Do I own my data?",
              a: "Yes, completely. Your contacts, deals, and activity history are yours. Export everything as a CSV whenever you want. We will never lock your data or sell it to third parties.",
            },
            {
              q: "How does the free trial work?",
              a: "Sign up and get 14 days free — no credit card required. You get full access to every live feature from the moment you create your account. If you don't want to continue, just don't. Nothing to cancel.",
            },
            {
              q: "How do I switch from GoHighLevel to ZiggyHQ?",
              a: "Export your contacts from GoHighLevel as a CSV file and import them into ZiggyHQ. Takes about 10 minutes. Our onboarding flow walks you through everything: pipeline setup, team invites, and your first email sequence.",
            },
            {
              q: "What are the BYOK integrations for SMS and AI calling?",
              a: "Both SMS (via Twilio) and AI calling (via Bland.ai) use a Bring Your Own Key model. You connect your own Twilio or Bland.ai account. That means you control costs, compliance, and data. We power the workflow; you own the accounts. Both features are currently in development.",
            },
          ].map(({ q, a }, i) => (
            <details key={q} style={{
              background: "#111",
              border: "1px solid #1f1f1f",
              borderRadius: 10,
              padding: "0",
              overflow: "hidden",
            }}>
              <summary style={{
                padding: "20px 24px",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
                {q}
                <span style={{ color: "#ff006e", fontSize: 20, fontWeight: 400, flexShrink: 0 }}>+</span>
              </summary>
              <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#777", lineHeight: 1.7, borderTop: "1px solid #1a1a1a" }}>
                <p style={{ marginTop: 16 }}>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "100px 24px",
        textAlign: "center",
        background: "linear-gradient(180deg, #0a0a0a 0%, #0d0005 100%)",
        borderTop: "1px solid #1f1f1f",
      }}>
        <h2 style={{
          fontSize: "clamp(36px, 5vw, 58px)",
          fontWeight: 700,
          letterSpacing: "-1.5px",
          marginBottom: 20,
          lineHeight: 1.1,
        }}>
          Your pipeline isn't going to<br />
          <span style={{
            background: "linear-gradient(135deg, #fff 0%, #ff006e 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>fill itself.</span>
        </h2>
        <p style={{ fontSize: 18, color: "#555", marginBottom: 40 }}>
          14 days free. No credit card. Cancel anytime.
        </p>
        <a href="https://app.ziggyhq.com/signup" style={{
          display: "inline-block",
          background: "#ff006e",
          color: "#fff",
          textDecoration: "none",
          padding: "18px 40px",
          borderRadius: 12,
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.2px",
        }}>
          Start Free Trial →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#050505",
        borderTop: "1px solid #111",
        padding: "40px 24px",
      }}>
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          textAlign: "center",
        }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
            {[["Home", "/"], ["Pricing", "#pricing"], ["Blog", "/blog"], ["Privacy", "/privacy"], ["Terms", "/terms"], ["Sign In", "https://app.ziggyhq.com/login"]].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#555", fontSize: 14, textDecoration: "none", fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = "#888")}
                onMouseLeave={e => (e.currentTarget.style.color = "#555")}>
                {label}
              </a>
            ))}
          </div>

          <p style={{ fontSize: 13, color: "#333" }}>
            Part of{" "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ZiggyTech Business Suite</a>
            {" · "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ziggybusiness.com</a>
          </p>

          <p style={{ fontSize: 13, color: "#2a2a2a" }}>
            © 2026 ZiggyHQ. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
