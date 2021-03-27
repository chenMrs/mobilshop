import  express from 'express' //引入express
import dotenv from 'dotenv'
import colors from 'colors'
import products from "./data/product.js"

import connectDB from './config/db.js';
dotenv.config()
const app =express()

connectDB()

app.get('/',(req,res) =>{
  res.send('服务器已经运行...')
})
app.get('/api/products',(req,res) =>{
  res.json(products)
})
app.get('/api/products/:id',(req,res) =>{
  const product = products.find((product)=>product.id === req.params.id)
  res.json(product)
})
const PORT = process.env.PORT || 5000
app.listen(PORT,console.log(`服务器在${process.env.NODE_ENV}模型下${PORT}端口号运行`.green.bold))
