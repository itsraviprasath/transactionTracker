const {User} = require("../models/User");
const bcrypt = require('bcrypt');


const authUser = async(req,res)=>{
    try{
        const user = await User.findOne({ email: req.body.email });
        if(!user)
        res.send({message:"User not exsits",login:"false"})
        else{
            const validPassword = await bcrypt.compare(req.body.password,user.password)
            if(!validPassword){
                res.send({message:"Invalid Password",login:"false"})
            }
            else{
                res.send(user)
            }
        }}
    
    
    catch(err){
        console.log("Error is" + err)
        res.status(500).send({message:"internal Server Error"});
    }
}


module.exports=authUser;

