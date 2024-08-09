import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetchHook'
import { CardArtist } from '../components/Artists/CardArtist';
import { usePage } from '../contexts/PageContext';
import { CgMathPlus } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

export const Artist = () => {
  const navigate = useNavigate();
  const { page, handlePageChange } = usePage(); // Obtengo el numero de la página y la función para cambiarla
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/artists/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]); // Agrego 'page' como dependencia para volver a hacer la solicitud cuando cambie
  
  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los artistas.</h2>;

  const handleAddArtist = () => {
    navigate('/artists/add-artist');
  };

  return (
        <div className="container">
          <div className="row">
              <div className="d-flex align-items-center">
                <h1 className="flex-grow-1"> Artists </h1>
                <button type="button" className="btn btn-light ms-auto" onClick={handleAddArtist}>
                  <CgMathPlus /> Add
                </button>
              </div>
          </div>

          <hr />

          <div className="row">
            { !data ?
                    <h2>No hay artistas disponibles</h2>
            :
            data.results.map(artist => {
              return (
                <div key={artist.id} className="col-md-4 mb-3">
                  <CardArtist artist={artist} />
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
