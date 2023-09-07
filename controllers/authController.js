import users from "../models/user.js";
import bcryptjs from "bcryptjs"

import  {loginValidator, registerValidator} from "../validators/userValidator.js";

// register
export const register = async (req, res) => {
    const isValid = registerValidator.safeParse(req.body);

    if(!isValid.success){
        return res.status(400).json((isValid.error)).end();
    }
    try{

    //Hashing password
    const salt = bcryptjs.genSaltSync(10)
    const hash = bcryptjs.hashSync(req.body.password, salt)

    const newUser = new users({
        username: req.body.username,
        email: req.body.email,
        date:req.body.date,
        password: hash,
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
export const login = async (req, res) => {
    const validatedData = loginValidator.safeParse(req.body);
  
    if (!validatedData.success) {
      // Handle validation errors
      return res.status(400).json({ success: false, error: validatedData.error }).end();
    }
  
    try {
      const email = req.body.email;
      const user = await users.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      const isPasswordCorrect = await bcryptjs.compare(req.body.password, user.password);
  
      if (!isPasswordCorrect) {
        return res.status(401).json({ success: false, message: "Incorrect email or password" });
      }
  
      // If everything is correct, return a success response
      return res.status(200).json({ success: true, message: "You are logged in", data: user });
  
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Failed to login" });
    }
  };