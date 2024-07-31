import React from 'react'
import { NavBar } from './components/NavBar'
import { Outlet } from 'react-router-dom'
import './styles/App.css'
import { SideBar } from './components/SideBar'
import './styles/MainContent.css'
import './styles/SideBar.css'


export const Layout = () => {
  return (
      <div className="App">
        <NavBar/>
        <div className="d-flex flex-column">
          <SideBar />
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </div>
  )
}
