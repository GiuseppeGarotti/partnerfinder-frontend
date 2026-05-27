import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function DashboardSponsee() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => { logout(); navigate("/"); };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <nav style={{ background: "#0f1923", padding: "16px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span style={{ fontWeight: 900, fontSize: 18 }}><span style={{ color: "white" }}>Partner</span><span style={{ color: "#f4520a" }}>Finder</span></span>
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ color: "#9ca3af", fontSize: 14 }}>Ciao, {user?.nome}</span>
          <button onClick={handleLogout} style={{ background: "transparent", border: "1px solid #6b7280", color: "white", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>Esci</button>
        </div>
      </nav>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, color: "#0f1923", marginBottom: 8 }}>Dashboard Sponsee</h1>
        <p style={{ color: "#6b7280", marginBottom: 32 }}>Benvenuto! Esplora gli sponsor e invia richieste di sponsorizzazione.</p>
        <div style={{ background: "white", borderRadius: 16, padding: 32, boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "#0f1923", marginBottom: 20 }}>Le tue richieste</h2>
          <p style={{ color: "#6b7280", fontSize: 14 }}>Funzionalità in arrivo — potrai esplorare gli sponsor e inviare richieste.</p>
          <Link to="/sponsors" style={{ display: "inline-block", marginTop: 16, background: "#f4520a", color: "white", padding: "10px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>Esplora Sponsor</Link>
        </div>
      </div>
    </div>
  );
}
