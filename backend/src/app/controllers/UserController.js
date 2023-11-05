// const User = require('../models/User');

const UserService = require("../services/user.service");
const MongoDB = require("../utils/mongodb.util");
const ApiError = require("../api-error");
const upload = require('./multer');



exports.getAllUsers = async (req, res, next) => {
    let documents = [];

    try {
        const userService = new UserService(MongoDB.client);
        const { fullname } = req.query;
        if (fullname) {
            documents = await userService.findByName(fullname);
        }
        else {
            documents = await userService.find({});
        }

        return res.status(200).json(documents);

    } catch (error) {
        return next(
            new ApiError(500, "An error occurred while retrieving contacts")
        );
    }

};

exports.updateUser = [upload.none(), async (req, res, next) => {
    console.log("update", req.body);
    if (Object.keys(req.body).length == 0) {
        return next(new ApiError(400, "Dữ liệu cập nhật không được để trống"));
    }

    try {
        const userService = new UserService(MongoDB.client);
        // khi thuc thi lenh thu 2 document thi du lieu da duoc update

        const document = await userService.update(req.params.id, req.body);

        if (!document) {
            return next(new ApiError(404, "Không tìm thấy người dùng"));
        }
        return res.json({ status: 200, message: "Cập nhật thông tin người dùng thành công!" });

    } catch (error) {
        return next(
            new ApiError(500, `Lỗi cập nhật người dùng với id=${req.params.id}`)
        );
    }
}
];

exports.findOneUser = async (req, res, next) => {
    try {
        const userService = new UserService(MongoDB.client);
        // console.log("id", req.params.id);
        const document = await userService.findById(req.params.id);
        if (!document) {
            return next(new ApiError(404, "Không tìm thấy người dùng"));
        }
        // console.log(document);


        // Lấy hình ảnh tương ứng với id trong collection HinhHangHoa
        // const imageService = new ImageService(MongoDB.client);
        // const images = await imageService.findByMSHH(req.params.id);

        // // Gắn hình ảnh vào thông tin sản phẩm
        // document.images = images;

        // console.log("documentfind", document);

        // return res.send(document);
        return res.status(200).json(document);

    } catch (error) {
        return next(
            new ApiError(
                500,
                `Lỗi khi lấy người dùng với id=${req.params.id}`
            )
        );
    }
};