import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:3200/tipo/';

const CrearTipo = () => {
    const [nombre, setNombre] = useState('');
    const [fecha_creacion, setFechaCreacion] = useState('');
    const [fecha_actualizacion, setFechaActualizacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        try {
            await axios.post(URI, {
                nombre: nombre,
                fecha_creacion: fecha_creacion,
                fecha_actualizacion: fecha_actualizacion,
                descripcion: descripcion
            });
            navigate('/tipos');

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    }

    return (
        <div className="container">
            <h1 className="text-center mt-5 text-white fw-bold">Crear Tipos</h1>
            <hr className="text-white bg-primary" style={{ height: "4px", border: "none" }} />

            <form onSubmit={store}>
                <div className="mb-4 mt-4 row">
                    <div className="col-md-4">
                        <div className="form-outline">
                            <label className="form-label text-white fw-bold" htmlFor="nombre">Nombre</label>
                            <input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <label className="form-label text-white fw-bold" htmlFor="fecha_creacion">Fecha de creación</label>
                            <input id="fecha_creacion" value={fecha_creacion} onChange={(e) => setFechaCreacion(e.target.value)} type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-outline">
                            <label className="form-label text-white fw-bold" htmlFor="fecha_actualizacion">Fecha de actualizacion</label>
                            <input id="fecha_actualizacion" value={fecha_actualizacion} onChange={(e) => setFechaActualizacion(e.target.value)} type="date" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label text-white fw-bold" htmlFor="descripcion">Descripción</label>
                    <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control" rows="4"></textarea>
                </div>

                <div className="button-container d-flex justify-content-center mb-4">
                    <button type="submit" className="btn btn-primary me-2">Crear Tipo</button>
                    <button type="button" className="btn btn-secondary">Cancelar</button>
                </div>

            </form>
        </div>
    );
};
export default CrearTipo;
