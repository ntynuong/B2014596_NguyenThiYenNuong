<template>
    <div class="card mb-3 text-center container" style="max-width: 540px;">
        <div class="row g-0">
            <h3>Hồ sơ cá nhân</h3>

            <div class="col-md-4">
                <img src="/img/user.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <form class=" " @submit="updateUser($event, userId)">
                        <div class="input-container">
                            <lable>Tên: </lable>
                            <input type="text" v-model="fullname" class="input-field" name="fullname"
                                placeholder="Họ và tên">
                        </div>

                        <div class="input-container">
                            <lable>Email: </lable>
                            <input type="email" v-model="email" class="input-field" name="email" placeholder="Email">
                        </div>

                        <div class="input-container">
                            <lable>Số điện thoại: </lable>
                            <input type="text" v-model="phone" class="input-field" name="phone" placeholder="Số điện thoại">
                        </div>

                        <div class="input-container">
                            <lable>Địa chỉ: </lable>
                            <input type="text" v-model="address" class="input-field" name="address" placeholder="Địa chỉ">
                        </div>

                        <button type="submit" class="">CẬP NHẬT</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/user.service';

export default {
    name: 'Profile',

    data() {
        return {
            fullname: '',
            email: '',
            phone: '',
            address: '',

        };
    },

    created() {
        this.userId = this.$route.params.id;

        if (this.userId) {
            this.get(this.userId);
        }
    },

    methods: {
        async updateUser(event, userId) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của form (tải lại trang)

            if (this.fullname === '' || this.email === '' || this.phone === '' || this.address === '') {
                this.showError = true;
            } else {
                this.showError = false;

                const formData = new FormData();
                formData.append('fullname', this.fullname);
                formData.append('phone', this.phone);
                formData.append('email', this.email);
                formData.append('address', this.address);
                console.log("data1", userId);

                try {
                    console.log("data1", userId);
                    const response = await UserService.updateUser(userId, formData);
                    if (response.status === 200) {
                        console.log("response", response);
                        alert("Cập nhật thành công");
                        // this.$router.push('/profile');
                    } else {
                        console.log("response", response);
                        console.error('Error', response.message);
                        console.log(response.status);
                    }
                } catch (error) {
                    this.error = error.response.message;
                    this.showError = true;
                }

            }

        },


        async get(userId) {
            try {
                const response = await UserService.findOneUser(userId);
                console.log("data", response);
                this.fullname = response.fullname;
                this.address = response.address;
                this.phone = response.phone;
                this.email = response.email;



            } catch (error) {
                console.error(error);

            }
        },
    }

}
</script>

<style scoped>
.image-user {
    width: 175px;
    height: 175px;
}

.input-field {
    padding: 10px;
    outline: none;
    margin-left: 15px;
}

.input-container {
    position: relative;
    display: inline-block;
    display: flex;
    margin-bottom: 15px;
    align-items: center;
    /* Căn các phần tử theo chiều dọc */

}

.input-container label {
    margin-right: 10px;
    /* Khoảng cách giữa nhãn và input */
}
</style>