import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import React from 'react';
import Home from './Home/Home';
import MainLayout from './MainLayout/MainLayout';
import Hero from './Hero/Hero';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      // {
      //   path : "/projectDetails",
      //   element : 
      // },

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
