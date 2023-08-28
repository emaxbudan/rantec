import { Router } from "express";
import { createLivestock, getAllLivestock,  updatedLivestockById,deleteLivestockById, getSingleLivestock } from "../controllers/livestocksController.js";

const router = Router();

router.get('/', getAllLivestock);

router.get('/:Id', getSingleLivestock);


router.post('/', createLivestock);

router.patch('/:Id', updatedLivestockById);

router.delete('/:Id', deleteLivestockById);

export default router;
