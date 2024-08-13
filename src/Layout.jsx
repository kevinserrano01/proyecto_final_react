import React from 'react'
import { NavBar } from './components/Layout/NavBar'
import { Outlet } from 'react-router-dom'
import './styles/App.css'
import { SideBar } from './components/Layout/SideBar'
import './components/Layout/MainContent.css'
import './components/Layout/SideBar.css'
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const Layout = () => {
  return (
      <AuthProvider>
        <div className="App">
          <NavBar/>
          <div className="d-flex flex-column">
            <SideBar />
            <div className="main-content">
              <Outlet /> {/* Es reemplazado por el componente hijo */}
              {/* NOTIFICACIONES */}
              <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </div>
        </div>
      </AuthProvider>
  )
}
