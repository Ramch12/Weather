require('dotenv').config({ path: '../config/.env' });
const getData = require('../geocoder/geocoder');
const logger=require('../log/logger');
const {fetchData}=require('../openweather/weatherapi');

exports.weather_data = async (req, res, next) => {
    
    try{

        const { address, country, zipcode } = req.body;
    
        const report = await getData({ address, country, zipcode });

        const data=await fetchData(report[0].latitude,report[0].longitude);


        let curr_wdata={
            description:data.weather[0].description,
            temprature:data.main.temp-273,
            humidity:data.main.humidity,
            air_pressure:data.main.pressure,
            visibility:data.visibility/1000,
            wind_speed:data.wind.speed * 3.6,
            Place_Name:data.name
        }

        logger.log({
            level:"info",
            message:curr_wdata
        });

        res.render('displaydata',curr_wdata);
       

    }
    catch(err)
    {  

    //    next(err);
    console.log(err);
        
    }
}


exports.Home_page=(req,res,next)=>{
              res.render('index');
}
