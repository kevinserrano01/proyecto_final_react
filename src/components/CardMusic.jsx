import '../styles/CardMusic.css'

export const CardMusic = ({ song }) => {
    return (
        <div className="card">
        <img src="src/assets/images/musicLogo.jpg" className="card-img-top" alt="logo music" />
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