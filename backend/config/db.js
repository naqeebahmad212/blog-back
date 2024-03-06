const mongoose=require(`mongoose`)
const express= require(`express`)
const app =express()
const URI='mongodb://localhost:27017/react-project'

const connectDB= async()=>{
   try{
    mongoose.set(`strictQuery`,false);
    await mongoose.connect(URI)
    console.log('database connected')
 
 
   }catch(err){
    consol.log(err)
   }
}

module.exports=connectDB