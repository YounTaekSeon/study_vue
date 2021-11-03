import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import Content from '../components/Content.vue'
import Profile from '../components/Profile.vue'
import Info from '../components/Info.vue'
import InfoHealth from '../components/InfoHealth.vue'
import InfoExercise from '../components/InfoExercise.vue'
import Search from '../components/Search.vue'
import SearchDetail from '../components/SearchDetail.vue'
import SearchList from '../components/SearchList.vue'
import Test from '../components/test.vue'
const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/content',
    name: 'Content',
    component: Content
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/searchdetail',
    name: 'SearchDetail',
    component: SearchDetail
  },
  {
    path: '/searchlist',
    name: 'SearchList',
    component: SearchList
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/infohealth',
    name: 'InfoHealth',
    component: InfoHealth
  },
  {
    path: '/infoexercise',
    name: 'InfoExercise',
    component: InfoExercise
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
