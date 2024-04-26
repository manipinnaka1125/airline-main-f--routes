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
import PassengerHome from './components/PassengerHome';
import PaymentGateway from './components/PaymentGateway';
import BookingsData from './components/BookingsData';
import FlightData from './components/FlightData';
import AdminLogin from './components/AdminLogin';
import PaymentSuccessful from './components/PaymentSuccessful';
import Ticket from './components/Ticket';

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
            <Route path='/BookingsData' element={<BookingsData/>}exact/>
            <Route path='/PassengerHome' element={<PassengerHome/>}exact/>
            <Route path='/PaymentGateway' element={<PaymentGateway/>}exact/>
            <Route path='/FlightData' element={<FlightData/>}exact/>
            <Route path='/AdminLogin' element={<AdminLogin/>}exact/>
            <Route path='/PaymentSuccessful' element={<PaymentSuccessful/>}exact/>
            <Route path='/Ticket' element={<Ticket/>}exact/>
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
