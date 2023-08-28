import { Router } from "express";
import { createBooking, deleteBookingById, getAllBookings, getBookingById, updateBookingById } from "../controllers/bookingController.js";

const router = Router();

router.get('/', getAllBookings);

router.get('/:Id', getBookingById);


router.post('/', createBooking);

router.put('/:Id', updateBookingById);


router.delete('/:Id', deleteBookingById);

export default router;


 