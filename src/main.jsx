import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Context/Auth Context/AuthProvider.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Profile from './Components/Profile/Profile.jsx';






const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'orders',
        Component: Orders
      },
      {
        path: 'profile',
        Component: Profile
      }

    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   
   <AuthProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
   </AuthProvider>
    
  </StrictMode>,
)
