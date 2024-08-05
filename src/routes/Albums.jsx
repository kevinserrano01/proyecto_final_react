import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardAlbum } from '../components/Albums/CardAlbum'

export const Albums = () => {
  const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/albums/', {});

  useEffect(() => {
    doFetch();
  }, []);
  
  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los albunes.</h2>;
  if (!data) return <h2>No hay albunes disponibles</h2>;

  return (
        <div className="container">
          <div className="row">
            {data.results.map(album => {
              return (
                <div key={album.id} className="col-md-4 mb-3">
                  <CardAlbum album={album} />
                </div>
              )
            })}
          </div>
        </div>
  )
}
