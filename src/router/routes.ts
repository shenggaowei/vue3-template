import ICON from "@/components/Icon/index.vue";
import { menuIconSize } from "@/utils";
import { h } from "vue";

const Layout = () => import("@/components/Layout/index.vue");
const Home = () => import("@/pages/Home/index.vue");
const About = () => import("@/pages/About/index.vue");
const Login = () => import("@/pages/Login/index.vue");

export default [
  {
    path: "/",
    component: Layout,
    redirect: "home",
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
        meta: {
          title: "用户管理",
          key: "home",
          icon: () => h(ICON, { name: "menu_vue", size: menuIconSize }),
        },
      },
      {
        path: "about",
        name: "about",
        component: About,
        meta: {
          title: "专业管理",
          key: "about",
          icon: () => h(ICON, { name: "menu_setting", size: menuIconSize }),
        },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];
