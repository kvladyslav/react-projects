import React from 'react'
import './App.css';
import {Component} from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

// function Welcome() {
//     return <h1>Hello there!</h1>;
// }

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
