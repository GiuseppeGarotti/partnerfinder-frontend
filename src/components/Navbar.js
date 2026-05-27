import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#0f1923", borderBottom: "1px solid #1e2d3d" }} className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div style={{ background: "#f4520a", borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="font-bold text-lg">
            <span className="text-white">Partner</span>
            <span style={{ color: "#f4520a" }}>Finder</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sponsor" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Esplora Sponsor</a>
          <a href="#come-funziona" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Come funziona</a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-white text-sm font-medium hover:text-gray-300 transition-colors">Accedi</Link>
          <Link to="/registrati" style={{ background: "#f4520a", color: "white" }} className="px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Inizia ora
          </Link>
        </div>
      </div>
    </nav>
  );
}
