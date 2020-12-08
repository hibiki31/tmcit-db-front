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
    component: () => import('../views/Problem.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/answer',
    name: 'Answer',
    component: () => import('../views/Answer.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/problem/:id',
    name: 'ProblemId',
    component: () => import('../views/ProblemDetail.vue'),
    meta: {
      requiresAuth: true
    }
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
    path: '/teacher/create-problem',
    name: 'CreateProblem',
    component: () => import('../views/CreateProblem.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/teacher/signup',
    name: 'TeacherSignup',
    component: () => import('../views/TeacherSignup.vue'),
    meta: {
      requiresAuth: true
    }
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
  if (to === undefined) {
    next({ name: 'Home' })
  }

  // 現在ログイン状態か
  const isAuthed = store.state.isAuthed
  // メターデータを小階層までしらべて認証が必要か調べる
  const requeirtdAuth = to.matched.some(record => record.meta.requiresAuth)

  // ログインしているのに，ログイン画面に行こうとした時
  if (to.name === 'Login' && isAuthed) {
    next({ name: 'Home' })
  }

  // 認証が必要ないか，ログイン済み
  if ((!requeirtdAuth) || (requeirtdAuth && isAuthed)) {
    next()
  } else {
    // 認証が必要なのでログインに飛ばす
    next({ name: 'Login' })
  }
})

export default router
