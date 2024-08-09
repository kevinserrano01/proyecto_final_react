import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { useAuth } from '../../contexts/AuthContext';
import { usePage } from '../../contexts/PageContext';
import { SlArrowLeft } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";

export const PlayListDetails = () => {
  const { page } = usePage();
  const navigate = useNavigate();
  const { token } = useAuth("state");
  const { idPlayList } = useParams(); // Renderizar de manera dinámica el id de cada playList
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/playlists/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar la playlist.</h2>;
  if (!data) return <h2>No hay playlist para mostrar</h2>;

  const [playlist] = data.results.filter((playlist) => playlist.id === parseInt(idPlayList));

  // Función para volver a la pestaña anterior
  const handleBackClick = () => {
    navigate(-1);
  };

  // Función para eliminar la playlist
  const handleDeletePlaylist = async () => {
    const response = await fetch(`https://sandbox.academiadevelopers.com/harmonyhub/playlists/${idPlayList}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    });

    if (response.ok) {
      alert('Playlist eliminada correctamente');
      navigate('/playlists');
    } else {
      alert('Error al eliminar playlist');
    }
  }

  // funcion para redireccionar a la pagina de editar playlist
  const handleEditPlaylist = () => {
    navigate(`/playlists/edit-playlist/${idPlayList}`);
  }

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
          <h1 className="flex-grow-1"> { playlist.name } </h1>
          <button type="button" className="btn btn-outline-warning ms-2" onClick={handleEditPlaylist}>
            <IoPencil /> Edit
          </button>
          <button type="button" className="btn btn-outline-danger ms-2" onClick={handleDeletePlaylist}>
              <IoClose /> Delete
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
            <p> { playlist.description } </p>
              <p> Author: { playlist.owner }</p>
              <p> Created: { playlist.created_at }</p>
        </div>
      </div>
    

      <div className="row">
        <div className="col-md-6">
        <p> Songs: </p>
          <ul>
            {playlist.entries.map((song) => (
                <li key={song}> {song} </li>
              ))}
          </ul>
        </div>
      </div>

    </div>
  )
}
