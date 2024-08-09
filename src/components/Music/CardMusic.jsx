import { useNavigate } from 'react-router-dom'
import './CardMusic.css'
import { useParams } from 'react-router-dom'
import convertSecondsToMinutes from '../../hooks/secondToMinute'

export const CardMusic = ({ song }) => {
    const { idSong } = useParams(); // Renderizar de manera dinámica el id de cada cancion

    const navigate = useNavigate();

    const addFavorite = () => {
        console.log('Agregando a favoritos la cancion con id:', song.id);
    }
    
    // ruta absoluta: navigate(`/explore/${song.id}`)
    return (
        <div className="card" >  
        {song.song_file ? 
        <img src={song.cover} className="card-img-top" alt="logo music" /> :
        <img src="/assets/musicLogo.jpg" className="card-img-top" alt="logo music" />
        }
            <div className="card-body">
                <h5 className="card-title" onClick={() => navigate(`/explore/${song.id}`)}> { song.title } </h5>
                <p className="card-text"> {convertSecondsToMinutes(song.duration)} </p>
                <button type="button" className="btn btn-outline-danger btn-lg" onClick={addFavorite}>
                    ♥️
                </button>
                <div className="audio-player">
                    <audio controls>
                         <source src={song.song_file} type="audio/mpeg" /> Tu navegador no soporta el elemento de audio.
                     </audio>
                </div>
            </div>
        </div>
    )
}