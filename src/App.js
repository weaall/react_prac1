import React from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import CustomerAddBox from "./components/CustomerAddBox";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/." element={<CustomerList />} />
          <Route path="/" element={<CustomerAddBox />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
