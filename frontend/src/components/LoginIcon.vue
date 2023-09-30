<template>
    <div>
        <!-- chua dang nhap -->
        <button v-if="!isLogin" @click="redirectLogin" class="btn btn-outline-danger" type="button"><i
                class="bi bi-person-circle"></i></button>

        <!-- chua dang nhap -->
        <button v-else @click="dropdownUser" class="btn btn-outline-danger" type="button"><i
                class="bi bi-person-circle"></i></button>
        <div v-if="isDropdownOpen">
            <ul>
                <li><a href="/profile">Thông tin hồ sơ</a></li>
                <li><a href="/logout">Đăng xuất</a></li>
            </ul>
        </div>

    </div>
    <router-view></router-view>
</template>

<script>

export default {
    name: 'LoginIcon',

    data() {
        return {
            isDropdownOpen: false
        };
    },

    methods: {
        redirectLogin() {
            this.$router.push({ name: 'Login' });

        },
        dropdownUser() {
            this.isDropdownOpen = !this.isDropdownOpen;
        }

    }


}
</script>

<style></style>