import { useNavigate } from "react-router-dom";

export const MainContent = () => {
  const navigate = useNavigate();

  // Funcion que redirecciona a la pagina de explore de la App
  const handleStart = () => {
    navigate('/explore');
  };

  return (
    <div className='container text-center'>
      <div className="row">
        <h1>Bienvenidos a Skefy</h1>
        <p>Esta aplicación permite a los usuarios explorar, reproducir y gestionar su música favorita. Los usuarios pueden buscar canciones, añadirlas a sus favoritos y reproducirlas directamente desde la aplicación. Asi mismo tambien pueden gestionar las listas de reproducciones, albunes, artistas y generos.</p>
      </div>
        
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <button className='btn btn-outline-light btn-lg text-center' onClick={handleStart}>Empezar</button>
        </div>
        <div className="col-md-4"></div>
      </div>        
    </div>
  )
}