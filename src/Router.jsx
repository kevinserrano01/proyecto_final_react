import { createBrowserRouter } from "react-router-dom";
import { MainContent } from "./components/MainContent";
import { Albums } from "./routes/Albums";
import { Artist } from "./routes/Artist";
import { NotFound } from "./components/NotFound";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainContent />
    },
    {
        path: "/Albums",
        element: <Albums />
    },
    {
        path: "/Artist",
        element: <Artist />
    },
    {
        path: "*",
        element: <NotFound />
    },
]);