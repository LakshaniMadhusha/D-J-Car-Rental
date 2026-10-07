import mongoose from "mongoose";


const bookingSchema =
  new mongoose.Schema(

    {

      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true

      },


      car: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Car",

        required: true

      },


      pickupLocation: {
        type: String,
        required: true
      },


      dropoffLocation: {
        type: String,
        required: true
      },


      pickupDate: {
        type: Date,
        required: true
      },


      dropoffDate: {
        type: Date,
        required: true
      },


      extras: [
        String
      ],


      totalAmount: {
        type: Number,
        required: true
      },


      paymentStatus: {

        type: String,

        enum: [
          "pending",
          "paid",
          "refunded"
        ],

        default: "pending"

      },


      status: {

        type: String,

        enum: [
          "confirmed",
          "completed",
          "cancelled"
        ],

        default:
          "confirmed"

      }

    },

    {
      timestamps: true
    }

  );


export default mongoose.model(
  "Booking",
  bookingSchema
);