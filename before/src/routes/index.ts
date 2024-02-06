import {  createRouter, createWebHistory } from 'vue-router'

const router = createRouter({ 
  history: createWebHistory(),
  routes:[
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../view/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../view/Register.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../view/Layout.vue'),
    // meta:true,
    meta:true,
    children: [
      // 快捷菜单
      {
        path: '/layout/ShortcutMenu',
        name: 'ShortcutMenu',
        component: () => import('../view/ShortcutMenu/ShortcutMenu.vue'),
        meta: {
          id: 0,
          name: '快捷菜单',
          icon: "iconfont icon-liebiao"
        },
        children: [
          {
            path: '/layout/ShortcutMenu/home',
            name: 'ShortcutMenu/home',
            component: () => import('../view/ShortcutMenu/Home.vue'),
            meta: {
              name: '系统首页'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuList',
            name: 'ShortcutMenu/MenuList',
            component: () => import('../view/ShortcutMenu/MenuList.vue'),
            meta: {
              name: '客户列表'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuSort',
            name: 'ShortcutMenu/MenuSort',
            component: () => import('../view/ShortcutMenu/MenuSort.vue'),
            meta: {
              name: '客户筛选'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuMarket',
            name: 'ShortcutMenu/MenuMarket',
            component: () => import('../view/ShortcutMenu/MenuMarket.vue'),
            meta: {
              name: '销售线索'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuShang',
            name: 'ShortcutMenu/MenuShang',
            component: () => import('../view/ShortcutMenu/MenuShang.vue'),
            meta: {
              name: '全部商机'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuDing',
            name: 'ShortcutMenu/MenuDing',
            component: () => import('../view/ShortcutMenu/MenuDing.vue'),
            meta: {
              name: '全部订单'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuGuan',
            name: 'ShortcutMenu/MenuGuan',
            component: () => import('../view/ShortcutMenu/MenuGuan.vue'),
            meta: {
              name: '回款管理'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuShen',
            name: 'ShortcutMenu/MenuShen',
            component: () => import('../view/ShortcutMenu/MenuShen.vue'),
            meta: {
              name: '回款审批'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuBao',
            name: 'ShortcutMenu/MenuBao',
            component: () => import('../view/ShortcutMenu/MenuBao.vue'),
            meta: {
              name: '报销审批'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuGong',
            name: 'ShortcutMenu/MenuGong',
            component: () => import('../view/ShortcutMenu/MenuGong.vue'),
            meta: {
              name: '全部工单'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuXi',
            name: 'ShortcutMenu/MenuXi',
            component: () => import('../view/ShortcutMenu/MenuXi.vue'),
            meta: {
              name: '系统公告'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuXiao',
            name: 'ShortcutMenu/MenuXiao',
            component: () => import('../view/ShortcutMenu/MenuXiao.vue'),
            meta: {
              name: '内部消息'
            }
          },
          {
            path: '/layout/ShortcutMenu/MenuAdd',
            name: 'ShortcutMenu/MenuAdd',
            component: () => import('../view/ShortcutMenu/MenuAdd.vue'),
            meta: {
              name: '创建客户'
            }
          }
        ]
      },
      //客户管理
      {
        path: '/layout/customer',
        name: 'customer',
        component: () => import('../view/customer/Customer.vue'),
        meta: {
          id: 1,
          name: '客户管理',
          icon: "iconfont icon-kehu"
        },
        children: [
          {
            path: '/layout/customer/List',
            name: 'customer/List',
            component: () => import('../view/customer/List.vue'),
            meta: {
              name: '客户列表'
            }
          },
          {
            path: '/layout/customer/HighSeas',
            name: 'customer/HighSeas',
            component: () => import('../view/customer/HighSeas.vue'),
            meta: {
              name: '公海客户'
            }
          }
        ]
      },
      // 商机管理
      {
        path: '/layout/Business',
        name: 'Business',
        component: () => import('../view/businessOpportunity/Business.vue'),
        meta: {
          id: 2,
          name: '商机管理',
          icon: "iconfont icon-zhizhen"
        },
        children: [
          {
            path: '/layout/Business/All',
            name: 'Business/All',
            component: () => import('../view/businessOpportunity/All.vue'),
            meta: {
              name: '全部商机'
            }
          }
        ]
      }




    ]
  }
]
})

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

export default router
// process.env.BASE_URL
