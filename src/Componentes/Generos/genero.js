import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logop from "../../imagen/logop.png";

const URI = 'http://localhost:3200/genero/';

const Genero = () => {
  const [generos, setGenero] = useState([]);

  useEffect(() => {
    getGenero();
  }, []);

  const getGenero = async () => {
    try {
      const res = await axios.get(URI);
      setGenero(res.data);
    } catch (error) {
      console.error('Error obtener los generos de películas:', error);
    }
  }

  const eliminarGenero = async (id) => {

    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este genero?");

    if (confirmacion) {
      try {
        await axios.delete(`${URI}/${id}`);
        getGenero();
      } catch (error) {
        alert("Error al intentar eliminar el genero.");
      }
    }
  }

  return (
    <div className="container">
      <Link to="/crear-genero" className="btn btn-primary btn-lg mt-3 fw-bold">Crear Género</Link>
      <div className="row">
        {generos.map((genero) => (
          <div className="col-md-2 mb-4 mt-3" key={genero.id_genero}>
            <div className="card">
              <img src={logop} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h5 className="card-title">{genero.nombre}</h5>
                <p className="card-text">{genero.estado}</p>
                <div className=" justify-content-between align-items-center"> {/* Contenedor de los botones */}
                  <Link to={`/editar-genero/${genero.id_genero}`} className="btn btn-primary me-2"><i className="fas fa-pen"></i></Link>
                  <button onClick={() => eliminarGenero(genero.id_genero)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genero;
