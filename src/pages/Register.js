import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Register() {
  const [tipo, setTipo] = useState("sponsor");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    if (!nome || !email || !password) { setError("Compila tutti i campi"); return; }
    if (password.length < 6) { setError("La password deve avere almeno 6 caratteri"); return; }
    setLoading(true);
    try {
      const user = await register(nome, email, password, tipo);
      if (user.tipo === "sponsor") navigate("/dashboard/sponsor");
      else navigate("/dashboard/sponsee");
    } catch (e) {
      setError(e.response?.data?.detail || "Errore durante la registrazione");
    } finally { setLoading(false); }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div style={{ flex: 1, background: "linear-gradient(135deg, #0f1923 0%, #1a2535 60%, #2d1810 100%)", display: "flex", flexDirection: "column", padding: 40 }} className="hidden md:flex">
        <Link to="/" className="flex items-center gap-2 mb-auto">
          <div style={{ background: "#f4520a", borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          </div>
          <span className="font-bold text-lg"><span className="text-white">Partner</span><span style={{ color: "#f4520a" }}>Finder</span></span>
        </Link>
        <div style={{ marginBottom: "auto" }}>
          <p style={{ color: "#f4520a", fontSize: 12, fontWeight: 700, letterSpacing: 3, marginBottom: 20 }}>INIZIA ORA</p>
          <h2 style={{ color: "white", fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 900, lineHeight: 1.15 }}>Registra<br />la tua<br /><span style={{ color: "#f4520a" }}>realta'.</span></h2>
          <p style={{ color: "#9ca3af", fontSize: 15, marginTop: 20, lineHeight: 1.7 }}>Che tu voglia sponsorizzare o cercare sponsor, trovi la tua rete qui.</p>
        </div>
      </div>
      <div style={{ flex: 1, background: "white", display: "flex", alignItems: "center", justifyContent: "center", padding: 40, overflowY: "auto" }}>
        <div style={{ width: "100%", maxWidth: 400 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "#0f1923", marginBottom: 8 }}>Crea account</h1>
          <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 28 }}>Hai già un account? <Link to="/login" style={{ color: "#f4520a", fontWeight: 600, textDecoration: "none" }}>Accedi</Link></p>
          {error && <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#dc2626", fontSize: 14 }}>{error}</div>}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 10 }}>Tipo di account</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[{ value: "sponsor", label: "Sponsor", sublabel: "Voglio sponsorizzare" }, { value: "sponsee", label: "Sponsee", sublabel: "Cerco sponsor" }].map(opt => (
                <button key={opt.value} onClick={() => setTipo(opt.value)} style={{ border: tipo === opt.value ? "2px solid #f4520a" : "1.5px solid #e5e7eb", borderRadius: 10, padding: "14px", textAlign: "left", background: "white", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", border: tipo === opt.value ? "5px solid #0f1923" : "2px solid #9ca3af", flexShrink: 0 }}></div>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#0f1923" }}>{opt.label}</span>
                  </div>
                  <p style={{ fontSize: 12, color: "#6b7280", margin: 0, paddingLeft: 24 }}>{opt.sublabel}</p>
                </button>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Nome / Ragione sociale</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8, padding: "12px 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8, padding: "12px 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Password (min 6 caratteri)</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", border: "1.5px solid #e5e7eb", borderRadius: 8, padding: "12px 14px", fontSize: 14, outline: "none", boxSizing: "border-box" }} />
          </div>
          <button onClick={handleSubmit} disabled={loading} style={{ width: "100%", background: loading ? "#9ca3af" : "#f4520a", color: "white", border: "none", borderRadius: 8, padding: "14px", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>
            {loading ? "Registrazione in corso..." : "Crea account"}
          </button>
        </div>
      </div>
    </div>
  );
}
