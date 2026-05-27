import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import DashboardSponsor from "@/pages/dashboard/DashboardSponsor";
import DashboardSponsee from "@/pages/dashboard/DashboardSponsee";
import DashboardAdmin from "@/pages/dashboard/DashboardAdmin";
import "@/App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrati" element={<Register />} />
          <Route path="/dashboard/sponsor" element={<DashboardSponsor />} />
          <Route path="/dashboard/sponsee" element={<DashboardSponsee />} />
          <Route path="/admin" element={<DashboardAdmin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
