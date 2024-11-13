import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
        
        <h1>Home</h1>
        <Link to="/contacto">Ir a Contacto</Link>
          <Link to="/producto">Ir a Productos</Link>
    </main>
  )
}

export default Home