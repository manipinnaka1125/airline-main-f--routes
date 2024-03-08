import './App.css';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import Contact from './components/Contact';
import About from './components/About';
import Registration from './components/Registration';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import Book from './components/Book';


function App() {
  return <React.Fragment>
    <header>
   <Header/>
    </header>

    <main>
      <Routes>
        
      <Route path='/' element={<Home/>} exact/>
        <Route path='/home' element={<Home/>} exact/>
        <Route path='/Book' element={<Book/>}exact/>
       <Route path='/Registration' element={<Registration/>}exact/>
     
        <Route path='/LOGIN' element={<Login/>} exact/>
     
  
        <Route path='/contact' element={<Contact/>} exact/>
        <Route path='/about' element={<About/>}exact/>
       
        
      </Routes>
    </main>
    <footer>
<Footer/>
    </footer>

  </React.Fragment>
}

export default App;