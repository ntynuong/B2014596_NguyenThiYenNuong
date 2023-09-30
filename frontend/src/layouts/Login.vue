<template>
    <div>
        <h2>LOGIN</h2>


        <div class="container">
            <!-- <form @submit="submitForm">
                <div class="mb-3">
                    <label class="form-label">Email: </label>
                    <input type="email" class="form-control" v-model="email" name="email" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">Password: </label>
                    <input type="password" class="form-control" v-model="password" name="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form> -->

            <form>
                <div class="mb-3">
                    <label class="form-label">Email: </label>
                    <input type="email" class="form-control" v-model="email" name="email">
                </div>
                <div class="mb-3">
                    <label class="form-label">Password: </label>
                    <input type="password" class="form-control" v-model="password" name="password">
                </div>
                <!-- <button @click="handleLogin" class=" btn btn-primary">Submit</button> -->
                <button @click="submitForm" class=" btn btn-primary">Submit</button><br>

            </form>

        </div>

        <!-- <div class="container">
            <p v-if="showError" class="error-message">{{ error }}</p>
        </div> -->



        <div v-if="showError" class="container error-message alert alert-danger" role="alert">
            {{ error }}
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            password: '',
            error: 'Vui lòng nhập đầy đủ thông tin',
            showError: false
        };
    },
    methods: {
        submitForm(event) {

            event.preventDefault();

            // submitForm() {

            // if (this.email === '') {
            //     // alert("Vui lòng nhập Email ");
            //     // this.error = "Vui lòng nhập Email!";
            //     this.showError = true;
            // }
            // else if (this.password === '') {
            //     // alert("Vui lòng nhập Mật khẩu");
            //     // this.error = "Vui lòng nhập Mật khẩu";
            //     this.showError = true;
            // }
            if (this.email === '' || this.password === '') {
                // alert("Đăng nhập không hợp lệ, vui lòng thử lại");
                // this.error = "Đăng nhập không hợp lệ, vui lòng thử lại";
                this.showError = true;
            }
            else {
                this.showError = false;

                // gui yeu cau den server node.js
                axios.post('http://localhost:3000/login',
                    {
                        email: this.email,
                        password: this.password
                    })
                    .then(response => {

                        // console.log(response.status); // Hiển thị mã trạng thái trong cửa sổ Console

                        if (response.status === 200) {
                            // xu ly phan hoi tu server
                            // console.log(response.data);

                            alert("Đăng nhập thành công!");

                            // Chuyển hướng đến trang sau khi đăng nhập thành công
                            // this.$router.push('/');
                            this.$router.push({ name: 'Home' });
                        }
                        // else if (response.status === 401) {
                        //     alert("Đăng nhập thất bại.Sai tài khoản hoặc mật khẩu!");
                        //     // this.$router.push('/login');
                        //     this.$router.push({ name: 'Login' });
                        // }
                        else {
                            // Xử lý phản hồi lỗi từ server với mã trạng thái không phải 200
                            console.error('Error:', response.status);
                            // Thực hiện các hành động khác khi xảy ra lỗi
                        }
                    })
                    .catch(error => {
                        // Xử lý phản hồi lỗi từ server
                        console.error('Error:', error);
                        // Thực hiện các hành động khác khi xảy ra lỗi

                        if (error.response.status === 401) {
                            alert("Đăng nhập thất bại.Sai tài khoản hoặc mật khẩu!");
                            this.$router.push({ name: 'Login' });
                            this.email = '';
                            this.password = '';
                        }

                        else {
                            alert("Lỗi không xác định. Vui lòng thử lại sau!");
                        }
                    });
            }


        }


        // async handleLogin() {
        //     try {
        //         // Thực hiện yêu cầu đăng nhập
        //         const response = await axios.post('http://localhost:3000/login', {
        //             email: this.email,
        //             password: this.password
        //         });

        //         if (response.status === 200) {
        //             // Đăng nhập thành công
        //             console.log("Đăng nhập thành công");
        //             // Chuyển hướng đến trang sau khi đăng nhập thành công
        //             this.$router.push('/');
        //         }
        //     } catch (error) {
        //         // Xử lý lỗi đăng nhập không thành công
        //         console.log("Đăng nhập thất bại");
        //         if (error.response && error.response.status === 401) {
        //             this.error = error.response.data.message;
        //         } else {
        //             this.error = "Đăng nhập không thành công. Vui lòng thử lại sau.";
        //         }
        //     }
        // }

    }
}
</script>

<style>
.error-message {
    color: red;
    /* font-weight: 700; */
    margin-top: 10px;
}
</style>