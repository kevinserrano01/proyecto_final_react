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
                    {
                        path: "delete/:id",
                        element: <SongForm />,
                    }
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
                    // {
                    //     path: "new",
                    //     element: <SongForm />,
                    // },
                    // {
                    //     path: "edit/:id",
                    //     element: <SongForm />,
                    // },
                    // {
                    //     path: "delete/:id",
                    //     element: <SongForm />,
                    // }
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
                    // {
                    //     path: "new",
                    //     element: <SongForm />,
                    // },
                    // {
                    //     path: "edit/:id",
                    //     element: <SongForm />,
                    // },
                    // {
                    //     path: "delete/:id",
                    //     element: <SongForm />,
                    // }
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
                    // {
                    //     path: "new",
                    //     element: <SongForm />,
                    // },
                    // {
                    //     path: "edit/:id",
                    //     element: <SongForm />,
                    // },
                    // {
                    //     path: "delete/:id",
                    //     element: <SongForm />,
                    // }
                ]
            },
            {
                path: "/Playlist",
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
                    // {
                    //     path: "new",
                    //     element: <SongForm />,
                    // },
                    // {
                    //     path: "edit/:id",
                    //     element: <SongForm />,
                    // },
                    // {
                    //     path: "delete/:id",
                    //     element: <SongForm />,
                    // }
                ]
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]);