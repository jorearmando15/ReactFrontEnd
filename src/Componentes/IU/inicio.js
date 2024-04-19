import React from "react";
import { Link } from "react-router-dom";
import logop from "../../imagen/logop.png";

const Inicio = () => {
  return (
    <div className="container text-white">
      <div className="row">
        <div className="col-md-6 mt-5 mb-4">
          <h1>Bienvenido a Películas CuevaFluix</h1>
          <p>Explora el fascinante mundo del cine con nosotros.</p>
          <p>Descubre una amplia variedad de películas y sumérgete en nuevas experiencias.</p>
          <Link to="/media" className="btn btn-primary">Explorar ya, no esperes mas.</Link>
          <p className="mt-3">¿Eres un apasionado del séptimo arte? ¡Has llegado al lugar adecuado!</p>
          <p>En Películas CuevaFluix, te ofrecemos una selección cuidadosamente curada de películas que te cautivarán desde el primer momento.</p>
        </div>
        <div className="col-md-6 mt-5 mb-4">
          <img src={logop} alt="Póster de una película" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
