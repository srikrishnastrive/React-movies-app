import { useState } from 'react'

import './App.css'
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/NavBar/Navbar';
import ThemeContext from './context/ThemeContext';

function App() {
  const [theme,setTheme] = useState('dark');



  return (
    <>
    <ThemeContext.Provider value = {{theme,setTheme}}>
      <div id='app-wrapper' data-theme = {theme}>
        <Navbar/>
        <MainRoutes/>
      </div>
      
      </ThemeContext.Provider>
    </>
  )
}

export default App
