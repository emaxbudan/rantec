import { Router } from "express";
import { createBooking, deleteBookingById, getAllBookings, getBookingById, updateBookingById } from "../controllers/bookingController.js";

const router = Router();

router.get('/', getAllBookings);

router.get('/:id', getBookingById);


router.post('/', createBooking);

router.put('/:id', updateBookingById);


router.delete('/:id', deleteBookingById);

export default router;


 