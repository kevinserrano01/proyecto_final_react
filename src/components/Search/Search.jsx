import { useState, useEffect } from "react";
import { CardMusic } from "../Music/CardMusic";
import useFetch from "../../hooks/useFetchHook";
import { usePage } from "../../contexts/PageContext";

//? ESTE COMPONENTE DEBERÍA SER UNA PÁGINA DE BÚSQUEDA DE CANCIONES
//? DEBERIA OBTENER TODAS LAS CANCIONES DE LAS PAGINAS DE LA API Y GUARDARLAS EN UNA LISTA
//? LUEGO, DEBERÍA BUSCAR LA CANCIÓN POR NOMBRE Y MOSTRARLA EN UN CARD

export const Search = () => {
  const { page } = usePage();
  // Buscar cancion por nombre
  const [searchTerm, setSearchTerm] = useState('');
  const [songData, setSongData] = useState(null);
  const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/?page=${page}`, {});

  useEffect(() => {
    doFetch();
  }, [page]);

  if (isLoading) return <h2>Cargando...</h2>;
  if (errors) return <h2>Error al cargar las canciones.</h2>;
  if (!data) return <h2>No hay canciones para mostrar</h2>;

  const handleSearch = (event) => {
    event.preventDefault();

    if (data) {
      const foundSong = data.results.find((song) => song.title.toLowerCase() === searchTerm.toLowerCase());
      if (foundSong) {
        setSongData(foundSong);
      } else {
        setSongData(null);
      }
    }
  }

  //Esta funcion obtiene todas las canciones de la API y las guarda en una lista
  //Luego, busca la cancion por nombre y la muestra en un card
  // const obtenerCancionesDeTodasLasPaginas = async () => {
  //   let allSongs = [];
  //   let page = 1;
  //   let next = true;

  //   while (next) {
  //     const response = await fetch(`https://sandbox.academiadevelopers.com/harmonyhub/songs/?page=${page}`);
  //     const data = await response.json();
  //     allSongs = [...allSongs, ...data.results];
  //     next = data.next;
  //     page++;
  //   }
  //   return allSongs;
  // }

  return (
    <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Song"
                aria-label="Search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4 me-2">
            { songData ? (
                <CardMusic song={songData} />
              ) : (
                <h3>No song found</h3>
              )
            }
          </div>
        </div>
      </div>
  )
}
