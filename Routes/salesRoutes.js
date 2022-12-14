import express from 'express';
import { allSales, singleSale, newSale,  updateSale, deleteSale } from '../Controllers/salesController.js';

const saleRouter = express.Router();

// endpoint for all
saleRouter.get( '/sales', allSales);

//endpoint to get a single sale
saleRouter.get('/sales/:id', singleSale )

//endpoint to create a sale
saleRouter.post('/sales', newSale)

// endpoint to update a sale
saleRouter.patch('/sales/:id',  updateSale )

//endpoint to delete a sale
saleRouter.delete('/sales/:id', deleteSale)

export default saleRouter;

