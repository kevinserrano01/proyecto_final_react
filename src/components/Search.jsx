import { useState } from "react";
import { CardMusic } from "./CardMusic";

export const Search = () => {
  // Buscar cancion por nombre
  const [searchTerm, setSearchTerm] = useState('');
  const [songData, setSongData] = useState(null);
  const [notFound, setNotFound] = useState(false)

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://sandbox.academiadevelopers.com/harmonyhub/songs/");
      const data = await response.json();
      const songs = data.results;

      const foundSong = songs.find((song) => song.title.toLowerCase() === searchTerm.toLowerCase());

      if (foundSong) {
        setSongData(foundSong);
        setNotFound(false);
      } else {
        setSongData(null);
        setNotFound(true);
      }

    } catch (error) {
      console.error('Error fetching song:', error);
      setSongData(null);
      setNotFound(true);
    }
  };

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
                notFound && <p>No song found</p>
              )
            }
          </div>
        </div>
      </div>
  )
}
