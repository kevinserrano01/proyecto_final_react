import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardMusic } from '../components/Music/CardMusic'
import { usePage } from '../contexts/PageContext'
import { useNavigate } from 'react-router-dom';
import { CgMathPlus } from "react-icons/cg";

export const Music = () => {
  const navigate = useNavigate();
  const { page, handlePageChange } = usePage(); // Obtengo el numero de la página y la función para cambiarla
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar las canciones.</h2>;

  const handleAddSongClick = () => {
    navigate('/explore/add-song');
  };

  return (
    <div> 
      <div className="container">
        <div className="d-flex align-items-center">
          <h1 className="flex-grow-1"> Songs </h1>
          <button type="button" className="btn btn-light ms-auto" onClick={handleAddSongClick}>
            <CgMathPlus /> Add
          </button>
        </div>
      </div>
      
      <hr />
      <div className="container">
          <div className="row">
            {!data ? 
                <h2>No hay canciones disponibles</h2> 
            : 
            data.results.map(song => {
              return (
                <div key={song.id} className="col-md-4 mb-3">
                  <CardMusic song={song} />
                </div>
              )
            })
          }
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center">
              <button className="btn btn-outline-light" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Previous</button>
              <button className="btn btn-outline-light ms-3" onClick={() => handlePageChange(page + 1)} disabled={page >= 25}>Next</button>
            </div>
            <div className="col-md-4"></div>
            
          </div>
      </div>
      
    </div>
  )
}
