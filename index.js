const express=require('express');
const app=express();
const router=require('./router/route');
require('dotenv').config({path:"./config/.env"});
const PORT=process.env.PORT || 3000;
const path=require('path')
const publicPath=path.join(__dirname,'./public')
const {errors}=require('./middleware/error');

app.use(express.urlencoded({extended:false}));


app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(express.static(publicPath));
app.use('/v1',router);
app.use(errors);

 
app.listen(PORT,()=>{
    console.log(`Your application is running on port ${PORT}`);
})


