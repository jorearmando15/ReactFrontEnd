import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URI = 'http://localhost:3200/media/';

const CrearMedia = () => {
  const [titulo, setTitulo] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [anno_estreno, setAnnoEstreno] = useState('');
  const [fecha_creacion, setFechaCreacion] = useState('');
  const [fecha_actualizacion, setFechaActualizacion] = useState('');
  const [id_genero, setIdGenero] = useState('');
  const [id_director, setIdDirector] = useState('');
  const [id_productora, setIdProductora] = useState('');
  const [id_tipo, setIdTipo] = useState('');
  const [url_pelicula, setUrlPelicula] = useState('');
  const [imagen_portada, setImagenPortada] = useState('');


  const [generos, setGeneros] = useState([]);
  const [directores, setDirectores] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const [tipos, setTipos] = useState([]);
  const navigate = useNavigate();

  const almacenar = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('imagen_portada', imagen_portada);
      formData.append('titulo', titulo);
      formData.append('sinopsis', sinopsis);
      formData.append('anno_estreno', anno_estreno);
      formData.append('fecha_creacion', fecha_creacion);
      formData.append('fecha_actualizacion', fecha_actualizacion);
      formData.append('id_genero', id_genero);
      formData.append('id_director', id_director);
      formData.append('id_productora', id_productora);
      formData.append('id_tipo', id_tipo);
      formData.append('url_pelicula', url_pelicula);
  
      await axios.post(URI, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      navigate('/media');
    } catch (error) {
      console.error('Error al actualizar el medio:', error);
    }
  };
  

  // Lógica para obtener los géneros, directores, productoras y tipos de la base de datos
  useEffect(() => {
    const fetchGeneros = async () => {
      try {
        const res = await axios.get('http://localhost:3200/genero/');
        setGeneros(res.data);
      } catch (error) {
        console.error('Error al obtener los géneros:', error);
      }
    };

    const fetchDirectores = async () => {
      try {
        const res = await axios.get('http://localhost:3200/director/');
        setDirectores(res.data);
      } catch (error) {
        console.error('Error al obtener los directores:', error);
      }
    };

    const fetchProductoras = async () => {
      try {
        const res = await axios.get('http://localhost:3200/productora/');
        setProductoras(res.data);
      } catch (error) {
        console.error('Error al obtener las productoras:', error);
      }
    };

    const fetchTipos = async () => {
      try {
        const res = await axios.get('http://localhost:3200/tipo/');
        setTipos(res.data);
      } catch (error) {
        console.error('Error al obtener los tipos:', error);
      }
    };

    fetchGeneros();
    fetchDirectores();
    fetchProductoras();
    fetchTipos();
  }, []);


  return (
    <div className="container">
      <h1 className="text-center mt-5 text-white fw-bold">Crear Media</h1>
      <hr className="text-white bg-primary" style={{ height: "4px", border: "none" }} />
  
      <form onSubmit={almacenar}>
  
        {/* Información básica */}
        <fieldset className="mb-4">
          <legend className="text-white fw-bold">Información Básica</legend>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="titulo" className="form-label text-white fw-bold">Título</label>
                <input id="titulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="sinopsis" className="form-label text-white fw-bold">Sinopsis</label>
                <textarea id="sinopsis" name="sinopsis" value={sinopsis} onChange={(e) => setSinopsis(e.target.value)} className="form-control" rows="4" required></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="anno_estreno" className="form-label text-white fw-bold">Año de Estreno</label>
                <input id="anno_estreno" name="anno_estreno" value={anno_estreno} onChange={(e) => setAnnoEstreno(e.target.value)} type="text" className="form-control" required/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="url_pelicula" className="form-label text-white fw-bold">URL de la Película</label>
                <input id="url_pelicula" name="url_pelicula" value={url_pelicula} onChange={(e) => setUrlPelicula(e.target.value)} type="text" className="form-control" required/>
              </div>
            </div>
          </div>
        </fieldset>
  
        {/* Fechas */}
        <fieldset className="mb-4">
          <legend className="text-white fw-bold">Fechas</legend>
          <div className="row">
            <div className="col-md-4">
              <div className="form-outline">
                <label htmlFor="fecha_creacion" className="form-label text-white fw-bold">Fecha de creación</label>
                <input id="fecha_creacion" value={fecha_creacion} onChange={(e) => setFechaCreacion(e.target.value)} type="date" className="form-control" required/>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-outline">
                <label htmlFor="fecha_actualizacion" className="form-label text-white fw-bold">Fecha de actualización</label>
                <input id="fecha_actualizacion" value={fecha_actualizacion} onChange={(e) => setFechaActualizacion(e.target.value)} type="date" className="form-control" required/>
              </div>
            </div>
          </div>
        </fieldset>
  
        {/* Selecciones */}
        <fieldset className="mb-4">
          <legend className="text-white fw-bold">Selecciones</legend>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="genero" className="form-label text-white fw-bold">Género</label>
                <select id="genero" name="genero" value={id_genero} onChange={(e) => setIdGenero(e.target.value)} className="form-select" required>
                <option value="">Seleccione un genero</option>
                  {generos.map((gen) => (
                    <option key={gen.id_genero} value={gen.id_genero}>{gen.nombre}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="tipo" className="form-label text-white fw-bold">Tipo</label>
                <select id="tipo" name="tipo" value={id_tipo} onChange={(e) => setIdTipo(e.target.value)} className="form-select" required>
                <option value="">Seleccione un tipo</option>
                  {tipos.map((tip) => (
                    <option key={tip.id_tipo} value={tip.id_tipo}>{tip.nombre}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="director" className="form-label text-white fw-bold">Director</label>
                <select id="director" name="director" value={id_director} onChange={(e) => setIdDirector(e.target.value)} className="form-select" required>
                <option value="">Seleccione un director</option>
                  {directores.map((direc) => (
                    <option key={direc.id_director} value={direc.id_director}>{direc.nombre}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="productora" className="form-label text-white fw-bold">Productora</label>
                <select id="productora" name="productora" value={id_productora} onChange={(e) => setIdProductora(e.target.value)} className="form-select" required>
                <option value="">Seleccione una productora</option>
                  {productoras.map((produc) => (
                    <option key={produc.id_productora} value={produc.id_productora}>{produc.nombre}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </fieldset>
  
        {/* Archivo */}
        <fieldset className="mb-4">
          <legend className="text-white fw-bold">Archivos</legend>
          <div className="row">
            <div className="col-md-6">
              <div className="form-outline">
                <label htmlFor="imagen_portada" className="form-label text-white fw-bold">Imagen de Portada</label>
                <input id="imagen_portada" name="imagen_portada" type="file" onChange={(e) => setImagenPortada(e.target.files[0])} className="form-control" />
              </div>
            </div>
          </div>
        </fieldset>

  
        <div className="button-container d-flex justify-content-center mb-4">
          <button type="submit" className="btn btn-primary me-2">Crear Media</button>
          <button type="button" className="btn btn-secondary">Cancelar</button>
        </div>
  
      </form>
    </div>
  );  
}

export default CrearMedia;
