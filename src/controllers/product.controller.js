import { createProductService, deletProductService, getProductService, updateProductService } from "../service/product.service.js"


export const createProduct=async(req,res)=>{
    try
    {
        const product=await createProductService(req.body);
        res.status(201).json(product);
    }
    catch(error)
    {
        res.status(500).json({
            message:error.message
        })
    }
}


export const getProduct=async(req,res)=>{
    try{
        const product=await getProductService(req.params.id);
        if(!product)
        {
            return res.status(404).json({
                message:'Product not found'
            })
        }
        res.json(product);
    }
    catch(error)
    {
        res.status(500).json({
            message:error.message
        })
    }
}

export const updateProduct=async(req,res)=>{
    try{

        const product=await updateProductService(
            req.params.id,
            req.body
        )
        if(!product)
        {
            return res.status(404).json({
                message:'Product not found'
            })
        }
       res.json(product);
    }
    catch(error)
    {
        console.log(error);
    }
}

export const deleteProduct=async(req,res)=>{
    try{
        const deleteProduct=await deletProductService(req.params.id)
        if(!deleteProduct)
        {
            return res.status(404).json({
                message:'Product not found'
            })
        }
        res.json({
            message:"Product deleted successfully"
        })
    }
    catch(error)
    {
        res.status(500).json({
            message:error.message
        })
    }
}