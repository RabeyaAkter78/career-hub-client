import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import JobDetail from './components/JobDetail/JobDetail';
import FeaturedJob from './components/FeaturedJob/FeaturedJob';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/catagoryJobs.json'),

      },
      {
        path: 'appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'featuredJob/:id',
        element:<JobDetail></JobDetail>,
        loader:()=>fetch(`/featuredJobs.json`)
      },
      {
        path:'featuredJob/newData/:id',
        element:<JobDetail></JobDetail>,
        loader:()=>fetch(`/featuredJobs.json`)
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
