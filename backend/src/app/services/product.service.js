const { ObjectId } = require("mongodb");


class ProductService {
    constructor(client) {
        this.Product = client.db().collection("products");
    }


    extractProductData(payload) {

        const product = {
            productname: payload.productname,
            category: payload.category,
            price: payload.price,
            describe: payload.describe,
            Quantity: payload.Quantity,
            notes: payload.notes || '',
        };

        // if (payload.discounted) {
        //     product.notes = "Giảm giá"; // Thêm ghi chú giảm giá
        // }

        // if (payload.isNew) {
        //     product.notes = "Sản phẩm mới"; // Thêm ghi chú sản phẩm mới
        // }

        // // Kiểm tra nếu sản phẩm không mới hoặc không giảm giá
        // if (!payload.isNew && !payload.discounted) {
        //     delete product.notes; // Bỏ qua trường ghi chú
        // }

        // Kiểm tra xem trường ghi chú có được cung cấp hay không
        // if (payload.notes) {
        //     product.notes = payload.notes; // Sử dụng giá trị từ trường ghi chú
        // }

        Object.keys(product).forEach(
            (key) => (product[key] === undefined && delete product[key])
        );
        return product;
    }

    async create(payload) {
        try {
            const product = this.extractProductData(payload); // Trích xuất dữ liệu sản phẩm từ payload
            const result = await this.Product.insertOne(product); // Thêm sản phẩm vào cơ sở dữ liệu
            return result; // Trả về sản phẩm đã được tạo
        } catch (error) {
            throw new Error("An error occurred while creating the product");
        }
    }

    async findByName(productname) {
        return await this.find({
            productname: { $regex: new RegExp(productname), $options: "i" },
        });
    }

    async find(filter) {
        const cursor = await this.Product.find(filter);
        return await cursor.toArray();
    }

    async delete(id) {
        const result = await this.Product.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
        console.log("resultProduct", result);
        return result;
    }

    async update(id, payload) {
        const filter = {
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        };
        const update = this.extractProductData(payload);
        const result = await this.Product.findOneAndUpdate(
            filter,
            { $set: update },
            { returnDocument: "after" }
        );
        return result;
    }

    async findById(id) {
        console.log("id", id);
        return await this.Product.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id) : null,
        });
    }

    async findByCategoryName(categoryName) {
        const product = await this.Product.find({ category: categoryName }).toArray();
        return product;
    }

    async findCategoryProduct(filter) {
        const products = await this.Product.find(filter).toArray();

        return products;
    }

}

module.exports = ProductService;













