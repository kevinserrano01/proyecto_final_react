import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import useFetch from '../../hooks/useFetchHook';
import { SlArrowLeft } from "react-icons/sl";

export const AlbumForm = () => {
    const { idAlbum } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth("state");

    const [formData, setFormData] = useState({
        title: '',
        year: '',
        artist: '',
        cover: null,
    });

    const [{ isError, isLoading }, doFetch] = useFetch(idAlbum ? `https://sandbox.academiadevelopers.com/harmonyhub/albums/${idAlbum}/` : 'https://sandbox.academiadevelopers.com/harmonyhub/albums/', {
        method: idAlbum ? 'PUT' : 'POST',
        headers: {
            'Authorization': `Token ${token}`,
        },
    });

    useEffect(() => {
        if (idAlbum) {
            fetch(`https://sandbox.academiadevelopers.com/harmonyhub/albums/${idAlbum}/`, {
                headers: {
                    'Authorization': `Token ${token}`,
                  },
            })
                .then((response) => response.json())
                .then((data) => {
                    setFormData({
                        title: data.title,
                        year: data.year,
                        artist: data.artist,
                        cover: null,
                    });
                })
                .catch((error) => {
                    console.error('Error fetching albums data:', error);
                });
        }
    }, [idAlbum, token]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: files ? files[0] : value,
        }));
    };

    // Función para enviar los datos del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }
  
        doFetch({
            body: data,
        });

        alert(idAlbum ? 'Album actualizado correctamente' : 'Album creado correctamente');
        navigate('/albums');
    };

    // funcion para volver a la pestaña anterior
    const handleBackClick = () => {
        navigate(-1);
    };


  return (
    <section className="container mb-3">

      <div className="row">
        <div className="col-md-4 mb-3">
          {/* boton para volver a la pestaña anterior */}
          <button className="btn btn-light" onClick={handleBackClick}>
            <SlArrowLeft /> Back
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>

        <div className="col-md-4 mb-3">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className='form-label'>Title</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="year" className='form-label'>Year</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type='number'
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="artist" className='form-label'>Artist</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="number"
                  id="artist"
                  name="artist"
                  value={formData.artist}
                  onChange={handleChange}
                />
                </div>
            </div>
            <div className="mb-3">
              <label htmlFor="cover" className='form-label'>Image</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="file"
                  id="cover"
                  name="cover"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                  { idAlbum ? 'Update Album' : 'Add Album'}
              </button>
              {isError && <p>Error al guardar album</p>}
            </div>
            
          </form>
        </div>

        <div className="col-md-4"></div>
      </div>
    </section>
  )
}
