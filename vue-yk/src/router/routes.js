export const routes = [
    {
        path:'/',
        redirect:'/send'
    },
    {
        path:'/send',
        component:() => import('@/views/send')
    },
    {
        path:'/classify',
        component:() => import('@/views/classify')
    },
    {
        path:'/vip',
        component:() => import('@/views/vip')
    },
    {
        path:'/car',
        component:() => import('@/views/car')
    },
    {
        path:'/my',
        component:() => import('@/views/my')
    },
    {
        path:'/list',
        component:() => import('@/views/list')
    },
    {
        path:'/add',
        component:() => import('@/views/add')
    },
    {
        path:'*',
        component:() => import('@/views/404')
    }
]

