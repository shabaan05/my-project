import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const register = async(req, res)=>{
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "User already exits"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ name , email, password:hashedPassword, role})
        await user.save();

        res.status(400).json({ message:" User registered successfully " });
    } catch (error) {
        res.status(500).json({ message:error.message })
    }
}

export const login = async(req, res) =>{
    try {
        const {email , password} = req.body;

        const user = await User.findOne({ email});
        if(!user){
            return res.status(400).json({ message: "Invalid credential"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json(({message: "Invalid credentials"}))
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },   // payload
            process.env.JWT_SECRET,              // secret key
            { expiresIn: "7d" }                  // options
        );

        res.json({
            message: "User logged in successfully",
            token,
            user: { id: user._id, name: user.name, role: user.role }
        });

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export const logout = async (req, res) => {
  try {
    // For JWT, logout is just handled client-side
    // Here we just send a success response
    res.json({ message: "User logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

