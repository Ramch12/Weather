const express=require('express');
const router=express.Router();
const {weather_data}=require('../controller/controller');
const {Home_page}=require('../controller/controller');



router.post('/weather_data',weather_data);


router.get('/home',Home_page);



module.exports=router;