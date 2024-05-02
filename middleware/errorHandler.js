const {constants}= require("../constants");
const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                titel:"Validation Failed", 
                message:err.message, 
                stackTrace: err.stack,
            });
            
            break;
        case constants.NOT_FOUND:
            res.json({
                titel:"Not Found", 
                message:err.message, 
                stackTrace: err.stack,
            });
            break;
        case constants.FORBIDDEN:
            res.json({
                titel:"Forbidden", 
                message:err.message, 
                stackTrace: err.stack,
                });
            break;
        case constants.UNAUTHORIZED:
            res.json({
                titel:"Unauthorized", 
                message:err.message, 
                stackTrace: err.stack,
                });
            break;   
        case constants.SERVER_ERROR:
            res.json({
                titel:"Server Error", 
                message:err.message, 
                stackTrace: err.stack,
                });
            break;                      
        default:
            console.log("Nor Error, All good !");
            break;
    }
    
};

module.exports = errorHandler;
