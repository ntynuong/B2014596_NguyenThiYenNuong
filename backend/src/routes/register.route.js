const express = require('express');


const router = express.Router();


// const User = require('../app/models/User');
const registerController = require('../app/controllers/RegisterController');

// signupController.index
// router.use('/create', signupController.create);
// router.use('/', signupController.index);


router.route('/admin')
    .post(registerController.registerAdmin);


router.route('/')
    .post(registerController.register);


// router.post('/', async (req, res, next) => {


//     try {
//         const { fullname, email, password, address, phone } = req.body;
//         console.log(req.body);

//         // kiem tra tai khoan da ton tai hay chưa
//         console.log(email);
//         const existUser = await User.findOne({ email: email });

//         if (existUser) {
//             return res.status(400).json({ message: 'Tai khoan da ton tai' });
//         }

//         else {
//             const newUser = new User({ fullname, email, password, address, phone });
//             await newUser.save();
//             next();
//             return res.status(200).json({ message: 'Tao tai khoan thanh cong' });
//         }

//     } catch (error) {
//         console.log('loi');
//         return res.status(500).json({ message: 'Loi server' });
//     }


// });



module.exports = router;
