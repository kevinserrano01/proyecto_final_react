import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { usePage } from '../../contexts/PageContext';

export const PlayListDetails = () => {
  const { page } = usePage();
  const navigate = useNavigate();
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

  return (
    <>
    <div className="row">
      <div className="col-md-4 mb-4">
        {/* boton para volver a la pestaña anterior */}
        <button className="btn btn-light" onClick={handleBackClick}>Volver</button>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        {/* <img src="src/assets/images/logoPlaylist.png" className="card-img-top" alt="logo music" /> */}
        <h2>{ playlist.name }</h2>
      </div>

      <hr />

      <div className="col-md-6">
        <p className="card-title"> { playlist.description } </p>
          <p> Author: { playlist.owner }</p>
          <p> Created: { playlist.created_at }</p>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6">
      <p> Songs: </p>
        <ul>
          {playlist.entries.map((song) => (
              <li>{song}</li>
            ))}
        </ul>
      </div>
    </div>
    </>
  )
}
