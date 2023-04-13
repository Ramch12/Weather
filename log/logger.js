const winston=require('winston');

const logger=winston.createLogger({
    transports:[

        new winston.transports.File({filename:'./log/result.log',level:'info'}),
        new winston.transports.File({filename:'./log/error.log',level:'error'})

    ]
});

module.exports=logger;
