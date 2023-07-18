import { h } from "vue";
import { PieChartOutlined, AppstoreOutlined } from "@ant-design/icons-vue";

import { isMobile } from "@/utils";

const Layout = () => import("@/components/Layout/index.vue");
const Home = () =>
  import(
    isMobile() ? "@/pages/Home/index.mobile.vue" : "@/pages/Home/index.vue"
  );
const About = () => import("@/pages/About/index.vue");
const Login = () => import("@/pages/Login/index.vue");

export default [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "home",
        name: "home",
        component: Home,
        meta: {
          label: "home",
          title: "home",
          key: "home",
          icon: () => h(PieChartOutlined),
        },
      },
      {
        path: "about",
        name: "about",
        component: About,
        meta: {
          label: "about",
          title: "about",
          key: "about",
          icon: () => h(AppstoreOutlined),
        },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
  },
];
