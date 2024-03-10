import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Registration from './components/Registration';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import Book from './components/Book';
import Logout from './components/Logout';
import Admin from './components/Admin';
import LoadingAnimation from './components/Loading';
import Team from './components/Team'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second delay for loadin
  }, []);

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/home' element={<Home />} exact />
            <Route path='/book' element={<Book />} exact />
            <Route path='/registration' element={<Registration />} exact />
            <Route path='/login' element={<Login />} exact />
            <Route path='/contact' element={<Contact />} exact />
            <Route path='/about' element={<About />} exact />
            <Route path='/admin' element={<Admin />} exact />
            <Route path='/logout' element={<Logout />} exact />
            <Route path='/Team' element={<Team/>} exact />
          </Routes>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
