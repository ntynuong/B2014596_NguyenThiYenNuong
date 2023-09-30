const admin = [
    {
        path: '/admin',
        component: () => import('../layouts/Admin.vue'),
        children: [
            {
                // con khong co /
                path: 'users',
                name: 'admin-users',
                component: () => import('../pages/admin/users/index.vue')
            }
        ]
    }
];

export default admin;