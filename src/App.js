import React from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import CustomerAddBox from "./components/CustomerAddBox";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Header'
import Test from "./Test";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<CustomerList />} />
          <Route path="/CustomerAdd" element={<CustomerAddBox />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
