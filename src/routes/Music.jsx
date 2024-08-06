import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardMusic } from '../components/Music/CardMusic'
import { usePage } from '../contexts/PageContext'

export const Music = () => {
  const { page, handlePageChange } = usePage(); // Obtengo el numero de la página y la función para cambiarla
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar las canciones.</h2>;
  if (!data) return <h2>No hay canciones disponibles</h2>;

  return (
    <>
      <h1>Songs</h1>
      <hr />
      <div className="container">
          <div className="row">
            {data.results.map(song => {
              return (
                <div key={song.id} className="col-md-4 mb-3">
                  <CardMusic song={song} />
                </div>
              )
            })}
          </div>
          <div className="row">
            <button className="btn btn-warning" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Previous</button>
            <button className="btn btn-success" onClick={() => handlePageChange(page + 1)} disabled={page >= 2}>Next</button>
          </div>
      </div>
    </>
  )
}
