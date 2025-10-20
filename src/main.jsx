import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import EventDetails from './page/EventDetails.jsx'
import AddEvent from './components/AddEvent.jsx'
import AboutUs from './page/AboutUs.jsx'
import ContactUs from './page/ContactUS.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/events/:eventId",
    element:<EventDetails/>
  },
  {
    path:"/events",
    element:<AddEvent/>
  },
  {
    path:"/about",
    element:<AboutUs/>
  },
  {
    path:"/contact",
    element:<ContactUs/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
