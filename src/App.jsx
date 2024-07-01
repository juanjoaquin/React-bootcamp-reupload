import React from 'react'
import ItemListContainerCursos from './components/Cursos/ItemListContainerCursos/ItemListContainerCursos'
import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ItemDetailContainerCursos from './components/Cursos/ItemDetailContainerCursos/ItemDetailContainerCursos'
import InscriptionPage from './components/Cursos/InscriptionPage/InscriptionPage'
import Footer from './components/Footer/Footer'
import ContainerID from './components/Cursos/ContainerID/ContainerID'
import HomeMarcas from './components/HomePage/HomeMarcas'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cursos' element={<ItemListContainerCursos />}/> 
        <Route path='/cursos/:category' element={<ItemDetailContainerCursos />}/>
        <Route path="/inscription/:title" element={<InscriptionPage />}/> 
        <Route path="/curso/:id" element={<ContainerID />}/> 
        <Route path='/marcas' element={<HomeMarcas />}/> 
        {/* <Route path='/cursos/:id' element={<ContainerID />}/> */}
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

/* 
        <Route path="/inscription/:title" element={<InscriptionPage />}/>
        */

export default App
