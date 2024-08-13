import { useParams, useNavigate  } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { useAuth } from '../../contexts/AuthContext';
import { usePage } from '../../contexts/PageContext';
import { SlArrowLeft } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";

export const GenreDetails = () => {
    const { page } = usePage();
    const navigate = useNavigate();
    const { token } = useAuth("state");
    const { idGenre } = useParams(); // Renderizar de manera dinámica el id de cada genero
    const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/genres/?page=${page}`, {});

    useEffect(() => {
        doFetch();
    }, [page]);

    if (isLoading) return <h2>Cargando...</h2>;
    if (errors) return <h2>Error al cargar el genero.</h2>;
    if (!data) return <h2>No hay generos para mostrar</h2>;

    const [genre] = data.results.filter((genre) => genre.id === parseInt(idGenre));

    // Función para volver a la pestaña anterior
    const handleBackClick = () => {
        navigate(-1);
    };

    //funcion para eliminar un genero
    const handleDeleteGenre = async () => {
        const response = await fetch(`https://sandbox.academiadevelopers.com/harmonyhub/genres/${idGenre}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`,
          },
        });
    
        if (response.ok) {
          alert('Genero eliminado correctamente');
          navigate('/genres');
        } else {
          alert('Error al eliminar genero');
        }
    }
    
      //funcion para editar un genero
      const handleEditGenre = () => {
        navigate(`/genres/edit-genre/${idGenre}`);
    };

  return (
    <div className='container'>

        <div className="row">
            <div className="col-md-4 mb-4">
                <button className="btn btn-light" onClick={handleBackClick}>
                    <SlArrowLeft /> Back
                </button>
            </div>
        </div>

        <div className="row">
            <div className="d-flex align-items-center">
                <h1 className="flex-grow-1"> { genre.name } </h1>
                {/* Si ni es el autor no puede editar ni eliminar esto */}
                {genre.owner !== 200? 
                    <span>Owner: { genre.owner }</span>
                :
                    <div>
                        <button type="button" className="btn btn-outline-warning ms-2" onClick={handleEditGenre}>
                        <IoPencil /> Edit
                        </button>
                        <button type="button" className="btn btn-outline-danger ms-2" onClick={handleDeleteGenre}>
                            <IoClose /> Delete
                        </button>
                    </div>
                }   

            </div>
        </div>

        <hr />

        <div className="row">
            <p> Artist: { genre.description }</p>
            <p>Songs: </p>
            <ul>
                {genre.songs.map((song) => (
                    <li key={song}>{song}</li>
                ))}
            </ul>
        </div>
        
    </div>
  )
}
