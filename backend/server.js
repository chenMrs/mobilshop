const express = require('express') //引入express
const products = require("./data/product")

const app =express()

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

app.listen(5000,console.log('服务器已经在5000端口号运行...'))
