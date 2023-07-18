import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
import CurrencyStats from "./components/Currency/Currency";
import "./App.css";
import BirthDay from "./components/BirthDay/BirthDay";
import Rookies from "./components/Rookies/Rookies";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Footer />
      <div className="table">
        <CurrencyStats />
        <BirthDay />
        <Rookies/>
      </div>
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  dialogs={props.state.dialogsPage.dialogs}
                  messages={props.state.dialogsPage.messages}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
