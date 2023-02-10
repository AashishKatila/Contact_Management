import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';

const App = () => {
 
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
