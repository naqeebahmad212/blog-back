const mongoose= require('mongoose')
const bcrypt=require('bcrypt')
const Schema=mongoose.Schema;
const userSchema=new Schema({
    
   
    email:{
        type:'string',
        required:[true,'Please enter Email'],
        unique:[true,'Email already exits']
    },
    password:{
        type:'string',
        required:[true,'Enter Password'],
        minlength:[6,'Enter atleast six character']

       
    },
})


userSchema.pre('save', async function(next){
    const salt=await bcrypt.genSalt()
    this.password= await bcrypt.hash(this.password,salt)
    next()
})

const User=mongoose.model('User',userSchema)
module.exports=User