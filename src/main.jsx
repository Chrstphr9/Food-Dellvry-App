import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext';
import StoreContextProvider from './context/StoreContext.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
