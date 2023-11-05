<template>
    <div class="container">
        <h3>Quản lý danh mục</h3>

        <button @click="addCategory" class="btn btn-success">Thêm danh mục</button>

        <div class="row category">

            <table class="table table-hover table-bordered text-center">
                <thead class="dark">
                    <tr>
                        <th></th>
                        <th>Danh Mục</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category, index) in categorys" :key="category.id">
                        <th>{{ index + 1 }}</th>
                        <td>{{ category.categoryname }} </td>
                        <td>
                            <router-link :to="{ name: 'detailCategory', params: { id: category._id } }"><i
                                    class="bi bi-pencil-square"></i></router-link>
                        </td>
                    </tr>


                    <!-- <tr <router-link :to="{ name: 'updateProduct', params: { id: category._id } }">
                    v-for="(category, index) in categorys" :key="category.id">
                    <th>{{ index + 1 }}</th>
                    <td>{{ category.categoryname }}</td>
                    </router-link>
                </tr> -->

                </tbody>
            </table>
        </div>
    </div>
</template>
 <!-- @click="detailCategory(category._id)"  -->

<script>
import CategoryService from '@/services/category.service';

export default {
    name: 'Categorys',

    data() {
        return {
            categorys: [],
        }
    },

    mounted() {
        this.fetchgetNameCategorys()
    },

    methods: {
        addCategory() {
            this.$router.push('/admin/addcategory');
        },

        async fetchgetNameCategorys() {
            try {
                this.categorys = await CategoryService.getNameCategorys();
            } catch (error) {
                console.error(error);
            }
        },

        // detailCategory() {
        //     this.$router.push('/admin/detailcategory');


        // }
    },


}
</script>

<style scoped>
.category {
    margin: 30px 0;
}

h3 {
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
}
</style>