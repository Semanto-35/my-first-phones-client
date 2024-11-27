import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phones from './components/Phones.jsx';
import Phone from './components/Phone.jsx';
import Root from './components/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader: ()=>fetch(`http://localhost:5000/phones`)
      },
      {
        path: "/phones/:phonesId",
        element: <Phone></Phone>,
        loader: ({params})=>fetch(`http://localhost:5000/phones/${params.phonesId}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
