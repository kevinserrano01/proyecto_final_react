import React from 'react'
import '../styles/SideBar.css'
import { Link, NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="sidebar d-flex flex-column p-3">
        <NavLink to='/music' className="mb-2">Explore</NavLink>
        <NavLink to='/favorites' className="mb-2" > Favorites </NavLink>
        <NavLink to='/playlist' className="mb-2" > PlayLists </NavLink>
        <NavLink to='/albums' className="mb-2" > Albums </NavLink>
        <NavLink to='/genres' className="mb-2" > Genres </NavLink>
        <NavLink to='/artist' className="mb-2" > Artist </NavLink>
    </div>
  )
}
