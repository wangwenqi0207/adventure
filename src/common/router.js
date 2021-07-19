import loadable from '@loadable/component'
const User =loadable(()=>{import('../pages/User')})

// import User from '../pages/User'
import Files from '../pages/Files'

export const routers = [
    {
         path:'/user',
         key:'1',
         components: User
    },
    {
        path:'/file',
        key:'2',
        components: Files
    }
]