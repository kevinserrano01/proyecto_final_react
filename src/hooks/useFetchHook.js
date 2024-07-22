import { useEffect, useState } from "react";

export const useFetchHook = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Resetear los estados / Volver a inicializarlos
        setData(null);
        setIsError(false);
        setIsLoading(true);

        fetch(url, { ...options })
            .then((res) => {
                if (res.ok) { // res.ok is true if status code is 200-299
                    return res.json(); 
                } else {
                    throw new Error("Error en la petición");
                }
            })
            .then((data) => {
                setData(data);
            })
            .catch((e) => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [url]);

    return [data, isError, isLoading];
}
