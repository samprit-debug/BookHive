const User = require('../model/userModel')
const bcryptjs = require('bcryptjs')

const signUp = async (req, res)=>{
    try {
        const {fullname, email, password} = req.body
        console.log(req.body);
  

        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({message: "user already exist"})
        }

        const hashPassword =await bcryptjs.hash(password, 10)

        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save()
        res.status(201).json({message: "User created successfully",
            user:{
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email
        },
    })

    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({message: "Internal server error"})
        
    }
}



module.exports = signUp
