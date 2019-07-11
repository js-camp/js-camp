import Home          from  '../views/home'
import SpeakeraView  from  '../views/SpeakersView'
import EventSchedule from  '../views/EventSchedule'

export default [
  { path : '/', name : 'home', component : Home },
  { path : '/code-of-conduct',
    name : 'coc',
    component : () => import(/* webpackChunkName: "coc" */ '../views/CodeOfConduct')
  },
  { path : '/sponsorship',
    name : 'sponsorship',
    component : () => import(/* webpackChunkName: "sponsorship" */ '../views/CallForSponsors')
  },
  { path : '/:year', name : 'home-page-for-year', component : Home },
  { path : '/:year/speakers', name : 'speakers', component : SpeakeraView },
  { path : '/:year/schedule', name : 'schedule', component : EventSchedule },
  { path : '/about',
    name : '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {path : "/ticket-application", component : TicketView },
  // {path : "/ticket", component : TicketView },
  // {path : "/speakers", component : SpeakersView }
]
