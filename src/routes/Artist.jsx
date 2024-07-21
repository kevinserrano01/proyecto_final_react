import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { CardArtist } from '../components/CardArtist';

export const Artist = () => {
  const { data, isLoading, errors } = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/artists/')
  
  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar los albunes.</h2>;
  if (data.length <= 0) return <h2>No hay albunes disponibles</h2>;

  return (
        <div className="container">
          <div className="row">
            {data.map(artist => {
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
