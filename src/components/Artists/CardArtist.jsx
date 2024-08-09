import { useNavigate } from 'react-router-dom'

export const CardArtist = ({ artist }) => {

    const navigate = useNavigate();

    return (
        <div className="card">
            { artist.image ? // Si el artista tiene imagen, mostrarla, sino mostrar una imagen por defecto
                <img src={artist.image} className="card-img-top" alt="image artist" /> :
                <img src="/assets/logoArtist.jpg" className="card-img-top" alt="image artist" />
            }
            <div className="card-body">
                <h5 className="card-title" onClick={() => navigate(`/artists/${artist.id}`)}> { artist.name } </h5>
                {/* <p className="card-text"> Oyentes: { artist.owner }</p> */}
            </div>
        </div>
    )
}
