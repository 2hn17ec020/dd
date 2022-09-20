const express=require('express')
const router=express.Router();
const productController=require('../controller/productController');
const orderController=require('../controller/orderController');



//products api 
router.get('/products/',productController.getProducts)

router.post('/products/',productController.createProducts);

//Order APIs

router.get('/orders/',orderController.getOrders)
router.post('/orders/',orderController.createOrders);
router.get('/orders/:id',orderController.getOrdersByID)



module.exports=router;
