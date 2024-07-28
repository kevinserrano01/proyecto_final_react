import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardPlayList } from '../components/CardPlayList'

export const PlayList = () => {
  const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/playlists/', {});

  useEffect(() => {
    doFetch();
  }, []);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar playlist.</h2>;
  if (!data) return <h2>No hay playlist disponibles</h2>;
  
  return (
    <>
      <h1>PlayLists</h1>
      <hr />
      {isLoading ? <h4>Cargando...</h4>
      : errors ? <p>Ha ocurriido un error</p> 
      : <div className="container">
          <div className="row">
            {data.map(playlist => {
              return (
                <div key={playlist.id} className="col-md-4 mb-3">
                  <CardPlayList playlist={playlist} />
                </div>
              )
            })}
          </div>
        </div>
      } 
    </>
  )
}
