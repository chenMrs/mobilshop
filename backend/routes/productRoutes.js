import express from 'express'
import asyncHandler from 'express-async-handler';
const router = express.Router()
import Product from '../model/productModel.js'

//@desc 请求所有产品
//@route GET/api/products
//@access 公开
router.get('/', asyncHandler(async (req,res) =>{
    const products = await Product.find({})
    res.json(products)
  })
  )

  //@desc 请求单个产品
//@route GET/api/products/:id
//@access 公开
router.get(
    '/:id',
    asyncHandler(async (req,res) =>{
    const products = await Product.findById(req.params.id)
    if(products){
        res.json(products)
    }else{
        res.status(404)
        throw new Error('查询错误')
    }
  })
  )
  export default router 