import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Funcion para agregar una cancion a favoritos
    const addFavorite = (song) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some(fav => fav.id === song.id)) {
                alert('La canción ya está en favoritos');
                return prevFavorites; // Si la canción ya está en favoritos, no se agrega de nuevo
            }
            alert('Canción agregada a favoritos');
            return [...prevFavorites, song];
        });
    };

    // Función para eliminar una cancion de favoritos
    const removeFavorite = (songId) => {
        setFavorites((prevFavorites) => prevFavorites.filter(song => song.id !== songId));
        alert('Canción eliminada de favoritos');
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};