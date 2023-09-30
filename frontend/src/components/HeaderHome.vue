<template>
    <!-- <div class="nav-top sticky-top">


        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

                <div class="logo">
                    <a href="#">
                        <img src="public/img/cafe1.png" class="img-thumbnail" width="80" height="80px" alt="">
                    </a>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <router-link to="/">TRANG CHỦ</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about">GIỚI THIỆU</router-link>
                        </li>
                        <li class="nav-item dropdown">

                            <router-link to="/menu">THỨC UỐNG</router-link>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <router-link to="/coffee">COFFEE</router-link>
                                <router-link to="/tea">TEA</router-link>

                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact">LIÊN HỆ</router-link>
                        </li>
                    </ul>
                </div>

                <div class="d-flex search">
                    <button class="btn btn-outline-danger" type="submit"><i class="bi bi-search"></i></button>
                </div>


                <div class="p-2">
                    <router-link to="/login"><button class="btn btn-outline-danger" type="submit"><i
                                class="bi bi-person-circle"></i></button></router-link>
                </div>

            </div>
        </nav>
    </div> -->

    <div class="nav-top sticky-top">
        <nav class="navbar navbar-expand-lg">
            <div class="container">


                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg">



                        <div class="container" id="navbarNav1">

                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <h1 class="navbar-brand">1900 000</h1>
                                </li>
                            </ul>

                            <ul class="navbar-nav mx-auto">
                                <div class="logo">
                                    <!-- <router-link to="/"><img src="/img/cafe1.png" class="img-thumbnail" width="80"
                                            height="80px" alt=""></router-link> -->

                                    <router-link to="/"><img src="/img/logo-jewelry.jpg" class="img-thumbnail" width="125"
                                            height="150px" alt=""></router-link>
                                </div>
                            </ul>

                            <ul class="navbar-nav ml-auto">
                                <div class="d-flex search">
                                    <router-link to="/cart"><button class="btn btn-outline-danger position-relative"
                                            type="submit"><i class="bi bi-cart3"></i><span
                                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                0
                                                <!-- <span class="visually-hidden">unread messages</span> -->
                                            </span></button></router-link>
                                </div>
                            </ul>

                        </div>
                    </nav>

                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">


                                <li class="nav-item active">
                                    <router-link to="/" class="nav-link active" aria-current="page">TRANG CHỦ</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/about" class="nav-link">GIỚI THIỆU</router-link>
                                </li>




                                <li class="nav-item dropdown">
                                    <router-link to="/menu" class="nav-link dropdown-toggle" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        THỨC UỐNG
                                    </router-link>
                                    <ul class="dropdown-menu">
                                        <li><router-link to="/tea" class="dropdown-item">TRÀ</router-link></li>
                                        <li><router-link to="/coffee" class="dropdown-item">COFFEE</router-link></li>
                                        <li><router-link to="/trangmieng" class="dropdown-item">TRÁNG MIỆNG</router-link>
                                        </li>

                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/contact" class="nav-link">LIÊN HỆ</router-link>
                                </li>
                            </ul>

                            <div class="d-flex">
                                <div class="d-flex">
                                    <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->

                                    <router-link to="/search"><button class="btn btn-outline-danger" type="submit"><i
                                                class="bi bi-search"></i></button></router-link>
                                </div>

                                <!-- <div class="">
                                    <router-link to="/login"><button class="btn btn-outline-danger" type="submit"><i
                                                class="bi bi-person-circle"></i></button></router-link>
                                </div> -->

                                <LoginIcon></LoginIcon>


                            </div>


                            <!-- <div class="d-flex search"> -->
                            <!-- <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> -->

                            <!-- <router-link to="/search"><button class="btn btn-outline-danger" type="submit"><i
                                            class="bi bi-search"></i></button></router-link>
                            </div>

                            <div class=" p-2">
                                <router-link to="/login"><button class="btn btn-outline-danger" type="submit"><i
                                            class="bi bi-person-circle"></i></button></router-link>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <router-view></router-view>
</template>

<script>
import LoginIcon from '@/components/LoginIcon.vue';

export default {
    name: 'HeaderHome',
    components: { LoginIcon }

};
</script>