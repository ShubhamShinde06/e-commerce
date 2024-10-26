import React from 'react';
import Home from './pages/Home';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Loginpage from './pages/Login';
import Signupage from './pages/Signup';
import Cartpage from './pages/Cart';


const router = createBrowserRouter([
  {
    path:'/',
    element: (<Home/>)
  },
  {
    path:'/login',
    element: (<Loginpage/>)
  },
  {
    path:'/signup',
    element: (<Signupage/>)
  },
  {
    path:'/cart',
    element: (<Cartpage/>)
  }
])

function App() {
  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
