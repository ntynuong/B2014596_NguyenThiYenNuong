<script>
import HeaderHome from '../components/HeaderHome.vue';
import FooterHome from '../components/FooterHome.vue';

export default {
    components: {
        HeaderHome,
        FooterHome,
    },
};

</script>

<template>
    <HeaderHome></HeaderHome>
    <div class="container">HOME</div>
    <FooterHome></FooterHome>
    <router-view></router-view>
</template>



<style></style>