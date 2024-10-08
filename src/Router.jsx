import { createBrowserRouter } from "react-router-dom";
import { MainContent } from "./components/Layout/MainContent";
import { Albums } from "./routes/Albums";
import { Artist } from "./routes/Artist";
import { NotFound } from "./components/NotFound";
import { Layout } from "./Layout";
import './styles/App.css'
import { Music } from "./routes/Music";
import { SongForm } from "./components/Music/SongForm";
import { SongDetails } from "./components/Music/SongDetails";
import { Favorites } from "./routes/Favorites";
import { Genres } from "./routes/Genres";
import { Login } from "./components/auth/Login";
import { PlayList } from "./routes/PlayList";
import { PlayListDetails } from "./components/PlayLists/PlayListDetails";
import { ProtectedRoute } from "./security/ProtectedRoute";
import { Search } from "./components/Search/Search";
import { AlbumDetails } from "./components/Albums/AlbumDetails";
import { ArtistDetails } from "./components/Artists/ArtistDetails";
import { GenreDetails } from "./components/Genres/GenreDetails";
import { ArtistForm } from "./components/Artists/ArtistForm";
import { PlayListForm } from "./components/PlayLists/PlayListForm";
import { AlbumForm } from "./components/Albums/AlbumForm";
import { GenreForm } from "./components/Genres/GenreForm";


export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/Login",
                element: <Login />
            },
            {
                path: "/", // index: true => Ruta raiz
                element: (
                    <ProtectedRoute>
                        <MainContent />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/Search",
                element: (
                    <ProtectedRoute>
                        <Search />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/Explore",
                children: [ // Explore/details [hijo de Explore]
                    {
                        index: true, // ruta raiz
                        element: (
                            <ProtectedRoute>
                                <Music />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: ":idSong",
                        element: <SongDetails />,
                    },
                    {
                        path: "add-song",
                        element: <SongForm />,
                    },
                    {
                        path: "edit-song/:idSong",
                        element: <SongForm />,
                    },
                ]
            },
            {
                path: "/Albums",
                children: [ // Explore/details [hijo de Explore]
                    {
                        index: true, // ruta raiz
                        element: (
                            <ProtectedRoute>
                                <Albums />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: ":idAlbum",
                        element: <AlbumDetails />,
                    },
                    {
                        path: "add-album",
                        element: <AlbumForm />,
                    },
                    {
                        path: "edit-album/:idAlbum",
                        element: <AlbumForm />,
                    },
                ]
            },
            {
                path: "/Artists",
                children: [ // Explore/details [hijo de Explore]
                    {
                        index: true, // ruta raiz
                        element: (
                            <ProtectedRoute>
                                <Artist />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: ":idArtist",
                        element: <ArtistDetails />,
                    },
                    {
                        path: "add-artist",
                        element: <ArtistForm />,
                    },
                    {
                        path: "edit-artist/:idArtist",
                        element: <ArtistForm />,
                    },
                ]
            },
            {
                path: "/Favorites",
                element: (
                    <ProtectedRoute>
                        <Favorites />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/Genres",
                children: [ // Explore/details [hijo de Explore]
                    {
                        index: true, // ruta raiz
                        element: (
                            <ProtectedRoute>
                                <Genres />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: ":idGenre",
                        element: <GenreDetails />,
                    },
                    {
                        path: "add-genre",
                        element: <GenreForm />,
                    },
                    {
                        path: "edit-genre/:idGenre",
                        element: <GenreForm />,
                    },
                ]
            },
            {
                path: "/Playlists",
                children: [ // Explore/details [hijo de Explore]
                    {
                        index: true, // ruta raiz
                        element: (
                            <ProtectedRoute>
                                <PlayList />
                            </ProtectedRoute>
                        ),
                    },
                    {
                        path: ":idPlayList",
                        element: <PlayListDetails />,
                    },
                    {
                        path: "add-playlist",
                        element: <PlayListForm />,
                    },
                    {
                        path: "edit-playlist/:idPlaylist",
                        element: <PlayListForm />,
                    },
                ]
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]);