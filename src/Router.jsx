import { createBrowserRouter } from "react-router-dom";
import { MainContent } from "./components/MainContent";
import { Albums } from "./routes/Albums";
import { Artist } from "./routes/Artist";
import { NotFound } from "./components/NotFound";
import { Layout } from "./Layout";
import './styles/App.css'
import { Music } from "./routes/Music";
import { SongForm } from "./components/SongForm";
import { SongDetails } from "./components/SongDetails";
import { Favorites } from "./routes/Favorites";
import { Genres } from "./routes/Genres";
import { Login } from "./routes/Login";
import { Song } from "./routes/Song";
import { PlayList } from "./routes/PlayList";
import { PlayListDetails } from "./components/PlayListDetails";
import { ProtectedRoute } from "./security/ProtectedRoute";


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
                        <Song />
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
                        path: "new",
                        element: <SongForm />,
                    },
                    {
                        path: "edit/:id",
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
                element: (
                    <ProtectedRoute>
                        <Albums />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/Artists",
                element: (
                    <ProtectedRoute>
                        <Artist />
                    </ProtectedRoute>
                ),
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
                element: (
                    <ProtectedRoute>
                        <Genres />
                    </ProtectedRoute>
                ),
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