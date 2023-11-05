<template>
    <div class="container">
        <div class="row product">
            <h3>Cập nhật sản phẩm</h3>

            <div class="col-lg-4 col-md-4 col-sm-4"></div>

            <div class="col-lg-4 col-md-4 col-sm-4">
                <div v-if="showError" class="container error-message alert alert-danger" role="alert">
                    {{ error }}
                </div>

                <form class="justity-content-center align-items-center" enctype="multipart/form-data"
                    @submit="updateProduct($event, productId)">
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
                        <div class="price-product-input">
                            <input type="text" class="form-control" v-model="Quantity">
                        </div>
                    </div>

                    <!-- <div class="mb-3">
                        <label class="form-label">Mô tả: </label>
                        <div class="describe-product-input">
                            <textarea v-model="describe"></textarea>
                        </div>
                    </div> -->

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Mô tả: </label>
                        <textarea v-model="describe" class="form-control" id="exampleFormControlTextarea1" rows="6"
                            placeholder=""></textarea>
                    </div>

                    <!-- <div class="mb-3">
                        <label class="form-label">Ghi chú: </label>
                        <div class="notes-product-input d-flex">
                            <textarea v-model="notes" style="height:200px"></textarea>
                            <p>(Không bắt buộc)</p>
                        </div>
                    </div> -->

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Ghi chú: </label>
                        <textarea v-model="notes" class="form-control" id="exampleFormControlTextarea1" rows="2"
                            placeholder="Không bắt buộc"></textarea>
                    </div>





                    <!-- <div class="mb-3">
            <label class="form-label">Loại: </label>
            <div class="category-product-input">
                <input list="categorys" name="category" v-model="category">
                <datalist id="categorys">
                    <option value="Tra"></option>
                    <option value="Coffee"></option>
                    <option value="Tra Sua"></option>
                    <option value="Trang Mieng"></option>
                </datalist>
            </div>
        </div> -->
                    <div class="mb-3">
                        <label class="form-label">Hình Ảnh: </label>
                        <div class="category-product-input">
                            <input type="file" accept="image/*" name="imageURL" class="form-control"
                                @change="handleFileChange">
                            <!-- dang sai -->
                            <!-- <img :src="imageURL ? `http://localhost:3000/images/${imageURL}` : ''" :alt="productname"
                    class="product-image"> -->



                            <!-- doi -->
                            <img v-if="temporaryImageURL" :src="temporaryImageURL" alt="Product Image" class="image-file">
                            <img v-else-if="imageURL" :src="`http://localhost:3000/images/${imageURL}`" :alt="productname"
                                class="product-image">

                            <!-- <img v-else :key="image" :src="`http://localhost:3000/images/${product.images}`" :alt="product.productname"
                    class="product-image"> -->


                        </div>
                    </div>
                    <button type="submit" class=" btn save">Cập nhật</button>
                    <router-link to="/admin/products"><button class="cancel btn">Hủy</button></router-link>
                </form>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProductService from '@/services/product.service';
import CategoryService from '@/services/category.service';

export default {

    name: 'updateProduct',

    data() {
        return {
            productId: '',
            productname: '',
            price: 0,
            category: '',
            Quantity: '',
            describe: '',
            notes: '',
            categories: [],
            // doi 
            imageURL: null,

            // dang sai
            // imageURL: '',
            showError: false,
            error: 'Vui lòng nhập đầy đủ thông tin',
            temporaryImageURL: null


        };
    },

    mounted() {
        this.fetchgetNameCategorys()
    },

    created() {
        // let productId = this.$route.params.id;
        this.productId = this.$route.params.id;
        // console.log("productId", productId);
        console.log("productId", this.productId);


        // if (productId) {
        //     this.get(productId);
        // }

        if (this.productId) {
            this.get(this.productId);
        }
    },

    methods: {
        handleFileChange(event) {
            // Lấy tệp tin từ sự kiện change
            // dang sai 
            // this.imageURL = event.target.files[0];


            // doi 
            const file = event.target.files[0];
            this.imageURL = file;
            console.log("file", file);
            this.temporaryImageURL = URL.createObjectURL(file);

        },


        async updateProduct(event, productId) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)

            if (this.productname === '' || this.price === '' || this.category === '' || this.describe === '' || this.Quantity === '') {
                this.showError = true;
            } else {
                this.showError = false;

                const formData = new FormData();
                formData.append('productname', this.productname);
                formData.append('price', this.price);
                formData.append('category', this.category);
                formData.append('imageURL', this.imageURL);
                formData.append('notes', this.notes);
                formData.append('Quantity', this.Quantity);
                formData.append('describe', this.describe);


                try {
                    const response = await ProductService.updateProduct(productId, formData);
                    if (response.status === 200) {
                        console.log("response", response);
                        alert("Cập nhật thành công");
                        // if (this.imageURL) {
                        //     this.imageURL = '';
                        // }
                        this.$router.push('/admin/products');
                    } else {
                        console.log("response", response);
                        console.error('Error', response.message);
                        console.log(response.status);
                    }
                } catch (error) {
                    this.error = error.response.message;
                    this.showError = true;
                }


                // axios.put(`http://localhost:3000/api/products/${productId}`, formData)

                //     .then(response => {

                //         if (response.status === 200) {
                //             alert('Thêm sản phẩm thành công');
                //             this.$router.push('/admin/products');
                //         }

                //         else {
                //             console.error('Error:', response.status);
                //         }

                //     })
                //     .catch(error => {


                //         if (error.response && error.response.status === 400) {
                //             this.error = error.response.data.message;
                //         }

                //         else {

                //             this.error = 'Loi khong xac dinh. Vui long thu lai sau';
                //         }
                //         this.showError = true;

                //     })




            }

        },




        async get(productId) {
            try {
                const response = await ProductService.findOneProduct(productId);
                console.log("data", response);
                this.productname = response.productname;
                const Price = response.price;
                // this.price = (response.price).toLocaleString('vi-VN');
                this.price = Price;
                this.category = response.category;
                this.notes = response.notes;
                this.Quantity = response.Quantity;
                this.describe = response.describe;


                // console.log("images", response.images);

                this.imageURL = response.images;
                console.log("HinhHangHoa", this.imageURL);


            } catch (error) {
                console.error(error);

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
    /* width: 50%; */
}

.cancel {
    margin-left: 3px;
    color: red;
    font-weight: bold;
    background-color: rgb(250, 194, 174);
}

.save {
    color: rgb(20, 20, 255);
    font-weight: bold;
    background-color: rgb(179, 205, 255);
}


.product-image,
.image-file {
    width: 300px;
    height: 300px;
    margin-top: 5px;

}

.product {
    margin: 30px 0;
}

h3 {
    text-align: center;
    font-weight: bold;
}
</style>