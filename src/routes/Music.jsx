import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { CardMusic } from '../components/CardMusic'

export const Music = () => {

  // const urlBase = 'https://api.themoviedb.org/3/search/movie'
  // const API_KEY = '4451de3083a6f977550b4eae549f3dbc'

  const { data, isLoading, errors } = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/songs/?format=json')
  // console.log(data)

  return (
    <>
      <h1>Songs</h1>
      <hr />
      {isLoading ? <h4>Cargando...</h4>
      : errors ? <p>Ha ocurriido un error</p> 
      : <div>
        {data.map(song => {
              return (
                <div key={song.id}>
                  <CardMusic title={song.title} author={song.owner} duration={song.duration}/>
                </div>
              )
            })}
        </div>
      } 
    </>
  )
}
