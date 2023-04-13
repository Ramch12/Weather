const NodeGeocoder = require('node-geocoder');
require('dotenv').config({path:'./config/.env'});

const options = {
    provider: process.env.host,
    apiKey: process.env.API_KEY,
    formatter: null
};

const geocoder = NodeGeocoder(options);

async function getData(params) {
    const res = await geocoder.geocode({
        address: params.address,
        country: params.country,
        zipcode: params.zipcode
    });
      
    return res;

   
}

module.exports=getData;