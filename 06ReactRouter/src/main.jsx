import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import About from './components/About-us/About'
import Home from './components/Home/Home'
import Contact from './components/Contact-Us/Contact'
import User from './components/User/User.jsx'
import Github, { GithubInfo } from './components/Github/Github.jsx'

// const router=createBrowserRouter([{
//    path:'/',
//    element:<Layout/>,
//    children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>

//     },
//     {
//       path:"contact",
//       element:<Contact/>

//     }
//    ]

// }

// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Layout/>}>
    <Route path='/'element={<Home/>}/>
    <Route path='about'element={<About/>}/>
    <Route path='contact'element={<Contact/>}/>
    <Route path='user/:userid' element={<User />} />
    <Route loader={GithubInfo}
     path='Github' element={<Github />} />
    </Route>
  )
)





createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
