import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to='/' className="navbar-brand" href="#"> Logo </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/music' className="nav-link active">Music</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/podcast' className="nav-link active" > Podcast </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/live' className="nav-link" > Live </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/radio' className="nav-link" > Radio </NavLink>
              </li>
            </ul>
            <NavLink to='/login'>
                <p>Login</p>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}
