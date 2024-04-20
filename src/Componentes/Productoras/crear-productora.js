import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const URI = 'http://localhost:3200/productora/';

const CrearProductora = () => {
    const [nombre, setNombre] = useState('');
    const [estado, setEstado] = useState('');
    const [fecha_creacion, setFechaCreacion] = useState('');
    const [fecha_actualizacion, setFechaActualizacion] = useState('');
    const [slogan, setSlogan] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();

        //Procedimiento para guardar
    const almacenar = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URI, {
                nombre,
                estado,
                fecha_creacion: fecha_creacion,
                fecha_actualizacion: fecha_actualizacion,
                slogan,
                descripcion
            });
            navigate('/productoras');

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5 text-white fw-bold">Crear Productora</h1>
            <hr className="text-white bg-primary" style={{ height: "4px", border: "none" }} />
    
            <form onSubmit={almacenar}>
    
                {/* Información básica */}
                <fieldset className="mb-4">
                    <legend className="text-white fw-bold">Información Básica</legend>
                    <div className="mb-4 row">
                        <div className="col-md-4">
                            <div className="form-outline">
                                <label htmlFor="nombre" className="form-label text-white fw-bold">Nombre</label>
                                <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" required/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-outline">
                                <label htmlFor="estado" className="form-label text-white fw-bold">Estado</label>
                                <input id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control" required />
                            </div>
                        </div>
                    </div>
                </fieldset>
    
                {/* Fechas */}
                <fieldset className="mb-4">
                    <legend className="text-white fw-bold">Fechas</legend>
                    <div className="mb-4 row">
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
    
                {/* Otra información */}
                <fieldset className="mb-4">
                    <legend className="text-white fw-bold">Otra Información</legend>
                    <div className="mb-4 row">
                        <div className="col-md-4">
                            <div className="form-outline">
                                <label htmlFor="slogan" className="form-label text-white fw-bold">Slogan</label>
                                <input id="slogan" value={slogan} onChange={(e) => setSlogan(e.target.value)} type="text" className="form-control" required/>
                            </div>
                        </div>
                    </div>
                </fieldset>
    
                <div className="form-outline mb-4">
                    <label htmlFor="descripcion" className="form-label text-white fw-bold">Descripción</label>
                    <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control" rows="4"></textarea>
                </div>
    
                <div className="button-container d-flex justify-content-center mb-4">
                    <button type="submit" className="btn btn-primary me-2">Crear Productora</button>
                    <button type="button" className="btn btn-secondary">Cancelar</button>
                </div>
    
            </form>
        </div>
    );
};

export default CrearProductora;
