import { Router } from "express";
import { createLivestock, getAllLivestock,  updatedLivestockById,deleteLivestockById, getSingleLivestock } from "../controllers/livestocksController.js";

const router = Router();

router.get('/', getAllLivestock);

router.get('/:id', getSingleLivestock);


router.post('/', createLivestock);

router.patch('/:id', updatedLivestockById);

router.delete('/:id', deleteLivestockById);

export default router;
