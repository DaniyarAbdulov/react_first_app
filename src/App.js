import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import Footer from './components/Footer/Footer'
import './App.css';


const App = (props) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Footer />
            <div className='app-wrapper-content'>
               <h1>Hello!</h1>
               <h2>тут сделаем приколы всякие</h2>
               <h3>например, добавим приколы</h3>
               
               <Routes>
                  <Route path="/dialogs" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
                  <Route path="/profile" element={<Profile />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}
export default App;
