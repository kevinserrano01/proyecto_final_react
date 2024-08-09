import { useNavigate } from 'react-router-dom'

export const CardPlayList = ({ playlist }) => {

    const navigate = useNavigate();

    return (
        <div className="card">
            <img src="/assets/logoPlaylist.png" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title" onClick={() => navigate(`/playlists/${playlist.id}`)}> { playlist.name } </h5>
                <p className="card-text">{ playlist.owner }</p>
            </div>
        </div>
    )
}
