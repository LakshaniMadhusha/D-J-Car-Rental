import {
  CalendarDays,
  CarFront,
  MapPin,
  Search
} from "lucide-react";

import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";


export default function HomePage() {

  const navigate = useNavigate();


  const [search, setSearch] =
    useState({

      pickupLocation:
        "Colombo",

      dropoffLocation:
        "Colombo",

      pickupDate: "",

      dropoffDate: ""

    });


  function searchCars(event) {

    event.preventDefault();


    const params =
      new URLSearchParams();


    Object.entries(
      search
    ).forEach(
      ([key, value]) => {

        if (value) {

          params.set(
            key,
            value
          );

        }

      }
    );


    navigate(
      `/cars?${params.toString()}`
    );
  }


  return (

    <section
      className="
        relative

        overflow-hidden

        bg-[#FF9F67]
      "
    >

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,.75),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,240,229,.65),transparent_35%)]
        "
      />


      <div
        className="
          relative

          mx-auto

          grid

          max-w-7xl

          gap-10

          px-4
          py-12

          sm:px-6

          lg:grid-cols-2

          lg:py-20
        "
      >

        {/* HERO */}

        <div>

          <p
            className="
              inline-block

              rounded-full

              bg-white/50

              px-4
              py-2

              text-sm

              font-bold
            "
          >

            Instant booking • No hidden fees

          </p>


          <h1
            className="
              mt-6

              text-5xl

              font-black

              tracking-[-0.06em]

              text-[#1D1916]

              md:text-6xl
            "
          >

            Drive your

            <span
              className="
                block
                text-white
              "
            >

              journey.

            </span>

          </h1>


          <p
            className="
              mt-5

              max-w-xl

              leading-7

              text-[#6B5042]
            "
          >

            Search available cars,
            compare transparent prices,
            verify your documents online
            and book instantly.

          </p>

        </div>


        {/* SEARCH CARD */}

        <form

          onSubmit={searchCars}

          className="
            rounded-[2rem]

            border
            border-white/70

            bg-white/80

            p-6

            shadow-xl

            backdrop-blur-xl
          "
        >

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex

                h-11
                w-11

                items-center
                justify-center

                rounded-xl

                bg-[#1D1916]

                text-white
              "
            >

              <CarFront size={21} />

            </div>


            <div>

              <h2
                className="
                  text-xl
                  font-black
                "
              >

                Rent a car

              </h2>


              <p
                className="
                  text-xs

                  text-[#806151]
                "
              >

                Real-time availability

              </p>

            </div>

          </div>


          <Input

            icon={MapPin}

            label="Pickup Location"

            value={
              search.pickupLocation
            }

            onChange={(value) =>

              setSearch({

                ...search,

                pickupLocation:
                  value

              })

            }

          />


          <Input

            icon={MapPin}

            label="Drop-off Location"

            value={
              search.dropoffLocation
            }

            onChange={(value) =>

              setSearch({

                ...search,

                dropoffLocation:
                  value

              })

            }

          />


          <div
            className="
              grid
              grid-cols-2
              gap-3
            "
          >

            <DateInput

              label="Pickup Date"

              value={
                search.pickupDate
              }

              onChange={(value) =>

                setSearch({

                  ...search,

                  pickupDate:
                    value

                })

              }

            />


            <DateInput

              label="Drop-off Date"

              value={
                search.dropoffDate
              }

              onChange={(value) =>

                setSearch({

                  ...search,

                  dropoffDate:
                    value

                })

              }

            />

          </div>


          <button
            className="
              mt-6

              flex

              w-full

              items-center
              justify-center

              gap-2

              rounded-xl

              bg-[#1D1916]

              px-5
              py-4

              font-black

              text-white
            "
          >

            <Search size={18} />

            Search Cars

          </button>

        </form>

      </div>

    </section>

  );
}


function Input({
  icon: Icon,
  label,
  value,
  onChange
}) {

  return (

    <label
      className="
        mt-5
        block
      "
    >

      <span
        className="
          mb-2
          block

          text-xs

          font-black

          uppercase

          tracking-wider

          text-[#876756]
        "
      >

        {label}

      </span>


      <div className="relative">

        <Icon
          size={17}
          className="
            absolute

            left-4

            top-1/2

            -translate-y-1/2

            text-[#9D7864]
          "
        />


        <input

          value={value}

          onChange={(event) =>
            onChange(
              event.target.value
            )
          }

          className="
            w-full

            rounded-xl

            border

            border-[#8D6A58]/15

            bg-white

            py-3.5

            pl-11
            pr-3

            outline-none

            focus:border-[#FF9F67]
          "
        />

      </div>

    </label>

  );
}


function DateInput({
  label,
  value,
  onChange
}) {

  return (

    <label
      className="
        mt-5
        block
      "
    >

      <span
        className="
          mb-2
          block

          text-xs

          font-black

          uppercase

          text-[#876756]
        "
      >

        {label}

      </span>


      <div className="relative">

        <CalendarDays
          size={17}
          className="
            absolute

            left-4

            top-1/2

            -translate-y-1/2

            text-[#9D7864]
          "
        />


        <input

          type="date"

          value={value}

          onChange={(event) =>
            onChange(
              event.target.value
            )
          }

          className="
            w-full

            rounded-xl

            border

            bg-white

            py-3.5

            pl-11
            pr-2
          "
        />

      </div>

    </label>

  );
}