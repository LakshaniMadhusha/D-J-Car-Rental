import { motion } from "framer-motion";
import {
  Bot,
  CalendarCheck2,
  CarFront,
  LogOut,
  Search,
  ShieldCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("drivex_user") || "{}");

  function logout() {
    localStorage.removeItem("drivex_token");
    localStorage.removeItem("drivex_user");
    navigate("/");
  }

  return (
    <main className="auth-bg min-h-screen px-5 py-8 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500">
              <CarFront size={24} />
            </div>
            <div>
              <p className="text-xl font-black">
                Drive<span className="text-blue-400">X</span>
              </p>
              <p className="text-xs text-slate-500">Customer dashboard</p>
            </div>
          </div>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
          >
            <LogOut size={17} />
            Logout
          </button>
        </header>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel mt-12 rounded-[2rem] p-8 sm:p-10"
        >
          <p className="text-sm font-semibold text-blue-400">
            Authentication successful
          </p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Welcome, {user.name || "DriveX customer"}.
          </h1>
          <p className="mt-3 max-w-2xl text-slate-400">
            Your login and registration system is working. This page can now
            become the main car-rental dashboard.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [Search, "Search cars", "Find an available car"],
              [CalendarCheck2, "My bookings", "Manage reservations"],
              [Bot, "AI assistant", "Ask about your rental"],
              [ShieldCheck, "Verification", "Manage ID documents"]
            ].map(([Icon, title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/8 bg-white/[0.035] p-5"
              >
                <Icon className="text-blue-400" size={22} />
                <h2 className="mt-4 font-bold">{title}</h2>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
