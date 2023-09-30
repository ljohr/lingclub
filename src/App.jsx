import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "../components/Navbar"
import Home from "../pages/Home"
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
      // },
      // {
      //   path: "/about",
      //   element: <About />
      // },
      // {
      //   path: "/eboard",
      //   element: <Eboard />
      // },
      // {
      //   path: "/events",
      //   element: <Events />
      // },
      // {
      //   path: "/resources",
      //   element: <Resources />
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />
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
