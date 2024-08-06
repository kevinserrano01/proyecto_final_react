import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardPlayList } from '../components/PlayLists/CardPlayList'
import { usePage } from '../contexts/PageContext'

export const PlayList = () => {
  const { page, handlePageChange } = usePage();
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/playlists/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar playlist.</h2>;
  if (!data) return <h2>No hay playlist disponibles</h2>;
  
  return (
      <div className="container">
          <h1>PlayLists</h1>
          <hr />
          <div className="row">
            {data.results.map(playlist => {
              return (
                <div key={playlist.id} className="col-md-4 mb-3">
                  <CardPlayList playlist={playlist} />
                </div>
              )
            })}
          </div>
          <div className="row">
            <button className="btn btn-warning" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Previous</button>
            <button className="btn btn-success" onClick={() => handlePageChange(page + 1)} disabled={page >= 3}>Next</button>
          </div>
        </div>
  )
}
