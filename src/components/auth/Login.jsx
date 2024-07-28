import { useEffect, useRef } from "react"
import { useForm } from "../../hooks/useForm"

export const Login = () => {

    const focusRef = useRef()

    const initialForm = {
        userName: "",
        email: "",
        password: ""
    }

    const {formState, username, password, onInputChange} = useForm(initialForm)


    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    // HACER FOCO EN EL INPUT O EN ALGUNA OTRA PARTE AL CARGAR LA PAGINA WEB.
    useEffect(() => {
      focusRef.current.focus()
    }, [])
    

  return (
    <div className="container">
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="username">Username</label>
                < input
                    ref = {focusRef}
                    type="username"
                    className="form-control"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={onInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={onInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}
