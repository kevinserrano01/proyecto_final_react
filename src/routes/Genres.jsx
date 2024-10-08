import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardGenres } from '../components/Genres/CardGenres'
import { usePage } from '../contexts/PageContext'
import { CgMathPlus } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

export const Genres = () => {
  const navigate = useNavigate();
  const { page, handlePageChange } = usePage();
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/genres/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los generos.</h2>;

  const handleAddArtist = () => {
    navigate('/genres/add-genre');
  };
  
  return (
        <div className="container">
          <div className="row">
              <div className="d-flex align-items-center">
                <h1 className="flex-grow-1"> Genres </h1>
                <button type="button" className="btn btn-light ms-auto" onClick={handleAddArtist}>
                  <CgMathPlus /> Add
                </button>
              </div>
          </div>

          <hr />

          <div className="row">
            {!data ?
              <h2>No hay generos disponibles</h2>
            :
              data.results.map(gen => {
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
