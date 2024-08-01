import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardArtist } from '../components/CardArtist';

export const Artist = () => {
  const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/artists/', {});

  useEffect(() => {
    doFetch();
  }, []);
  
  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los artistas.</h2>;
  if (!data) return <h2>No hay artistas disponibles</h2>;

  return (
        <div className="container">
          <div className="row">
            {data.results.map(artist => {
              return (
                <div key={artist.id} className="col-md-4 mb-3">
                  <CardArtist artist={artist} />
                </div>
              )
            })}
          </div>
        </div>
  )
}
