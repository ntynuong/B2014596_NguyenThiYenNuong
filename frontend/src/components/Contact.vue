<template>
    <div class="banner-contact">
        <img class="img-fuild" src="/img/light.png" alt="Cinque Terre">
        <div class="center">LIÊN HỆ</div>
    </div>

    <!-- <div class="banner-contact">
        <img class="img-fuild" src="/img/about-noithat-13.png" alt="Cinque Terre">
        <div class="center">LIÊN HỆ</div>
    </div> -->


    <div class="container ">
        <div class="contact-content text-center">
            <h1>Bạn cần <span class="title-contact">hỗ trợ?</span></h1>
        </div>


        <div class="row contact">
            <div class="col-lg-6 col-md-6 col-sm-12">

                <h5>Xin vui lòng để lại yêu cầu hỗ trợ của bạn và chúng tôi sẽ liên lạc lại với bạn sớm nhất có thể .</h5>
                <form>
                    <div class="mb-2">
                        <label class="form-label"></label>
                        <div class="name-product-input">
                            <input type="text" class="form-control" placeholder="Họ và tên">
                        </div>

                    </div>

                    <div class="mb-2">
                        <label class="form-label"></label>
                        <div class="price-product-input">
                            <input type="text" class="form-control" placeholder="Số điện thoại">
                        </div>
                    </div>

                    <div class="mb-2">
                        <label class="form-label"></label>
                        <div class="quantity-product-input">
                            <input type="text" class="form-control" placeholder="Tiêu đề">
                        </div>
                    </div>

                    <div class="mb-2">
                        <label for="exampleFormControlTextarea1" class="form-label"></label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Nội Dung"></textarea>
                    </div>

                    <div class="mt-2">
                        <button type="submit" class="btn btn-contact">GỬI YÊU CẦU</button>
                    </div>


                </form>




            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <img src="/img/contact.jpg" class="img-fluid">
            </div>
        </div>
    </div>



    <div class="container">
        <div class="row contact-content-two">


            <div class="col-lg-6 col-md-6 col-sm-12">
                <h5 class="title-footer">THÔNG TIN LIÊN HỆ</h5>
                <div class="icon-info">
                    <ul>
                        <li>
                            <i class="bi bi-geo-alt-fill icon"></i><span class="contact-info"> Địa chỉ</span>
                            <p class="text-footer">Hưng Lợi, Ninh Kiều, Cần Thơ</p>
                        </li>
                        <li>
                            <i class="bi bi-envelope-fill icon"></i><span class="contact-info"> Email</span>
                            <p class="text-footer"> dreamhouse@gmail.com</p>
                        </li>
                        <li>
                            <i class="bi bi-telephone-fill icon"></i><span class="contact-info"> Số điện thoại</span>
                            <p class="text-footer"> 0708970924</p>
                        </li>
                    </ul>

                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31428.7281008429!2d105.74096834417269!3d10.05056802102765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895a51d60719%3A0x9d76b0035f6d53d0!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBD4bqnbiBUaMah!5e0!3m2!1svi!2s!4v1698764150644!5m2!1svi!2s"
                    width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Contact',

}
</script>

<style scoped>
.title-footer {
    font-weight: 600;
}

.btn-contact {
    background-color: #04AA6D;
    color: #fff;
    padding: 10px 45px;
    margin-top: 10px;
    cursor: pointer;
}

.contact {
    margin: 30px 0;
    padding: 30px;
}

.title-contact {
    color: #04AA6D;
}

.contact-content {
    margin: 30px 0;
}

.form-control:focus {
    border: 2px solid #04AA6D;
}

.contact-content-two {
    margin: 30px 0;
}

.icon-info li {
    list-style: none;
}

.text-footer {
    margin-left: 50px;
}

.contact-info {
    font-weight: 600;
    font-size: 20px;
}

.icon {
    font-size: 15px;
    background-color: #04AA6D;
    color: white;
    padding: 13px;
}

.icon-info {
    margin: 20px 0;
}

.banner-contact {
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

.banner-contact img {
    width: 100%;
    height: 500px;
}
</style>