import React from 'react'
import { CardGenres } from '../components/CardGenres'
import { useFetch } from '../hooks/useFetch'

export const Genres = () => {
  const { data, isLoading, errors } = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/genres/')

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los generos.</h2>;
  if (data) return <h2>No hay generos disponibles</h2>;
  
  return (
        <div className="container">
          <div className="row">
            {data.map(gen => {
              return (
                <div key={gen.id} className="col-md-4 mb-3">
                  <CardGenres gen={gen} />
                </div>
              )
            })}
          </div>
        </div>
  );
}
