import "dotenv/config";
import mongoose from "mongoose";

import { connectDB } from "../config/db.js";
import Car from "../models/Car.js";


const cars = [

  {
    name: "Suzuki Alto",
    category: "Hatchback",
    pricePerDay: 30,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 4,
    location: "Colombo",
    image: "/cars/alto.jpg",
    rating: 4.7,
    reviewCount: 56,
    mileageLimit: 250,
    isActive: true
  },

  {
    name: "Suzuki Wagon R",
    category: "Hatchback",
    pricePerDay: 38,
    transmission: "Automatic",
    fuelType: "Hybrid",
    seats: 4,
    location: "Colombo",
    image: "/cars/wagon-r.jpg",
    rating: 4.8,
    reviewCount: 74,
    mileageLimit: 250,
    isActive: true
  },

  {
    name: "Toyota Hiace",
    category: "Van",
    pricePerDay: 90,
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: 12,
    location: "Colombo",
    image: "/cars/hiace.jpg",
    rating: 4.8,
    reviewCount: 63,
    mileageLimit: 200,
    isActive: true
  },

  {
    name: "Toyota Camry",
    category: "Sedan",
    pricePerDay: 45,
    transmission: "Automatic",
    fuelType: "Petrol",
    seats: 5,
    location: "Colombo",
    image: "/cars/camry.jpg",
    rating: 4.7,
    reviewCount: 92,
    mileageLimit: 250,
    isActive: true
  },

  {
    name: "BMW X5",
    category: "SUV",
    pricePerDay: 80,
    transmission: "Automatic",
    fuelType: "Diesel",
    seats: 5,
    location: "Colombo",
    image: "/cars/bmw-x5.jpg",
    rating: 4.9,
    reviewCount: 120,
    mileageLimit: 250,
    isActive: true
  }

];


async function seedCars() {

  try {

    await connectDB();

    await Car.deleteMany({});

    await Car.insertMany(cars);

    console.log(
      `${cars.length} cars added successfully`
    );

    await mongoose.disconnect();

    process.exit(0);

  } catch (error) {

    console.error(
      "Seed error:",
      error
    );

    process.exit(1);
  }
}


seedCars();