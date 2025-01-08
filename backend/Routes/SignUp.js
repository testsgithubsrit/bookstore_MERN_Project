/*const express=require("express")
const {body,validationResult}=require("express-validator")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // JWT modul
const router=express.Router()
const User=require ("../Modals/UserSchema")
const jwtSecret="mynameisnehakumarifromgarhwa"
router.post("/SignUp",
    body('name').isLength({min:2}),

    body('email').isEmail(),

    body('password','incorrect password').isLength({min:4})
    ,async(req,res)=>{

        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
    try{

         // पासवर्ड हैश करें
      const salt = await bcrypt.genSalt(10); // सल्ट जनरेट करें
      const hashedPassword = await bcrypt.hash(req.body.password, salt); // पासवर्ड हैश करें
        await User.create({
            name:req.body.name,
            password:hashedPassword,
            email:req.body.email
        
        })
       .then( res.json({success:true}))


       const existingUser=await User.findOne({email:req.body.email});
       if(existingUser){
        return res.status(400).json({message: 'Email already exists'})
       }
       // Create a new user
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      })  .then( res.json({success:true}))


      // Respond with success
     return  res.status(201).json({ success: true, message: "User created successfully", user: newUser });
    }
    catch(error){
        console.log(error)
        res.json({success:false })

    }
})


module.exports=router;*/
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../Modals/UserSchema");

router.post(
  "/SignUp",
  [
    body("name").isLength({ min: 2 }).withMessage("Name must be at least 2 characters long."),
    body("email").isEmail().withMessage("Invalid email format."),
    body("password").isLength({ min: 4 }).withMessage("Password must be at least 4 characters long."),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // Handle validation errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, password } = req.body;

      // Check if the email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" }); // Ensure `return` to stop execution
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      // Respond with success
      return res.status(201).json({ success: true, message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error in SignUp:", error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
);

module.exports = router;
