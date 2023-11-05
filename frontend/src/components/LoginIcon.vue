<template>
    <div>

        <!-- <div class="dropdown" v-if="!isLoggedIn"> -->
        <div class="dropdown" v-if="!storedValue">
            <div class="d-flex align-items-center">
                <div class="d-flex mr-2 d-none d-lg-block login-right">
                    <router-link class="nav-link text-white" to="/login">Đăng Nhập</router-link>
                </div>

                <div class="d-flex d-none d-lg-block login-right login-right">
                    <router-link class="nav-link text-white" to="/register">Đăng Ký</router-link>
                </div>
            </div>
        </div>

        <div class="dropdown" v-else>
            <button class="btn btn-outline border-none outline-none " type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src="/img/user.png" alt="Avatar" class="avatar">
                <p><i class="bi bi-person"></i>: {{ username }}</p>
            </button>



            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-hidden">
                <li><router-link :to="{ name: 'Profile', params: { id: userId } }" class="nav-link text-white">Thông tin hồ
                        sơ</router-link></li>

                <li><router-link :to="{ name: 'Orders', params: { id: userId } }" class="nav-link text-white">Đơn
                        mua</router-link></li>

                <li @click="logout" class="logout nav-link text-white">Đăng xuất <i class="bi bi-box-arrow-right"></i></li>
            </ul>
        </div>
    </div>
</template>

<script>



import { defineComponent, onMounted, watch, ref } from 'vue';

import { useAuthStore } from '../stores/auth';

import { useRouter } from 'vue-router';


export default defineComponent({
    setup() {
        const router = useRouter();
        const authStore = useAuthStore();


        // const isLoggedIn = ref(false); // Tạo một reactive object sử dụng ref

        const userId = localStorage.getItem('userId');
        console.log("id", userId);
        const username = localStorage.getItem('username');
        console.log("id", userId);
        const storedValue = ref(localStorage.getItem('isLoggedIn') === 'true');


        const logout = () => {
            // authStore.logout();
            // localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập từ local storage
            // localStorage.removeItem('userId'); // Xóa người dùng từ local storage
            router.push('/login'); // Điều hướng tới trang đăng nhập sau khi đăng xuất
            // localStorage.setItem('isLoggedIn', 'false'); // Xóa trạng thái đăng nhập từ local storage
            localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập từ local storage
            localStorage.removeItem('userId'); // Xóa người dùng từ local storage
            localStorage.removeItem('role'); // Xóa vai trò từ local storage
            localStorage.removeItem('username'); // Xóa vai trò từ local storage
        };


        // Lấy trạng thái đăng nhập từ local storage khi component được mounted
        onMounted(() => {
            // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            storedValue.value = localStorage.getItem('isLoggedIn') === 'true';

            // isLoggedIn.value = storedValue; // Gán giá trị từ Local Storage vào reactive object
            // if (!isLoggedIn) {
            //     localStorage.removeItem('isLoggedIn'); // Xóa trạng thái đăng nhập từ local storage nếu không tồn tại
            // }

            // authStore.setLoggedIn(isLoggedIn);
        });

        // Watch isLoggedIn để theo dõi thay đổi và cập nhật local storage
        // watch(
        //     // () => authStore.isLoggedIn,
        //     (newValue) => {
        //         localStorage.setItem('isLoggedIn', newValue.toString());
        //         localStorage.setItem('userId', newValue.toString());
        //     }
        // );

        return {
            // isLoggedIn: authStore.isLoggedIn,
            logout,
            userId,
            username,
            // isLoggedIn,
            storedValue
            // userId: authStore.userId
        }

        // const router = useRouter();

        // const authStore = useAuthStore();

        // const logout = () => {
        //     authStore.logout();
        //     router.push('/login'); // Điều hướng tới trang đăng nhập sau khi đăng xuất
        // };


        // // Sử dụng onMounted để đảm bảo rằng component đã được mounted trước khi theo dõi sự thay đổi của isLoggedIn
        // onMounted(() => {
        //     // Sử dụng watch để theo dõi thay đổi của isLoggedIn
        //     watch(
        //         () => authStore.isLoggedIn,
        //         (newValue) => {
        //             console.log('isLoggedIn changed:', newValue);
        //         }
        //     );
        // });

        // return {
        //     isLoggedIn: authStore.isLoggedIn,
        //     logout,
        //     userId: authStore.userId
        // };
    }
});

</script>

<style scoped>
.logout {
    cursor: pointer;
}

.dropdown:hover .dropdown-menu-hidden {
    display: block;
}

.avatar {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>