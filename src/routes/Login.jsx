import { useState, useRef, useContext, useEffect } from 'react'
import useFetch from "../hooks/useFetchHook";
import { useAuth } from '../contexts/AuthContext';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [triggerFetch, setTriggerFetch] = useState(false);

    const [{ data, isError, isLoading }, doFetch] = useFetch(
        "https://sandbox.academiadevelopers.com/api-auth/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }
        // triggerFetch
    );

    const { login } = useAuth("actions");

    function handleSubmit(event) {
        event.preventDefault();
        setTriggerFetch(true);
        doFetch(); // fetch
    }

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
    }

    useEffect(() => {
        if (data && !isError && triggerFetch) {
            login(data.token);
        }
    }, [data, isError, triggerFetch]);


    return (
        <section className="section">
            <div className="columns is-centered">
                <div className="column is-4">
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="username">Nombre de usuario:</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    defaultValue=""
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="password">Contraseña:</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="password"
                                    id="password"
                                    name="password"
                                    defaultValue=""
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    type="submit"
                                    className="button is-primary is-fullwidth"
                                >
                                    Enviar
                                </button>
                                {isLoading && triggerFetch && (
                                    <p>Cargando...</p>
                                )}
                                {isError && <p>Error al cargar los datos.</p>}
                                {data && (
                                    <p>{`Token obtenido: ${data.token}`}</p>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

