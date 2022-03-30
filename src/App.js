import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Coins from './components/Coins/Coins';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/coins" element={<Coins></Coins>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
};

export default App;
