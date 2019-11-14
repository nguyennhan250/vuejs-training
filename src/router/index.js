import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Todo from '../views/Todo.vue'
import Done from '../views/Done.vue'
import Add from '../views/Add.vue'
import Default from '../layouts/Default.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Default,
  children: [{
      path: 'list',
      name: 'list',
      component: List,
    },
    {
      path: 'todo',
      name: 'todo',
      component: Todo,
    },
    {
      path: 'done',
      name: 'done',
      component: Done,
    },
    {
      path: 'add',
      name: 'add',
      component: Add,
    }
  ]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
