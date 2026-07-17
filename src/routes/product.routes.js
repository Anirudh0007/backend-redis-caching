import express from 'express';
import { createProduct, getProduct, updateProduct } from '../controllers/product.controller.js';

const router=express.Router();

router.post('/', createProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);

export default router;