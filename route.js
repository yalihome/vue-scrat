module.exports = {
    routes: [
        {
            path: "/index", component: ()=>import("../pages/index/index.vue")
        }
        // ,
        // {
        //     path: "/orders", component: import("../pages/orders/orders.vue")
        // },
        // {
        //     path: "/detail/:id", component: import("../pages/detail/detail.vue")
        // },
        // {
        //     path: "/center", component: import("../pages/center/center.vue")
        // }
    ]
}