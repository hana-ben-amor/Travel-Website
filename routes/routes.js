const express = require('express')
const router = express.Router()
const path = require('path')
router.use(express.static(path.join(__dirname,'/../public/images')))
router.use(express.static(path.join(__dirname,'/../public/javascripts')))

router.use(function (req, res, next) {
    var date = new Date();
    //0 for sunday ans 7 for saturday
    if(date.getDay()>0 && date.getDay() < 6 && date.getHours() > 9 && date.getHours()<18){
        next();
        console.log('okay')
    }else{
      res.render(__dirname+"/../views/offline.pug")
      console.log(date.getDay()+' '+date.getHours())
        
    }
});
const authMiddleware = (req,res,next)=>{
    const auth=true
    if(auth){
        console.log('user authorized')
        next();
    }else{
        res.send('user is not authorized')
    }
}


router.get('/',authMiddleware,(req,res)=>{
    res.render('home')
})
router.get('/services',authMiddleware,(req,res)=>{
    res.render(__dirname+"/../views/services.pug")
   })
router.get('/contact',authMiddleware,(req,res)=>{
    res.render(__dirname+"/../views/contact.pug")
   })
router.get('/about',authMiddleware,(req,res)=>{
    res.render(__dirname+"/../views/about.pug")
   })
   router.get('/offline',authMiddleware,(req,res)=>{
    res.render(__dirname+"/../views/offline.pug")
   })
module.exports=router