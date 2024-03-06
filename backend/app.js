const express= require(`express`)
const app =express()
const connectDB=require('./config/db')
const adminRouter=require(`./routes/adminRoutes`)
const blogRouter=require('./routes/blogRoutes')
var cors = require('cors')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const cookieParser=require('cookie-parser')

app.use(express.static(`public`))
app.use(cookieParser())
app.use(cors({credentials:true,origin:'http://localhost:3000'})) // Use this after the variable declaration
app.use(blogRouter)
app.use(adminRouter)
connectDB()
app.listen(3001,()=>{
    console.log('running')
})