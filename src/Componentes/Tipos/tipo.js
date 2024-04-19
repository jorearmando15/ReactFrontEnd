import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logop from "../../imagen/logop.png";

const URI = 'http://localhost:3200/tipo/';

const Tipo = () => {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    getTipos();
  }, []);

  const getTipos = async () => {
    try {
      const res = await axios.get(URI);
      setTipos(res.data);
    } catch (error) {
      console.error('Error al obtener tipos de películas:', error);
    }
  }

  const eliminarTipo = async (id) => {

    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este tipo?");

    if (confirmacion) {
      try {
        await axios.delete(`${URI}/${id}`);
        getTipos();
      } catch (error) {
        alert("Error al intentar eliminar el tipo.");
      }
    }
  }

  return (
    <div className="container">
      <Link to="/crear-tipo" className="btn btn-primary btn-lg mt-3 fw-bold">Crear Tipo</Link>
      <div className="row">
        {tipos.map((tipo) => (
          <div className="col-md-2 mb-4 mt-3" key={tipo.id_tipo}>
            <div className="card">
              <img src={logop} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h5 className="card-title">{tipo.nombre}</h5>
                <p className="card-text">{tipo.sinopsis}</p>
                <div className=" justify-content-between align-items-center"> {/* Contenedor de los botones */}
                  <Link to={`/editar-tipo/${tipo.id_tipo}`} className="btn btn-primary me-2"><i className="fas fa-pen"></i></Link>
                  <button onClick={() => eliminarTipo(tipo.id_tipo)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tipo;
