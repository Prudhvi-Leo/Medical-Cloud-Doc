import { createRoot } from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import AppContextProvider from './context/AppContext'

const root = createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  [
    {
      path: "/" , 
      element : <App />,
      children : [
        { path : ""  , element  : <Home/>},
        { path : "/doctors"  , element  : <Doctors/>},
        { path : "/doctors/:speciality"  , element  : <Doctors/>},
        { path : "/login"  , element  : <Login/>},
        { path : "/about"  , element  : <About/>},
        { path : "/contact"  , element  : <Contact/>},
        { path : "/my-profile"  , element  : <MyProfile/>},
        { path : "/my-appointments"  , element  : <MyAppointments/>},
        { path : "/appointment/:docId"  , element  : <Appointment/>},
      ]
    }
  ]
)

root.render(
  <AppContextProvider>
      <RouterProvider router = {router}/>
  </AppContextProvider>
)