import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import useFetch from '../../hooks/useFetchHook';
import { SlArrowLeft } from "react-icons/sl";

export const PlayListForm = () => {
    const { idPlaylist } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth("state");
    const [isChecked, setIsChecked] = useState(false); // Estado para almacenar el valor del checkbox

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        public: isChecked,
    });

    const [{ isError, isLoading }, doFetch] = useFetch(idPlaylist ? `https://sandbox.academiadevelopers.com/harmonyhub/playlists/${idPlaylist}/` : 'https://sandbox.academiadevelopers.com/harmonyhub/playlists/', {
        method: idPlaylist ? 'PUT' : 'POST',
        headers: {
            'Authorization': `Token ${token}`,
        },
    });

    useEffect(() => {
        if (idPlaylist) {
            fetch(`https://sandbox.academiadevelopers.com/harmonyhub/playlists/${idPlaylist}/`, {
                headers: {
                    'Authorization': `Token ${token}`,
                  },
            })
                .then((response) => response.json())
                .then((data) => {
                    setFormData({
                        name: data.name,
                        description: data.description,
                        public: data.public,
                    });
                    setIsChecked(data.public); // Sincronizar el estado del checkbox con los datos recibidos
                })
                .catch((error) => {
                    console.error('Error fetching playlist data:', error);
                });
        }
    }, [idPlaylist, token]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: files ? files[0] : value,
        }));
    };

     // Manejador de eventos para cuando el checkbox cambie de valor
    const handleSwitchChange = (event) => {
        const isChecked = event.target.checked;
        setIsChecked(isChecked);
        setFormData((prevData) => ({
            ...prevData,
            public: isChecked,
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
  
        alert(idPlaylist ? 'Playlist actualizado correctamente' : 'Playlist agregada correctamente');
        navigate('/playlists');
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
            <div className="mb-3">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="public"
                        checked={isChecked}
                        onChange={handleSwitchChange}
                    />
                    <label className="form-check-label" htmlFor="public">Public</label>
                </div>
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-primary">
                  { idPlaylist ? 'Update Playlist' : 'Add Playlist'}
              </button>
              {isError && <p>Error al guardar playlist</p>}
            </div>
            
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </section>
  )
}
