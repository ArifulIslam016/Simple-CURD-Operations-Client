import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import UserDetails from './Components/UserDetails.jsx'
const router=createBrowserRouter([
  {path:'/',
    Component: App
  },
  {
    path:'/users/:id',
    Component:UserDetails,
    loader:({params})=>fetch(`http://localhost:3000/users/${params.id}`)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
