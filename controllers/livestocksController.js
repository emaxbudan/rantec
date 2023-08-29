import Livestock from "../models/livestock.js";


 // Create a new livestock
export const createLivestock = async (req, res) => {
    const livestockData = req.body;
    const livestock = new Livestock(livestockData);
    try {
        const savedLivestock = await livestock.save();
        res.status(201).json(savedLivestock);
    } catch (err) {
        console.log( err);
        res.status(500).send('Failed to save livestock');
    }
};

// Get all livestock
export const getAllLivestock = async (req, res) => {
    try {
        const livestock = await Livestock.find();
        res.json(livestock);
    } catch (err) {
        console.log( err);
        res.status(500).send('Failed to get livestock');
    }
};

// Get a specific livestock by ID
export const getSingleLivestock = async (req, res) => {
    const id = req.params.id;
  
    try {
        const specificLivestock = await Livestock.findById(id);
        res.status(200).json({
            sucess: true, 
            message: "done!", 
            data: specificLivestock})
    } catch (err) {
        console.log( err);
        res.status(500).send('Failed to get livestock');
    }
};

// Update a specific livestock by ID
export const updatedLivestockById = async (req, res) => {
    const livestockId = (req.params.id);
    const updatedLivestockData = req.body;
  
    try {
        const updatedLivestock = await Livestock.findByIdAndUpdate(
            livestockId, 
            updatedLivestockData, 
            { new: true });
        res.status(200).json({
            sucess: true, 
            message: "Done", 
            data: updatedLivestock}).end;
    } catch (err) {
        console.log( err);
        res.status(500).send('Failed to update livestock');
    }
};

// Delete a specific livestock by ID
export const deleteLivestockById = async (req, res) => {
    const livestockId = req.params.id;
  
    try {
        const deletedLivestock = await Livestock.findByIdAndRemove(livestockId);
        if (!deletedLivestock) {
            return res.status(404).send('Livestock not found');
        }
        res.Status(204);
    } catch (err) {
        console.log( err);
        res.status(500).send('Failed to delete livestock');
    }
};
