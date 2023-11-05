<script>
import HeaderHome from '../components/HeaderHome.vue';
import FooterHome from '../components/FooterHome.vue';

export default {
    name: 'User',
    components: {
        HeaderHome,
        FooterHome,
    },
};

</script>

<template>
    <HeaderHome></HeaderHome>
    <router-view></router-view>
    <FooterHome></FooterHome>
</template>



<style></style>