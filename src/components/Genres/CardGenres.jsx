import { useNavigate } from 'react-router-dom'

export const CardGenres = ({ gen }) => {

    const navigate = useNavigate();

    return (
        <div className="card">
            <img src="/assets/logoAlbum.jpg" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title" onClick={() => navigate(`/genres/${gen.id}`)}> { gen.name } </h5>
            </div>
        </div>
    )
}
