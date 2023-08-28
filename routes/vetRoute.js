import { Router } from "express";
import { createVetSpace, deleteVetSpaceById, getAllVetSpaces, getVetSpaceById, updateVetSpaceById } from "../controllers/vetSpaceController.js";

const router = Router();

router.get('/', getAllVetSpaces);

router.get('/:Id', getVetSpaceById);


router.post('/', createVetSpace);

router.put('/:Id', updateVetSpaceById);

router.delete('/:Id', deleteVetSpaceById);

export default router;
