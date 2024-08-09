import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import useFetch from '../../hooks/useFetchHook';
import { SlArrowLeft } from "react-icons/sl";

export const SongForm = () => {
    const { idSong } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth("state");

    const [formData, setFormData] = useState({
        title: '',
        owner: '',
        year: '',
        duration: '',
        song_file: null,
        view_count: '',
        cover: null,
    });

    const [{ isError, isLoading }, doFetch] = useFetch(idSong ? `https://sandbox.academiadevelopers.com/harmonyhub/songs/${idSong}/` : 'https://sandbox.academiadevelopers.com/harmonyhub/songs/', {
        method: idSong ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Token ${token}`,
        },
    });

    useEffect(() => {
        if (idSong) {
          // Fetch de la informacion existente de la cancion
          fetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/${idSong}/`, {
            headers: {
              'Authorization': `Token ${token}`,
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setFormData({
                title: data.title,
                owner: data.owner,
                year: data.year,
                duration: data.duration,
                song_file: null, // We don't set the file fields
                view_count: data.view_count,
                cover: null, // We don't set the file fields
              });
            })
            .catch((error) => {
              console.error('Error fetching song data:', error);
            });
        }
      }, [idSong, token]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: files ? files[0] : value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        doFetch({
            body: data,
        });

        alert(idSong ? 'Canción actualizada correctamente' : 'Canción agregada correctamente');
        navigate('/explore');
        // window.location.reload(); // Recargar la página después de la navegación
    };

    // Función para volver a la pestaña anterior
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
              <label htmlFor="title" className='form-label'>Song name:</label>
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
              <label htmlFor="owner" className='form-label'>Author</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="number"
                  id="owner"
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="year" className='form-label'>Year</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="number"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className='form-label'>Duration</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="number"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="song_file" className='form-label'>Song File</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="file"
                  id="song_file"
                  name="song_file"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="view_count" className='form-label'>Views</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="number"
                  id="view_count"
                  name="view_count"
                  value={formData.view_count}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="cover" className='form-label'>Cover</label>
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
                  { idSong ? 'Update Song' : 'Add Song'}
              </button>
              {isError && <p>Error al guardar la canción</p>}
            </div>
            
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </section>
  )
}
