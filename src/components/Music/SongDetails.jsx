import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import './CardMusic.css';
import { useAuth } from '../../contexts/AuthContext';
import { usePage } from '../../contexts/PageContext';

export const SongDetails = () => {
  const { page, handlePageChange } = usePage();
  const { idSong } = useParams(); // Renderizar de manera dinámica el id de cada cancion
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/?page=${page}`, {});
  const { isAuthenticated, token } = useAuth("state");

  console.log(token);
  console.log(idSong);

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar la cancion.</h2>;
  if (!data) return <h2>No hay canciones para mostrar</h2>;

  const [song] = data.results.filter((song) => song.id === parseInt(idSong));

  const deleteSong = async () => {
    const response = await fetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/${idSong}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`,
      },
    });

    if (response.ok) {
      alert('Cancion eliminada correctamente');
    } else {
      alert('Error al eliminar la cancion');
    }
  }

  return (
    <div className="col-md-5">
      <div className="card">
        <img src="../assets/musicLogo.jpg" className="card-img-top" alt="logo music" />
          <div className="card-body">
            <h5 className="card-title"> { song.title } </h5>
            <p className="card-text"> Author: { song.owner }</p>
            <p className="card-text"> Views: { song.view_count }</p>
            <p className="card-text">Year: { song.year }</p>
            <p className="card-text"> Duration: { song.duration }</p>
            <p className="card-text">Created at: { song.created_at }</p>
            <p className="card-text">Updated at: { song.updated_at }</p>
            <div className="audio-player">
                <audio controls>
                      <source src={song.song_file} type="audio/mpeg" /> Tu navegador no soporta el elemento de audio.
                  </audio>
              </div>
              <button type="button" className="btn btn-warning">Edit</button>
              <button type="button" className="btn btn-danger" onClick={deleteSong}>Delete</button>
          </div>
        </div>
    </div>
    
  )
}
