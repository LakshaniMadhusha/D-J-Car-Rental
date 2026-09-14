import { motion } from "framer-motion";
import { LogIn, UserPlus } from "lucide-react";

export default function LampSwitch({ mode, setMode }) {
  const isLogin = mode === "login";

  const toggle = () => {
    setMode(isLogin ? "register" : "login");
  };

  return (
    <div
      className="
        relative
        flex
        h-[255px]
        w-[210px]
        shrink-0
        flex-col
        items-center
      "
    >
      {/* =============================
          CEILING CABLE
      ============================== */}

      <div
        className="
          h-9
          w-[2px]
          bg-gradient-to-b
          from-[#735340]
          to-[#9A7764]
        "
      />

      {/* ceiling fitting */}

      <div
        className="
          h-3
          w-10
          rounded-b-lg
          bg-ink-900
          shadow-md
        "
      />

      {/* =============================
          LAMP SHADE
      ============================== */}

      <motion.div
        animate={{
          rotate: isLogin ? -1.2 : 1.2,

          filter: isLogin
            ? "drop-shadow(0 15px 17px rgba(122,66,37,.16))"
            : "drop-shadow(0 20px 24px rgba(122,66,37,.24))",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 16,
        }}
        className="relative z-30"
      >
        {/* lamp top */}

        <div
          className="
            absolute
            -top-[8px]
            left-1/2
            h-5
            w-16
            -translate-x-1/2

            rounded-t-xl

            border
            border-white/30

            bg-gradient-to-b
            from-ink-800
            to-ink-900
          "
        />

        {/* main shade */}

        <div
          className="
            h-0
            w-0

            border-l-[67px]
            border-r-[67px]
            border-t-[49px]

            border-l-transparent
            border-r-transparent
            border-t-ink-900
          "
        />

        {/* light underneath */}

        <motion.div
          animate={{
            opacity: [0.8, 1, 0.82],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
          }}
          className="
            absolute
            -bottom-1
            left-1/2

            h-[5px]
            w-20

            -translate-x-1/2

            rounded-full

            bg-white

            shadow-[0_0_24px_rgba(255,255,255,.95)]
          "
        />
      </motion.div>

      {/* =============================
          LAMP GLOW
      ============================== */}

      <motion.div
        className="
          lamp-glow
          pointer-events-none
          absolute
          left-1/2
          top-[90px]
          z-0

          h-[175px]
          w-[205px]

          -translate-x-1/2
        "
        animate={{
          opacity: isLogin
            ? [0.66, 0.82, 0.67]
            : [0.84, 1, 0.88],

          scaleX: isLogin ? 0.94 : 1,
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =============================
          LIGHT BEAM
      ============================== */}

      <motion.div
        className="
          lamp-beam
          pointer-events-none
          absolute
          left-1/2
          top-[88px]
          z-0

          h-[145px]
          w-[168px]

          -translate-x-1/2
        "
        animate={{
          opacity: isLogin ? 0.58 : 0.82,
        }}
        transition={{
          duration: 0.4,
        }}
      />

      {/* =============================
          PULL CORD
      ============================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-[87px]
          z-40

          w-[2px]
          -translate-x-1/2

          bg-gradient-to-b
          from-[#6E5141]
          to-[#9D7965]
        "
        animate={{
          height: isLogin ? 129 : 68,
        }}
        transition={{
          type: "spring",
          stiffness: 175,
          damping: 18,
        }}
      />

      {/* =============================
          SWITCH KNOB
      ============================== */}

      <motion.button
        type="button"
        onClick={toggle}
        animate={{
          y: isLogin ? 108 : 47,
          rotate: isLogin ? 0 : 180,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.92,
        }}
        transition={{
          type: "spring",
          stiffness: 225,
          damping: 18,
        }}
        className="
          absolute
          left-1/2
          top-[87px]
          z-50

          flex
          h-12
          w-12

          -translate-x-1/2

          items-center
          justify-center

          rounded-full

          border-4
          border-white/70

          chip-dark
          text-white

          shadow-[0_10px_28px_rgba(242,124,61,.30)]
        "
      >
        {isLogin ? (
          <LogIn size={18} />
        ) : (
          <UserPlus size={18} />
        )}
      </motion.button>
    </div>
  );
}