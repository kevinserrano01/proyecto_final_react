import { useNavigate } from 'react-router-dom'
import './CardMusic.css'
import convertSecondsToMinutes from '../../hooks/secondToMinute'
import { useContext } from 'react'
import { FavoritesContext } from '../../contexts/FavoritesContext'

export const CardMusic = ({ song }) => {
    const navigate = useNavigate();
    const { addFavorite } = useContext(FavoritesContext);

    // Funcion para agregar a favoritos
    const handleAddFavorite = () => {
        addFavorite(song);
        alert('Canción agregada a favoritos');
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
                <button type="button" className="btn btn-outline-danger btn-lg" onClick={handleAddFavorite}>
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