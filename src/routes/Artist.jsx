import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardArtist } from '../components/Artists/CardArtist';
import { usePage } from '../contexts/PageContext';

export const Artist = () => {
  const { page, handlePageChange } = usePage(); // Obtengo el numero de la página y la función para cambiarla
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/artists/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]); // Agrego 'page' como dependencia para volver a hacer la solicitud cuando cambie
  
  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los artistas.</h2>;
  if (!data) return <h2>No hay artistas disponibles</h2>;

  return (
        <div className="container">
          <h1>Artists</h1>
          <hr />
          <div className="row">
            {data.results.map(artist => {
              return (
                <div key={artist.id} className="col-md-4 mb-3">
                  <CardArtist artist={artist} />
                </div>
              )
            })}
          </div>
          <div className="row">
            <button className="btn btn-warning" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Previous</button>
            <button className="btn btn-success" onClick={() => handlePageChange(page + 1)} disabled={page >= 2}>Next</button>
          </div>
        </div>
  )
}
