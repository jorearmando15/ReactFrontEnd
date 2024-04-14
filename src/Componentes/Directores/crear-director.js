import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:3200/director/';

const CrearDirector = () => {
    const [nombre, setNombre] = useState('');
    const [estado, setEstado] = useState('');
    const [fecha_creacion, setFechaCreacion] = useState('');
    const [fecha_actualizacion, setFechaActualizacion] = useState('');
    const navigate = useNavigate();

    const almacenar = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URI, {
                nombre: nombre,
                estado: estado,
                fecha_creacion: fecha_creacion,
                fecha_actualizacion: fecha_actualizacion,
            });
            navigate('/directores');

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5 text-white fw-bold">Crear Directores</h1>
            <hr className="text-white bg-primary" style={{ height: "4px", border: "none" }} />

            <form onSubmit={almacenar}>
                <div className="mb-4 mt-4 row">
                    <div className="col-md-4">
                        <div className="form-outline">
                            <label htmlFor="nombre" className="form-label text-white fw-bold">Nombre</label>
                            <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <label htmlFor="estado" className="form-label text-white fw-bold">Estado</label>
                            <input id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <label htmlFor="fecha_creacion" className="form-label text-white fw-bold">Fecha de creación</label>
                            <input id="fecha_creacion" value={fecha_creacion} onChange={(e) => setFechaCreacion(e.target.value)} type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <label htmlFor="fecha_actualizacion" className="form-label text-white fw-bold">Fecha de actualizacion</label>
                            <input id="fecha_actualizacion" value={fecha_actualizacion} onChange={(e) => setFechaActualizacion(e.target.value)} type="date" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="button-container d-flex justify-content-center mb-4">
                    <button type="submit" className="btn btn-primary me-2">Crear Director</button>
                    <button type="button" className="btn btn-secondary">Cancelar</button>
                </div>

            </form>
        </div>
    );
};
export default CrearDirector;
