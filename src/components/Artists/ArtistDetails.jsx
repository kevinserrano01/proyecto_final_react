import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { usePage } from '../../contexts/PageContext';

export const ArtistDetails = () => {
    const { page, handlePageChange } = usePage();

    const { idArtist } = useParams(); // Renderizar de manera dinámica el id de cada artista
    const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/artists/?page=${page}`, {});

    useEffect(() => {
        doFetch();
    }, [page]);

    if (isLoading) return <h2>Cargando...</h2>;
    if (errors) return <h2>Error al cargar artista.</h2>;
    if (!data) return <h2>No hay Artistas para mostrar</h2>;

    // Busco el artista por si id
    const [artist] = data.results.filter((artist) => artist.id === parseInt(idArtist));

  return (
    <div>
        <h2> { artist.name }</h2>
        <hr />
        <p> Biography: { artist.bio }</p>
        <p><a href={ artist.website } target='blank'> Website </a></p>
        <img src={ artist.image } alt="logo album" width={"500px"}/>

        <p>Songs</p>
        <ul>
            {artist.songs.map((song) => (
                <li>{song}</li>
            ))}
        </ul>
        
    </div>
  )
}
