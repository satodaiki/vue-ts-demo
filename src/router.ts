import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home.vue';
import About from '@/components/pages/About.vue';
import Test from '@/components/pages/Test.vue';
import HelloWorld from '@/components/HelloWorld.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/test',
      name: 'test',
      component: Test,
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: HelloWorld,
    },
  ],
});
