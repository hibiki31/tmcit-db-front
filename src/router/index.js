import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/users/signup',
    name: 'UserSignup',
    component: () => import('../views/UserSignup.vue')
  },
  {
    path: '/problem',
    name: 'Problem',
    component: () => import('../views/Problem.vue')
  },
  {
    path: '/problem/:id',
    name: 'ProblemId',
    component: () => import('../views/ProblemDetail.vue')
  },
  {
    path: '/template',
    name: 'Template',
    component: () => import('../views/Template.vue')
  },
  {
    path: '/submit',
    name: 'Submit',
    component: () => import('../views/Submit.vue')
  },
  {
    path: '/teacher/signup',
    name: 'TeacherSignup',
    component: () => import('../views/TeacherSignup.vue')
  },
  {
    path: '/teacher',
    name: 'TeacherManager',
    component: () => import('../views/TeacherManager.vue')
  },
  {
    path: '*',
    redirect: 'Home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthed = store.state.isAuthed
  console.log(isAuthed)
  if (isAuthed || to.matched.some(record => !record.meta.requiresAuth)) {
    if ((to.name === 'Login' && isAuthed) || (to.name === 'Logout' && !isAuthed)) {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    next({ name: 'Login' })
  }
})

export default router
