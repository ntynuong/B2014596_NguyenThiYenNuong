<template>
    <section class="about">
        <div class="banner-about">
            <img class="img-fuild" src="/img/about-6.png" alt="Cinque Terre">
            <div class="center">GIỚI THIỆU</div>
        </div>
    </section>

    <section class="about">
        <div class="heading text-center ">
            <h1>VỀ <span class="title-about">CHÚNG TÔI</span></h1>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card">
                        <img src="/img/about-2.png" class="about-image" alt="">
                    </div>
                </div>

                <div class="col-md-6">
                    <h3>CỬA HÀNG<span></span></h3>
                    <p>DREAM HOUSE cửa hàng bán đồ decor Hàng đầu tại Cần Thơ hiện nay
                        Chúng tôi đồng hành cùng Quý khách trong việc tư vấn, trang trí và thiết kế nội thất không gian.
                        Nhân
                        viên tại đây luôn nhiệt tình giải đáp mọi thắc mắc của khách hàng từ A đến Z.
                        Đồ trang trí tại đây đều được nhập chính hãng với chất lượng cao. Số lượng phong phú và đa dạng kiểu
                        cách, đem lại nhiều màu sắc và phong cách khác nhau. Shop vận chuyển toàn quốc và đảm bảo chất lượng
                        hàng vận chuyển. DREAM HOUSE luôn mong muốn khách hàng được trải nghiệm những dịch vụ tốt nhất.
                        Bạn đã hiểu vì sao đây lại là shop bán đồ decor Hà Nội được yêu thích nhất rồi chứ? Hãy đến cửa hàng
                        hoặc liên hệ cho chúng tôi qua Website để chọn được những món đồ trang trí không gian ưng ý. Chúng
                        cũng
                        sẽ là những món đồ lưu niệm ý nghĩa để tặng người thân, bạn bè hay đối tác.</p>
                </div>
            </div>
        </div>


        <div class="test">
            <div class="container about-content-two">
                <div class="row ">
                    <div class="col-md-6">
                        <h3>CHẤT LƯỢNG<span> VÀ DỊCH VỤ</span></h3>
                        <p>
                            Chất lượng của nguyên vật liệu, phụ kiện và quy trình sản xuất đều được kiểm định và giám sát
                            chặt chẽ bởi hệ thống quản lý chất lượng ISO 9001. Sản phẩm của Nhà Xinh được thiết kế theo định
                            hướng công năng sử dụng, thẩm mỹ và chất lượng. Trong những năm gần đây, thương hiệu luôn hướng
                            đến xu hướng thiết kế xanh nhằm đóng góp không chỉ một không gian sống tiện nghi mà còn là một
                            môi trường sống trong lành cho người sử dụng và cộng đồng. Với nhiều cống hiến như vậy, DREAM
                            HOUSE
                            vinh dự nhiều năm liền được trao tặng các danh hiệu “Hàng Việt Nam chất lượng cao”, “Trusted
                            brand” và “Top 100 nhà cung cấp hàng đầu”.

                            Bên cạnh đó, DREAM HOUSE tự hào sở hữu đội ngũ tư vấn thiết kế và kỹ sư chuyên nghiệp, có kiến
                            thức
                            sâu rộng trong lĩnh vực đồ gỗ nội thất. Tập thể nhân viên tại DREAM HOUSE cam kết nỗ lực tư vấn
                            và
                            trợ giúp khách hàng lựa chọn sản phẩm ưng ý nhất. Dịch vụ tư vấn thiết kế của DREAM HOUSE sẽ
                            giúp
                            khách hàng kiến tạo một không gian sống như ý thông qua sự phối hợp điêu luyện giữa các sản phẩm
                            nội thất và đồ trang trí.</p>
                    </div>

                    <div class="col-md-6">
                        <div class="card">
                            <img src="/img/about-3.png" class="about-image" alt="">
                        </div>
                    </div>
                </div>
            </div>


        </div>


        <div class="container">
            <div class="row about-content-three">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="/img/about-noithat.png" class="img-fluid">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <img src="/img/about-noithat-2.png" class="img-fluid">
                </div>
            </div>
        </div>

        <div class="banner-about">
            <img src="/img/about-11.png" alt="Cinque Terre">
        </div>
    </section>
</template>

<script>

export default {
    name: 'About',


};
</script>

<style scoped>
.banner-about {
    position: relative;
    height: 380ppx;
}

.center {
    position: absolute;
    bottom: 8px;
    left: 16px;
    font-size: 40px;
    color: white;
    font-weight: bolder;
}


.banner-about img {
    width: 100%;
    height: 500px;
}

/* .test {
    background-color: #04AA6D;
} */

.heading {
    margin: 30px 0;
}

.title-about {
    color: #04AA6D;
}

.about-content-two {
    margin-top: 40px;
    padding: 10px;
}

.about-content-three {
    margin-top: 20px;
}
</style>