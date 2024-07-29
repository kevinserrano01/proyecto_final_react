import { Navigate, Route, Routes } from "react-router-dom"
import './styles/App.css'
import { NavBar } from "./components/NavBar"
import { SideBar } from './components/SideBar';
import { MainContent } from "./components/MainContent";
import { Albums } from './routes/Albums'
import { Artist } from './routes/Artist'
import { Song } from './routes/Song'
import { Favorites } from './routes/Favorites'
import { Genres } from './routes/Genres'
import { Music } from './routes/Music'
import { PlayList } from './routes/PlayList'
import { Podcast } from './routes/Podcast'
import { Live } from './routes/Live'
import { Radio } from './routes/Radio'
import { Login } from './routes/Login'
import { useAuth } from "./contexts/AuthContext";
import { useState, useEffect } from "react";

export const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const { isAuthenticated, token } = useAuth("state");

  useEffect(() => {
    if (isAuthenticated) {
        setCurrentPath("/music");
    } else {
        setCurrentPath("/login");
    }
  }, [isAuthenticated]);

  console.log("Authenticated:", isAuthenticated);
  console.log("Token", token);

  return (
    <>{currentPath === "/login" ?  <Login /> :
      <div className="App">
        <NavBar/>
        <div className="d-flex flex-column">
          <SideBar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={ <MainContent></MainContent> } />
              <Route path="/Albums" element={ <Albums></Albums> } />
              <Route path="/Artist" element={ <Artist></Artist> } />
              <Route path="/Song" element={ <Song songID={37}/> } />
              <Route path="/Favorites" element={ <Favorites></Favorites> } />
              <Route path="/Genres" element={ <Genres></Genres> } />
              <Route path="/Music" element={ <Music></Music> } />
              <Route path="/PlayList" element={ <PlayList></PlayList> } />
              <Route path="/Podcast" element={ <Podcast></Podcast> } />
              <Route path="/Live" element={ <Live></Live> } />
              <Route path="/Radio" element={ <Radio></Radio> } />
              {/* <Route path="/Login" element={ <Login></Login> } /> */}
              {/* Ruta por defecto si ponemos cualquier cosa despues de la barra nos lleva al home. */}
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    }
    </>
  )
}
