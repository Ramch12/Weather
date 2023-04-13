require('dotenv').config({path:"../config/.env"});

const axios=require('axios');

exports.fetchData=async(latitude,longitude)=>{
    try{
        const {data}=await axios.get(`${process.env.open_weather_url}?lat=${latitude}&lon=${longitude}&appid=${process.env.weather_API_KEY}`);
    
        return data;
    }
    catch(err)
    {
        res.status(500).json({status:0,message:e.message});
    }
}