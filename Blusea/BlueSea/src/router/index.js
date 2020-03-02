//引入vue
import Vue from 'vue';
//引入vue-router
import Router from 'vue-router';
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
};
//使用vue-router
Vue.use(Router);


//引入页面组件
import home from '../pages/home.vue';
import notfound from '../pages/notfound.vue';
import xz from '../pages/xz.vue';
import login from '../pages/login.vue';
import yhxy from '../pages/yhxy.vue';
import ysxy from '../pages/ysxy.vue';
import bbgl from '../pages/bbgl.vue';
import introduce from '../pages/introduce.vue';
import download from '../pages/download.vue';

import lw1 from "../components/home/lw/lw1.vue";
import lw2 from "../components/home/lw/lw2.vue";

import zj1 from "../components/home/zj/zj1.vue";
import zj2 from "../components/home/zj/zj2.vue";
import zj3 from "../components/home/zj/zj3.vue";
import zj4 from "../components/home/zj/zj4.vue";


import fj1 from "../components/home/fj/fj1.vue";
import fj2 from "../components/home/fj/fj2.vue";
import fj3 from "../components/home/fj/fj3.vue";
import fj4 from "../components/home/fj/fj4.vue";
import jb1 from "../components/home/jb/jb1.vue";
import jb2 from "../components/home/jb/jb2.vue";

import gg from "../components/home/gg/gg.vue";
import yh1 from "../components/home/yh/yh1.vue";
import yh2 from "../components/home/yh/yh2.vue";
import yh3 from "../components/home/yh/yh3.vue";
import xy1 from "../components/home/xy/xy1.vue";
import xy2 from "../components/home/xy/xy2.vue";
import xy3 from "../components/home/xy/xy3.vue";
import zd1 from "../components/home/zd/zd1.vue";
import zd2 from "../components/home/zd/zd2.vue";
import zd3 from "../components/home/zd/zd3.vue";
import bb1 from "../components/home/bb/bb1.vue";
import bb2 from "../components/home/bb/bb2.vue";
import gly1 from "../components/home/gly/gly1.vue";
import gly4 from "../components/home/gly/gly4.vue";

import main1 from "../components/home/main/main1.vue";
import main2 from "../components/home/main/main2.vue";



//实例化router并配置参数
let router = new Router({
    routes: [
        {
            name: 'login',
            path: '/login',
            component: login
        },
        {
            name: 'yhxy',
            path: '/yhxy',
            component: yhxy

        },
        {
            name: 'ysxy',
            path: '/ysxy',
            component: ysxy
        },
        {
            name: 'introduce',
            path: '/introduce',
            component: introduce
        },
        {
            name: 'download',
            path: '/download',
            component: download
        },
        {
            name: 'home',
            path: '/Home',
            component: home,
            meta: {
                requiresAuth: true
            },
            children: [{
                name: 'lw1',
                path: '/lw1',
                component: lw1,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'lw2',
                path: '/lw2',
                component: lw2,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'zj1',
                path: '/zj1',
                component: zj1,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'zj2',
                path: '/zj2',
                component: zj2,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'zj3',
                path: '/zj3',
                component: zj3,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'zj4',
                path: '/zj4',
                component: zj4,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'fj1',
                path: '/fj1',
                component: fj1,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'fj2',
                path: '/fj2',
                component: fj2,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'fj3',
                path: '/fj3',
                component: fj3,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'fj4',
                path: '/fj4',
                component: fj4,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'jb1',
                path: '/jb1',
                component: jb1,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'jb2',
                path: '/jb2',
                component: jb2,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'gg',
                path: '/gg',
                component: gg,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'yh1',
                path: '/yh1',
                component: yh1,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'yh2',
                path: '/yh2',
                component: yh2,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'yh3',
                path: '/yh3',
                component: yh3,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'xy1',
                path: '/xy1',
                component: xy1,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'xy2',
                path: '/xy2',
                component: xy2,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'xy3',
                path: '/xy3',
                component: xy3,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'zd1',
                path: '/zd1',
                component: zd1,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'zd2',
                path: '/zd2',
                component: zd2,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'zd3',
                path: '/zd3',
                component: zd3,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'bb1',
                path: '/bb1',
                component: bb1,
                meta: {
                    requiresAuth: true
                }
            }, {
                name: 'bb2',
                path: '/bb2',
                component: bb2,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'gly1',
                path: '/gly1',
                component: gly1,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'gly4',
                path: '/gly4',
                component: gly4,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'main1',
                path: '/main1',
                component: main1,
                meta: {
                    requiresAuth: true
                }
            },
            {
                name: 'main2',
                path: '/main2',
                component: main2,
                meta: {
                    requiresAuth: true
                }
            }
            ]
        },
        {
            path: '/',
            redirect: 'login'
        },
        {

            path: '/404',
            component: notfound

        },
        {

            path: '*',
            redirect: '/404'

        },
        {
            name: 'xz',
            path: '/xz',
            component: xz
        },
        {
            name: 'bbgl',
            path: '/bbgl',
            component: bbgl,
            meta: {
                requiresAuth: true
            }
        }

    ]


});


router.beforeEach(function (to, from, next) {

    //在全局路由守卫beforeEach中进行页面权限访问控制
    //先判断目标路由是否需要鉴权
    if (to.meta.requiresAuth) {
        //如需鉴权，则先拿到保存在localStrorage里面的信息，然后再判断
        let Token = document.cookie;
        if (Token) {
            next();

        } else {
            alert("请先登录")
        }
    } else {
        next();
    }


});

export default router;