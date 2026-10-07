import express from "express";

import {

  getAvailableCars,
  getCarById

} from "../controllers/carController.js";


import {
  protect
} from "../middleware/authMiddleware.js";


const router =
  express.Router();


router.get(

  "/available",

  protect,

  getAvailableCars

);


router.get(

  "/:id",

  protect,

  getCarById

);


export default router;