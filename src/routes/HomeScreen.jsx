import React from 'react'
import { Link, NavLink } from "react-router-dom";



export const HomeScreen = () => {
  return (
    <>

        <div>
            <Link className="navbar-brand"> LOGO </Link>
            <ul >
              <li className="item">
                <NavLink to='/explore' className="nav-link active">Explore</NavLink>
              </li>
              <li className="item">
                <NavLink to='/albums' className="nav-link active" > Albums </NavLink>
              </li>
              <li className="item">
                <NavLink to='/genres' className="nav-link" > Genres </NavLink>
              </li>
              <li className="item">
                <NavLink to='/artist' className="nav-link" > Artist </NavLink>
              </li>
              <li className="item">
                <NavLink to='/favorites' className="nav-link" > Favorites </NavLink>
              </li>
            </ul>
          </div>
    </>
  )
}
