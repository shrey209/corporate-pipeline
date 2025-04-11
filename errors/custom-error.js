class customApiError extends Error{
    constructor(messsage,statusCode){
        super(messsage)
        this.statusCode=statusCode
    }
}

const createCustomError=(msg,code)=>{
    return customApiError(msg,code)
}

module.exports={createCustomError,customApiError}