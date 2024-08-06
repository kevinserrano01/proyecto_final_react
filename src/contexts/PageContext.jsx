import React, { createContext, useState, useContext } from 'react';

// Crear el contexto para usarlo de manera global en toda la App.
const PageContext = createContext();

// Esta funcion es el proveedor del contexto que maneja el estado de la página y lo guarda en el local storage.
export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });

  const savePageToLocalStorage = (page) => {
    localStorage.setItem('currentPage', page.toString());
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    savePageToLocalStorage(newPage);
  };

  return (
    <PageContext.Provider value={{ page, handlePageChange }}>
      {children}
    </PageContext.Provider>
  );
};

// Hook para usar el contexto
export const usePage = () => {
  return useContext(PageContext);
};