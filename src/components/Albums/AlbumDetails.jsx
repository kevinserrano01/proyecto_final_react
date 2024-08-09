import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../../hooks/useFetchHook';
import { useAuth } from '../../contexts/AuthContext';
import { usePage } from '../../contexts/PageContext';
import { SlArrowLeft } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";

export const AlbumDetails = () => {
    const { page } = usePage();
    const navigate = useNavigate();
    const { token } = useAuth("state");
    const { idAlbum } = useParams(); // Renderizar de manera dinámica el id de cada album
    const [ {data, isLoading, errors}, doFetch ] = useFetch(`https://sandbox.academiadevelopers.com/harmonyhub/albums/?page=${page}`, {});

    useEffect(() => {
        doFetch();
    }, [page]);

    if (isLoading) return <h2>Cargando...</h2>;
    if (errors) return <h2>Error al cargar album.</h2>;
    if (!data) return <h2>No hay albunes para mostrar</h2>;

    const [album] = data.results.filter((album) => album.id === parseInt(idAlbum));

    // Función para volver a la pestaña anterior
    const handleBackClick = () => {
      navigate(-1);
    };

    // Función para eliminar un album
    const handleDeleteAlbum = async () => {
      const response = await fetch(`https://sandbox.academiadevelopers.com/harmonyhub/albums/${idAlbum}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
      });

      if (response.ok) {
        alert('Album eliminado correctamente');
        navigate('/albums');
      } else {
        alert('Error al eliminar album');
      }
    }

    //funcion para redireccionar a la pagina de editar album
    const handleEditAlbum = () => {
      navigate(`/albums/edit-album/${idAlbum}`);
    }

  return (
    <div className='container'>

      <div className="row">
        <div className="col-md-4 mb-4">
          <button className="btn btn-light" onClick={handleBackClick}>Volver</button>
        </div>
      </div>

      <div className="row">
        <div className="d-flex align-items-center">
          <h1 className="flex-grow-1"> { album.title } </h1>
          <button type="button" className="btn btn-outline-warning ms-2" onClick={handleEditAlbum}>
            <IoPencil /> Edit
          </button>
          <button type="button" className="btn btn-outline-danger ms-2" onClick={handleDeleteAlbum}>
            <IoClose /> Delete
          </button>
        </div>
      </div>

      <hr />

      <div className="row">
      <p> Year: { album.year }</p>
        <p> Artist: { album.artist }</p>
        <p> Created: { album.created_at }</p>
        {album.cover ?
          <img src={ album.cover } alt="logo album" width={"500px"}/>
        : 
          <img src="/assets/logoAlbum.png" alt="logo album" width={"500px"}/>
        }
      </div>
        
    </div>
  )
}
