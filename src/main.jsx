import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppContextProvider from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
  <Toaster position="bottom-center" reverseOrder={false}/>
    <App />
   
  </AppContextProvider>
  </BrowserRouter>
  
)
