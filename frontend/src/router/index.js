import { createRouter, createWebHistory } from 'vue-router';
import AdminRouter from './AdminRouter.js';
import HomeRouter from './HomeRouter.js';

const routes = [...AdminRouter, ...HomeRouter];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // routes: [
    //     {
    //   path: '/:catchAll(.*)',
    //   name: 'NotFound',
    //   component: NotFound
    // }
    // ]
});

const adminRoutesWithMeta = AdminRouter.map(route => {
    return { ...route, meta: { requiresAdmin: true } };
});

router.beforeEach((to, from, next) => {

    const isAdminRoute = to.matched.some(route => route.meta && route.meta.requiresAdmin);

    if (isAdminRoute) {

        const role = localStorage.getItem('role');
        const adminId = localStorage.getItem('adminId');

        if (!role || !adminId) {
            // Chuyển hướng đến trang /admin/login nếu không có trường role trong localStorage
            next('/admin/login');
        }
        else if (role === 'false') {
            // Chuyển hướng đến trang bạn không có quyền truy cập nếu role là false
            next('/no-access');
        } else {
            // Cho phép truy cập nếu role là true
            next();
        }

    } else if (to.path.startsWith('/admin')) {
        // Chuyển hướng đến trang /no-access nếu người dùng cố gắng truy cập vào bất kỳ đường dẫn con của /admin khi role là false
        const role = localStorage.getItem('role');
        if (!role) {
            console.log("chuyen den dang nhap");


            if (to.path !== '/admin/login') {
                next('/admin/login');
            } else {
                // Đã ở trang /admin/login, không chuyển hướng tiếp theo
                next();
            }

        }
        else if (role && role === 'false') {
            next('/no-access');
            console.log("khogn có quyne");
        }
        else {
            next();
        }
    } else {
        next();
    }

});

export default router;