const mongoose = require('mongoose')


const connectDB = async()=> {
    try{
        console.log(process.env.MONGO_URI)
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log('this is con')
        console.log(`MongoDB connected: ${con.connection.host}`)
    } catch(err) {
        console.log(err)
        process.exit(1)
    }
}

module.export = connectDB