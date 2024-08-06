import { useNavigate } from 'react-router-dom'

export const CardAlbum = ({ album }) => {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => navigate(`/albums/${album.id}`)}>
            { album.cover ? // Si el album tiene imagen, mostrarla, sino mostrar una imagen por defecto
                <img src={album.cover} className="card-img-top" alt="image album" /> :
                <img src="/assets/logoAlbum.jpg" className="card-img-top" alt="image album" />
            }
            <div className="card-body">
                <h5 className="card-title"> { album.title } </h5>
                <p className="card-text">{ album.year }</p>
            </div>
        </div>
    )
}
