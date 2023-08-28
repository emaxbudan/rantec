import { Router } from "express";
import { getAllUsers, getSingleUser, deleteUser, addUser, updateUser } from "../controllers/userController.js";

const router = Router();

// get all users
router.get('/', getAllUsers);

 //get single user
router.get('/:Id', getSingleUser);


 //add new user
router.post('/', addUser);

 //update user
router.put('/:Id', updateUser);

 //delete user
router.delete('/:Id', deleteUser);

export default router;


 