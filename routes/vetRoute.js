import { Router } from "express";
import { createVetSpace, deleteVetSpaceById, getAllVetSpaces, getVetSpaceById, updateVetSpaceById } from "../controllers/vetSpaceController.js";

const router = Router();

router.get('/', getAllVetSpaces);

router.get('/:id', getVetSpaceById);


router.post('/', createVetSpace);

router.patch('/:id', updateVetSpaceById);

router.delete('/:id', deleteVetSpaceById);

export default router;
