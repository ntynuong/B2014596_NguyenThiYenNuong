const express = require('express');


const categorys = require('../app/controllers/CategoryController');

const router = express.Router();



router.route('/')
    .get(categorys.getNameCategorys)
    .post(categorys.createCategory);

router.route('/:id')
    .get(categorys.findProduct)
//     .put(categorys.updateProduct)
// .delete(categorys.deleteProduct);

module.exports = router;

