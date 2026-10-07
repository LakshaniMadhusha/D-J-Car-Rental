import {
  useEffect,
  useState
} from "react";

import {
  useNavigate,
  useSearchParams
} from "react-router-dom";

import {
  Fuel,
  Gauge,
  Heart,
  SlidersHorizontal,
  Users
} from "lucide-react";

import api
  from "../api/axios.js";


export default function SearchResultsPage() {

  const navigate =
    useNavigate();


  const [searchParams] =
    useSearchParams();


  const [cars, setCars] =
    useState([]);


  const [loading, setLoading] =
    useState(true);


  const [
    selectedCategory,
    setSelectedCategory
  ] = useState("All");


  const pickupDate =
    searchParams.get(
      "pickupDate"
    ) || "";


  const dropoffDate =
    searchParams.get(
      "dropoffDate"
    ) || "";


  const location =
    searchParams.get(
      "pickupLocation"
    ) || "";


  useEffect(() => {

    loadCars();

  }, [
    pickupDate,
    dropoffDate,
    location
  ]);


  async function loadCars() {

    try {

      setLoading(true);


      const params =
        new URLSearchParams();


      if (pickupDate) {

        params.set(
          "pickupDate",
          pickupDate
        );

      }


      if (dropoffDate) {

        params.set(
          "dropoffDate",
          dropoffDate
        );

      }


      if (location) {

        params.set(
          "location",
          location
        );

      }


      const { data } =
        await api.get(

          `/cars/available?${params.toString()}`

        );


      setCars(
        data.cars || []
      );


    } catch (error) {

      console.error(
        error
      );


      setCars([]);


    } finally {

      setLoading(false);

    }

  }


  const filteredCars =
    selectedCategory === "All"

      ? cars

      : cars.filter(

          car =>
            car.category ===
            selectedCategory

        );


  const categories = [

    "All",

    "SUV",

    "Sedan",

    "Hatchback",

    "Van"

  ];


  return (

    <div
      className="
        mx-auto

        max-w-7xl

        px-4
        py-8

        sm:px-6
      "
    >

      {/* HEADER */}

      <div
        className="
          flex

          items-center
          justify-between
        "
      >

        <div>

          <p
            className="
              text-xs

              font-black

              uppercase

              tracking-[0.2em]

              text-[#C96F4B]
            "
          >

            Available vehicles

          </p>


          <h1
            className="
              mt-2

              text-3xl

              font-black

              text-[#30221C]
            "
          >

            Search Results

          </h1>


          <p
            className="
              mt-2

              text-sm

              text-[#80685A]
            "
          >

            {
              filteredCars.length
            } cars available

          </p>

        </div>


        <button
          className="
            flex

            h-11
            w-11

            items-center
            justify-center

            rounded-xl

            bg-[#30221C]

            text-white
          "
        >

          <SlidersHorizontal
            size={18}
          />

        </button>

      </div>


      {/* FILTER BUTTONS */}

      <div
        className="
          mt-6

          flex

          flex-wrap

          gap-2
        "
      >

        {
          categories.map(
            category => (

              <button

                key={
                  category
                }

                onClick={() =>
                  setSelectedCategory(
                    category
                  )
                }

                className={`
                  rounded-full

                  px-4
                  py-2

                  text-sm

                  font-bold

                  ${
                    selectedCategory ===
                    category

                      ? `
                        bg-[#C96F4B]
                        text-white
                      `

                      : `
                        border
                        border-[#DDCABC]

                        bg-[#FFF9F4]

                        text-[#80685A]
                      `
                  }
                `}
              >

                {category}

              </button>

            )
          )
        }

      </div>


      {/* LOADING */}

      {
        loading && (

          <div
            className="
              mt-10

              rounded-2xl

              bg-white

              p-10

              text-center

              text-[#80685A]
            "
          >

            Checking
            real-time availability...

          </div>

        )
      }


      {/* CAR GRID */}

      {
        !loading && (

          <div
            className="
              mt-8

              grid

              gap-5

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >

            {
              filteredCars.map(
                car => (

                  <article

                    key={
                      car._id
                    }

                    className="
                      overflow-hidden

                      rounded-[1.6rem]

                      border
                      border-[#DDCABC]

                      bg-[#FFF9F4]

                      shadow-[0_14px_35px_rgba(80,48,32,.08)]
                    "
                  >

                    {/* IMAGE */}

                    <div
                      className="
                        relative

                        bg-[#F4E6DA]

                        p-5
                      "
                    >

                      <button
                        className="
                          absolute

                          right-4
                          top-4

                          flex

                          h-9
                          w-9

                          items-center
                          justify-center

                          rounded-full

                          bg-white
                        "
                      >

                        <Heart
                          size={17}
                        />

                      </button>


                      <img

                        src={
                          car.image
                        }

                        alt={
                          car.name
                        }

                        className="
                          h-36

                          w-full

                          object-contain
                        "
                      />

                    </div>


                    {/* DETAILS */}

                    <div className="p-5">


                      <div
                        className="
                          flex

                          justify-between

                          gap-3
                        "
                      >

                        <div>

                          <h2
                            className="
                              text-lg

                              font-black

                              text-[#30221C]
                            "
                          >

                            {car.name}

                          </h2>


                          <p
                            className="
                              text-xs

                              text-[#80685A]
                            "
                          >

                            {
                              car.category
                            }

                          </p>

                        </div>


                        <div
                          className="
                            text-right
                          "
                        >

                          <p
                            className="
                              text-lg

                              font-black

                              text-[#C96F4B]
                            "
                          >

                            $
                            {
                              car.pricePerDay
                            }

                          </p>


                          <p
                            className="
                              text-[10px]

                              text-[#80685A]
                            "
                          >

                            per day

                          </p>

                        </div>

                      </div>


                      {/* DETAILS */}

                      <div
                        className="
                          mt-4

                          grid
                          grid-cols-3

                          gap-2

                          text-xs

                          text-[#80685A]
                        "
                      >

                        <span
                          className="
                            flex
                            items-center
                            gap-1
                          "
                        >

                          <Users
                            size={14}
                          />

                          {car.seats}

                        </span>


                        <span
                          className="
                            flex
                            items-center
                            gap-1
                          "
                        >

                          <Gauge
                            size={14}
                          />

                          {
                            car.transmission
                          }

                        </span>


                        <span
                          className="
                            flex
                            items-center
                            gap-1
                          "
                        >

                          <Fuel
                            size={14}
                          />

                          {
                            car.fuelType
                          }

                        </span>

                      </div>


                      <button

                        onClick={() => {

                          const params =
                            new URLSearchParams(
                              searchParams
                            );


                          navigate(

                            `/cars/${car._id}?${params.toString()}`

                          );

                        }}

                        className="
                          mt-5

                          w-full

                          rounded-xl

                          bg-[#C96F4B]

                          px-4
                          py-3

                          font-black

                          text-white

                          hover:bg-[#A9563B]
                        "
                      >

                        View Details

                      </button>

                    </div>

                  </article>

                )
              )
            }

          </div>

        )
      }

    </div>

  );
}