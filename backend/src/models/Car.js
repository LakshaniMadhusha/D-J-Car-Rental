import mongoose from "mongoose";


const carSchema =
  new mongoose.Schema(

    {

      name: {
        type: String,
        required: true
      },

      category: {

        type: String,

        enum: [
          "SUV",
          "Sedan",
          "Hatchback",
          "Van"
        ],

        required: true

      },

      pricePerDay: {
        type: Number,
        required: true
      },

      transmission: {

        type: String,

        enum: [
          "Automatic",
          "Manual"
        ]

      },

      fuelType: {

        type: String,

        enum: [
          "Petrol",
          "Diesel",
          "Hybrid",
          "Electric"
        ]

      },

      seats: {
        type: Number
      },

      location: {
        type: String
      },

      image: {
        type: String
      },

      rating: {
        type: Number,
        default: 4.8
      },

      reviewCount: {
        type: Number,
        default: 0
      },

      mileageLimit: {
        type: Number,
        default: 250
      },

      isActive: {
        type: Boolean,
        default: true
      }

    },

    {
      timestamps: true
    }

  );


export default mongoose.model(
  "Car",
  carSchema
);