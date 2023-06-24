import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer'
import './App.css';

const App = () => {
   return (
      <div className='app-wrapper'>
         <Header />
         <Navbar />
         <Profile />
         <Footer/>
      </div>);
}
export default App;
