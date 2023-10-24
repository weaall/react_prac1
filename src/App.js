import React from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import CustomerAddBox from "./components/CustomerAddBox";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header'
import Login from "./bookingPage/LoginPage";
import BookingMain from "./bookingPage/BookingMain";
import Main from "./popUp/Main";
import AddChainSub from "./addChainPage/AddChainSub";
import AddChain from "./addChainPage/AddChain";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/CustomerAdd" element={<CustomerAddBox />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/BookingMain" element={<BookingMain />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/AddChainSub" element={<AddChainSub />} />
          <Route path="/AddChain" element={<AddChain />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
