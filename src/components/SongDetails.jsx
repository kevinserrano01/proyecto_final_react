import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetchHook';
import '../styles/CardMusic.css'

export const SongDetails = () => {
  const { idSong } = useParams(); // Renderizar de manera dinámica el id de cada cancion
  const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/songs/', {});

  useEffect(() => {
    doFetch();
  }, []);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar la cancion.</h2>;
  if (!data) return <h2>No hay canciones para mostrar</h2>;

  const [song] = data.results.filter((song) => song.id === parseInt(idSong));

  return (
    <div className="col-md-6">
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
          </div>
        </div>
    </div>
    
  )
}
