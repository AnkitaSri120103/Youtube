import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AuthProvider from './context/AuthProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import UtilsContextProvider from "./context/UtilsContext.jsx"; // Ensure this is the default export

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <UtilsContextProvider>
        <App />
      </UtilsContextProvider>
    </AuthProvider>
  </BrowserRouter>
);