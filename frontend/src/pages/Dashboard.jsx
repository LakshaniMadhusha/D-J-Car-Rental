import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  CalendarCheck2,
  ChevronRight,
  LogOut,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Brand from "../components/Brand.jsx";

import BrandName from "../components/BrandName.jsx";


export default function Dashboard() {

  const navigate = useNavigate();


  const user = JSON.parse(
    localStorage.getItem(
      "djcr_user"
    ) || "{}"
  );


  const actions = [

    {
      icon: Search,

      title: "Search cars",

      text:
        "Find available vehicles and compare complete prices.",
    },


    {
      icon: CalendarCheck2,

      title: "My bookings",

      text:
        "Manage upcoming, completed and cancelled rentals.",
    },


    {
      icon: Bot,

      title: "AI assistant",

      text:
        "Ask for vehicle recommendations or booking support.",

      featured: true,
    },


    {
      icon: ShieldCheck,

      title: "Verification",

      text:
        "Manage your driving licence and identity documents.",
    },

  ];


  function logout() {

    localStorage.removeItem(
      "djcr_token"
    );

    localStorage.removeItem(
      "djcr_user"
    );

    navigate("/");
  }


  return (

    <main
      className="
        auth-bg

        relative

        min-h-screen

        overflow-hidden

        px-4
        py-7

        text-ink-900

        sm:px-8
      "
    >

      <div className="noise" />


      {/* BACKGROUND DECORATION */}

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          glow-peach

          -left-24
          top-12

          h-72
          w-72

          rounded-full

          blur-3xl
        "
      />


      <div
        className="
          relative
          z-10

          mx-auto

          max-w-6xl
        "
      >

        {/* =========================
            HEADER
        ========================== */}

        <header
          className="
            flex

            items-center

            justify-between
          "
        >

          <div
            className="
              flex

              items-center

              gap-3
            "
          >

            <Brand compact />


            <p
              className="
                hidden

                text-xs

                font-semibold

                text-ink-700

                sm:block
              "
            >

              Customer dashboard

            </p>

          </div>


          {/* logout */}

          <button

            onClick={logout}

            className="
              flex

              items-center

              gap-2

              rounded-xl

              border
              border-white/60

              bg-white/50

              px-4
              py-2

              text-sm

              font-bold

              text-ink-900

              shadow-sm

              transition

              hover:bg-white/75
            "
          >

            <LogOut size={17} />

            Logout

          </button>

        </header>


        {/* =========================
            MAIN DASHBOARD CARD
        ========================== */}

        <motion.section

          initial={{
            opacity: 0,
            y: 18,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          className="
            glass-panel

            mt-10

            rounded-[2rem]

            p-7

            sm:p-10
          "
        >

          <div
            className="
              badge-soft

              inline-flex

              rounded-full

              px-3
              py-1

              text-xs

              font-black

              uppercase

              tracking-[0.18em]

              text-brand-600
            "
          >

            Authentication successful

          </div>


          <h1
            className="
              mt-5

              text-3xl

              font-black

              tracking-[-0.045em]

              text-ink-900

              sm:text-4xl
            "
          >

            Welcome,{" "}

            <span className="text-gradient">

              {
                user.name ||
                "Guest"
              }.

            </span>

          </h1>


          <p
            className="
              mt-3

              max-w-2xl

              leading-7

              text-ink-700
            "
          >

            Your <BrandName /> account is ready.
            Search vehicles, manage bookings,
            upload documents and use the AI
            rental assistant from here.

          </p>


          {/* =========================
              PROMO BANNER
          ========================== */}

          <motion.div

            initial={{
              opacity: 0,
              y: 14,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.1,
            }}

            className="
              promo-banner

              relative

              mt-8

              flex

              flex-col

              gap-4

              overflow-hidden

              rounded-3xl

              p-6

              text-white

              sm:flex-row
              sm:items-center
              sm:justify-between

              sm:p-7
            "
          >

            <div
              className="
                pointer-events-none

                absolute

                -right-10
                -top-16

                h-52
                w-52

                rounded-full

                bg-white/15

                blur-3xl
              "
            />


            <div
              className="
                pointer-events-none

                absolute

                -bottom-16
                left-1/3

                h-40
                w-40

                rounded-full

                bg-white/10

                blur-3xl
              "
            />


            <div className="relative z-10">

              <span
                className="
                  inline-flex

                  items-center

                  gap-1.5

                  rounded-full

                  bg-white/20

                  px-3

                  py-1

                  text-[11px]

                  font-black

                  uppercase

                  tracking-[0.2em]
                "
              >

                <Sparkles size={12} />

                Limited offer

              </span>


              <h2
                className="
                  mt-3

                  text-xl

                  font-black

                  tracking-tight

                  sm:text-2xl
                "
              >

                Save 20% on weekend rentals

              </h2>


              <p
                className="
                  mt-1

                  max-w-md

                  text-sm

                  text-white/80
                "
              >

                Book a car for Friday through
                Sunday and the discount is
                applied automatically at checkout.

              </p>

            </div>


            <button
              className="
                relative
                z-10

                flex

                shrink-0

                items-center

                justify-center

                gap-2

                rounded-2xl

                bg-white

                px-5

                py-3

                text-sm

                font-black

                text-brand-600

                shadow-[0_12px_28px_rgba(0,0,0,.16)]

                transition

                hover:-translate-y-0.5
              "
            >

              View offers

              <ArrowRight size={16} />

            </button>

          </motion.div>


          {/* =========================
              ACTION CARDS
          ========================== */}

          <div
            className="
              mt-9

              grid

              gap-4

              md:grid-cols-2
            "
          >

            {actions.map(
              ({
                icon: Icon,
                title,
                text,
                featured,
              }) => (

                <button

                  key={title}

                  className={`
                    group

                    flex

                    items-center

                    rounded-2xl

                    border

                    p-5

                    text-left

                    transition

                    duration-200

                    hover:-translate-y-1

                    ${
                      featured
                        ? `
                          card-featured

                          border-transparent
                        `
                        : `
                          border-white/65

                          bg-white/50

                          shadow-[0_12px_30px_rgba(124,59,23,.06)]

                          hover:bg-white/75
                        `
                    }
                  `}
                >

                  {/* Icon */}

                  <div
                    className={`
                      flex

                      h-11
                      w-11

                      shrink-0

                      items-center
                      justify-center

                      rounded-xl

                      text-white

                      ${
                        featured
                          ? "bg-white/25"
                          : "chip-dark"
                      }
                    `}
                  >

                    <Icon size={21} />

                  </div>


                  {/* Text */}

                  <div className="ml-4">

                    <h2
                      className={`
                        font-black

                        ${
                          featured
                            ? "text-white"
                            : "text-ink-900"
                        }
                      `}
                    >

                      {title}

                    </h2>


                    <p
                      className={`
                        mt-1

                        text-sm

                        ${
                          featured
                            ? "text-white/80"
                            : "text-ink-700"
                        }
                      `}
                    >

                      {text}

                    </p>

                  </div>


                  {/* arrow */}

                  <ChevronRight
                    size={18}
                    className={`
                      ml-auto

                      transition

                      group-hover:translate-x-1

                      ${
                        featured
                          ? "text-white/80"
                          : "text-ink-300 group-hover:text-ink-900"
                      }
                    `}
                  />

                </button>

              )
            )}

          </div>

        </motion.section>

      </div>

    </main>
  );
}