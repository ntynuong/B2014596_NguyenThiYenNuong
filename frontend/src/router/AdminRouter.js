const admin = [
    {
        path: '/admin',
        component: () => import('../layouts/Admin.vue'),
        children: [
            {
                path: 'home',
                name: 'AdminHome',
                component: () => import('../pages/admin/index.vue')
            },

            {
                path: 'users',
                name: 'Users',
                component: () => import('../pages/admin/users/index.vue'),
            },

            {
                path: 'orders',
                name: 'OrdersAdmin',
                component: () => import('../pages/admin/orders/index.vue'),
            },


            {
                path: 'categorys',
                name: 'Categorys',
                component: () => import('../pages/admin/categorys/index.vue'),
            },

            {
                // con khong co /
                path: 'addcategory',
                name: 'addCategory',
                component: () => import('../pages/admin/categorys/addcategory.vue'),
            },

            {
                path: 'detailcategory/:id',
                name: 'detailCategory',
                component: () => import('../pages/admin/categorys/detailcategory.vue'),
            },

            {
                path: 'products',
                name: 'Products',
                component: () => import('../pages/admin/products/index.vue'),
                // children: [
                //     {
                //         // con khong co /
                //         path: 'addproduct',
                //         name: 'addProduct',
                //         component: () => import('../pages/admin/products/addproduct.vue')
                //     }

                // ]
            },

            {
                // con khong co /
                path: 'addproduct',
                name: 'addProduct',
                component: () => import('../pages/admin/products/addproduct.vue'),
            },

            {
                path: 'updateproduct/:id',
                name: 'updateProduct',
                component: () => import('../pages/admin/products/updateproduct.vue'),
            },
        ]
    },

    {
        path: '/admin/login',
        name: 'AdminLogin',
        component: () => import('../pages/admin/AdminLogin.vue')
    },

    {
        path: '/admin/register',
        name: 'AdminRegister',
        component: () => import('../pages/admin/AdminRegister.vue')
    },
];

export default admin;