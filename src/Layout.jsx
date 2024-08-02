import React from 'react'
import { NavBar } from './components/NavBar'
import { Outlet } from 'react-router-dom'
import './styles/App.css'
import { SideBar } from './components/SideBar'
import './styles/MainContent.css'
import './styles/SideBar.css'
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
