import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DienThoai from '../components/routerLink/dien-thoai.vue'
import PhuKien from '../components/routerLink/phu-kien.vue'
import Tablet from '../components/routerLink/tablet.vue'
import Laptop from '../components/routerLink/laptop.vue'
import AmThanh from '../components/routerLink/am-thanh.vue'
import Smartwatch from '../components/routerLink/smartwatch.vue'
import GiaDung from '../components/routerLink/gia-dung.vue'
import XaKho from '../components/routerLink/xa-kho.vue'
import SanPham from '../views/sanpham.vue'
Vue.use(VueRouter)

const routes = [
    { 
       path: '/',
       name: 'home',
       component: Home
    },
    {
      path: '/dien-thoai',
      name: 'DienThoai',
      component: DienThoai
    },
    {
      path: '/phu-kien',
      name: 'PhuKien',
      component: PhuKien
    },
    {
      path: '/tablet',
      name: 'Tablet',
      component: Tablet
    },
    {
      path: '/laptop',
      name: 'Laptop',
      component: Laptop
    },
    {
      path: '/am-thanh',
      name: 'AmThanh',
      component: AmThanh
    },
    {
      path: '/smartwatch',
      name: 'Smartwatch',
      component: Smartwatch
    },
    {
      path: '/gia-dung',
      name: 'GiaDung',
      component: GiaDung
    },
    {
      path: '/xa-kho',
      name: 'XaKho',
      component: XaKho
    },
    {
      path: '/:id',
      name: 'SanPham',
      component: SanPham,
    },
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
   routes,
   scrollBehavior() {
    return {x: 0, y: 0}
}
})
export default router