const logger=require('../log/logger');

exports.errors=(err,req,res,next)=>{     
    
    logger.log({

        level:"error",
        message:err.message
        
    });
    
    if(err.code==="ENOTFOUND") return res.status(400).json({status:0,message:"please make sure your are connected with interet"});
     
    res.status(500).json({status:0,message:err.message});
}