import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Addcoffe from './Components/Addcoffe';
import Updatecoffe from './Components/Updatecoffe';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:'/addcoffe',
    element:<Addcoffe></Addcoffe>
  },
  {
    path:'/updatecoffee',
    element:<Updatecoffe></Updatecoffe>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
