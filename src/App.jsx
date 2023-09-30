import { useState } from 'react'
import './App.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import Eboard from "../pages/Eboard"
import Events from "../pages/Events"
import Resources from "../pages/Resources"
import Contact from "../pages/Contact"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom"

const LayOut = () => {
  return (
    <>
      <header> 
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {  
    path:"/",
    element: <LayOut />,
    children:[ 
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/eboard",
        element: <Eboard />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/resources",
        element: <Resources />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
