import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logop from "../../imagen/logop.png";

const URI = 'http://localhost:3200/director/';

const Director = () => {
  const [directores, setDirector] = useState([]);

  useEffect(() => {
    getDirector();
  }, []);

  const getDirector = async () => {
    try {
      const res = await axios.get(URI);
      setDirector(res.data);
    } catch (error) {
      console.error('Error al obtener director de películas:', error);
    }
  }

  const eliminarDirector = async (id) => {

    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este director?");

    if (confirmacion) {
      try {
        await axios.delete(`${URI}/${id}`);
        getDirector();
      } catch (error) {
        alert("Error al intentar eliminar el director.");
      }
    }
  }

  return (
    <div className="container">
      <Link to="/crear-director" className="btn btn-primary btn-lg mt-3 fw-bold">Crear Director</Link>
      <div className="row">
        {directores.map((director) => (
          <div className="col-md-2 mb-4 mt-3" key={director.id_director}>
            <div className="card">
              <img src={logop} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h5 className="card-title">{director.nombre}</h5>
                <p className="card-text">{director.estado}</p>
                <div className=" justify-content-between align-items-center"> {/* Contenedor de los botones */}
                  <Link to={`/editar-director/${director.id_director}`} className="btn btn-primary me-2"><i className="fas fa-pen"></i></Link>
                  <button onClick={() => eliminarDirector(director.id_director)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Director;
