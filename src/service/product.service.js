import { json } from "express";
import { redisClient } from "../config/redis.js";
import Product from "../models/product.model.js";


export const createProductService=async(productData)=>{
    const product=await Product.create(productData);
    return product;
}

export const getProductService=async(id)=>{
    const cacheKey=`product:${id}`;
    const cachedProduct=await redisClient.get(cacheKey);

    if(cachedProduct)
    {
        console.log('Cache hit');
        return JSON.parse(cachedProduct);
    }

    console.log('Cache miss');
    await new Promise(resolve=>setTimeout(resolve,2000));
    const product=await Product.findById(id);
    if(!product) return null;

    await redisClient.set(cacheKey, JSON.stringify(product),
    {EX:60}
);
console.log('Saved to Redis');
return product;
    


}


export const updateProductService=async(id,data)=>{
    const updatedProduct = await Product.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
        }
);

if(!updatedProduct)
{
    return null;
}
const cacheKey=`prodcut:${id}`;
await redisClient.del(cacheKey);
console.log('Cache Deleted');
return updatedProduct;
}

export const deletProductService=async(id)=>{
    const deleteProduct=await Product.findByIdAndDelete(id);

    if(!deleteProduct) return null;

    const cacheKey=`product:{id}`;
    await redisClient.del(cacheKey);
    console.log('cache deleted');
    return deleteProduct;
}