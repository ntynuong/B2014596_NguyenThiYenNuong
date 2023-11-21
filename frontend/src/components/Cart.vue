<template>
    <div v-if="isEmptyCart" class="container card-nocart text-center">

        <div class="card text-center">
            <img src="/img/nocart.png" class="card-img-top image-nocart mx-auto" alt="...">
            <div class="card-body text-center">
                <p class="card-text">Chưa có sản phẩm nào trong giỏ hàng.</p>
                <router-link to="/product2"><button class="btn btn-danger">TIẾP TỤC MUA SẮM NHÉ!</button></router-link>
            </div>
        </div>
    </div>


    <div v-else class="container">
        <div class="row cart">
            <h3>Giỏ hàng của bạn</h3>
            <table class="table text-center">
                <thead class="table-bordered">
                    <tr>
                        <th></th>
                        <th>Sản Phẩm</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Đơn Giá</th>
                        <th>Số Lượng</th>
                        <th>Số Tiền</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cartItems" :key="item.id">
                        <td></td>
                        <td><img :src="`http://localhost:3000/images/${item.images}`" :alt="item.productname"
                                class="product-image"></td>
                        <td>{{ item.productname }}</td>
                        <td>{{ parseInt(item.price.replace(/\s/g, '')).toLocaleString('vi-VN') }}&#8363;</td>
                        <p class=" button-quantity" @click="decreaseQuantity(item)">{{ item.Quantity }}</p>
                        <td>

                            <div class="d-flex text-center">

                                <button class=" button-quantity" @click="decreaseQuantity(item)">-</button>

                                <button class=" button-quantity-number"> {{ item.quantity }}</button>
                                <button class=" button-quantity" @click="increaseQuantity(item)">+</button>
                            </div>
                        </td>
                        <td>{{ subtotalPrice[index] }}&#8363;</td>
                        <td><button class="btn btn-danger" @click="deleteCart(item)"><i
                                    class="bi bi-trash3-fill"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Tổng Thanh Toán: {{ totalPrice }}&#8363;</td>
                    </tr>

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><router-link :to="{ name: 'Checkout', params: { id: userId } }"><button class="btn btn-danger"
                                    @click="handleCheckout">Thanh Toán</button></router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import { useCartStore } from '../stores/cart';
import CartService from '@/services/cart.service';
import ProductService from '@/services/product.service';
import Swal from 'sweetalert2';

export default {
    name: 'Cart',

    data() {
        return {
            cartItems: [],
            totalQuantity: 0,
        };
    },

    computed: {


        userId() {
            return localStorage.getItem('userId');
        },
        isEmptyCart() {
            return this.cartItems.length === 0;
        },

        totalPrice() {
            const totalPrice = this.cartItems.reduce((total, item) => {
                const itemPrice = parseFloat(item.price.replace(/\s/g, '')); // Xóa khoảng trắng và chuyển đổi giá tiền thành số
                const itemQuantity = parseInt(item.quantity); // Chuyển đổi số lượng thành số nguyên
                return total + itemPrice * itemQuantity;
            }, 0);

            return totalPrice.toLocaleString('vi-VN').replace(/,/g, ' '); // Định dạng số với dấu phân cách và thay thế dấu phân cách bằng khoảng trắng
        },

        subtotalPrice() {
            return this.cartItems.map(item => {
                const itemPrice = parseFloat(item.price.replace(/\s/g, '')); // Xóa khoảng trắng và chuyển đổi giá tiền thành số
                const itemQuantity = parseInt(item.quantity); // Chuyển đổi số lượng thành số nguyên

                const totalPrice = itemPrice * itemQuantity;
                return totalPrice.toLocaleString('vi-VN').replace(/,/g, ' '); // Định dạng số với dấu phân cách và thay thế dấu phân cách bằng khoảng trắng
            });
        },


    },

    methods: {
        async increaseQuantity(item) {
            // Tăng giá trị quantity của item lên 1
            item.quantity++;

            const result = await ProductService.findOneProduct(item.productId);
            const stockQuantity = parseInt(result.Quantity);
            const updatedQuantity = stockQuantity - 1;

            const userId = localStorage.getItem('userId');
            const response = await CartService.updateCart(userId, item.productId, item.quantity);
            if (response.status === 200) {
                // alert("Cập nhật thành công");
                Swal.fire(
                    "",
                    "Cập nhật số lượng thành công!",
                    "success"
                );


                const dataquantity = {
                    Quantity: updatedQuantity,
                }

                // Cập nhật giá trị Quantity mới vào cơ sở dữ liệu
                const result = await ProductService.updateProduct(item.productId, dataquantity);
                if (result.status === 200) {
                    console.log("Đã cập nhật số lượng trong kho");
                }

                this.getCart();
            }

        },

        async decreaseQuantity(item) {
            // Giảm giá trị quantity của item xuống 1
            if (item.quantity > 1) {
                item.quantity--;

                const result = await ProductService.findOneProduct(item.productId);
                const stockQuantity = parseInt(result.Quantity);
                const updatedQuantity = stockQuantity + 1;

                const userId = localStorage.getItem('userId');
                const response = await CartService.updateCart(userId, item.productId, item.quantity);
                if (response.status === 200) {
                    // alert("Cập nhật thành công");
                    Swal.fire(
                        "",
                        "Cập nhật số lượng thành công!",
                        "success"
                    );

                    const dataquantity = {
                        Quantity: updatedQuantity,
                    }

                    // Cập nhật giá trị Quantity mới vào cơ sở dữ liệu
                    const result = await ProductService.updateProduct(item.productId, dataquantity);
                    if (result.status === 200) {
                        console.log("Đã cập nhật số lượng trong kho");
                    }

                    this.getCart();
                }
            }
        },


        async getCart() {

            try {
                const userId = localStorage.getItem('userId');
                const response = await CartService.getCart(userId); // Thay đổi đường dẫn API tùy thuộc vào cấu trúc của ứng dụng của bạn
                this.cartItems = response;
            } catch (error) {
                console.error(error);
            }
        },

        async deleteCart(item) {

            const confirmation = await Swal.fire({

                title: "Xác nhận xóa",
                text: "Bạn chắc chắn muốn xóa sản phẩm?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Xóa",
                cancelButtonText: "Hủy"
            });

            if (confirmation.isConfirmed) {

                // Thực hiện xóa sản phẩm


                const cancel = item.quantity;

                const result = await ProductService.findOneProduct(item.productId);
                const stockQuantity = parseInt(result.Quantity);
                const updatedQuantity = stockQuantity + cancel;


                try {
                    const userId = localStorage.getItem('userId');
                    const productId = item.productId;
                    const response = await CartService.deleteCart(userId, productId); // Thay đổi đường dẫn API tùy thuộc vào cấu trúc của ứng dụng của bạn
                    if (response.status === 200) {
                        // alert("Xóa sản phẩm trong giỏ hàng thành công!");
                        Swal.fire(
                            "",
                            "Xóa sản phẩm trong giỏ hàng thành công!",
                            "success"
                        );




                        const dataquantity = {
                            Quantity: updatedQuantity,
                        }
                        // Cập nhật giá trị Quantity mới vào cơ sở dữ liệu
                        const result = await ProductService.updateProduct(item.productId, dataquantity);
                        if (result.status === 200) {
                            console.log("Đã cập nhật số lượng trong kho");
                        }

                        this.getCart();
                    }

                } catch (error) {
                    console.error("Lỗi", error);
                }

            }
            // else {
            //     Swal.fire("Hủy", "Bạn đã hủy xóa sản phẩm", "info");
            // }
        },



    },



    mounted() {
        this.getCart();


    },

    watch: {
        cartItems: {
            handler(newCartItems) {
                this.totalQuantity = newCartItems.reduce((total, item) => total + parseInt(item.quantity), 0); //parseInt chuyen doi chuoi thanh so
                const cartStore = useCartStore();
                cartStore.setTotalQuantity(this.totalQuantity);
            },
            immediate: true,
        },
    },

};
</script>

<style scoped>
.product-image {
    width: 250px;
    height: 250px;
}

.product-cart {
    border: solid 1px grey;
}

.total-price,
.buying {
    text-align: end;
}

.checkbox {
    align-items: center;
    height: 20px;
    width: 20px;
}


.image-nocart {
    width: 250px;
    margin: 30px 0;
    align-items: center;
    /* height: 250px; */
}

.card-nocart {
    padding: 20px;
}

h3 {
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;

}

.cart {
    margin: 30px 0;
}
</style>