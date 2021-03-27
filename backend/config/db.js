import mongoose from 'mongoose'

//连接数据库
const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser : true,
            UseCreateIndex : true,
        }) 
        console.log(`shuchu:${conn.connection.host}`.cyan.underline);
    }catch(error){
        console.log(`数据库错误:${error.message}`.red.bold.underline);
        process.exit(1)

    }
}
export default connectDB