import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import pelicula from "../../imagen/pelicula.jpg";


const URI = 'http://localhost:3200/productora/';

const Productora = () => {
  const [productoras, setProductora] = useState([]);

  useEffect(() => {
    getProductoras();
  }, []);

  const getProductoras = async () => {
    try {
      const res = await axios.get(URI);
      setProductora(res.data);
    } catch (error) {
      console.error('Error al obtener productoras de películas:', error);
    }
  }

  const eliminarProductora = async (id) => {

    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta productora?");

    if (confirmacion) {
      try {
        await axios.delete(`${URI}/${id}`);
        getProductoras();
      } catch (error) {
        alert("Error al intentar eliminar la productora.");
      }
    }
  }

  return (
    <div className="container">
      <Link to="/crear-productora" className="btn btn-primary btn-lg mt-3 fw-bold">Crear Productoras</Link>
      <div className="row">
        {productoras.map((productora) => (
          <div className="col-md-2 mb-4 mt-3" key={productora.id_productora}>
            <div className="card">
              <img src={pelicula} className="card-img-top" alt="logo" />
              <div className="card-body">
                <h5 className="card-title">{productora.nombre}</h5>
                <p className="card-text">{productora.estado}</p>
                <div className=" justify-content-between align-items-center"> {/* Contenedor de los botones */}
                  <Link to={`/editar-productora/${productora.id_productora}`} className="btn btn-primary me-2"><i className="fas fa-pen"></i></Link>
                  <button onClick={() => eliminarProductora(productora.id_productora)} className="btn btn-danger"><i className="fas fa-trash"></i></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productora;
