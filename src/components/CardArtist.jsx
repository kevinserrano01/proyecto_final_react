import { useNavigate } from 'react-router-dom'

export const CardArtist = ({ artist }) => {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/artist/${artist.id}`)}>
            <img src="src/assets/images/logoArtist.jpg" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title"> { artist.name } </h5>
                <p className="card-text">{ artist.bio }</p>
            </div>
        </div>
    )
}
