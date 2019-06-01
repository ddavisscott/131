import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'
import Home from '@/views/Home'
import SignIn from '@/views/SignIn'
import SignOut from '@/views/SignOut'
import SignUp from '@/views/SignUp'
import Profile from '@/views/Profile'
import RoadBlocks from '@/views/roadBlocks'
import IndividualView from '@/views/IndividualView'
import Meeting from '@/views/meeting'
import Burndown from '@/views/Burndown'
import Notes from '@/views/Notes'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signout',
      name: 'signout',
      component: SignOut
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/road_blocks',
      name: 'road_blocks',
      component: RoadBlocks,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/individual_view',
      name: 'individual_view',
      component: IndividualView,
      meta: {
        authRequired: true
      }
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: Meeting,
      meta: {
        authRequired: true
      }
    }, 
    {
      path: '/burndown',
      name: 'burndown',
      component: Burndown,
      meta: {
        authRequired: true
      }
    }, 
    {
      path: '/notes',
      name: 'notes',
      component: Notes,
      meta: {
        authRequired: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
