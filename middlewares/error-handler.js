const {customApiError} = require('../errors/custom-error')

const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof customApiError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:'Something went wrong Please try again'})
}

module.exports={errorHandlerMiddleware}