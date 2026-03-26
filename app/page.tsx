"use client"
import { useState } from "react"

const FEATURES = [
  {
    icon: "📞",
    title: "AI Caller — Emma",
    desc: "New leads get called within 2 minutes. Emma qualifies them, gets their timeline, budget, and areas — then logs everything to the lead automatically.",
  },
  {
    icon: "⚡",
    title: "Instant Lead Capture",
    desc: "One webhook URL. Paste it into your website, Zapier, IDX Broker, or Facebook Lead Ads. Every new lead lands in ZiggyHQ and gets called — no agent needed.",
  },
  {
    icon: "📋",
    title: "Follow-Up Queue",
    desc: "Never miss a follow-up. See every lead that's overdue, due today, and upcoming — with one-click call, reschedule, and mark contacted.",
  },
  {
    icon: "🤖",
    title: "Action Plans",
    desc: "Build automated follow-up sequences. Enroll a lead and the plan handles the cadence — calls, notes, and check-ins on a schedule.",
  },
  {
    icon: "📊",
    title: "Built-In Reporting",
    desc: "Pipeline by stage, lead sources, conversion rates, activity this week. Everything you need to coach your team and grow your business.",
  },
  {
    icon: "📥",
    title: "CSV Import",
    desc: "Bring your leads from Follow Up Boss, kvCORE, BoomTown, or any CSV. Auto-maps column names, deduplicates by email and phone.",
  },
]

const PRICING = [
  {
    name: "Solo Agent",
    price: "$149",
    period: "/month",
    desc: "Everything you need to stop losing leads.",
    features: [
      "AI Caller (Emma) — unlimited calls",
      "Up to 2,500 leads",
      "Follow-up queue & action plans",
      "Lead capture webhook",
      "CSV import",
      "Reporting dashboard",
    ],
    cta: "Get Early Access",
    highlight: false,
  },
  {
    name: "Team",
    price: "$299",
    period: "/month",
    desc: "For teams that want to dominate their market.",
    features: [
      "Everything in Solo Agent",
      "Unlimited leads",
      "Up to 10 agents",
      "Partner lender management",
      "Commission & referral tracking",
      "Priority support",
    ],
    cta: "Get Early Access",
    highlight: true,
  },
]

const FAQS = [
  {
    q: "How fast does Emma call new leads?",
    a: "Within 2.5 minutes by default — configurable from 1 to 10 minutes. Outside your call hours, Emma queues the call for 9 AM the next morning. TCPA compliant.",
  },
  {
    q: "Does it sound like a robot?",
    a: "No. Emma uses a natural, warm female voice. In testing, most people don't realize they're talking to AI until they ask — and we handle that honestly.",
  },
  {
    q: "Can I use my agent's voice instead of Emma?",
    a: "Yes. We support ElevenLabs voice clones. If your agent has YouTube content or recorded audio, we can create a clone of their voice for the AI calls.",
  },
  {
    q: "Does it work with my existing website?",
    a: "Yes. One webhook URL added to your contact form — that's it. Works with any website platform, Zapier, IDX Broker, and Facebook Lead Ads.",
  },
  {
    q: "What happens to the call transcript?",
    a: "Emma's full transcript, summary, and any lead details she captured (timeline, budget, areas, pre-approval) are automatically logged to the lead in ZiggyHQ.",
  },
  {
    q: "Is it only for real estate?",
    a: "Real estate is our first vertical, but the platform is built to work for any sales team. Mortgage, insurance, home services — if you have leads, ZiggyHQ works.",
  },
]

export default function Home() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff" }}>
      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1a1a1a",
        padding: "0 24px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "24px", letterSpacing: "0.05em" }}>
          ZIGGY<span style={{ color: "#ff006e" }}>HQ</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a href="#features" style={{ color: "#888", fontSize: "14px", textDecoration: "none" }}>Features</a>
          <a href="#pricing" style={{ color: "#888", fontSize: "14px", textDecoration: "none" }}>Pricing</a>
          <a href="#faq" style={{ color: "#888", fontSize: "14px", textDecoration: "none" }}>FAQ</a>
          <a href="https://app.ziggyhq.com" style={{
            background: "#ff006e", color: "#fff", padding: "8px 18px",
            borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none",
          }}>Log In</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: "160px", paddingBottom: "100px", textAlign: "center", position: "relative" }}>
        {/* Glow bg */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,0,110,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,0,110,0.1)", border: "1px solid rgba(255,0,110,0.25)",
            borderRadius: "100px", padding: "6px 14px", marginBottom: "32px",
            fontSize: "13px", color: "#ff006e", fontWeight: 500,
          }}>
            ⚡ Now in early access — limited spots
          </div>
          <h1 style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(56px, 10vw, 110px)",
            lineHeight: 0.95, letterSpacing: "0.02em", marginBottom: "28px",
          }}>
            THE CRM THAT<br />
            <span style={{ color: "#ff006e" }}>CALLS YOUR LEADS</span><br />
            FOR YOU
          </h1>
          <p style={{
            fontSize: "clamp(17px, 2.5vw, 21px)", color: "#aaa",
            maxWidth: "600px", margin: "0 auto 48px", lineHeight: 1.6,
          }}>
            New lead submits your form at 2 AM. Emma — your AI caller — rings them back within 2 minutes, qualifies them, and logs everything to the CRM. You wake up to a qualified lead.
          </p>
          <form onSubmit={handleWaitlist} style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            {!submitted ? (
              <>
                <input
                  type="email" required placeholder="Enter your email"
                  value={email} onChange={e => setEmail(e.target.value)}
                  style={{
                    padding: "14px 20px", borderRadius: "8px", fontSize: "15px",
                    background: "#141414", border: "1px solid #2d2d2d", color: "#fff",
                    outline: "none", width: "300px",
                  }}
                />
                <button type="submit" style={{
                  padding: "14px 28px", background: "#ff006e", color: "#fff",
                  border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 600,
                  cursor: "pointer",
                }}>
                  Get Early Access
                </button>
              </>
            ) : (
              <div style={{
                padding: "14px 28px", background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)", borderRadius: "8px",
                color: "#22c55e", fontSize: "15px", fontWeight: 500,
              }}>
                ✅ You&apos;re on the list — we&apos;ll be in touch soon!
              </div>
            )}
          </form>
          <p style={{ marginTop: "16px", color: "#555", fontSize: "13px" }}>
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Social proof bar */}
      <div style={{
        borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a",
        padding: "24px", textAlign: "center",
        display: "flex", gap: "48px", justifyContent: "center", flexWrap: "wrap",
      }}>
        {[
          { stat: "< 2 min", label: "Average call response time" },
          { stat: "24/7", label: "Emma never sleeps" },
          { stat: "3 scripts", label: "New lead, Home value, Listing inquiry" },
          { stat: "TCPA", label: "Compliant call hours built in" },
        ].map(({ stat, label }) => (
          <div key={stat} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "32px", color: "#ff006e" }}>{stat}</div>
            <div style={{ fontSize: "12px", color: "#555", marginTop: "2px" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section id="features" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "0.02em", marginBottom: "16px",
            }}>
              EVERYTHING A <span style={{ color: "#ff006e" }}>CLOSER</span> NEEDS
            </h2>
            <p style={{ color: "#888", fontSize: "17px", maxWidth: "500px", margin: "0 auto" }}>
              Built for real estate agents who are done losing deals because they couldn&apos;t follow up fast enough.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{
                background: "#141414", border: "1px solid #2d2d2d", borderRadius: "16px",
                padding: "28px",
                transition: "border-color 0.2s",
              }}>
                <div style={{ fontSize: "32px", marginBottom: "16px" }}>{f.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 600, marginBottom: "10px" }}>{f.title}</h3>
                <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: "100px 24px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "0.02em", marginBottom: "16px",
          }}>
            HOW IT <span style={{ color: "#ff006e" }}>WORKS</span>
          </h2>
          <p style={{ color: "#888", fontSize: "17px", marginBottom: "64px" }}>
            From form submission to qualified lead — fully automated.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {[
              { step: "01", title: "Lead submits your form", desc: "On your website, IDX page, or Facebook ad — at any hour." },
              { step: "02", title: "ZiggyHQ captures the lead instantly", desc: "The lead appears in your CRM with source, timestamp, and contact info." },
              { step: "03", title: "Emma calls them within 2 minutes", desc: "Your AI caller introduces herself, confirms who she's speaking with, and proactively explains why she's calling." },
              { step: "04", title: "Emma qualifies the lead", desc: "Timeline, budget, pre-approval status, areas of interest — all captured in natural conversation." },
              { step: "05", title: "Everything logs automatically", desc: "Full transcript, summary, and lead details update the CRM the moment the call ends." },
              { step: "06", title: "You close the deal", desc: "Wake up to a warm, qualified lead ready for your personal follow-up." },
            ].map((item, i) => (
              <div key={item.step} style={{
                display: "flex", gap: "24px", textAlign: "left", padding: "32px 0",
                borderBottom: i < 5 ? "1px solid #1a1a1a" : "none",
              }}>
                <div style={{
                  fontFamily: "'Bebas Neue', Impact, sans-serif",
                  fontSize: "48px", color: "#ff006e", opacity: 0.4,
                  lineHeight: 1, flexShrink: 0, width: "60px",
                }}>{item.step}</div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 600, marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "0.02em", marginBottom: "16px",
            }}>
              SIMPLE <span style={{ color: "#ff006e" }}>PRICING</span>
            </h2>
            <p style={{ color: "#888", fontSize: "17px" }}>No per-seat nonsense. No hidden fees. Just results.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {PRICING.map((plan) => (
              <div key={plan.name} style={{
                background: plan.highlight ? "#141414" : "#0d0d0d",
                border: plan.highlight ? "1px solid #ff006e" : "1px solid #2d2d2d",
                borderRadius: "20px", padding: "36px",
                position: "relative",
              }}>
                {plan.highlight && (
                  <div style={{
                    position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
                    background: "#ff006e", color: "#fff", fontSize: "11px", fontWeight: 700,
                    letterSpacing: "0.1em", padding: "4px 14px", borderRadius: "100px",
                    textTransform: "uppercase",
                  }}>Most Popular</div>
                )}
                <div style={{ marginBottom: "8px", fontSize: "13px", color: "#888", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>{plan.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "56px", color: plan.highlight ? "#ff006e" : "#fff" }}>{plan.price}</span>
                  <span style={{ color: "#555", fontSize: "15px" }}>{plan.period}</span>
                </div>
                <p style={{ color: "#888", fontSize: "14px", marginBottom: "28px", lineHeight: 1.5 }}>{plan.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: "10px", fontSize: "14px", color: "#ccc" }}>
                      <span style={{ color: "#22c55e", flexShrink: 0 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist" style={{
                  display: "block", textAlign: "center", padding: "14px",
                  background: plan.highlight ? "#ff006e" : "transparent",
                  border: plan.highlight ? "none" : "1px solid #2d2d2d",
                  borderRadius: "8px", color: "#fff", fontWeight: 600,
                  fontSize: "15px", textDecoration: "none",
                  transition: "opacity 0.2s",
                }}>{plan.cta}</a>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", color: "#555", fontSize: "13px", marginTop: "24px" }}>
            Early access pricing — locked in for life when you join now.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "100px 24px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Bebas Neue', Impact, sans-serif",
            fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "0.02em",
            textAlign: "center", marginBottom: "64px",
          }}>
            COMMON <span style={{ color: "#ff006e" }}>QUESTIONS</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid #1a1a1a" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  width: "100%", textAlign: "left", padding: "24px 0",
                  background: "none", border: "none", color: "#fff",
                  fontSize: "16px", fontWeight: 500, cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px",
                }}>
                  {faq.q}
                  <span style={{ color: "#ff006e", fontSize: "20px", flexShrink: 0 }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.7, paddingBottom: "24px" }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" style={{ padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{
            position: "relative",
            background: "linear-gradient(135deg, #141414 0%, #1a0a12 100%)",
            border: "1px solid rgba(255,0,110,0.2)",
            borderRadius: "24px", padding: "64px 48px",
          }}>
            <div style={{
              position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
              width: "400px", height: "300px",
              background: "radial-gradient(ellipse, rgba(255,0,110,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            <h2 style={{
              fontFamily: "'Bebas Neue', Impact, sans-serif",
              fontSize: "clamp(36px, 6vw, 60px)", letterSpacing: "0.02em", marginBottom: "16px",
            }}>
              READY TO STOP<br /><span style={{ color: "#ff006e" }}>LOSING LEADS?</span>
            </h2>
            <p style={{ color: "#888", fontSize: "17px", marginBottom: "40px", lineHeight: 1.6 }}>
              Join the waitlist today. Early access members get founding member pricing — locked in forever.
            </p>
            <form onSubmit={handleWaitlist} style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              {!submitted ? (
                <>
                  <input
                    type="email" required placeholder="Enter your email"
                    value={email} onChange={e => setEmail(e.target.value)}
                    style={{
                      padding: "14px 20px", borderRadius: "8px", fontSize: "15px",
                      background: "#0a0a0a", border: "1px solid #2d2d2d", color: "#fff",
                      outline: "none", width: "280px",
                    }}
                  />
                  <button type="submit" style={{
                    padding: "14px 28px", background: "#ff006e", color: "#fff",
                    border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 600,
                    cursor: "pointer",
                  }}>
                    Join Waitlist
                  </button>
                </>
              ) : (
                <div style={{
                  padding: "14px 28px", background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.3)", borderRadius: "8px",
                  color: "#22c55e", fontSize: "15px", fontWeight: 500,
                }}>
                  ✅ You&apos;re on the list — we&apos;ll be in touch soon!
                </div>
              )}
            </form>
            <p style={{ marginTop: "16px", color: "#444", fontSize: "13px" }}>
              No credit card required. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #1a1a1a", padding: "40px 24px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "16px", maxWidth: "1100px", margin: "0 auto",
      }}>
        <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: "20px" }}>
          ZIGGY<span style={{ color: "#ff006e" }}>HQ</span>
        </div>
        <div style={{ color: "#444", fontSize: "13px" }}>
          © 2026 ZiggyTech Ventures LLC · Built with ⚡ by ZiggyTech
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="/privacy" style={{ color: "#444", fontSize: "13px", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "#444", fontSize: "13px", textDecoration: "none" }}>Terms</a>
          <a href="mailto:hello@ziggyhq.com" style={{ color: "#444", fontSize: "13px", textDecoration: "none" }}>Contact</a>
        </div>
      </footer>
    </main>
  )
}
