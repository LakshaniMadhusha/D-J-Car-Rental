import { motion } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react";

export default function LampSwitch({ mode, setMode }) {
  const isLogin = mode === "login";

  const toggle = () => {
    setMode(isLogin ? "register" : "login");
  };

  return (
    <div className="relative flex h-[265px] w-[180px] shrink-0 flex-col items-center">
      {/* ceiling cable */}
      <div className="h-10 w-[2px] bg-slate-500/55" />

      {/* lamp shade */}
     <motion.div
  animate={{
    rotate: isLogin ? -1.5 : 1.5,
    boxShadow: isLogin
      ? "0 18px 55px rgba(255,159,103,.32)"
      : "0 18px 70px rgba(255,159,103,.45)"
  }}
  transition={{
    type: "spring",
    stiffness: 150,
    damping: 16
  }}
  className="relative z-20"
>
  <div
    className="
      h-0 w-0
      border-l-[60px]
      border-r-[60px]
      border-t-[46px]
      border-l-transparent
      border-r-transparent
      border-t-livewire-500
    "
  />

  <div
    className="
      absolute
      -top-[8px]
      left-1/2
      h-5
      w-14
      -translate-x-1/2
      rounded-t-xl
      bg-livewire-400
    "
  />
</motion.div>

      {/* light cone */}
      <motion.div
        className={[
          "pointer-events-none absolute left-1/2 top-[86px] z-0 h-[145px] w-[175px] -translate-x-1/2",
          isLogin ? "lamp-glow-login" : "lamp-glow-register"
        ].join(" ")}
        animate={{ opacity: [0.78, 1, 0.84] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />

      {/* pull cord */}
      <motion.div
        className="absolute left-1/2 top-[79px] z-30 w-[2px] -translate-x-1/2 bg-slate-400"
        animate={{ height: isLogin ? 126 : 64 }}
        transition={{ type: "spring", stiffness: 170, damping: 18 }}
      />

      {/* clickable knob */}
      <motion.button
  type="button"
  onClick={toggle}

  animate={{
    y: isLogin ? 104 : 42
  }}

  whileHover={{
    scale: 1.1
  }}

  whileTap={{
    scale: 0.92
  }}

  transition={{
    type: "spring",
    stiffness: 220,
    damping: 18
  }}

  className="
    absolute
    left-1/2
    top-[85px]
    z-40

    flex
    h-12
    w-12
    -translate-x-1/2

    items-center
    justify-center

    rounded-full

    border-4
    border-[#090d12]

    bg-livewire-500
    text-[#090d12]

    shadow-[0_8px_30px_rgba(255,159,103,0.35)]
  "
>
  {isLogin ? (
    <LogIn size={19} />
  ) : (
    <UserPlus size={19} />
  )}
</motion.button>

      <div className="absolute bottom-0 text-center">
        <p className="mt-2 text-xs text-slate-400">

  <span
    className={
      mode === "register"
        ? "font-bold text-livewire-400"
        : ""
    }
  >
    ↑ Register
  </span>

  <span className="mx-2 text-slate-700">
    •
  </span>

  <span
    className={
      mode === "login"
        ? "font-bold text-livewire-400"
        : ""
    }
  >
    ↓ Login
  </span>

</p>
      </div>
    </div>
  );
}
