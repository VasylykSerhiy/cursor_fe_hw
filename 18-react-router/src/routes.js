import React from 'react'

import Home from './Pages/Home'
import Posts from './Pages/Posts'
import Photo from './Pages/Photo'
import Contacts from './Pages/Contacts'
import ContactDetail from './Pages/ContactDetail'

const routes = [
  {
    path: '/cursor-react-routes',
    component: <Home />,
    exact: true,
  },
  {
    path: '/cursor-react-routes/posts',
    component: <Posts />,
  },
  {
    path: '/cursor-react-routes/photo',
    component: <Photo />,
  },
  {
    path: '/cursor-react-routes/contacts',
    component: <Contacts />,
    exact: true,
  },
  {
    path: '/cursor-react-routes/contacts/:name',
    component: <ContactDetail />,
  },
]

export default routes;