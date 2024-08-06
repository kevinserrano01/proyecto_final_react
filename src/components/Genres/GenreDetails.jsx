import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { usePage } from '../../contexts/PageContext';

export const GenreDetails = () => {
    const { page, handlePageChange } = usePage();
    const { idGenre } = useParams(); // Renderizar de manera dinámica el id de cada genero
    const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/genres/?page=${page}`, {});

    useEffect(() => {
        doFetch();
    }, [page]);

    if (isLoading) return <h2>Cargando...</h2>;
    if (errors) return <h2>Error al cargar el genero.</h2>;
    if (!data) return <h2>No hay generos para mostrar</h2>;

    const [genre] = data.results.filter((genre) => genre.id === parseInt(idGenre));

  return (
    <div>
        <h2>Genero: { genre.name }</h2>
        <hr />
        <p> Artist: { genre.description }</p>
        <p> Owner: { genre.owner }</p>
        <p>Songs: </p>
        <ul>
            {genre.songs.map((song) => (
                <li>{song}</li>
            ))}
        </ul>
    </div>
  )
}
