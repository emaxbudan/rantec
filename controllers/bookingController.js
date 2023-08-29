// controllers/bookingController.js

import Booking from '../models/booking.js';
// import bookingValidator from '../validators/bookingValidator.js'

// Create a new booking
export const createBooking = async (req, res) => {
  const bookingData = new Booking(req.body);
  try {
    const savedBooking = await bookingData.save();
    return res.status(201).json({ 
        success: true, 
        data: savedBooking });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to save booking" });
  }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to get bookings' });
  }
};

// Get a specific booking by ID
export const getBookingById = async (req, res) => {
    const bookingId = req.params.id;
  try {
    const specificBooking = await Booking.findById(bookingId);
      return res.status(200).json({ 
        message: 'Found!', 
        data: specificBooking });
    }catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to get booking' });
  }
};

// Update a specific booking by ID
export const updateBookingById = async (req, res) => {
    const bookingId = req.params.id;
    const updatedBookingData = req.body;
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      updatedBookingData,
      { new: true }
    );
      return res.status(200).json({ message: 'Updated!', data: updatedBooking });
    } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to update booking' });
  }
};

// Delete a specific booking by ID
export const deleteBookingById = async (req, res) => {
    const bookingId = req.params.id;
  try {
    const deletedBooking = await Booking.findByIdAndRemove(bookingId);
    res.status(404).json({ message: 'deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to delete booking' });
  }
};
