import { useParams, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { usePage } from '../../contexts/PageContext';

export const GenreDetails = () => {
    const { page } = usePage();
    const navigate = useNavigate();
    const { idGenre } = useParams(); // Renderizar de manera dinámica el id de cada genero
    const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/genres/?page=${page}`, {});

    useEffect(() => {
        doFetch();
    }, [page]);

    if (isLoading) return <h2>Cargando...</h2>;
    if (errors) return <h2>Error al cargar el genero.</h2>;
    if (!data) return <h2>No hay generos para mostrar</h2>;

    const [genre] = data.results.filter((genre) => genre.id === parseInt(idGenre));

    // Función para volver a la pestaña anterior
    const handleBackClick = () => {
        navigate(-1);
    };

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4 mb-4">
                {/* boton para volver a la pestaña anterior */}
                <button className="btn btn-light" onClick={handleBackClick}>Volver</button>
            </div>
        </div>
        <div className="row">
            <h2> { genre.name }</h2>
            <p> Artist: { genre.description }</p>
            <p> Owner: { genre.owner }</p>
            <p>Songs: </p>
            <ul>
                {genre.songs.map((song) => (
                    <li>{song}</li>
                ))}
            </ul>
        </div>
        
    </div>
  )
}
