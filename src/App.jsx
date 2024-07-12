import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { Albums } from './routes/Albums'
import { Artist } from './routes/Artist'
import { Explore } from './routes/Explore'
import { Favorites } from './routes/Favorites'
import { Genres } from './routes/Genres'
import { Music } from './routes/Music'
import { PlayList } from './routes/PlayList'
import { Podcast } from './routes/Podcast'



export const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <h1>Kev</h1>

      <Routes>
          <Route path="/" element={ <HomeScreen></HomeScreen> }></Route>
          <Route path="/Albums" element={ <Albums></Albums> }></Route>
          <Route path="/Artist" element={ <Artist></Artist> }></Route>
          <Route path="/Explore" element={ <Explore></Explore> }></Route>
          <Route path="/Favorites" element={ <Favorites></Favorites> }></Route>
          <Route path="/Genres" element={ <Genres></Genres> }></Route>
          <Route path="/Music" element={ <Music></Music> }></Route>
          <Route path="/PlayList" element={ <PlayList></PlayList> }></Route>
          <Route path="/Podcast" element={ <Podcast></Podcast> }></Route>
          {/* Ruta por defecto si ponemos cualquier cosa despues de la barra nos lleva al home. */}
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
    </>
  )
}
