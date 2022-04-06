import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './components/pages/HomePage.vue';
import PostDetailPage from './components/posts/PostDetailPage.vue';

const router = new VueRouter({
    mode:'history',
    routes:[
        {path:'/',component:HomePage},
        {path:'/posts/:id',component:PostDetailPage,name:'post-detail'}
    ],
});

export default router;