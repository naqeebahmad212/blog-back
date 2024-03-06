const User=require(`../models/user`)
const bcrypt=require('bcrypt')
const jwt=require(`jsonwebtoken`)

const maxAge=60*60*24*3
const createToken=(id)=>{
    return jwt.sign({id},`react`,{expiresIn:maxAge})
}

const errHandler=(err)=>{
    const errors={email:'',password:''}
if(err.code==11000){
    errors.email='email already exists'
    return errors;
}
if(err.message.includes(`User validation failed`)){
    console.log(`sdhj`)
    Object.values(err.errors).forEach((properties)=>{
        errors[properties.path]=properties.message
})

return errors
}}


const post_login= async(req,res)=>{
   
    try {
        const {email,password}=req.body
        const user= await User.findOne({email})
        if(user){
            const auth= await bcrypt.compare(password,user.password)
            if(auth){
                const token=createToken(user._id)
                res.cookie('jwt',token,{maxAge:maxAge*1000, httpOnly:true}).json({success:true})    
            }else{
                throw Error `Invalid credentials`
            }
    
        }else{
            throw Error `Invalid credentials`
        }
        
    } catch (err) {
    //    console.log(err.message) 
       res.json({success:false})
    }
}





// register req
const post_register= async(req,res)=>{
   try {
    
    const {email,password}=req.body
    const user =await User.create({email,password})
    res.cookie('jwt','lsfjls')
    res.json({success:'Acount Created successfully'})
   } catch (err) {
    const errors=errHandler(err)
    res.json({errors})
   }
}


const get_profile=(req,res)=>{
const token= req.cookies.jwt
if(token){
  jwt.verify(token,'react',(err,userInfo)=>{
    if(err){
        res.json({success:false})
    }else{
        res.json({success:true})
    }
  })
    
}else{
    res.json({success:false})
}
}

const get_logout=(req,res)=>{
    res.cookie('jwt','',{maxAge:1}).json('done')
}


module.exports={
    post_login,
    post_register,
    get_profile,
    get_logout
}