import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Ch02ComponentRouting from '@/router/Ch02ComponentRouting';
import Ch03DataBinding from '@/router/Ch03DataBinding';
import Ch04EventHandling from '@/router/Ch04EventHandlingWatch';
import Ch05DataDelivery from '@/router/Ch05DataDelivery';
import Exam01View from '@/views/Ch02ComponentRouting/Exam01View.vue'
import Exam04view from '@/views/Ch02ComponentRouting/Exam04View'
import Exam05view from '@/views/Ch02ComponentRouting/Exam05View'
import UIComponentA from '@/components/Ch02ComponentRouting/UIComponentA.vue'
import UIComponentB from '@/components/Ch02ComponentRouting/UIComponentB.vue'
import UIComponentC from '@/components/Ch02ComponentRouting/UIComponentC.vue'
import Exam06view from '@/views/Ch02ComponentRouting/Exam06View'
import Exam07view from '@/views/Ch02ComponentRouting/Exam07View'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...Ch02ComponentRouting,    // 구조분해 해서 배열을 넣어줌
  ...Ch03DataBinding,
  ...Ch04EventHandling,
  ...Ch05DataDelivery
  // },
  // {
  //   path: '/Ch02ComponentRouting/Exam01View',
  //   component: Exam01View,
  //   name: 'Exam01View'
  // },
  // {
  //   path: '/Ch02ComponentRouting/Exam02View',
  //   // component: Exam02View
  //   component: () => import(/* webpackChunkName: "exam02view" */ '@/views/Ch02ComponentRouting/Exam02View')
  // },
  // {
  //   path: '/Ch02ComponentRouting/Exam03View',
  //   component: () => import(/* webpackChunkName: "exam02view" */ '@/views/Ch02ComponentRouting/Exam03View')
  // },
  // {
  //   path: '/Ch02ComponentRouting/Exam04View',
  //   component: Exam04view
  // }
  // ,
  // {
  //   path: '/Ch02ComponentRouting/Exam05View',
  //   component: Exam05view,
  //   redirect: '/Ch02ComponentRouting/Exam05View/UIComponentA',
  //   children: [
  //     {
  //       path: "UIComponentA", // "/Ch02ComponentRouting/Exam05View/UIComponentA"
  //       component: UIComponentA
  //     },
  //     {
  //       path: "UIComponentB", // "/Ch02ComponentRouting/Exam05View/UIComponentB"
  //       component: UIComponentB
  //     },
  //     {
  //       path: "UIComponentC", // "/Ch02ComponentRouting/Exam05View/UIComponentC"
  //       component: UIComponentC
  //     }
  //   ]
  // },
  // {
  //   path: '/Ch02ComponentRouting/Exam06View',
  //   component: Exam06view
  // },
  // {
  //   path: '/Ch02ComponentRouting/Exam07View/:kind?/:color?',
  //   component: Exam07view
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), //히스토리 (뒤로가기 가능)
  routes
})

export default router