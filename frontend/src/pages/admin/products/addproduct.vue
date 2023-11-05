<template>
    <div class="container">
        <h1>Them san pham</h1>

        <div v-if="showError" class="container error-message alert alert-danger" role="alert">
            {{ error }}
        </div>

        <form enctype="multipart/form-data" @submit="addProduct">
            <div class="mb-3 form-group">
                <label for="exampleFormControlSelect1">Danh Mục:</label>
                <select class="form-control" id="exampleFormControlSelect1" v-model="category">
                    <option v-for="category in categories" :key="category.id"> {{ category.categoryname }}</option>
                </select>
            </div>

            <div class="mb-3">
                <label class="form-label">Tên sản phẩm: </label>
                <div class="name-product-input">
                    <input type="text" class="form-control" v-model="productname">
                </div>

            </div>

            <div class="mb-3">
                <label class="form-label">Giá: </label>
                <div class="price-product-input">
                    <input type="text" class="form-control" v-model="price">
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Số lượng: </label>
                <div class="quantity-product-input">
                    <input type="text" class="form-control" v-model="Quantity">
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Mô tả: </label>
                <div class="describe-product-input">
                    <textarea v-model="describe"></textarea>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Ghi chú: </label>
                <div class="notes-product-input d-flex">
                    <textarea v-model="notes" style="height:200px"></textarea>
                    <p>(Không bắt buộc)</p>
                </div>
            </div>




            <div class="mb-3">
                <label class="form-label">Hình Ảnh: </label>
                <div class="category-product-input">
                    <input type="file" accept="image/*" name="imageURL" class="form-control" @change="handleFileChange">
                    <img :src="temporaryImageURL" alt="Product Image" v-if="temporaryImageURL" class="image-file">
                </div>
            </div>

            <button type="submit" class=" btn btn-primary">Lưu</button>
            <router-link to="/admin/products"><button class="cancel btn btn-danger">Hủy</button></router-link>

        </form>
    </div>
</template>

<script>
import axios from 'axios';
import ProductService from '@/services/product.service';
import CategoryService from '@/services/category.service';


export default {

    name: 'addProduct',

    data() {
        return {
            productname: '',
            // price: '',
            price: 0,
            Quantity: '',
            describe: '',
            notes: '',
            imageURL: null,
            showError: false,
            error: 'Vui lòng nhập đầy đủ thông tin',
            temporaryImageURL: null,

            category: '',
            categories: [],
        };
    },

    mounted() {
        this.fetchgetNameCategorys()
    },


    methods: {
        handleFileChange(event) {

            const file = event.target.files[0];
            this.temporaryImageURL = URL.createObjectURL(file);
            this.imageURL = file;
        },


        addProduct(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)

            if (this.productname === '' || this.price === '' || this.category === '' || this.Quantity === '' || this.describe === '') {
                this.showError = true;
            } else {
                this.showError = false;

                const formData = new FormData();
                formData.append('productname', this.productname);
                formData.append('price', this.price);
                formData.append('notes', this.notes);
                formData.append('Quantity', this.Quantity);
                formData.append('describe', this.describe);
                formData.append('category', this.category);
                formData.append('imageURL', this.imageURL);
                console.log("imageURL", this.imageURL);

                axios.post('http://localhost:3000/api/products', formData)

                    .then(response => {

                        if (response.status === 200) {
                            alert('Thêm sản phẩm thành công');
                            this.$router.push('/admin/products');
                        }

                        else {
                            console.error('Error:', response.status);
                        }

                    })
                    .catch(error => {


                        if (error.response && error.response.status === 400) {
                            this.error = error.response.data.message;
                        }

                        else {

                            this.error = 'Loi khong xac dinh. Vui long thu lai sau';
                        }
                        this.showError = true;

                    })
            }

        },

        async fetchgetNameCategorys() {
            try {
                this.categories = await CategoryService.getNameCategorys();
            } catch (error) {
                console.error(error);
            }
        },

    }
}
</script>

<style scoped>
.error-message {
    color: red;
    margin-top: 10px;
}

.cancel {
    margin-left: 3px;
}

.image-file {
    width: 300px;
    height: 300px;
    margin-top: 5px;

}
</style>