import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import AddCoffee from './app-views/coffees/add/AddCoffee';
import Coffees from './app-views/coffees/Coffees';
import ListCoffee from './app-views/coffees/list/ListCoffee';
import Home from './app-views/home/Home';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path: "coffees",
        element: <Coffees/>,
        children:[
          {
            path:"",
            element: <ListCoffee/>
          },
          {
            path:'detail',
            element:<AddCoffee/>
          },
          {
            path:'detail/:id',
            element:<AddCoffee/>
          }
        ]
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
