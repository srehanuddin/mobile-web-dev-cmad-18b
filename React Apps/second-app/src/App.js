import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/index'

class App extends React.Component {
  render(){
    let a = "Ali"

    let h1CSS = {
      color : "blue",
      textAlign: "center"
    }
    let arr = ["A", "B", "C", "D", "E"]

    return (
      <div>
        <Home />
        <h1 style={{
          color : "blue"
        }}>Hello World</h1>
        <h1 style={h1CSS}>Hello World</h1>
        {1+1}
        {a}
        <Home />
        <h1 className="heading-color">Main Page</h1>
        {arr.map((data) => {
          return <p>{data}</p>
        })}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <AppTwo />
//     </div>
//   );
// }

// function AppTwo() {
//   return (
//     <div>
//       <h1>Hello World 2</h1>
//     </div>
//   );
// }

export default App;
