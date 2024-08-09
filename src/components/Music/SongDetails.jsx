import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import './CardMusic.css';
import { useAuth } from '../../contexts/AuthContext';
import { usePage } from '../../contexts/PageContext';
import convertSecondsToMinutes from '../../hooks/secondToMinute';

export const SongDetails = () => {
  const { page } = usePage();
  const navigate = useNavigate();
  const { idSong } = useParams(); // Renderizar de manera dinámica el id de cada cancion
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/?page=${page}`, {});
  const { token } = useAuth("state");

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar la cancion.</h2>;
  if (!data) return <h2>No hay canciones para mostrar</h2>;

  const [song] = data.results.filter((song) => song.id === parseInt(idSong));

  // Función para volver a la pestaña anterior
  const handleBackClick = () => {
    navigate(-1);
  };

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
      navigate('/explore');
    } else {
      alert('Error al eliminar la cancion');
    }
  }

  const editSong = () => {
    navigate(`/explore/edit-song/${idSong}`);
  };

  return (
    <div className='container'>
    <div className="row">
      <div className="col-md-4 mb-4">
        {/* boton para volver a la pestaña anterior */}
        <button className="btn btn-light" onClick={handleBackClick}>back</button>
      </div>
    </div>
    <div className="col-md-5">
      <div className="card">
          {song.cover ? 
            <img src={song.cover} className="card-img-top" alt="logo music" /> :
            <img src="/assets/musicLogo.jpg" className="card-img-top" alt="logo music" />
          }
          <div className="card-body">
            <h5 className="card-title"> { song.title } </h5>
            <p className="card-text"> Author: { song.owner }</p>
            <p className="card-text"> Views: { song.view_count }</p>
            <p className="card-text">Year: { song.year }</p>
            <p className="card-text"> Duration: { convertSecondsToMinutes(song.duration) }</p>
            <p className="card-text">Uploaded: { song.updated_at }</p>
            <div className="audio-player">
                <audio controls>
                      <source src={song.song_file} type="audio/mpeg" /> Tu navegador no soporta el elemento de audio.
                  </audio>
              </div>
              <button type="button" className="btn btn-warning m-2" onClick={editSong}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={deleteSong}>Delete</button>
          </div>
        </div>
    </div>
    </div>
    
    
  )
}
