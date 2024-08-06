import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardAlbum } from '../components/Albums/CardAlbum'
import { usePage } from '../contexts/PageContext'

export const Albums = () => {
  const { page, handlePageChange } = usePage();
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/albums/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);
  
  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los albunes.</h2>;
  if (!data) return <h2>No hay albunes disponibles</h2>;

  return (
        <div className="container">
          <h2>Albums</h2>
          <hr />
          <div className="row">
            {data.results.map(album => {
              return (
                <div key={album.id} className="col-md-4 mb-3">
                  <CardAlbum album={album} />
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
