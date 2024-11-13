import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import Producto from './pages/Producto';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/productos' element={<Producto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App