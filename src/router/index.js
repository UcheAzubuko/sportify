import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  document.title = `${to.meta.title} | Sportify`;

  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
