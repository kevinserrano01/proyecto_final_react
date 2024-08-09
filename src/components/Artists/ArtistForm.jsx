import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import useFetch from '../../hooks/useFetchHook';
import { SlArrowLeft } from "react-icons/sl";

export const ArtistForm = () => {
    const { idArtist } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth("state");

    const [formData, setFormData] = useState({
      name: '',
      bio: '',
      website: '',
      image: null,
    });

    const [{ isError, isLoading }, doFetch] = useFetch(idArtist ? `https://sandbox.academiadevelopers.com/harmonyhub/artists/${idArtist}/` : 'https://sandbox.academiadevelopers.com/harmonyhub/artists/', {
      method: idArtist ? 'PUT' : 'POST',
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    useEffect(() => {
      if (idArtist) {
        // Fetch de la informacion existente de la cancion
        fetch(`https://sandbox.academiadevelopers.com/harmonyhub/artists/${idArtist}/`, {
          headers: {
            'Authorization': `Token ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setFormData({
              name: data.name,
              bio: data.bio,
              website: data.website,
              image: null, 
            });
          })
          .catch((error) => {
            console.error('Error fetching artist data:', error);
          });
      }
    }, [idArtist, token]);

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

      alert(idArtist ? 'Artista actualizado correctamente' : 'Artista agregado correctamente');
      navigate('/artists');
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
              <label htmlFor="name" className='form-label'>Name:</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="bio" className='form-label'>Biography</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="text"
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="website" className='form-label'>Website</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className='form-label'>Image</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                  { idArtist ? 'Update artist' : 'Add artist'}
              </button>
              {isError && <p>Error al guardar este artista</p>}
            </div>
            
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </section>
  )
}
