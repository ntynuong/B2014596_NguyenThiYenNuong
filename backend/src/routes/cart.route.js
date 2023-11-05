const express = require('express');

const carts = require('../app/controllers/CartController');

const router = express.Router();

router.route('/:userId/:productId')
    .put(carts.updateCart)
    .delete(carts.deleteCart);

router.route('/:userId')
    .get(carts.getCart)
    .delete(carts.deleteAllCart);






router.route('/')

    .post(carts.addToCart);


module.exports = router;