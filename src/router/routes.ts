const Layout = () => import('@/components/Layout/index.vue')
const Home = () => import('@/pages/Home/index.vue')
const About = () => import('@/pages/About/index.vue')
const Login = () => import('@/pages/Login/index.vue')

export default [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'home',
                name: 'home',
                component: Home
            },
            {
                path: 'about',
                name: 'about',
                component: About
            }
        ]
    },
    {
        path: "/login",
        component: Login,
    }
] 