import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardAlbum } from '../components/Albums/CardAlbum'
import { usePage } from '../contexts/PageContext'
import { CgMathPlus } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

export const Albums = () => {
  const navigate = useNavigate();
  const { page, handlePageChange } = usePage();
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/albums/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);
  
  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los albunes.</h2>;

  // Función para redireccionar a la página de agregar un album
  const handleAddAlbum = () => {
    navigate('/albums/add-album');
  };

  return (
        <div className="container">

          <div className="row">
              <div className="d-flex align-items-center">
                <h1 className="flex-grow-1"> Albums </h1>
                <button type="button" className="btn btn-light ms-auto" onClick={handleAddAlbum}>
                  <CgMathPlus /> Add
                </button>
            </div>
          </div>

          <hr />

          <div className="row">
            {!data ? 
              <h2>No albums available</h2>
            : 
              data.results.map(album => {
              return (
                <div key={album.id} className="col-md-4 mb-3">
                  <CardAlbum album={album} />
                </div>
              )
            })}
          </div>

          <div className="row">
            <button className="btn btn-warning" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Previous</button>
            <button className="btn btn-success" onClick={() => handlePageChange(page + 1)} disabled={page >= 6}>Next</button>
          </div>

        </div>
  )
}
