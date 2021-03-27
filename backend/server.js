import  express from 'express' //引入express
import dotenv from 'dotenv'
import colors from 'colors'
import products from "./data/product.js"
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js';
import {notFound,errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
const app =express()

connectDB()


app.get('/',(req,res) =>{
  res.send('服务器已经运行...')
})
app.use('/api/products',productRoutes)
//自定义中间件
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`服务器在${process.env.NODE_ENV}模型下${PORT}端口号运行`.green.bold))
