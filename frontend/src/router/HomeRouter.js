const home = [
  {
    path: '/',
    // name: 'Home',
    component: () => import('../layouts/User.vue'),
    children: [
      {
        path: '',
        //         // con khong co /
        //         path: 'users',
        name: 'Home',
        component: () => import('../components/Home.vue')
        //         c
      },

      {
        path: 'about',
        name: 'About',
        component: () => import('../components/About.vue')
      },

      // {
      //   path: 'login',
      //   name: 'Login',
      //   component: () => import('../components/Login.vue')
      // },

      // {
      //   path: 'register',
      //   name: 'Register',
      //   component: () => import('../components/Register.vue')
      // },

      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../components/Cart.vue')
      },

      {
        path: 'order/:id',
        name: 'Orders',
        component: () => import('../components/Order.vue')
      },

      {
        path: '/product2/detail/:id',
        name: 'DetailProduct',
        component: () => import('../components/DetailProduct.vue')
      },

      {
        path: 'product2',
        name: 'Product2',
        component: () => import('../components/Product2.vue'),
      },

      // {
      //   path: 'checkout',
      //   name: 'Checkout',
      //   component: () => import('../components/Checkout.vue'),
      // },

      {
        path: 'checkout/:id',
        name: 'Checkout',
        component: () => import('../components/Checkout.vue'),
      },

      {
        path: 'profile/:id',
        name: 'Profile',
        component: () => import('../components/Profile.vue'),
      },

      // {
      //   path: 'profile',
      //   name: 'Profile',
      //   component: () => import('../components/Profile.vue'),
      // },


      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../components/Contact.vue')
      },

      {
        path: 'search',
        name: 'Search',
        component: () => import('../components/Search.vue')
      },
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },







  // neu khong dung duong dan da dinh nghia

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../layouts/PageNotFound.vue')
  },


];

export default home;