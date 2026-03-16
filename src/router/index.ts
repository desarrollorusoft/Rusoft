import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import i18n from "@/i18n";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: () =>
      import(/* webpackChunkName: "nosotros" */ "../views/NosotrosView.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/ContactoView.vue"),
  },
  {
    path: "/cv",
    name: "cv",
    component: () =>
      import(/* webpackChunkName: "cv" */ "../views/CvView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export function applyRouteMeta(routeName: string) {
  const t = i18n.global.t as (key: string) => string;

  document.title = t(`meta.${routeName}.title`);

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t(`meta.${routeName}.description`));

  const metaKw = document.querySelector('meta[name="keywords"]');
  if (metaKw) metaKw.setAttribute("content", t(`meta.${routeName}.keywords`));
}

router.beforeEach((to, _from, next) => {
  if (to.name) applyRouteMeta(to.name as string);
  next();
});

export default router;
