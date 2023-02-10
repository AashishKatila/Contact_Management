import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home';
import AddEdit from './pages/AddEdit';

const App = () => {
 
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position='top-center' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addcontact' element={<AddEdit />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
