const express= require('express')
const router=express.Router()
const adminController=require('../controllers/adminController')

router.post('/register',adminController.post_register)
router.post('/login',adminController.post_login)
router.get('/profile',adminController.get_profile)
router.get('/logout',adminController.get_logout)



module.exports=router