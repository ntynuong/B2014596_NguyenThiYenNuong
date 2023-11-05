const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/ // Kiểm tra định dạng email
    },
    password: {
        type: String,
        require: true,
        validate: {
            validator: (value) => value.length > 8,
            message: 'Password must be at least 8 characters'
        }
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
}, { strict: true, versionKey: false });

// chi luu cac truong duoc dinh nghia trong schema, neu muon luu tu do thi bo strict



module.exports = mongoose.model('User', User);
