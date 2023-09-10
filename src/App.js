import React from "react";
import CustomerList from "./components/CustomerList";
import "./App.css";
import SearchBox from "./components/SearchBox";
import CustomerAddBox from "./components/CustomerAddBox";


function App() {

  return (
    <div className="mainOuter">
      <div className="mainInner">
        <SearchBox />
        <CustomerAddBox />
        <CustomerList />
      </div>
    </div>
  );
}

export default App;
