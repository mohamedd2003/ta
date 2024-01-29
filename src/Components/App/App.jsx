import React from 'react';
import styles from './App.module.css';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

let routes = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      { index:true, element: <Home /> },
      { path:'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> }, 
      { path: 'projects', element: <Projects /> },
      { path: 'clients', element: <Clients /> },
      { path: 'contact', element: <Contact/> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}
