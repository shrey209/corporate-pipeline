const notFound=(req,res)=>{
    res.status(404).send('Route not exists')
}

module.exports={notFound}