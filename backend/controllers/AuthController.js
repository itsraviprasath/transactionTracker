const {User} = require("../models/User");
const bcrypt = require('bcrypt');


const authUser = async(req,res)=>{
    try{
        const user = await User.findOne({ email: req.body.email });
        if(!user)
            return res.status(401).send({message: "User not exsits"});
        const validPassword = await bcrypt.compare(
            req.body.password,user.password
        )
        if(!validPassword)
            return res.status(401).send({message:"Invalid password"});
        const token = user.generateAuthToken();
        res.status(200).send({data:token,message:"Succesfully Logged In"});
        }
    
    catch(err){
        res.status(500).send({message:"internal Server Error"});
    }
}


module.exports=authUser;

