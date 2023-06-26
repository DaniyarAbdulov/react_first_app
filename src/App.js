import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import Footer from './components/Footer/Footer'
import './App.css';


const App = () => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Navbar />

            <div className='app-wrapper-content'>
               <Routes>
                  <Route path="/dialogs" element={<Dialogs />} />
                  <Route path="/profile" element={<Profile />} />

               </Routes>
            
            </div>
            <Footer />
         </div>

      </BrowserRouter>
   );
}
export default App;
