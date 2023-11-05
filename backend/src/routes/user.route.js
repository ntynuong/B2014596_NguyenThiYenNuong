const express = require('express');

const users = require('../app/controllers/UserController');
const router = express.Router();

router.route('/')
    .get(users.getAllUsers);
// .post(users.create)
// .delete(users.deleteAll);

router.route('/:id')
    .get(users.findOneUser)
    .put(users.updateUser);
//     .delete(users.delete);

module.exports = router;