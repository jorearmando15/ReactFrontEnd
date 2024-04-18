import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:3200/genero/';

const EditarGenero = () => {
    const [nombre, setNombre] = useState('');
    const [estado, setEstado] = useState('');
    const [fecha_creacion, setFechaCreacion] = useState('');
    const [fecha_actualizacion, setFechaActualizacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    // Procedimiento para actualizar
    const actualizar = async (e) => {
        e.preventDefault();
        try {
            await axios.put(URI + id, {
                nombre: nombre,
                estado: estado,
                fecha_creacion: fecha_creacion,
                fecha_actualizacion: fecha_actualizacion,
                descripcion: descripcion
            });
            navigate('/generos');

        } catch (error) {
            console.error('Error al actualizar el género:', error);
        }
    };

    useEffect(() => {
        const getGeneroById = async () => {
            try {
                const res = await axios.get(URI + id);
                setNombre(res.data.nombre);
                setEstado(res.data.estado);
                setFechaCreacion(new Date(res.data.fecha_creacion).toISOString().split('T')[0]);
                setFechaActualizacion(new Date(res.data.fecha_actualizacion).toISOString().split('T')[0]);
                setDescripcion(res.data.descripcion);
            } catch (error) {
                console.error('Error al obtener el género por su ID:', error);
            }
        };

        getGeneroById();
    }, [id]); // Agregar id como dependencia
    return (
        <div className="container">
            <h1 className="text-center mt-5 text-white fw-bold">Editar Géneros</h1>
            <hr className="text-white bg-primary" style={{ height: "4px", border: "none" }} />

            <form onSubmit={actualizar}>
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
                            <label htmlFor="fecha_actualizacion" className="form-label text-white fw-bold">Fecha de actualización</label>
                            <input id="fecha_actualizacion" value={fecha_actualizacion} onChange={(e) => setFechaActualizacion(e.target.value)} type="date" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="form-outline mb-4">
                    <label htmlFor="descripcion" className="form-label text-white fw-bold" >Descripción</label>
                    <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="form-control" rows="4"></textarea>
                </div>

                <div className="button-container d-flex justify-content-center mb-4">
                    <button type="submit" className="btn btn-primary me-2">Editar Género</button>
                    <button type="button" className="btn btn-secondary">Cancelar</button>
                </div>

            </form>
        </div>
    );
}

export default EditarGenero;
