import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetchHook';

export const PlayListDetails = () => {
    const { idPlayList } = useParams(); // Renderizar de manera dinámica el id de cada playList

    const [ {data, isLoading, errors}, doFetch ] = useFetch('https://sandbox.academiadevelopers.com/harmonyhub/playlists/', {});

    useEffect(() => {
        doFetch();
    }, []);

    console.log(data.results);

    // const [playlist] = data.results.filter((playlist) => playlist.id === parseInt(idPlayList));

  return (
    <div className="card">
        {/* <img src="src/assets/images/logoPlaylist.png" className="card-img-top" alt="logo music" />
        <div className="card-body">
            <h5 className="card-title"> { playlist.name } </h5>
            <p className="card-text">{ playlist.description }</p>
            <p className="card-text">{ playlist.owner }</p>
        </div> */}
    </div>
  )
}
