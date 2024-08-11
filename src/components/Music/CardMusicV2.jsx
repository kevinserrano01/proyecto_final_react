import { useNavigate } from 'react-router-dom';
import './CardMusic.css';
import { useContext } from 'react';
import { FavoritesContext } from '../../contexts/FavoritesContext';

export const CardMusicV2 = ({ song, isFavorite }) => {
    const navigate = useNavigate();
    const { addFavorite, removeFavorite } = useContext(FavoritesContext);

    const handleAddFavorite = () => {
        addFavorite(song);
    }

    const handleRemoveFavorite = () => {
        removeFavorite(song.id);
    };

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    {song.cover ? 
                        <img src={song.cover} className="card-img-top" alt="logo music" />
                    :
                        <img src="/assets/musicLogo.jpg" className="img-fluid rounded-start" alt="logo music" />
                    }
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title" onClick={() => navigate(`/explore/${song.id}`)}> { song.title } </h5>
                        <p className="card-text"> Views {song.view_count} </p>
                        { isFavorite ? 
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={handleRemoveFavorite}>
                                ❌
                            </button>
                        :
                            <button type="button" className="btn btn-outline-danger btn-lg" onClick={handleAddFavorite}>
                                ♥️
                            </button>
                        }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="audio-player mt-3">
                    <audio controls>
                        <source src={song.song_file} type="audio/mpeg" /> Tu navegador no soporta el elemento de audio.
                    </audio>
                </div>
            </div>
        </div>
    );
}