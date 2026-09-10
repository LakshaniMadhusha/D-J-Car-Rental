import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  User
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";
import InputField from "../components/InputField.jsx";
import LampSwitch from "../components/LampSwitch.jsx";

const emptyLogin = {
  email: "",
  password: ""
};

const emptyRegister = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function AuthPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login");
  const [loginForm, setLoginForm] = useState(emptyLogin);
  const [registerForm, setRegisterForm] = useState(emptyRegister);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const isLogin = mode === "login";

  function switchMode(nextMode) {
    setMode(nextMode);
    setMessage({ type: "", text: "" });
    setShowPassword(false);
  }

  function saveSession(data) {
    localStorage.setItem("drivex_token", data.token);
    localStorage.setItem("drivex_user", JSON.stringify(data.user));
  }

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const { data } = await api.post("/auth/login", loginForm);
      saveSession(data);
      setMessage({ type: "success", text: data.message });
      setTimeout(() => navigate("/dashboard"), 450);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Unable to log in."
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(event) {
    event.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    if (registerForm.password !== registerForm.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      setLoading(false);
      return;
    }

    try {
      const { data } = await api.post("/auth/register", registerForm);
      saveSession(data);
      setMessage({ type: "success", text: data.message });
      setTimeout(() => navigate("/dashboard"), 450);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.response?.data?.message || "Unable to register."
      });
    } finally {
      setLoading(false);
    }
  }

  const panelVariants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -44 : 44,
      scale: 0.97,
      filter: "blur(4px)"
    }),
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 44 : -44,
      scale: 0.97,
      filter: "blur(4px)"
    })
  };

  return (
    <main className="auth-bg relative min-h-screen overflow-hidden">
      <div className="noise" />

      {/* floating background orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -22, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 35, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 bottom-6 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid w-full items-stretch gap-6 lg:grid-cols-[1.05fr_.95fr]">
          {/* brand/marketing side */}
          <section className="relative hidden min-h-[690px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-slate-950/55 p-10 lg:flex lg:flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/12 via-transparent to-cyan-500/8" />

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                  <CarFront size={26} />
                </div>

                <div>
                  <p className="text-2xl font-black tracking-tight text-white">
                    Drive<span className="text-blue-400">X</span>
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Rentals
                  </p>
                </div>
              </div>

              <div className="mt-20 max-w-xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                  <Sparkles size={16} />
                  Rent smarter. Move faster.
                </div>

                <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white xl:text-6xl">
                  Your next car,
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    one switch away.
                  </span>
                </h1>

                <p className="mt-6 max-w-lg text-base leading-7 text-slate-400">
                  Real-time availability, transparent pricing, secure digital
                  verification and AI-assisted booking — designed around a
                  faster rental experience.
                </p>
              </div>

              <div className="mt-12 grid max-w-lg gap-4 sm:grid-cols-2">
                {[
                  "Real-time availability",
                  "No hidden fees",
                  "Secure ID verification",
                  "AI booking assistant"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/7 bg-white/[0.035] px-4 py-3"
                  >
                    <CheckCircle2 size={17} className="text-blue-400" />
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto flex items-center gap-3 text-sm text-slate-500">
              <ShieldCheck size={18} className="text-emerald-400" />
              Protected account access for DriveX customers
            </div>
          </section>

          {/* authentication side */}
          <section className="glass-panel relative min-h-[690px] overflow-hidden rounded-[2.2rem] p-5 sm:p-8">
            <div
              className={[
                "pointer-events-none absolute left-1/2 top-0 h-60 w-80 -translate-x-1/2 transition-all duration-700",
                isLogin ? "lamp-glow-login" : "lamp-glow-register"
              ].join(" ")}
            />

            <div className="relative z-10 flex justify-center">
              <LampSwitch mode={mode} setMode={switchMode} />
            </div>

            <div className="relative z-10 mx-auto -mt-1 max-w-md">
              <AnimatePresence
                mode="wait"
                custom={isLogin ? -1 : 1}
                initial={false}
              >
                <motion.div
                  key={mode}
                  custom={isLogin ? -1 : 1}
                  variants={panelVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                >
                  {isLogin ? (
                    <form onSubmit={handleLogin}>
                      <div className="mb-7 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-400">
                          Welcome back
                        </p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                          Login to DriveX
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                          Pull the lamp switch up to create an account.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <InputField
                          icon={Mail}
                          label="Email"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                          value={loginForm.email}
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              email: e.target.value
                            })
                          }
                        />

                        <div>
                          <label className="mb-2 block text-sm font-medium text-slate-300">
                            Password
                          </label>

                          <div className="relative">
                            <LockKeyhole
                              size={18}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                            />

                            <input
                              className="field pr-12"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              autoComplete="current-password"
                              required
                              value={loginForm.password}
                              onChange={(e) =>
                                setLoginForm({
                                  ...loginForm,
                                  password: e.target.value
                                })
                              }
                            />

                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                              aria-label="Toggle password visibility"
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>
                      </div>

                      <StatusMessage message={message} />

                      <button
                        disabled={loading}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? "Signing in..." : "Login"}
                        {!loading && <ArrowRight size={18} />}
                      </button>

                      <button
                        type="button"
                        onClick={() => switchMode("register")}
                        className="mt-5 w-full text-center text-sm text-slate-500"
                      >
                        New to DriveX?{" "}
                        <span className="font-semibold text-blue-400 hover:text-blue-300">
                          Create account ↑
                        </span>
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleRegister}>
                      <div className="mb-6 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-300">
                          Join DriveX
                        </p>
                        <h2 className="mt-2 text-3xl font-black tracking-tight text-white">
                          Create your account
                        </h2>
                        <p className="mt-2 text-sm text-slate-500">
                          Pull the lamp switch down when you already have an
                          account.
                        </p>
                      </div>

                      <div className="space-y-3.5">
                        <InputField
                          icon={User}
                          label="Full name"
                          placeholder="Your full name"
                          autoComplete="name"
                          required
                          value={registerForm.name}
                          onChange={(e) =>
                            setRegisterForm({
                              ...registerForm,
                              name: e.target.value
                            })
                          }
                        />

                        <InputField
                          icon={Mail}
                          label="Email"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                          value={registerForm.email}
                          onChange={(e) =>
                            setRegisterForm({
                              ...registerForm,
                              email: e.target.value
                            })
                          }
                        />

                        <InputField
                          icon={LockKeyhole}
                          label="Password"
                          type="password"
                          placeholder="Minimum 6 characters"
                          minLength="6"
                          autoComplete="new-password"
                          required
                          value={registerForm.password}
                          onChange={(e) =>
                            setRegisterForm({
                              ...registerForm,
                              password: e.target.value
                            })
                          }
                        />

                        <InputField
                          icon={ShieldCheck}
                          label="Confirm password"
                          type="password"
                          placeholder="Repeat your password"
                          minLength="6"
                          autoComplete="new-password"
                          required
                          value={registerForm.confirmPassword}
                          onChange={(e) =>
                            setRegisterForm({
                              ...registerForm,
                              confirmPassword: e.target.value
                            })
                          }
                        />
                      </div>

                      <StatusMessage message={message} />

                      <button
                        disabled={loading}
                        className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-300 px-5 py-4 font-black text-slate-950 shadow-lg shadow-amber-300/10 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {loading ? "Creating account..." : "Create account"}
                        {!loading && <ArrowRight size={18} />}
                      </button>

                      <button
                        type="button"
                        onClick={() => switchMode("login")}
                        className="mt-4 w-full text-center text-sm text-slate-500"
                      >
                        Already registered?{" "}
                        <span className="font-semibold text-amber-300 hover:text-amber-200">
                          Login ↓
                        </span>
                      </button>
                    </form>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function StatusMessage({ message }) {
  if (!message.text) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className={[
        "mt-4 rounded-xl border px-4 py-3 text-sm",
        message.type === "success"
          ? "border-emerald-400/20 bg-emerald-400/8 text-emerald-300"
          : "border-red-400/20 bg-red-400/8 text-red-300"
      ].join(" ")}
    >
      {message.text}
    </motion.div>
  );
}
