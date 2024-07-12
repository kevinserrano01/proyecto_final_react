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
import { Live } from './routes/Live'
import { Radio } from './routes/Radio'
import { Login } from './routes/Login'
import { SideBar } from './components/SideBar';



export const App = () => {
  return (
    <>
      <NavBar></NavBar>

      {/* <SideBar></SideBar> */}

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
          <Route path="/Live" element={ <Live></Live> }></Route>
          <Route path="/Radio" element={ <Radio></Radio> }></Route>
          <Route path="/Login" element={ <Login></Login> }></Route>
          {/* Ruta por defecto si ponemos cualquier cosa despues de la barra nos lleva al home. */}
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
    </>
  )
}
