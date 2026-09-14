import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  CarFront,
  CheckCircle2,
  Eye,
  EyeOff,
  Gauge,
  LockKeyhole,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import api from "../api/axios.js";

import Brand from "../components/Brand.jsx";

import BrandName from "../components/BrandName.jsx";

import InputField from "../components/InputField.jsx";

import LampSwitch from "../components/LampSwitch.jsx";


const emptyLogin = {
  email: "",
  password: "",
};


const emptyRegister = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};


export default function AuthPage() {

  const navigate = useNavigate();


  const [mode, setMode] = useState("login");


  const [loginForm, setLoginForm] =
    useState(emptyLogin);


  const [registerForm, setRegisterForm] =
    useState(emptyRegister);


  const [
    showLoginPassword,
    setShowLoginPassword,
  ] = useState(false);


  const [message, setMessage] = useState({
    type: "",
    text: "",
  });


  const [loading, setLoading] =
    useState(false);


  const isLogin = mode === "login";


  /* ===============================
     CHANGE FORM
  =============================== */

  function switchMode(nextMode) {

    setMode(nextMode);

    setMessage({
      type: "",
      text: "",
    });

    setShowLoginPassword(false);
  }


  /* ===============================
     SAVE USER LOGIN
  =============================== */

  function saveSession(data) {

    localStorage.setItem(
      "djcr_token",
      data.token
    );

    localStorage.setItem(
      "djcr_user",
      JSON.stringify(data.user)
    );
  }


  /* ===============================
     LOGIN
  =============================== */

  async function handleLogin(event) {

    event.preventDefault();

    setLoading(true);

    setMessage({
      type: "",
      text: "",
    });


    try {

      const { data } = await api.post(
        "/auth/login",
        loginForm
      );


      saveSession(data);


      setMessage({
        type: "success",
        text: data.message,
      });


      window.setTimeout(() => {

        navigate("/dashboard");

      }, 420);


    } catch (error) {

      setMessage({
        type: "error",

        text:
          error.response?.data?.message ||
          "Unable to log in.",
      });

    } finally {

      setLoading(false);

    }
  }


  /* ===============================
     REGISTER
  =============================== */

  async function handleRegister(event) {

    event.preventDefault();

    setLoading(true);


    setMessage({
      type: "",
      text: "",
    });


    if (
      registerForm.password !==
      registerForm.confirmPassword
    ) {

      setMessage({
        type: "error",
        text: "Passwords do not match.",
      });

      setLoading(false);

      return;
    }


    try {

      const { data } = await api.post(
        "/auth/register",
        registerForm
      );


      saveSession(data);


      setMessage({
        type: "success",
        text: data.message,
      });


      window.setTimeout(() => {

        navigate("/dashboard");

      }, 420);


    } catch (error) {

      setMessage({
        type: "error",

        text:
          error.response?.data?.message ||
          "Unable to register.",
      });

    } finally {

      setLoading(false);

    }
  }


  /* ===============================
     FORM ANIMATION
  =============================== */

  const panelVariants = {

    enter: (direction) => ({
      opacity: 0,

      y: direction > 0
        ? -46
        : 46,

      scale: 0.97,

      filter: "blur(5px)",
    }),


    center: {

      opacity: 1,

      y: 0,

      scale: 1,

      filter: "blur(0px)",
    },


    exit: (direction) => ({

      opacity: 0,

      y: direction > 0
        ? 46
        : -46,

      scale: 0.97,

      filter: "blur(5px)",
    }),
  };


  return (

    <main
      className="
        auth-bg
        relative
        min-h-screen
        overflow-hidden
      "
    >

      {/* background grid */}

      <div className="noise" />


      {/* floating decoration */}

      <motion.div
        animate={{
          x: [0, 34, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          glow-peach

          absolute
          -left-28
          top-12

          h-72
          w-72

          rounded-full

          blur-3xl
        "
      />


      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          glow-orange

          absolute
          -right-24
          bottom-8

          h-80
          w-80

          rounded-full

          blur-3xl
        "
      />


      <div
        className="
          relative
          z-10

          mx-auto

          flex
          min-h-screen
          max-w-[1450px]

          items-center

          px-4
          py-6

          sm:px-6

          lg:px-9
        "
      >

        <div
          className="
            grid
            w-full
            gap-5

            xl:grid-cols-[1.08fr_.92fr]
          "
        >

          {/* =================================
              LEFT SIDE
          ================================== */}

          <section
            className="
              showcase-panel

              relative

              hidden

              min-h-[735px]

              overflow-hidden

              rounded-[2.35rem]

              p-10

              xl:flex
              xl:flex-col
            "
          >

            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br

                from-white/10
                via-transparent
                to-transparent
              "
            />


            {/* circles */}

            <div
              className="
                absolute

                right-[-14%]
                top-[17%]

                h-[430px]
                w-[430px]

                rounded-full

                border
                border-white/15
              "
            />


            <div
              className="
                absolute

                right-[-6%]
                top-[22%]

                h-[330px]
                w-[330px]

                rounded-full

                border
                border-white/10
              "
            />


            <div className="relative z-10">

              <Brand />


              <div className="mt-20 max-w-[640px]">


                <div
                  className="
                    badge-outline

                    inline-flex

                    items-center
                    gap-2

                    rounded-full

                    px-4
                    py-2

                    text-sm
                    font-semibold

                    text-white
                  "
                >

                  <Sparkles size={16} />

                  Premium mobility, simplified.

                </div>


                <h1
                  className="
                    mt-6

                    text-[3.35rem]

                    font-black

                    leading-[0.98]

                    tracking-[-0.055em]

                    text-white

                    2xl:text-[4.15rem]
                  "
                >

                  The easier way

                  <span className="block">

                    to{" "}

                    <span
                      className="
                        text-gradient
                        drop-shadow-sm
                      "
                    >
                      drive away.
                    </span>

                  </span>

                </h1>


                <p
                  className="
                    mt-6

                    max-w-[570px]

                    text-base

                    leading-7

                    text-white/70
                  "
                >

                  Search live availability,
                  see your full rental price
                  before checkout, verify
                  documents digitally and get
                  instant support from the{" "}
                  <BrandName dark /> AI assistant.

                </p>

              </div>


              {/* CAR ICON */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative

                  mt-12

                  flex

                  h-[150px]

                  items-center
                  justify-center
                "
              >

                <div
                  className="
                    glow-orange

                    absolute

                    h-28
                    w-80

                    rounded-full

                    blur-3xl
                  "
                />


                <CarFront
                  strokeWidth={1.1}
                  className="
                    relative

                    h-32
                    w-32

                    text-brand-300
                  "
                />

              </motion.div>


              {/* FEATURES */}

              <div
                className="
                  mt-6

                  grid

                  max-w-[650px]

                  gap-3

                  sm:grid-cols-2
                "
              >

                <Feature
                  icon={Gauge}
                  title="Live availability"
                  text="Avoid double bookings and delays"
                />


                <Feature
                  icon={ShieldCheck}
                  title="Transparent checkout"
                  text="Know the complete rental price upfront"
                />


                <Feature
                  icon={MapPin}
                  title="Pickup flexibility"
                  text="Airport and city delivery options"
                />


                <Feature
                  icon={Bot}
                  title="AI rental assistant"
                  text="Get answers before and during your trip"
                />

              </div>

            </div>


            <div
              className="
                relative
                z-10

                mt-auto

                flex

                items-center
                justify-between

                border-t
                border-white/10

                pt-5

                text-xs
                font-semibold

                text-white/55
              "
            >

              <span>
                DRIVEX RENTALS
              </span>


              <span>
                SECURE • FAST • TRANSPARENT
              </span>

            </div>

          </section>


          {/* =================================
              RIGHT SIDE LOGIN/REGISTER
          ================================== */}

          <section
            className="
              glass-panel

              relative

              min-h-[735px]

              overflow-hidden

              rounded-[2.35rem]

              px-5
              pb-8
              pt-3

              sm:px-8
            "
          >


            {/* mobile logo */}

            <div
              className="
                absolute
                left-5
                top-5

                xl:hidden
              "
            >
              <Brand compact />
            </div>


            {/* lamp */}

            <div
              className="
                relative
                z-10

                flex

                justify-center

                pt-3
              "
            >

              <LampSwitch
                mode={mode}
                setMode={switchMode}
              />

            </div>


            {/* Forms */}

            <div
              className="
                relative
                z-10

                mx-auto

                -mt-1

                max-w-[445px]
              "
            >

              <AnimatePresence
                mode="wait"
                custom={isLogin ? -1 : 1}
                initial={false}
              >

                <motion.div

                  key={mode}

                  custom={
                    isLogin
                      ? -1
                      : 1
                  }

                  variants={panelVariants}

                  initial="enter"

                  animate="center"

                  exit="exit"

                  transition={{
                    duration: 0.34,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >

                  {isLogin ? (

                    <LoginForm
                      form={loginForm}
                      setForm={setLoginForm}

                      onSubmit={handleLogin}

                      loading={loading}

                      message={message}

                      showPassword={
                        showLoginPassword
                      }

                      setShowPassword={
                        setShowLoginPassword
                      }

                      switchMode={
                        switchMode
                      }
                    />

                  ) : (

                    <RegisterForm
                      form={
                        registerForm
                      }

                      setForm={
                        setRegisterForm
                      }

                      onSubmit={
                        handleRegister
                      }

                      loading={
                        loading
                      }

                      message={
                        message
                      }

                      switchMode={
                        switchMode
                      }
                    />

                  )}

                </motion.div>

              </AnimatePresence>

            </div>


            {/* security */}

            <div
              className="
                relative
                z-10

                mx-auto

                mt-7

                flex

                max-w-[445px]

                items-center
                justify-center
                gap-2

                text-center

                text-[11px]

                text-ink-700
              "
            >

              <ShieldCheck
                size={13}
                className="text-emerald-600"
              />

              Your account information is
              protected in transit.

            </div>

          </section>

        </div>

      </div>

    </main>

  );
}


/* ===============================
   FEATURE CARD
================================ */

function Feature({
  icon: Icon,
  title,
  text,
}) {

  return (

    <div
      className="
        group

        rounded-2xl

        border
        border-white/12

        bg-white/8

        p-4

        shadow-sm

        backdrop-blur-sm

        transition

        duration-200

        hover:-translate-y-0.5

        hover:bg-white/14
      "
    >

      <div
        className="
          flex
          items-start
          gap-3
        "
      >

        <div
          className="
            mt-0.5

            flex

            h-9
            w-9

            shrink-0

            items-center
            justify-center

            rounded-xl

            chip-brand

            text-white
          "
        >

          <Icon size={17} />

        </div>


        <div>

          <h3
            className="
              text-sm
              font-black

              text-white
            "
          >

            {title}

          </h3>


          <p
            className="
              mt-1

              text-xs

              leading-5

              text-white/65
            "
          >

            {text}

          </p>

        </div>

      </div>

    </div>

  );
}


/* ===============================
   LOGIN FORM
================================ */

function LoginForm({
  form,
  setForm,
  onSubmit,
  loading,
  message,
  showPassword,
  setShowPassword,
  switchMode,
}) {

  return (

    <form onSubmit={onSubmit}>


      <div className="mb-7 text-center">

        <h2
          className="
            text-3xl

            font-black

            tracking-[-0.04em]

            text-ink-900

            sm:text-[2.15rem]
          "
        >

          Login to <BrandName />

        </h2>


        <p
          className="
            mt-2

            text-sm

            text-ink-700
          "
        >

          Pull the lamp switch up
          when you want to register.

        </p>

      </div>


      <div className="space-y-4">


        <InputField

          icon={Mail}

          label="Email address"

          type="email"

          placeholder="you@example.com"

          autoComplete="email"

          required

          value={form.email}

          onChange={(event) =>
            setForm({
              ...form,
              email:
                event.target.value,
            })
          }

        />


        <InputField

          icon={LockKeyhole}

          label="Password"

          type={
            showPassword
              ? "text"
              : "password"
          }

          placeholder="Enter your password"

          autoComplete="current-password"

          required

          value={form.password}

          onChange={(event) =>
            setForm({
              ...form,
              password:
                event.target.value,
            })
          }

          rightElement={

            <button

              type="button"

              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }

              className="
                absolute

                right-4

                top-1/2

                -translate-y-1/2

                text-ink-500

                transition

                hover:text-ink-900
              "
            >

              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}

            </button>

          }

        />

      </div>


      <StatusMessage
        message={message}
      />


      <button

        disabled={loading}

        className="
          livewire-button

          mt-6

          flex

          w-full

          items-center
          justify-center

          gap-2

          rounded-2xl

          px-5
          py-4

          font-black

          disabled:cursor-not-allowed

          disabled:opacity-50
        "
      >

        {
          loading
            ? "Signing in..."
            : "Login"
        }


        {!loading && (
          <ArrowRight size={18} />
        )}

      </button>


      <button

        type="button"

        onClick={() =>
          switchMode("register")
        }

        className="
          mt-5

          w-full

          text-center

          text-sm

          text-ink-700
        "
      >

        New to <BrandName />?{" "}

        <span
          className="
            font-black

            text-ink-900

            transition

            hover:opacity-70
          "
        >

          Create account ↑

        </span>

      </button>

    </form>
  );
}


/* ===============================
   REGISTER FORM
================================ */

function RegisterForm({
  form,
  setForm,
  onSubmit,
  loading,
  message,
  switchMode,
}) {

  return (

    <form onSubmit={onSubmit}>


      <div className="mb-6 text-center">


        <h2
          className="
            text-3xl

            font-black

            tracking-[-0.04em]

            text-ink-900
          "
        >

          Create your account

        </h2>


        <p
          className="
            mt-2

            text-sm

            text-ink-700
          "
        >

          Pull the lamp switch down
          if you already have an account.

        </p>

      </div>


      <div className="space-y-3.5">


        <InputField

          icon={User}

          label="Full name"

          placeholder="Your full name"

          autoComplete="name"

          required

          value={form.name}

          onChange={(event) =>
            setForm({
              ...form,
              name:
                event.target.value,
            })
          }

        />


        <InputField

          icon={Mail}

          label="Email address"

          type="email"

          placeholder="you@example.com"

          autoComplete="email"

          required

          value={form.email}

          onChange={(event) =>
            setForm({
              ...form,
              email:
                event.target.value,
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

          value={form.password}

          onChange={(event) =>
            setForm({
              ...form,
              password:
                event.target.value,
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

          value={
            form.confirmPassword
          }

          onChange={(event) =>
            setForm({
              ...form,
              confirmPassword:
                event.target.value,
            })
          }

        />

      </div>


      <StatusMessage
        message={message}
      />


      <button

        disabled={loading}

        className="
          livewire-button

          mt-5

          flex

          w-full

          items-center
          justify-center

          gap-2

          rounded-2xl

          px-5
          py-4

          font-black

          disabled:cursor-not-allowed

          disabled:opacity-50
        "
      >

        {
          loading
            ? "Creating account..."
            : "Create account"
        }


        {!loading && (
          <ArrowRight size={18} />
        )}

      </button>


      <button

        type="button"

        onClick={() =>
          switchMode("login")
        }

        className="
          mt-4

          w-full

          text-center

          text-sm

          text-ink-700
        "
      >

        Already registered?{" "}

        <span
          className="
            font-black

            text-ink-900

            transition

            hover:opacity-70
          "
        >

          Login ↓

        </span>

      </button>

    </form>
  );
}


/* ===============================
   MESSAGE
================================ */

function StatusMessage({
  message,
}) {

  if (!message.text) {
    return null;
  }


  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 6,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      className={`
        mt-4

        flex

        items-start

        gap-2

        rounded-xl

        border

        px-4
        py-3

        text-sm

        ${
          message.type ===
          "success"

            ? `
              border-emerald-600/20
              bg-emerald-50/70
              text-emerald-700
            `

            : `
              border-red-500/20
              bg-red-50/70
              text-red-700
            `
        }
      `}
    >

      {
        message.type ===
          "success" && (

          <CheckCircle2
            size={16}
            className="
              mt-0.5
              shrink-0
            "
          />

        )
      }


      {message.text}

    </motion.div>

  );
}