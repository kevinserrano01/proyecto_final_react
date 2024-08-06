import React from 'react'
import { NavBar } from './components/Layout/NavBar'
import { Outlet } from 'react-router-dom'
import './styles/App.css'
import { SideBar } from './components/Layout/SideBar'
import './components/Layout/MainContent.css'
import './components/Layout/SideBar.css'
import { AuthProvider } from './contexts/AuthContext'


export const Layout = () => {
  return (
      <AuthProvider>
        <div className="App">
          <NavBar/>
          <div className="d-flex flex-column">
            <SideBar />
            <div className="main-content">
              <Outlet /> {/* Es reemplazado por el componente hijo */}
            </div>
          </div>
        </div>
      </AuthProvider>
  )
}
