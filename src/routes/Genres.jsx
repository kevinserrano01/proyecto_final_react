import { useEffect } from 'react'
import { CardGenres } from '../components/Genres/CardGenres'
import useFetch from '../hooks/useFetchHook'
import { usePage } from '../contexts/PageContext'

export const Genres = () => {
  const { page, handlePageChange } = usePage();
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/genres/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los generos.</h2>;
  if (!data) return <h2>No hay generos disponibles</h2>;
  
  return (
        <div className="container">
          <h1>Genres</h1>
          <hr />
          <div className="row">
            {data.results.map(gen => {
              return (
                <div key={gen.id} className="col-md-4 mb-3">
                  <CardGenres gen={gen} />
                </div>
              )
            })}
          </div>
          <div className="row">
            <button className="btn btn-warning" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Previous</button>
            <button className="btn btn-success" onClick={() => handlePageChange(page + 1)} disabled={page >= 2}>Next</button>
          </div>
        </div>
  );
}
