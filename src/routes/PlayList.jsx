import { useEffect } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardPlayList } from '../components/PlayLists/CardPlayList'
import { usePage } from '../contexts/PageContext'
import { CgMathPlus } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

export const PlayList = () => {
  const navigate = useNavigate();
  const { page, handlePageChange } = usePage();
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/playlists/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar playlists.</h2>;
  
  // Función para redireccionar a la página de agregar una playlist
  const handleAddPlaylist = () => {
    navigate('/playlists/add-playlist');
  };

  return (
      <div className="container">
        <div className="row">
            <div className="d-flex align-items-center">
              <h1 className="flex-grow-1"> PlayLists </h1>
              <button type="button" className="btn btn-light ms-auto" onClick={handleAddPlaylist}>
                <CgMathPlus /> Add
              </button>
          </div>
        </div>

        <hr />

        <div className="row">
          {!data ?
            <h2>No hay playlists disponibles</h2>
          : 
            data.results.map(playlist => {
              return (
                <div key={playlist.id} className="col-md-4 mb-3">
                  <CardPlayList playlist={playlist} />
                </div>
              )
            })}
        </div>
        <div className="row">
          <button className="btn btn-warning" onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>Previous</button>
          <button className="btn btn-success" onClick={() => handlePageChange(page + 1)} disabled={page >= 10}>Next</button>
        </div>
      </div>
  )
}
