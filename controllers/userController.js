
import  users  from '../models/user.js';


// get all users
export const getAllUsers = async (req,res) => {

    // For getting pages
    const page = parseInt(req.query.page)
    console.log(page);
    try{
        const allUsers = await users.find({});
        res.status(200).json({
            sucsess: true, 
            message:"Successful", 
            data: allUsers});
    }catch (error){
        console.log(error)
        res.status(500).json({
            success: false, 
            message: "failed"});
    }
};


// get single user
export const getSingleUser = async(req, res) => {
    const id = req.params.id; 
    try{
        const singleUser = await users.findById(id);
        res.status(200).json({
            success: true, 
            message:"Successful", 
            data: singleUser});
    }catch(error){
        console.log(error)
        res.status(404).json({
            success:false, 
            message:"User not found"});
    }
   
};


// add user
export const addUser = async (req,res) =>{
    const newUser = new users(req.body);
    try{
        const savedUser = await newUser.save();

        console.log(savedUser);

        res.status(200).json({
            successs: true, 
            measage: "User Added successfuly!", 
            data: savedUser});
      
    }catch (error){
        console.log(error),
        res.send(500).json({
            success: false, 
            message: "Failed to Add User"});
    }

};

export const updateUser = async (req, res) =>{
    const id = req.params.id;
    try {
      console.log('Updating user with ID:', id);
      
      const updatedUser = await users.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      
      console.log('Updated user:', updatedUser);
      
      res.status(200).json({
        success: true,
        message: 'Updated successfully',
        data: updatedUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Failed to update User',
      });
    }
  };
  

// delete user
export const deleteUser = async(req, res) => {
   const id = req.params.id
   try{
    const deletedUser = await users.findByIdAndDelete(id);
    res.status(200).json({
        success : true, 
        message: "User deleted successfully", 
        data: deletdUser});
   }catch (error){
    console.log(error)
    res.status(500).json({
        success: false, 
        message:"Failed to Delete User"});
   }
    
};