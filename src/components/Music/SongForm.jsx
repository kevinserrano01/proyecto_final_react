import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import useFetch from '../../hooks/useFetchHook';
// import data from '../../assets/songs.json';

export const SongForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth("state");

    const [formData, setFormData] = useState({
        title: '',
        owner: '',
        year: '',
        duration: '',
        song_file: null,
        views: '',
        cover: null,
    });

    const [{ isError, isLoading }, doFetch] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/songs/', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${token}`,
        },
    });

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
        alert('Cancion agregada correctamente');
        navigate('/explore');
    };



  return (
    <section className="section">
      <div className="columns is-centered">
        <div className="column is-4">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="title">Song name:</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="owner">Author</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  id="owner"
                  name="owner"
                  value={formData.owner}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="year">Year</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="number"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="duration">Duration</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="song_file">Song File</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="file"
                  id="song_file"
                  name="song_file"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="views">Views</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="number"
                  id="views"
                  name="views"
                  value={formData.views}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cover">Cover</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="file"
                  id="cover"
                  name="cover"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Song
            </button>
            {isError && <p>Error al guardar la canción</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
