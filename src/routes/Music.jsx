import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const Music = () => {

  // const urlBase = 'https://api.themoviedb.org/3/search/movie'
  // const API_KEY = '4451de3083a6f977550b4eae549f3dbc'

  const { data, isLoading, errors } = useFetch('https://jsonplaceholder.typicode.com/users')
  // console.log(data)

  return (
    <>
      <h1>SONGS</h1>
      <h1>Lista de usuarios</h1>
      {isLoading ? <h4>Cargando...</h4>
      : errors ? <p>Ha ocurriido un error</p> 
      : <div>
        {data.map(user => {
              return (
                <ul key={user.id}>
                  <li scope="row">{user.id}</li>
                  <li>{user.name}</li>
                  <li>{user.email}</li>
                  <li>{user.website}</li>
                </ul>
              )
            })}
        </div>
      } 
    </>
  )
}
