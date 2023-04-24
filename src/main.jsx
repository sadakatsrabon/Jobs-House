import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './component/Home/Home.jsx';
import App from './App';
import JobDetails from './component/JobDetails/JobDetails';
import AppliedJob from './component/AppliedJob/AppliedJob';
import Statics from './component/Statics/Statics';
import Blog from './component/Blog/Blog';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('data.json')
      },
      {
        path: 'statics',
        element: <Statics></Statics>
      },
      {
        path: 'appliedjob',
        element: <AppliedJob></AppliedJob>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'jobdetails',
        element:<JobDetails></JobDetails>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
