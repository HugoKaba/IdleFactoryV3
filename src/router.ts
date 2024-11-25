import { createRouter, createWebHistory } from 'vue-router'
import FactoriesComponent from './components/FactoryComponents/FactoriesComponent.vue'
import InventoryComponent from './components/InventoryComponent.vue'
import MarketComponent from './components/MarketComponent.vue'
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import Achievements from "./components/achievements/Achievements.vue";
// import {useUserStore} from "./stores/UserStore.ts";



export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: FactoriesComponent,
    },
    {
      path: '/inventory',
      component: InventoryComponent,
    },
    {
      path: '/market',
      component: MarketComponent,
    },
    {
      path: '/achievements',
      component: Achievements,
    },
    {
      path: '/login',
      component: Login
    },
    {
      path:'/register',
      component: Register
    }
  ]
})
