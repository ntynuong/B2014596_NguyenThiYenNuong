<template>
    <div class="container">
        <div class="row">

            <div class="col-md-5 text-center">
                <div class="card">
                    <img :key="image" :src="`http://localhost:3000/images/${product.images}`" :alt="product.productname"
                        class="product-image">
                </div>

            </div>
            <div class="col-md-7">
                <h2>{{ product.productname }}</h2>

                <p>{{ product.describe }}</p>
                <!-- <p class="text-price">{{ parseInt(product.price.replace(/\s/g, '')).toLocaleString('vi-VN') }}&#8363;</p> -->
                <p class="text-price">{{ product.price }}&#8363;</p>

                <div class="d-flex">
                    <p class="mt-3">Số lượng:</p>
                    <button class=" button-quantity" @click="decreaseQuantity">-</button>
                    <button class=" button-quantity-number"> {{ quantity }}</button>
                    <button class=" button-quantity" @click="increaseQuantity">+</button>
                </div>



                <button class="price btn btn-danger mt-3" @click="addToCartQuantity(product, quantity)">THÊM VÀO GIỎ
                    HÀNG</button>
            </div>
        </div>
    </div>



    <!-- Lay cac san pham cung danh muc (cac san pham tuong tu)-->

    <div class="container card product-same">
        <h3 class="text-center mt-4">CÁC SẢN PHẨM TƯƠNG TỰ</h3>

        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="row d-flex">
                    <div class="card col-sm-4 text-center" v-for="item in items" :key="item._id">
                        <img :key="image" :src="`http://localhost:3000/images/${item.images}`" :alt="item.productname"
                            class="item-image">
                        <div class="card-body text-center">
                            <p class="card-name">{{ item.productname }}</p>
                            <!-- <p class="card-price">{{ parseInt(item.price.replace(/\s/g, '')).toLocaleString('vi-VN') }}&#8363; -->
                            <p class="card-price">{{ item.price }}&#8363;
                            </p>

                            <div class="icon-hover d-flex">
                                <div class="icon-eye" @click="viewProduct">
                                    <router-link :to="{ name: 'DetailProduct', params: { id: item._id } }" class="nav-link">
                                        <i class="bi bi-eye"></i>
                                    </router-link>

                                    <!-- <div class="icon-eye" @click="viewProduct(item._id)">
                                    <i class="bi bi-eye"></i>
                                </div> -->
                                </div>
                                <div class="icon-cart" @click="addToCart(item)">
                                    <i class="bi bi-cart"></i>
                                </div>
                            </div>
                        </div>
                    </div>




                    <!-- <div class="col-sm-4">
                    <img src="public/img/cafesua.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <p class="card-name">Cà Phê Sữa</p>
                        <p class="card-price">30.000 đ</p>
                        <button class="price btn btn-danger">ĐẶT HÀNG</button>
                    </div>
                </div>
                <div class="col-sm-4">
                    <img src="public/img/tradao.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <p class="card-name">Cà Phê Sữa</p>
                        <p class="card-price">30.000 đ</p>
                        <button class="price btn btn-danger">ĐẶT HÀNG</button>
                    </div>

                </div>
                <div class="col-sm-4">
                    <img src="public/img/dagona.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <p class="card-name">Cà Phê Sữa</p>
                        <p class="card-price">30.000 đ</p>
                        <button class="price btn btn-danger">ĐẶT HÀNG</button>
                    </div>

                </div> -->
                </div>



            </div>

            <!-- <div class="product-carousel carousel-item active">
            <div class="row d-flex">
                <div class="col-sm-4">
                    <img src="public/img/travai.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <p class="card-name">Cà Phê Sữa</p>
                        <p class="card-price">30.000 đ</p>
                        <button class="price btn btn-danger">ĐẶT HÀNG</button>
                    </div>
                </div>
                <div class="col-sm-4">
                    <img src="public/img/trasen.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <p class="card-name">Cà Phê Sữa</p>
                        <p class="card-price">30.000 đ</p>
                        <button class="price btn btn-danger">ĐẶT HÀNG</button>
                    </div>

                </div>
                <div class="col-sm-4">
                    <img src="public/img/matchadaxay.png" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <p class="card-name">Cà Phê Sữa</p>
                        <p class="card-price">30.000 đ</p>
                        <button class="price btn btn-danger">ĐẶT HÀNG</button>
                    </div>

                </div>
            </div>
        </div> -->
        </div>
    </div>
</template>

<script>
import ProductService from '@/services/product.service';
import CartService from '@/services/cart.service';

import { useAuthStore } from '../stores/auth';

export default {
    name: 'DetailProduct',

    data() {
        return {
            product: '',
            items: [],
            isLoggedIn: false,
            quantity: 1, // Số lượng hiện tại của sản phẩm
        };
    },

    mounted() {
        this.fetchfindOneProduct();
    },

    computed: {
        isLoggedIn() {
            return useAuthStore().isLoggedIn;
        },
        userId() {
            return useAuthStore().userId;
        },
    },

    created() {
        this.quantity = 1; // Thiết lập giá trị mặc định ban đầu là 1 trong lifecycle hook created()
    },

    methods: {

        async fetchfindOneProduct() {
            try {
                const productId = this.$route.params.id;

                this.product = await ProductService.findOneProduct(productId);

                const categoryname = this.product.category;
                const product = this.product._id;

                this.items = await ProductService.findProductByCategory(categoryname, product);

            } catch (error) {
                console.error(error);

            }
        },

        async addToCart(item) {
            // const authStore = useAuthStore();
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const userId = localStorage.getItem('userId');
            if (isLoggedIn) {
                const stockQuantity = item.Quantity;

                const updatedQuantity = stockQuantity - this.quantity;

                if (this.quantity <= stockQuantity) {
                    try {
                        // const quantity = this.quantity;
                        const data = {
                            userId: userId,
                            productId: item._id,
                            quantity: this.quantity
                        };
                        console.log("data", data);
                        const response = await CartService.addToCart(data);
                        if (response.status === 200) {
                            alert("Thêm sản phẩm vào giỏ hàng thành công");



                            const dataquantity = {
                                Quantity: updatedQuantity,
                            }

                            // Cập nhật giá trị Quantity mới vào cơ sở dữ liệu
                            const result = await ProductService.updateProduct(item._id, dataquantity);
                            if (result.status === 200) {
                                console.log("Đã cập nhật số lượng trong kho");
                            }
                        }
                    } catch (error) {
                        console.error('Lỗi:', error);
                    }
                } else {
                    alert("Số lượng bạn mua vượt quá số lượng có trong kho");
                }


            } else {
                this.$router.push('/login');
            }
        },


        increaseQuantity() {
            this.quantity++; // Tăng giá trị số lượng
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--; // Giảm giá trị số lượng, nhưng không thấp hơn 1
            }
        },


        async addToCartQuantity(product, quantity) {
            // const authStore = useAuthStore();
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const userId = localStorage.getItem('userId');
            if (isLoggedIn) {
                const stockQuantity = product.Quantity;

                const updatedQuantity = stockQuantity - quantity;
                if (quantity <= stockQuantity) {
                    try {
                        // const quantity = quantity;
                        const data = {
                            userId: userId,
                            productId: product._id,
                            quantity: quantity
                        };

                        const response = await CartService.addToCart(data);
                        if (response.status === 200) {
                            alert("Thêm sản phẩm vào giỏ hàng thành công");




                            const dataquantity = {
                                Quantity: updatedQuantity,
                            }

                            // Cập nhật giá trị Quantity mới vào cơ sở dữ liệu
                            const result = await ProductService.updateProduct(product._id, dataquantity);
                            if (result.status === 200) {
                                console.log("Đã cập nhật số lượng trong kho");
                            }
                        }
                    } catch (error) {
                        console.error('Lỗi:', error);
                    }
                } else {
                    alert("Số lượng bạn mua vượt quá số lượng có trong kho");
                }


            } else {
                this.$router.push('/login');
            }
        },

    }
}
</script>

<style scoped>
.text-price {
    color: darkorange;
    font-weight: 700;
}

.item-image {
    width: 250px;
    height: 250px;
}


.card {
    /* text-align: center; */
    border-radius: 16px;
    overflow: hidden;
    position: relative;
}

.icon-hover {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
}

.icon-eye,
.icon-cart {
    background-color: #ff0000;
    color: white;
    font-size: 16px;
    /* padding: 16px 32px; */
    padding: 4px 15px;
    margin-left: 5px;
    border-radius: 50%;

}

.icon {
    font-weight: 600;
}


.card:hover .product-image {
    opacity: 0.3;
}

.card:hover .icon-hover {
    opacity: 1;
}

.card-name,
.card-price {
    font-weight: bolder;
}

.card-price {
    color: red;
}


.product-same {
    /* margin: 30px 0; */
}
</style>