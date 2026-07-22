import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import CreatePost from './CreatePost/CreatePost.jsx'
import Feed from './Feed/Feed.jsx'

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
        element : <CreatePost />
      }, 

      {
        path : '/feed',
        element : <Feed />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
