import React from 'react';
import Home from './pages/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loginpage from './pages/Login';
import Signupage from './pages/Signup';
import Cartpage from './pages/Cart';
import Checkoutpage from './pages/Checkoutpage';
import ProductDetailasPage from './pages/ProductDetailasPage';


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
  },
  {
    path:'/checkout',
    element: (<Checkoutpage/>)
  },
  {
    path:'/product-details',
    element: (<ProductDetailasPage/>)
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
