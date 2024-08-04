import { useState, useEffect } from "react";
import { CardMusic } from "./CardMusic";
import useFetch from "../hooks/useFetchHook";

export const Search = () => {
  // Buscar cancion por nombre
  const [searchTerm, setSearchTerm] = useState('');
  const [songData, setSongData] = useState(null);
  const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/songs/', {});

  useEffect(() => {
    doFetch();
  }, []);

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
              <button className="btn btn-outline-success" type="submit">Search</button>
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
