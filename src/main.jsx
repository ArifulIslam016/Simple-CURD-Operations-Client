import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import UserDetails from './Components/UserDetails.jsx'
import UpdateUser from './Components/UpdateUser.jsx'
const router=createBrowserRouter([
  {path:'/',
    Component: App
  },
  {
    path:'/users/:id',
    Component:UserDetails,
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`)
  },
  {path:'/update/:id',
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`),

    Component:UpdateUser,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
