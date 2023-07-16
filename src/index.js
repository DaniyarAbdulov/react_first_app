import store from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} 
            addPost={store.addPost.bind(store)} 
            updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>
    );

    reportWebVitals();
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);