// controllers/vetSpaceController.js

import VetSpace from '../models/vetSpace.js';
// import { vetSpaceValidator } from '../validators/vetValidator.js';

// Create a new veterinary doctor's space
export const createVetSpace = async (req, res) => {
  try {
    const vetSpaceData = req.body;
    const vetSpace = new VetSpace(vetSpaceData);
    const savedVetSpace = await vetSpace.save();
    res.status(201).json(savedVetSpace);
  } catch (err) {
    console.log( err);
    res.status(500).send('Failed to save veterinary doctor\'s space');
  }
};

// Get all veterinary doctor's spaces
export const getAllVetSpaces = async (req, res) => {
  try {
    const vetSpaces = await VetSpace.find();
    res.json(vetSpaces);
  } catch (err) {
    console.log(err);
    res.status(500).send('Failed to get veterinary doctor\'s spaces');
  }
};

// Get a specific veterinary doctor's space by ID
export const getVetSpaceById = async (req, res) => {
  try {
    const vetSpaceId = req.params.id;
    const vetSpace = await VetSpace.findById(vetSpaceId);
    if (!vetSpace) {
      return res.status(404).send('Veterinary doctor\'s space not found');
    }
    res.json(vetSpace);
  } catch (err) {
    console.log( err);
    res.status(500).send('Failed to get veterinary doctor\'s space');
  }
};

// Update a specific veterinary doctor's space by ID
export const updateVetSpaceById = async (req, res) => {
  try {
    const vetSpaceId = req.params.id;
    const updatedVetSpaceData = req.body;
    const updatedVetSpace = await VetSpace.findByIdAndUpdate(
      vetSpaceId,
      updatedVetSpaceData,
      { new: true }
    );
    res.status(200).json({
        success: true, 
        message: "Updated Sucessfully", 
        data: updatedVetSpace})
  } catch (err) {
    console.log( err);
    res.status(500).send('Failed to update veterinary doctor\'s space');
  }
};

// Delete a specific veterinary doctor's space by ID
export const deleteVetSpaceById = async (req, res) => {
  try {
    const vetSpaceId = req.params.id;
    const deletedVetSpace = await VetSpace.findByIdAndRemove(vetSpaceId);
    res.status(200).json({
    success:true , 
    message: "Deleted!"});
  } catch (err) {
    console.log( err);
    res.status(500).send('Failed to delete veterinary doctor\'s space');
  }
};
