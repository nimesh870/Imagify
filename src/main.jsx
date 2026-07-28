import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import CreatePost from './CreatePost/CreatePost.jsx'
import Feed from './Feed/Feed.jsx'
import Login from './Auth/Login.jsx'
import Register from './Auth/Register.jsx'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import AuthLayout from './AuthLayout.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [
      {
        path : '/',
        element : <Home />
      },

      {
        path : '/create-post',
        element : <AuthLayout authentication> <CreatePost /> </AuthLayout>
      }, 

      {
        path : '/feed',
        element : <AuthLayout authentication> <Feed /> </AuthLayout>
      },

      {
        path : '/login',
        element : <AuthLayout authentication = {false}> <Login /> </AuthLayout>
      },

      {
        path : '/register',
        element : <AuthLayout authentication = {false}> <Register /> </AuthLayout>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
