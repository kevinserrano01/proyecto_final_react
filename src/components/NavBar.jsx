import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
            <NavLink to='/' className="navbar-brand"> App Music </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <NavLink to='/music' className="nav-link ">Music</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/podcast' className="nav-link " > Podcast </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/live' className="nav-link" > Live </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to='/radio' className="nav-link" > Radio </NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}
