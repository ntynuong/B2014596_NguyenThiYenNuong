<template>
    <HeaderAdmin></HeaderAdmin>

    <router-view></router-view>
</template>

<script>
import HeaderAdmin from '@/components/HeaderAdmin.vue';

export default {
    name: 'Admin',
    components: {
        HeaderAdmin,
    }

};
</script>

<style></style>