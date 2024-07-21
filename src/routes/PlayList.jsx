import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { CardPlayList } from '../components/CardPlayList'

export const PlayList = () => {
  const { data, isLoading, errors } = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/playlists/')
  
  return (
    <>
      <h1>PlayLists</h1>
      <hr />
      {isLoading ? <h4>Cargando...</h4>
      : errors ? <p>Ha ocurriido un error</p> 
      : <div className="container">
          <div className="row">
            {data.map(playlist => {
              return (
                <div key={playlist.id} className="col-md-4 mb-3">
                  <CardPlayList playlist={playlist} />
                </div>
              )
            })}
          </div>
        </div>
      } 
    </>
  )
}
