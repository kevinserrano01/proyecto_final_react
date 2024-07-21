import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { CardAlbum } from '../components/CardAlbum'

export const Albums = () => {
  const { data, isLoading, errors } = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/albums/')
  
  return (
    <>
      <h1>Albums</h1>
      <hr />
      {isLoading ? <h4>Cargando...</h4>
      : errors ? <p>Ha ocurriido un error</p>
      : <div className="container">
          <div className="row">
            {data.map(album => {
              return (
                <div key={album.id} className="col-md-4 mb-3">
                  <CardAlbum album={album} />
                </div>
              )
            })}
          </div>
        </div>
      } 
    </>
  )
}
