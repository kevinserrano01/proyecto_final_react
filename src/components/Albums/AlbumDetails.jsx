import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { usePage } from '../../contexts/PageContext';

export const AlbumDetails = () => {
    const { page } = usePage();
    const navigate = useNavigate();
    const { idAlbum } = useParams(); // Renderizar de manera dinámica el id de cada album
    const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/albums/?page=${page}`, {});

    useEffect(() => {
        doFetch();
    }, [page]);

    if (isLoading) return <h2>Cargando...</h2>;
    if (errors) return <h2>Error al cargar album.</h2>;
    if (!data) return <h2>No hay albunes para mostrar</h2>;

    const [album] = data.results.filter((album) => album.id === parseInt(idAlbum));

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
        <h2> { album.title }</h2>
        <hr />
        <p> Artist: { album.artist }</p>
        <p> Genre: { album.owner }</p>
        <p> Created: { album.created_at }</p>
        <img src={ album.cover } alt="logo album" width={"500px"}/>
      </div>
        
    </div>
  )
}
