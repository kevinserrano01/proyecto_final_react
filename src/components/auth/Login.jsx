import { useState, useRef, useContext, useEffect } from 'react'
import useFetch from "../../hooks/useFetchHook";
import { useAuth } from '../../contexts/AuthContext';

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
        <section className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="row mb-3">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className='form-label' htmlFor="username">Username</label>
                                <div className="control has-icons-left">
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="username"
                                        name="username"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className='form-label' htmlFor="password">Password</label>
                                <div className="control has-icons-left">
                                    <input
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        name="password"
                                        defaultValue=""
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="mb-3 text-center">
                                <div className="control">
                                    <button
                                        type="submit"
                                        className="btn btn-light"
                                    >
                                        Submit
                                    </button>
                                    {isLoading && triggerFetch && (
                                        <p>Cargando...</p>
                                    )}
                                    {isError && <p>Error al cargar los datos.</p>}
                                    {/* {data && (
                                        <p>{`Token obtenido: ${data.token}`}</p>
                                    )} */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </section>
    );
}

