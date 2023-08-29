import { Router } from "express";
import { getAllUsers, getSingleUser, deleteUser, addUser, updateUser } from "../controllers/userController.js";

const router = Router();

// get all users
router.get('/', getAllUsers);

 //get single user
router.get('/:id', getSingleUser);


 //add new user
router.post('/', addUser);

 //update user
router.patch('/:id', updateUser);

 //delete user
router.delete('/:id', deleteUser);

export default router;


 