import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import { AuthContextProvider } from './context/AuthContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <StyledEngineProvider injectFirst>
         <AuthContextProvider>
            <App />
         </AuthContextProvider>
      </StyledEngineProvider>
   </React.StrictMode>
);
