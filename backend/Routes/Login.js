const express=require("express")
const {body,validationResult}=require("express-validator")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // JWT modul
const router=express.Router()
const User=require ("../Modals/UserSchema")
const jwtSecret="mynameisnehakumarifromgarhwa"



router.post("/loginuser",
    
    body('email').isEmail(),

    body('password','incorrect password').isLength({min:4})
    ,async(req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }

let email=req.body.email;
    try{
    let userData=    await User.findOne({email});
    if(!userData){
        return res.status(400).json({errors:"try login with correct credentials"});
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, userData.password);
    if(!isPasswordValid){
        return res.status(400).json({errors:"try login with correct credential"});
    }

    const data={
        users:{
            id:userData.id
        }
    }
    const authToken=jwt.sign(data,jwtSecret)
   // console.log("authtoken",authToken)
    return res.json({success:true,authToken:authToken})
     //  .then( res.json({success:true}))
    }
    catch(error){
        console.log(error)
        res.json({success:false })

    }
})




module.exports=router;