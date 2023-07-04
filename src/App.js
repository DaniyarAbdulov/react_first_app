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
            <div className='app-wrapper-content'>
               <Routes>
                  <Route path="/dialogs" element={<Dialogs dialogsData={props.dialogsData} messagesData = {props.messagesData}/>} />
                  <Route path="/profile" element={<Profile postsData = {props.postsData} />} />
               </Routes>
            </div>
            <Footer />
         </div>
      </BrowserRouter>
   );
}
export default App;
