import React from 'react';
import logop from "../../imagen/logop.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#002854' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fs-4 text-white d-flex align-items-center" to="/inicio">
          <img src={logop} alt="Logo de Películas" width="60" height="60" className="d-inline-block align-top me-2" />
          <span className="fw-bold text-white custom-font">CUEVAFLIX</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/inicio" className="nav-link active" aria-current="page">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link to="/media" className='nav-link'>MEDIA</Link>
            </li>
            <li className="nav-item">
              <Link to="/tipos" className='nav-link'>TIPOS</Link>
            </li>
            <li className="nav-item">
              <Link to="/generos" className='nav-link'>GENEROS</Link>
            </li>
            <li className="nav-item">
              <Link to="/directores" className='nav-link'>DIRECTORES</Link>
            </li>
            <li className="nav-item">
              <Link to="/productoras" className='nav-link'>PRODUCTORAS</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto me-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar películas, series..." aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
