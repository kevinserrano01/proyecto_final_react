import { useNavigate } from 'react-router-dom'

export const CardAlbum = ({ album }) => {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/albums/${album.id}`)}>
            <img src="src/assets/images/logoAlbum.jpg" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title"> { album.title } </h5>
                <p className="card-text">{ album.year }</p>
            </div>
        </div>
    )
}
