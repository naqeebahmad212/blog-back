const mongoose=require(`mongoose`)
const Schema= mongoose.Schema;
const postSchema= new Schema({
    title:{
        type:'string',
        required:[true,'enter a titte']
    },
    body:{
        type:'string',
        required:[true,'enter a titte']
    },
    image:{
        type:'string',
        default:{}
    },
    createdAt:{
        type:Date,
        default:Date.now
        },
    updatedAt:{
       type:Date,
       default:Date.now
            }
    
},{timestamps:true})

const Post=mongoose.model(`Post`,postSchema)
module.exports= Post