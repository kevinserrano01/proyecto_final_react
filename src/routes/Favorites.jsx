import React, { useContext } from 'react'
import { FavoritesContext } from '../contexts/FavoritesContext'
import { CardMusic } from '../components/Music/CardMusic'
import { CardMusicV2 } from '../components/Music/CardMusicV2'

export const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="container">
      <div className="row">
              <h1>Favorites</h1>
      </div>

      <hr />

      <div className="row">
        { favorites.length === 0 ?
            <h2>No hay canciones favoritas</h2>
          :
            favorites.map(song => {
              return (
                <div key={song.id} className="col-md-4 mb-3">
                  <CardMusicV2 song={song} isFavorite={true} />
                </div>
              )
            })
        }
      </div>

    </div>
  )
}
