import mongoose from "mongoose"
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/user.js';
import products from './data/product.js'
import User from './model/usermodel.js'
import Product from './model/productModel.js'
import Order from './model/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()
//插入样本数据到数据库
const importData= async ()=>{
    try{
        //清空数据样本数据
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        //样本输入
        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product =>{
            return {...product,user:adminUser}
        })
        await Product.insertMany(sampleProducts)

        console.log('插入成功'.green.inverse)

    }catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}
//插入样本数据到数据库
const destoryData= async ()=>{
    try{
        //清空数据样本数据
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        console.log('样本数据销毁成功'.green.inverse)
        process.exit(1)
    }catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

//判断执行的函数
if(process.argv[2] === '-d'){
    destoryData()
}else{
    importData()
}