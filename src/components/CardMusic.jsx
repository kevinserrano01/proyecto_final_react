import { useNavigate } from 'react-router-dom'
import '../styles/CardMusic.css'

export const CardMusic = ({ song }) => {

    const navigate = useNavigate();
    
    // ruta absoluta: navigate(`/explore/${song.id}`)
    return (
        <div className="card" onClick={() => navigate(`/explore/${song.id}`)}>  
        <img src="/assets/musicLogo.jpg" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title"> { song.title } </h5>
                <p className="card-text">{ song.owner }</p>
                <div className="audio-player">
                    <audio controls>
                         <source src={song.song_file} type="audio/mpeg" /> Tu navegador no soporta el elemento de audio.
                     </audio>
                </div>
            </div>
        </div>
    )
}