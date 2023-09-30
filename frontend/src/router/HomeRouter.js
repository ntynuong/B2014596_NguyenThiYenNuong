const home = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/Home.vue')
    // children: [
    //     {
    //         // con khong co /
    //         path: 'users',
    //         name: 'admin-users',
    //         c
    //     }
    // ]
  },

  {
    path: '/about',
    name: 'About',
    component: () => import('../layouts/About.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../layouts/Login.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../layouts/Register.vue')
  },

  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../components/Cart.vue')
  },


  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../layouts/PageNotFound.vue')
  }
];

export default home;