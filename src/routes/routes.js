import Home from  '../views/home'
// import GraphicDesign from  '../views/GraphicDesign'
// import UiDesign from  '../views/UiDesign'

export default [
  { path : '/', name : 'home', component : Home },
  { path : '/:year', name : 'home-page-for-year', component : Home },
  { path : '/:year/speakers', name : 'speakers', component : Home },
  { path : '/:year/schedule', name : 'schedule', component : Home },
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
