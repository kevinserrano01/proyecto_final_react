import { CardMusic } from "../components/CardMusic";
import useFetchHook from "../hooks/useFetchHook";

export const Song = ({songID}) => {

  const [song, error, loading] = useFetchHook(`https://sandbox.academiadevelopers.com/harmonyhub/songs/${songID}`)

  if (loading) return <h2>Cargando...</h2>;
  if (error) return <h2>Error al cargar los generos.</h2>;
  if (!song) return <h2>No se encuentra esta cancion</h2>;

  return (
      <div className="container">
        <div className="row">
          <div key={song.id} className="col-md-4 mb-3">
            <CardMusic song={song} />
          </div>
        </div>
      </div>
  )
}
