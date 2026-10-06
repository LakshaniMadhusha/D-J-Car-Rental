import {
  Bot,
  CalendarDays,
  CarFront,
  Home,
  LogOut,
  Search
} from "lucide-react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";


export default function AppShell({
  children
}) {

  const navigate = useNavigate();

  const location = useLocation();


  const navigation = [

    {
      name: "Home",
      icon: Home,
      path: "/home"
    },

    {
      name: "Search",
      icon: Search,
      path: "/cars"
    },

    {
      name: "Bookings",
      icon: CalendarDays,
      path: "/bookings"
    },

    {
      name: "AI",
      icon: Bot,
      path: "/assistant"
    }

  ];


  function logout() {

    localStorage.removeItem(
      "drivex_token"
    );

    localStorage.removeItem(
      "drivex_user"
    );

    navigate("/");
  }


  return (

    <div
      className="
        min-h-screen
        bg-[#FFF4EC]
        text-[#1D1916]
      "
    >

      {/* DESKTOP HEADER */}

      <header
        className="
          sticky
          top-0
          z-40

          border-b
          border-[#704A37]/10

          bg-[#FFF9F5]/90

          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto

            flex

            max-w-7xl

            items-center
            justify-between

            px-4
            py-3

            sm:px-6
          "
        >

          <button
            onClick={() =>
              navigate("/home")
            }
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex

                h-10
                w-10

                items-center
                justify-center

                rounded-xl

                bg-[#1D1916]

                text-white
              "
            >

              <CarFront size={21} />

            </div>


            <div className="text-left">

              <p
                className="
                  text-lg
                  font-black
                "
              >

                Drive

                <span
                  className="
                    text-[#CE622F]
                  "
                >
                  X
                </span>

              </p>


              <p
                className="
                  text-[8px]

                  font-black

                  uppercase

                  tracking-[0.3em]

                  text-[#98715D]
                "
              >

                Rentals

              </p>

            </div>

          </button>


          {/* DESKTOP NAV */}

          <nav
            className="
              hidden

              items-center
              gap-2

              md:flex
            "
          >

            {navigation.map(
              ({
                name,
                path
              }) => (

                <button

                  key={path}

                  onClick={() =>
                    navigate(path)
                  }

                  className={`
                    rounded-xl

                    px-4
                    py-2

                    text-sm

                    font-bold

                    ${
                      location.pathname === path

                        ? `
                          bg-[#1D1916]
                          text-white
                        `

                        : `
                          text-[#74584A]

                          hover:bg-[#FF9F67]/20
                        `
                    }
                  `}
                >

                  {name}

                </button>

              )
            )}

          </nav>


          <button

            onClick={logout}

            className="
              flex

              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              bg-[#1D1916]

              text-white
            "
          >

            <LogOut size={17} />

          </button>

        </div>

      </header>


      {/* PAGE */}

      <main
        className="
          pb-24
          md:pb-8
        "
      >

        {children}

      </main>


      {/* MOBILE NAV */}

      <nav
        className="
          fixed

          bottom-0
          left-0
          right-0

          z-50

          border-t

          bg-white/95

          p-2

          backdrop-blur-xl

          md:hidden
        "
      >

        <div
          className="
            grid
            grid-cols-4
            gap-1
          "
        >

          {navigation.map(
            ({
              name,
              icon: Icon,
              path
            }) => (

              <button

                key={path}

                onClick={() =>
                  navigate(path)
                }

                className={`
                  flex

                  flex-col

                  items-center

                  gap-1

                  rounded-xl

                  py-2

                  text-[10px]

                  font-bold

                  ${
                    location.pathname === path

                      ? `
                        bg-[#FF9F67]/25
                        text-[#1D1916]
                      `

                      : `
                        text-[#8D6C5C]
                      `
                  }
                `}
              >

                <Icon size={18} />

                {name}

              </button>

            )
          )}

        </div>

      </nav>

    </div>
  );
}