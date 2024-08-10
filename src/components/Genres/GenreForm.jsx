import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import useFetch from '../../hooks/useFetchHook';
import { SlArrowLeft } from "react-icons/sl";

export const GenreForm = () => {
    const { idGenre } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth("state");

    const [formData, setFormData] = useState({
      name: '',
      description: '',
    });

    const [{ isError, isLoading }, doFetch] = useFetch(idGenre ? `https://sandbox.academiadevelopers.com/harmonyhub/genres/${idGenre}/` : 'https://sandbox.academiadevelopers.com/harmonyhub/genres/', {
      method: idGenre ? 'PUT' : 'POST',
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    useEffect(() => {
      if (idGenre) {
        fetch(`https://sandbox.academiadevelopers.com/harmonyhub/genres/${idGenre}/`, {
          headers: {
            'Authorization': `Token ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setFormData({
              name: data.name,
              description: data.description,
            });
          })
          .catch((error) => {
            console.error('Error fetching genre data:', error);
          });
      }
    }, [idGenre, token]);

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

      alert(idGenre ? 'Genero actualizado correctamente' : 'Genero agregado correctamente');
      navigate('/genres');
    };

    const handleBackClick = () => {
      navigate(-1);
    };


  return (
    <section className="container mb-3">
      <div className="row">
        <div className="col-md-4 mb-3">
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
              <label htmlFor="name" className='form-label'>Name</label>
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
              <label htmlFor="description" className='form-label'>Description</label>
              <div className="control has-icons-left">
                <input
                  className="form-control"
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                  { idGenre ? 'Update genre' : 'Add genre'}
              </button>
              {isError && <p>Error al guardar este genero</p>}
            </div>
            
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </section>
  )
}
