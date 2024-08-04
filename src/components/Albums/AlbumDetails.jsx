import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';

export const AlbumDetails = () => {
    const { idAlbum } = useParams(); // Renderizar de manera dinámica el id de cada album
    const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/albums/', {});

    useEffect(() => {
        doFetch();
    }, []);

    if (isLoading) return <h2>Cargando...</h2>;
    if (errors) return <h2>Error al cargar album.</h2>;
    if (!data) return <h2>No hay albunes para mostrar</h2>;

    const [album] = data.results.filter((album) => album.id === parseInt(idAlbum));

  return (
    <div>
        <h2>Album: { album.title }</h2>
        <hr />
        <p> Artist: { album.artist }</p>
        <p> Genre: { album.owner }</p>
        <p> Created: { album.created_at }</p>
        <p> Updated: { album.updated_at }</p>
        <img src={ album.cover } alt="logo album" width={"500px"}/>
    </div>
  )
}
