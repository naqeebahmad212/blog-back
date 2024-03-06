const Post= require('../models/post')

const post_createBlog=async(req,res)=>{
    const {title,body}=req.body
    let image=''
    if(req.file !== undefined){

        image=req.file.filename
    }
    const post= await Post.create({title,body,image})
    console.log(post)
    res.json(req.file)
    
}

const get_posts= async(req,res)=>{
    const posts=await Post.find().sort({createdAt:-1})

    res.send(posts)
}

const get_singlePost=async(req,res)=>{
const id= req.params.id 
const post = await Post.findById(id)
res.send(post)
}


const delete_singlePost= async(req,res)=>{
    const id=req.params.id 
    await Post.findByIdAndDelete(id)
    res.send('deleted')
}


const get_checkUser=(req,res)=>{
    res.send(`recieved`)
}

module.exports={
    post_createBlog,
    get_posts,
    get_singlePost,
    delete_singlePost,
    get_checkUser
}