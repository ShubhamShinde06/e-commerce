import React from 'react'
import NavBar from '../features/navBar/NavBar'
import ProductList from '../features/counter/ProfuctList'

const Home = () => {
  return (
    <div>
        <NavBar>
            <ProductList/>
        </NavBar>
    </div>
  )
}

export default Home