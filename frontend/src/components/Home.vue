<template>
    <div class=" banner">

        <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="/img/noithat.png" class="d-block w-100 img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="/img/cayxanh.png" class="d-block w-100 img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="/img/noithat.png" class="d-block w-100 img-fluid" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>


    <div class="container">
        <h3 class="text-center title-category">SẢN PHẨM <span class="title">MỚI</span></h3>
        <div class="row">
            <div class="col-md-3" v-for="product in products" :key="product.id">
                <!-- <div class="card card-noibat mt-3" @click="viewProduct(product)">
                    <div class="card-image card-img">
                        <img :src="`http://localhost:3000/images/${product.images}`" class="product-image text-center">
                    </div>
                    <div class="card-content">
                    </div>
                </div> -->


                <div class="border mt-3" @click="viewProduct(product)">
                    <div class="card-image card-img">
                        <img :src="`http://localhost:3000/images/${product.images}`" class="product-image text-center">
                    </div>
                    <!-- <div class="card-content">
                    </div> -->
                </div>
            </div>
        </div>
    </div>

    <div class="container">

        <div class="row text-center content-2">
            <h3 class="text-center title-category">GÓC CẢM HỨNG<span class="title"></span></h3>
            <div class="col-lg-6 col-md-6 col-sm-6">
                <img src="/img/content.png" class="img-fuild image-home-2">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
                <img src="/img/home-3.png" class="img-fuild image-home-2">

            </div>

        </div>


    </div>


    <div class="container">
        <h3 class="text-center title-category">TẤT CẢ SẢN PHẨM <span class="title"></span></h3>
        <div class="row">
            <div class=" list">

                <router-link :to="{ name: 'Product2' }" @click="scrollToTop">
                    <p class="text-footer">Xem tất cả sản phẩm</p>
                </router-link>

            </div>

        </div>
        <div class="row">
            <div class="col-md-3" v-for="item in items" :key="item.id">
                <div class="card card-noibat mt-3" @click="viewProduct(item)">
                    <div class="card-image card-img">
                        <img :src="`http://localhost:3000/images/${item.images}`" class="product-image text-center">
                    </div>
                    <div class="card-content">
                    </div>
                </div>
            </div>
        </div>



    </div>


    <div class="container">
        <div class="row mt-3">

            <div class="col">
                <img src="/img/sofa-home.png" class="card-img-top" alt="..." style="width: 480px; height: 400px;">
            </div>

            <div class="col sofa-content">
                <h3>Ghế sofa</h3>
                <p> Một món đồ nội thất quen thuộc, đã trở nên không thể thiếu trong mỗi ngôi nhà. Từ việc thư giãn
                    sau
                    một ngày làm việc căn thẳng đến việc tiếp đón khách đến chơi, sofa đóng vai trò quan trọng trong cuộc
                    sống
                    hàng ngày của chúng ta. Còn chần chừ gì nữa hãy sắm một cái sofa cho gia đình ngay nào</p>
                <router-link to="/Product2" @click="scrollToTop"><button class="btn-sofa">Xem chi
                        tiết</button></router-link>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row image-home">
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="/img/hinhanh.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="/img/tủ.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="/img/mau-tron.png" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="/img/home-2.png" class="card-img-top" alt="...">
                </div>
            </div>
        </div>
    </div>


    <section id="services" class="services section-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-header text-center pb-5">
                        <h3><span class="title">DỊCH VỤ </span>CỦA CHÚNG TÔI</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="bi bi-headset icon-service"></i>
                            <h6 class="py-2">HỖ TRỢ TRỰC TUYẾN</h6>
                            <p class="card-text">Hỗ trợ khách hàng 24/24</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="bi bi-currency-dollar icon-service"></i>
                            <h6 class=" py-2">HOÀN TIỀN</h6>
                            <p class="card-text">100% trong vòng 3 ngày</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="bi bi-truck icon-service"></i>
                            <h6 class=" py-2">MIỄN PHÍ VẬN CHUYỂN</h6>
                            <p class="card-text">Giao hàng miễn phí toàn quốc</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <i class="bi bi-gift icon-service"></i>
                            <h6 class=" py-2">BLACK FRIDAY</h6>
                            <p class="card-text">Giảm 10% vào mỗi thứ sáu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import NoteService from '@/services/notes.service';
import ProductService from '@/services/product.service';

export default {
    name: 'Home',

    data() {
        return {
            products: [],
            items: [],

        }
    },

    mounted() {
        this.findProductByNotes();

        this.getAllProduct();
    },


    methods: {
        async getAllProduct() {
            try {
                const result = await ProductService.getAllProducts();
                this.items = this.getRandomElements(result, 4);

            } catch (error) {
                console.error(error);
            }
        },

        async findProductByNotes() {
            try {
                const response = await NoteService.findProductByNotes(); // Thay đổi đường dẫn API tùy thuộc vào cấu trúc của ứng dụng của bạn

                this.products = this.getRandomElements(response, 4);
            } catch (error) {
                console.error(error);
            }
        },

        getRandomElements(array, n) {
            const shuffled = array.slice();
            let i = array.length;
            let temp, index;

            while (i--) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }

            return shuffled.slice(0, n);
        },

        viewProduct(product) {
            // Chuyển hướng đến trang chi tiết sản phẩm và truyền id của sản phẩm như một param
            this.$router.push({ name: 'DetailProduct', params: { id: product._id } });

            this.scrollToTop();
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }


};
</script>

<style scoped>
.card {
    width: 250px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
}

.services {
    margin: 20px 0;
}

.services .card-body i {
    font-size: 50px;
    color: #04AA6D;

}

.services .card-body h6 {
    font-weight: 700;
}

.services .card-body p {
    color: rgb(111, 111, 111);
}

.card:hover i {
    color: white;
}

.card:hover p {
    color: white;
}

.card-body:hover p,
.card-body:hover h6,
.card-body:hover i {
    color: #04AA6D;
}

.card:hover {
    color: white;
}





.image-category {
    position: relative;
    text-align: center;
    color: black;
    font-weight: 600;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.title-category,
.content-2 {
    margin-top: 20px;
}


/* card-noibat */


.card-noibat {
    width: 250px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    position: relative;
}

.card-img {

    height: 150px;
    width: 150px;
}

.card-img img {
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.card-img:hover img {
    transform: scale(1.1);
}

.card-content {
    padding: 20px;

}

.card-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.card-text {
    font-size: 16px;
    color: #555555;
}

/* .title {
    color: #04AA6D;
} */

.img {
    height: 400px;
    width: 400px;
}

h3 {
    font-weight: bold;
}

.image-home {
    margin: 40px 0;
}

.image-home-2 {
    height: 400px;
    width: 500px;
}

.list {
    text-align: end;

}

.new-product {
    width: 250px;
    height: 250px;
}

.sofa-content {
    padding: 30px;
}

.btn-sofa {
    background-color: #04AA6D;
    color: white;


    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    cursor: pointer;
}
</style>