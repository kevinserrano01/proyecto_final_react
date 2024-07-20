import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { CardMusic } from '../components/CardMusic'

export const Music = () => {

  const { data, isLoading, errors } = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/songs/')

  return (
    <>
      <h1>Songs</h1>
      <hr />
      {isLoading ? <h4>Cargando...</h4>
      : errors ? <p>Ha ocurriido un error</p> 
      : <div className="container">
          <div className="row">
            {data.map(song => {
              return (
                <div key={song.id} className="col-md-4 mb-3">
                  <CardMusic song={song} />
                </div>
              )
            })}
          </div>
        </div>
      } 
    </>
  )
}
