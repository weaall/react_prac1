import "./App.css";
import axios from "axios";
import React from 'react';


class App extends React.Component {
  state = { arr: [] }

  setData = async () => {
    let user = await axios.get("/member_table");
    user = user.data;
    this.setState({ arr: user });
  }

  componentDidMount() {
    this.setData();
  }

  selectAll = async () => {
    let result = await axios.get("/member_table");
    result = result.data;
    console.log(JSON.stringify(result));
    alert(JSON.stringify(result));
  }

  callName = async () => {
    let name = await axios.get("/member_table/name");
    name = name.data;
    console.log(JSON.stringify(name));
    alert(JSON.stringify(name));
  }

  render() {

    return (
      <div id="App">
        <button onClick={this.selectAll}>전체 조회</button>
        <button onClick={this.callName}>이름 조회</button>
        
        <div>
          {this.state.arr.map((myMap) => {
            return <p>{myMap.id} {myMap.name} {myMap.address} {myMap.name}</p>
          })}
        </div>
      </div>
    );
  }
}

export default App;
