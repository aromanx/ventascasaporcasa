import { useState } from "react";
import { useNavigate, Route, Routes } from 'react-router-dom'
import Login from "./Pages/Login";
import Menuprincipal from "./Pages/Menuprincipal";
import Productos from "./Pages/Productos";
import Editarproductos from "./Pages/Editarproductos"
import Nuevoproducto from "./Pages/Nuevoproducto";



function App() {
  
    return(
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/menuprincipal' element={<Menuprincipal/>} />
      <Route path='/productos' element={<Productos/>} />
      <Route path='/editarproductos' element={<Editarproductos/>} />
      <Route path='/nuevoproducto' element={<Nuevoproducto/>} />
    </Routes>
  
    )
    }


export default App
