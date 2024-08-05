import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardMusic } from '../components/Music/CardMusic'

export const Music = () => {
  const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/songs/?page=3', {});

  useEffect(() => {
    doFetch();
  }, []);

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
      </div>
    </>
  )
}
