import { useState } from 'react'

import './App.css'
import MainRoutes from './routes/MainRoutes';
import Navbar from './components/NavBar/Navbar';

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <>
      <Navbar/>
      <MainRoutes/>
    </>
  )
}

export default App
