import users from "../models/user.js";
import bcryptjs from "bcryptjs"

import  {loginValidator, registerValidator} from "../validators/userValidator.js";

// register
export const register = async (req, res) => {
    try{

    //Hashing password
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(req.body.password, salt)

    const newUser = new users({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        location: req.body.location,
        date:req.body.date,
        password: hash,
        photo:req.body.photo,
        role: req.body.role

        });
        await newUser.save()
        res.status(200).json({success:true, message: "Registration Successful"});
    }catch (error){
        console.log(error)
        res.status(500).json({success: false, message:"Registration failed"});
    }
    
};

// user login
export const login = async(req, res) => {
    const validatedData = loginValidator.safeParse(req.body);

    //console.log(!validatedData)
    if(validatedData.success){
    res.status(200).json((validatedData.success)).end()
    }

    if(!validatedData.success){
         res.status(400).json((validatedData.error)).end()
    
    

     try{
        const email = req.body.email

        const user = await users.findOne({email});
         
        //if user dont exist
        if(!user){
            res.status(404).json({sucess: false, meesage:"not Authorized"});

        // if user exists 

        }
        // correct password
        const checkCorrectPassword = bcryptjs.compare(req.body.password, users.password);
        res.status(200).json({success:true, message: "You are logged in", data:user});

        //if incorrect password
        if(!checkCorrectPassword){
             return res.status(401).json({success: false, message:"Incorrect email or Password"});
        }
        
    }catch(error){
        console.log
        res.status(500).json({sucess: false, message:"Failed to Login"})
     }}
 };

    

     
