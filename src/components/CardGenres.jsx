import { useNavigate } from 'react-router-dom'

export const CardGenres = ({ gen }) => {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/genres/${gen.id}`)}>
            <img src="/assets/logoAlbum.jpg" className="card-img-top" alt="logo music" />
            <div className="card-body">
                <h5 className="card-title"> { gen.name } </h5>
                <p className="card-text">{ gen.description }</p>
            </div>
        </div>
    )
}
