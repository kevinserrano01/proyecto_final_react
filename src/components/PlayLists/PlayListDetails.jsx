import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';

export const PlayListDetails = () => {
  const { idPlayList } = useParams(); // Renderizar de manera dinámica el id de cada playList
  const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/playlists/', {});

  useEffect(() => {
    doFetch();
  }, []);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar la playlist.</h2>;
  if (!data) return <h2>No hay playlist para mostrar</h2>;

  const [playlist] = data.results.filter((playlist) => playlist.id === parseInt(idPlayList));

  return (
    <>
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
          <p> Updated: { playlist.updated_at }</p>
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
