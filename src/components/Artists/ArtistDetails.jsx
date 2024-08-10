import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { useAuth } from '../../contexts/AuthContext';
import { usePage } from '../../contexts/PageContext';
import { SlArrowLeft } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";

export const ArtistDetails = () => {
    const { page } = usePage();
    const navigate = useNavigate();
    const { token } = useAuth("state");
    const { idArtist } = useParams(); // Renderizar de manera dinámica el id de cada artista
    const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/artists/?page=${page}`, {});

    useEffect(() => {
        doFetch();
    }, [page]);

    if (isLoading) return <h2>Cargando...</h2>;
    if (errors) return <h2>Error al cargar artista.</h2>;
    if (!data) return <h2>No hay Artistas para mostrar</h2>;

    // Busco el artista por si id
    const [artist] = data.results.filter((artist) => artist.id === parseInt(idArtist));

    // Función para volver a la pestaña anterior
    const handleBackClick = () => {
        navigate(-1);
    };

    const handleDeleteArtist = async () => {
        const response = await fetch(`https://sandbox.academiadevelopers.com/harmonyhub/artists/${idArtist}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
        });
    
        if (response.ok) {
          alert('Artista eliminado correctamente');
          navigate('/artists');
        } else {
          alert('Error al eliminar artista');
        }
      }
    
      const handleEditArtist = () => {
        navigate(`/artists/edit-artist/${idArtist}`);
      };

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4 mb-4">
            {/* boton para volver a la pestaña anterior */}
            <button className="btn btn-light" onClick={handleBackClick}>
                <SlArrowLeft /> Back
            </button>
        </div>
        </div>
        <div className="row">
            <div className="d-flex align-items-center">
                <h1 className="flex-grow-1"> { artist.name } </h1>
                { artist.owner !== 200 ?
                    <span>Owner: { artist.owner }</span>
                  :
                    <div>
                      <button type="button" className="btn btn-outline-warning ms-2" onClick={handleEditArtist}>
                        <IoPencil /> Edit
                      </button>
                      <button type="button" className="btn btn-outline-danger ms-2" onClick={handleDeleteArtist}>
                        <IoClose /> Delete
                      </button>
                    </div>
                }
                
            </div>
        </div>

        <hr />

        <div className="row">
            <p> Biography: { artist.bio }</p>
            <p><a href={ artist.website } target='blank'> Website </a></p>
            { artist.image ?
              <img src={ artist.image } alt="logo album" width={"500px"}/>
            : 
              <img src="/assets/logoArtist.jpg" alt="logo Artist" width={"500px"}/>
            }

            <p>Songs</p>
            <ul>
                {artist.songs.map((song) => (
                    <li key={song}> {song} </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
