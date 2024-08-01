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


export const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainContent />
            },
            {
                path: "/Search",
                element: <Song />
            },
            {
                path: "/Explore",
                children: [ // Explore/details [hijo de Explore]
                    {
                        index: true, // ruta raiz
                        element: <Music />,
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
                element: <Albums />
            },
            {
                path: "/Artists",
                element: <Artist />
            },
            {
                path: "/Favorites",
                element: <Favorites />
            },
            {
                path: "/Genres",
                element: <Genres />
            },
            {
                path: "/Playlist",
                children: [ // Explore/details [hijo de Explore]
                    {
                        index: true, // ruta raiz
                        element: <PlayList />,
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