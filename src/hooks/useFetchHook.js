import { useEffect, useReducer } from "react";

const ACTIONS = {
    FETCH_INIT: "FETCH_INIT",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_FAILURE: "FETCH_FAILURE",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.FETCH_INIT:
            return {
                isError: false,
                isLoading: true,
            };
        case ACTIONS.FETCH_SUCCESS:
            return {
                data: action.payload,
                isError: false,
                isLoading: false,
            };
        case ACTIONS.FETCH_FAILURE:
            return {
                isError: true,
                isLoading: false,
            };
        default:
            return state;
    }
}

function useFetch(url, options = {}, trigger = false) {
    const [state, dispatch] = useReducer(reducer, {
        isError: false,
        isLoading: true,
    });

    useEffect(() => {
        if (trigger) {
            dispatch({ type: ACTIONS.FETCH_INIT });

            fetch(url, { ...options })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw Error("Error al relizar la petición");
                })
                .then((data) => {
                    dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data });
                })
                .catch((e) => {
                    dispatch({ type: ACTIONS.FETCH_FAILURE });
                });
        }
    }, [url, trigger]);

    return state;
}

export default useFetch;