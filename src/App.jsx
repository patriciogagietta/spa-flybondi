import Home from './components/Home'
import Vuelos from './components/Vuelos'
import Header from './templates/Header'
import Error404 from './components/Error404'
import './App.css'

import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:origen/:destino/' element={<Vuelos />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App
