import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Componente IU
import Navbar from './Componentes/IU/navbar';
import Footer from './Componentes/IU/footer';
import Inicio from './Componentes/IU/inicio';

//Componentes de tipos
import Tipo from './Componentes/Tipos/tipo';
import CrearTipo from './Componentes/Tipos/crear-tipo';
import EditarTipo from './Componentes/Tipos/editar-tipo';

//Componenetes de productoras
import Productora from './Componentes/Productoras/productora';
import CrearProductora from './Componentes/Productoras/crear-productora';
import EditarProductora from './Componentes/Productoras/editar-productora';

//componentes de directores
import Director from './Componentes/Directores/director';
import CrearDirector from './Componentes/Directores/crear-director'
import EditarDirector from './Componentes/Directores/editar-director'

//componentes de directores
import Genero from './Componentes/Generos/genero';
import CrearGenero from './Componentes/Generos/crear-genero'
import EditarGenero from './Componentes/Generos/editar-genero';

//componentes de media
import Media from './Componentes/Media/media';
import EditarMedia from './Componentes/Media/editar-media';
import CrearMedia from './Componentes/Media/crear-media';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          {/* Rutas de Inicio*/}
          <Route path='/inicio'  element={<Inicio />} />

          {/* Rutas de Tipos*/}
          <Route path='/tipos' element={<Tipo />} />
          <Route path='/crear-tipo' element={<CrearTipo />} />
          <Route path='/editar-tipo/:id' element={<EditarTipo />} />

          {/* Rutas de Generos*/}
          <Route path='/generos' element={<Genero />} />
          <Route path='/crear-genero' element={<CrearGenero />} />
          <Route path='/editar-genero/:id' element={<EditarGenero />} />

          {/* Rutas de Directores*/}
          <Route path='/directores' element={<Director />} />
          <Route path='/crear-director' element={<CrearDirector />} />
          <Route path='/editar-director/:id' element={<EditarDirector />} />

          {/* Rutas de Productoras*/}
          <Route path='/productoras' element={<Productora />} />
          <Route path='/crear-productora' element={<CrearProductora />} />
          <Route path='/editar-productora/:id' element={<EditarProductora />} />

          {/* Rutas de media*/}
          <Route path='/media' element={<Media />} />
           <Route path='/crear-media' element={<CrearMedia />} /> 
          <Route path='/editar-media/:id' element={<EditarMedia />} />


          {/* Otras rutas aquí */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
