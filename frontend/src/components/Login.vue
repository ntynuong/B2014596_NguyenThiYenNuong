<template>
    <div class="container" id="container">
        <div class="form-container sign-in">
            <form>
                <h3>Đăng Nhập</h3>
                <input class="input-field" v-model="email" type="email" placeholder="Email">
                <div class="input-container">
                    <input class="input-field" v-model="password" :type="inputType" placeholder="Mật khẩu" name="psw">
                </div>

                <div class="d-flex">
                    <input @click="togglePasswordVisibility" type="checkbox" value="" class=" showpass">
                    <label> Hiển thị mật khẩu</label><br>
                </div>

                <button @click="submitForm">Đăng Nhập</button>

                <h6 class="register">Bạn chưa có tài khoản? Đăng ký<router-link to="/register"><span class="register-here">
                            tại
                            đây</span></router-link></h6>

                <router-link to="/">
                    <p class="comeback"><i class="bi bi-arrow-left-short"></i> trở về trang chủ</p>
                </router-link>
            </form>

        </div>

        <div class="toggle-container">
            <div class="toggle">
                <div class="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showError" class="error-message alert alert-danger" role="alert">
        {{ Error }}
    </div>
</template>

<script>
import { useAuthStore } from '../stores/auth';
import axios from 'axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';


// export default {
//     data() {
//         return {
//             email: '',
//             password: '',
//             error: 'Vui lòng nhập đầy đủ thông tin',
//             showError: false,
//             showPassword: false,
//             inputType: 'password'
//         };
//     },
//     methods: {
//         EyeIcon() {
//             this.showPassword = !this.showPassword;
//             this.inputType = this.showPassword ? 'text' : 'password';
//         },

//         submitForm(event) {

//             event.preventDefault();

//             // submitForm() {

//             // if (this.email === '') {
//             //     // alert("Vui lòng nhập Email ");
//             //     // this.error = "Vui lòng nhập Email!";
//             //     this.showError = true;
//             // }
//             // else if (this.password === '') {
//             //     // alert("Vui lòng nhập Mật khẩu");
//             //     // this.error = "Vui lòng nhập Mật khẩu";
//             //     this.showError = true;
//             // }
//             if (this.email === '' || this.password === '') {
//                 // alert("Đăng nhập không hợp lệ, vui lòng thử lại");
//                 // this.error = "Đăng nhập không hợp lệ, vui lòng thử lại";
//                 this.showError = true;
//             }
//             else {
//                 this.showError = false;

//                 // gui yeu cau den server node.js
//                 axios.post('http://localhost:3000/api/login',
//                     {
//                         email: this.email,
//                         password: this.password
//                     })
//                     .then(response => {

//                         // console.log(response.status); // Hiển thị mã trạng thái trong cửa sổ Console

//                         if (response.status === 200) {
//                             // xu ly phan hoi tu server
//                             // console.log(response.data);

//                             alert("Đăng nhập thành công!");

//                             // Chuyển hướng đến trang sau khi đăng nhập thành công
//                             this.$router.push('/');
//                             // this.$router.push({ name: 'Home' });
//                         }
//                         // else if (response.status === 401) {
//                         //     alert("Đăng nhập thất bại.Sai tài khoản hoặc mật khẩu!");
//                         //     // this.$router.push('/login');
//                         //     this.$router.push({ name: 'Login' });
//                         // }
//                         else {
//                             // Xử lý phản hồi lỗi từ server với mã trạng thái không phải 200
//                             console.error('Error:', response.status);
//                             // Thực hiện các hành động khác khi xảy ra lỗi
//                         }
//                     })
//                     .catch(error => {
//                         // // Xử lý phản hồi lỗi từ server
//                         // console.error('Error:', error);
//                         // // Thực hiện các hành động khác khi xảy ra lỗi

//                         // if (error.response.status === 401) {
//                         //     alert("Đăng nhập thất bại.Sai tài khoản hoặc mật khẩu!");
//                         //     this.$router.push({ name: 'Login' });
//                         //     this.email = '';
//                         //     this.password = '';
//                         // }


//                         if (error.response && error.response.status === 400) {
//                             this.error = error.response.data.message;
//                         }

//                         else {
//                             // alert("Lỗi không xác định. Vui lòng thử lại sau!");

//                             this.error = 'Loi khong xac dinh. Vui long thu lai sau';
//                         }
//                         this.showError = true;
//                     });
//             }


//         }


//         // async handleLogin() {
//         //     try {
//         //         // Thực hiện yêu cầu đăng nhập
//         //         const response = await axios.post('http://localhost:3000/login', {
//         //             email: this.email,
//         //             password: this.password
//         //         });

//         //         if (response.status === 200) {
//         //             // Đăng nhập thành công
//         //             console.log("Đăng nhập thành công");
//         //             // Chuyển hướng đến trang sau khi đăng nhập thành công
//         //             this.$router.push('/');
//         //         }
//         //     } catch (error) {
//         //         // Xử lý lỗi đăng nhập không thành công
//         //         console.log("Đăng nhập thất bại");
//         //         if (error.response && error.response.status === 401) {
//         //             this.error = error.response.data.message;
//         //         } else {
//         //             this.error = "Đăng nhập không thành công. Vui lòng thử lại sau.";
//         //         }
//         //     }
//         // }

//     }
// }





export default {
    setup() {
        const router = useRouter();

        const authStore = useAuthStore();

        const email = ref('');
        const password = ref('');
        const Error = ref('Vui lòng nhập đầy đủ thông tin!');
        const showError = ref(false);
        const showPassword = ref(false);
        const inputType = ref('password');

        const togglePasswordVisibility = () => {
            showPassword.value = !showPassword.value;
            inputType.value = showPassword.value ? 'text' : 'password';
        };

        const submitForm = (event) => {
            event.preventDefault();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email.value === '' && password.value === '') {
                showError.value = true;
            }

            else if (email.value === '') {
                Error.value = "Vui lòng nhập Email!";
                showError.value = true;
            }
            else if (!emailRegex.test(email.value)) {
                Error.value = "Email không hợp lệ! Vui lòng nhập đúng định dạng Email";
                showError.value = true;
            }
            else if (password.value === '') {
                Error.value = "Vui lòng nhập Mật khẩu!";
                showError.value = true;
            }


            else {
                showError.value = false;
                console.log("truoc khi dang nhap", authStore.isLoggedIn);

                axios
                    .post('http://localhost:3000/api/login', {
                        email: email.value,
                        password: password.value
                    })
                    .then(response => {
                        console.log("response", response);
                        if (response.status === 200) {
                            alert("Đăng nhập thành công!");

                            console.log("response", response);
                            console.log("id", response.data.payload.id);
                            const userId = response.data.payload.id;
                            console.log("id2", userId);
                            const role = response.data.payload.role;
                            const fullname = response.data.payload.fullname;


                            // Lưu trạng thái đăng nhập vào local storage
                            router.push('/');
                            localStorage.setItem('isLoggedIn', 'true');
                            localStorage.setItem('role', role);
                            localStorage.setItem('username', fullname);
                            const dangnhap = localStorage.getItem('isLoggedIn');
                            console.log("dangnhap", dangnhap);
                            localStorage.setItem('userId', userId);
                            const maso = localStorage.getItem('userId');
                            console.log("maso", maso);





                        }
                    })
                    .catch(error => {
                        if (error.response && error.response.status === 400) {
                            Error.value = error.response.data.message;
                        }
                        else if (error.response && error.response.status === 404) {
                            Error.value = error.response.data.message;
                        }

                        else {
                            Error.value = "Lỗi không xác định. Vui lòng thử lại sau";
                        }
                        showError.value = true;
                    });
            }
        };

        watch(
            (newValue) => {
                localStorage.setItem('isLoggedIn', newValue.toString());
                localStorage.setItem('userId', newValue.toString());
            }
        );

        return {
            email,
            password,
            Error,
            showError,
            showPassword,
            inputType,
            togglePasswordVisibility,
            submitForm,
            // setUserId,
        };
    }
};

</script>

<style scoped>
.showpass {
    cursor: pointer;
}

.container {
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    margin-top: 50px;
}

.container p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
}

.container button {
    background-color: #04AA6D;

    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.container button:hover {
    opacity: 0.8;
}

.container form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

.container .input-field {
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
}



.toggle-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
}

.toggle {

    height: 100%;
    background-image: url("/img/login1.png");
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-panel {
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-right {
    right: 0;
    transform: translateX(0);
}


.register {
    margin-top: 15px;
}

h6 {
    color: grey;
    font-size: small;
    font-weight: 700;
}

.register-here {
    color: #04AA6D;
    text-decoration: underline;
}



.input-container {
    position: relative;
    display: inline-block;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
}


.error-message {
    color: red;
    margin-top: 30px;
    margin-left: 350px;
    width: fit-content;
}

.comeback {
    margin-top: 20px;
}

.input-field:focus {
    border: 2px solid #04AA6D;
}
</style>