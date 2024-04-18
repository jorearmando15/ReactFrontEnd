import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'http://localhost:3200/media/';

const Media = () => {
    const [medias, setMedia] = useState([]);

    useEffect(() => {
        getMedias();
    }, []);

    const getMedias = async () => {
        try {
            const res = await axios.get(URI);
            setMedia(res.data);
        } catch (error) {
            console.error('Error al obtener la media de películas:', error);
        }
    }

    const eliminarMedia = async (id) => {

        const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar esta media?");

        if (confirmacion) {
            try {
                await axios.delete(`${URI}/${id}`);
                getMedias();
            } catch (error) {
                alert("Error al intentar eliminar la media.");
            }
        }
    }

    return (
        <div className="container mt-4">
            <Link to="/crear-media" className="btn btn-primary btn-lg mb-3 fw-bold">Crear Media</Link>

            <div className="row row-cols-1 row-cols-md-4 g-4 mb-4">
                {medias.map((media) => (
                    <div className="col" key={media.id_media}>
                        <div className="card h-100">
                            <img src={media.imagen_portada} className="card-img-top" alt="Portada" />
                            <div className="card-body">
                                <h5 className="card-title">{media.titulo}</h5>
                                <p className="card-text">{media.sinopsis}</p>
                                <p><strong>Año de Estreno:</strong> {media.anno_estreno}</p>
                                <p><strong>Género:</strong> {media.genero}</p>
                                <p><strong>Director:</strong> {media.director}</p>
                                <p><strong>Productora:</strong> {media.productora}</p>
                                <p><strong>Tipo:</strong> {media.tipo}</p>
                                <a href={media.url_pelicula} target="_blank" rel="noopener noreferrer" className="btn btn-success"><i className="fa-solid fa-play"></i></a>
                                <Link to={`/editar-media/${media.id_media}`} className="btn btn-primary ms-2"><i className="fas fa-edit"></i></Link>
                                <button onClick={() => eliminarMedia(media.id_media)} className="btn btn-danger ms-2"><i className="fas fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Media;
