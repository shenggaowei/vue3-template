import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { beforeEachGard } from './guards'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(beforeEachGard)

export default router

