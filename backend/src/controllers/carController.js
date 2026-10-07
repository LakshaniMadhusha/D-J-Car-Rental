import Car from "../models/Car.js";
import Booking from "../models/Booking.js";


export async function getAvailableCars(
  req,
  res
) {

  try {

    const {
      pickupDate,
      dropoffDate,
      location
    } = req.query;


    const carQuery = {

      isActive: true

    };


    if (location) {

      carQuery.location =
        new RegExp(
          location,
          "i"
        );

    }


    const cars =
      await Car.find(
        carQuery
      ).sort({

        pricePerDay: 1

      });


    /*
      If customer has not selected
      dates yet, return all cars.
    */

    if (
      !pickupDate ||
      !dropoffDate
    ) {

      return res.json({
        cars
      });

    }


    const start =
      new Date(
        pickupDate
      );


    const end =
      new Date(
        dropoffDate
      );


    if (
      Number.isNaN(
        start.getTime()
      ) ||
      Number.isNaN(
        end.getTime()
      )
    ) {

      return res.status(400).json({

        message:
          "Invalid rental dates."

      });

    }


    if (end <= start) {

      return res.status(400).json({

        message:
          "Drop-off date must be after pickup date."

      });

    }


    /*
      Find cars already booked
      during requested period.
    */

    const conflictingBookings =
      await Booking.find({

        status:
          "confirmed",

        pickupDate: {

          $lt: end

        },

        dropoffDate: {

          $gt: start

        }

      }).select("car");


    const unavailableCars =
      new Set(

        conflictingBookings.map(

          booking =>
            String(
              booking.car
            )

        )

      );


    const availableCars =
      cars.filter(

        car =>
          !unavailableCars.has(
            String(
              car._id
            )
          )

      );


    return res.json({

      cars:
        availableCars

    });


  } catch (error) {

    console.error(error);


    return res
      .status(500)
      .json({

        message:
          "Could not load available cars."

      });

  }

}



export async function getCarById(
  req,
  res
) {

  try {

    const car =
      await Car.findById(
        req.params.id
      );


    if (!car) {

      return res
        .status(404)
        .json({

          message:
            "Car not found."

        });

    }


    return res.json({
      car
    });


  } catch (error) {

    return res
      .status(404)
      .json({

        message:
          "Car not found."

      });

  }

}