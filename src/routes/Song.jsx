import { useEffect } from 'react'
import { CardMusic } from "../components/CardMusic";
import useFetch from '../hooks/useFetchHook'

export const Song = ({songID}) => {
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/${songID}`, {});

  useEffect(() => {
    doFetch();
  }, []);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar la cancion.</h2>;
  if (!data) return <h2>No se encuentra esta cancion</h2>;

  return (
      <div className="container">
        <div className="row">
          <div key={data.id} className="col-md-4 mb-3">
            <CardMusic song={data} />
          </div>
        </div>
      </div>
  )
}
