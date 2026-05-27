import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #0f1923 0%, #1a2535 60%, #2d1810 100%)", minHeight: "100vh", paddingTop: 80 }}>
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1">
            <p style={{ color: "#f4520a", fontSize: 12, fontWeight: 700, letterSpacing: 3, marginBottom: 20 }}>
              • LA PIATTAFORMA ITALIANA PER LE SPONSORIZZAZIONI
            </p>
            <h1 style={{ color: "white", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24 }}>
              Trova lo{" "}
              <span style={{ color: "#f4520a" }}>sponsor</span>
              <br />
              giusto per la tua
              <br />
              prossima{" "}
              <span style={{ color: "white", textDecoration: "underline", textDecorationColor: "#f4520a" }}>idea.</span>
            </h1>
            <p style={{ color: "#9ca3af", fontSize: 16, lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              Partner Finder connette aziende che vogliono sponsorizzare con eventi,
              associazioni e progetti che cercano supporto. Gestione diretta, matching
              intelligente, zero intermediari nascosti.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/registrati" style={{ background: "#f4520a", color: "white", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}
                className="hover:opacity-90 transition-opacity">
                Registra la tua azienda →
              </Link>
              <a href="#sponsor" style={{ border: "1.5px solid white", color: "white", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: "none" }}
                className="hover:bg-white hover:text-gray-900 transition-colors">
                Esplora sponsor
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {["Registrazione gratuita", "Matching per categoria", "Gestione diretta dall'admin"].map(t => (
                <span key={t} style={{ color: "#9ca3af", fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f4520a" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="flex-1 flex justify-center">
            <div style={{ background: "#1e2d3d", borderRadius: 16, padding: 0, width: "100%", maxWidth: 420, overflow: "hidden" }}>
              <div style={{ background: "#162030", height: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ color: "#4a5568", fontSize: 14 }}>Partnership</div>
              </div>
              <div style={{ background: "white", margin: 16, borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ background: "#f4520a", borderRadius: 10, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: "#0f1923", fontSize: 15, margin: 0 }}>Match in 48 ore</p>
                  <p style={{ color: "#6b7280", fontSize: 13, margin: 0 }}>Verifica admin + risposta sponsor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section id="come-funziona" style={{ background: "#f8f8f8", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <p style={{ color: "#f4520a", fontSize: 12, fontWeight: 700, letterSpacing: 3, marginBottom: 16 }}>COME FUNZIONA</p>
          <h2 style={{ color: "#0f1923", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 56 }}>
            Tre passaggi.<br />Zero complicazioni.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { n: "01", icon: "📋", title: "Registra la tua azienda", desc: "Scegli se sei uno sponsor o se cerchi sponsor. Specifica la tua categoria.", dark: true },
              { n: "02", icon: "🎯", title: "Invia richiesta mirata", desc: "Sfoglia gli sponsor per categoria, ricevi suggerimenti automatici e invia una richiesta personalizzata.", dark: false },
              { n: "03", icon: "🛡️", title: "Admin media la connessione", desc: "Il team Partner Finder valuta ogni richiesta, contatta lo sponsor e facilita l'accordo finale.", orange: true },
              { n: "04", icon: "✨", title: "Collaborazione attiva", desc: "Lo sponsor accetta o rifiuta. Tu ricevi feedback chiaro.", dark: false },
            ].map(step => (
              <div key={step.n} style={{
                background: step.dark ? "#0f1923" : step.orange ? "#f4520a" : "white",
                borderRadius: 16,
                padding: "40px",
                color: step.dark || step.orange ? "white" : "#0f1923"
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{step.icon}</div>
                <div style={{ fontSize: "clamp(40px, 5vw, 60px)", fontWeight: 900, color: step.dark || step.orange ? "rgba(255,255,255,0.3)" : "#e5e7eb", lineHeight: 1, marginBottom: 16 }}>{step.n}</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{step.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, opacity: step.dark || step.orange ? 0.85 : 1, color: step.dark || step.orange ? "rgba(255,255,255,0.85)" : "#6b7280" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERCHE PARTNER FINDER */}
      <section id="sponsor" style={{ background: "white", padding: "100px 0" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* Left image placeholder */}
          <div className="flex-1 relative">
            <div style={{ background: "#f0f0f0", borderRadius: 16, height: 380, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 14 }}>
              Stretta di mano
            </div>
            <div style={{ position: "absolute", bottom: 30, left: 30, background: "#0f1923", borderRadius: 12, padding: "20px 28px", color: "white" }}>
              <div style={{ color: "#f4520a", fontSize: 28 }}>👥</div>
              <div style={{ fontSize: 24, fontWeight: 900, marginTop: 4 }}>+15 categorie</div>
              <div style={{ fontSize: 13, color: "#9ca3af", marginTop: 4 }}>Dalla tecnologia al non-profit</div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1">
            <p style={{ color: "#f4520a", fontSize: 12, fontWeight: 700, letterSpacing: 3, marginBottom: 16 }}>PERCHE' PARTNER FINDER</p>
            <h2 style={{ color: "#0f1923", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, lineHeight: 1.2, marginBottom: 36 }}>
              Una piattaforma pensata<br />per chi<br />fa le cose sul serio.
            </h2>
            <div className="flex flex-col gap-6">
              {[
                { title: "Matching per categoria", desc: "Algoritmo che suggerisce sponsor affini al tuo settore." },
                { title: "Admin come garante", desc: "Ogni richiesta passa dalla nostra revisione prima di arrivare allo sponsor." },
                { title: "Dashboard dedicate", desc: "Interfacce specifiche per sponsor, sponsee e amministratori." },
                { title: "100% italiano", desc: "Supporto, interfaccia e community in lingua italiana." },
              ].map(f => (
                <div key={f.title} className="flex gap-4 items-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f4520a" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="10"/><polyline points="9,12 11,14 15,10"/>
                  </svg>
                  <div>
                    <p style={{ fontWeight: 700, color: "#0f1923", fontSize: 15, marginBottom: 4 }}>{f.title}</p>
                    <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f5f5f5", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div style={{ background: "linear-gradient(135deg, #0f1923 0%, #1a2535 60%, #2d1810 100%)", borderRadius: 20, padding: "60px 40px", textAlign: "center" }}>
            <h2 style={{ color: "white", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, marginBottom: 16 }}>
              Pronto a trovare il tuo <span style={{ color: "#f4520a" }}>partner</span>?
            </h2>
            <p style={{ color: "#9ca3af", fontSize: 16, marginBottom: 36 }}>
              Unisciti a Partner Finder e trasforma le tue idee in collaborazioni concrete.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link to="/registrati" style={{ background: "#f4520a", color: "white", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none" }}
                className="hover:opacity-90 transition-opacity">
                Registrati gratis
              </Link>
              <Link to="/login" style={{ border: "1.5px solid white", color: "white", padding: "14px 32px", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none" }}
                className="hover:bg-white hover:text-gray-900 transition-colors">
                Accedi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f1923", padding: "40px 0" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span style={{ fontWeight: 900, fontSize: 18 }}>
              <span className="text-white">Partner</span>
              <span style={{ color: "#f4520a" }}>Finder</span>
            </span>
            <p style={{ color: "#6b7280", fontSize: 13, marginTop: 6, maxWidth: 280 }}>
              La piattaforma italiana per connettere sponsor e realtà che cercano supporto.
            </p>
          </div>
          <p style={{ color: "#6b7280", fontSize: 13 }}>© 2026 Partner Finder. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}
