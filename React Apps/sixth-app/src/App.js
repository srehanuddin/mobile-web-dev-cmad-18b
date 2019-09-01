import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './component/About/index'
import Header from './component/Header/index'
import {users} from './users'

function Index() {
  return <h2>Home</h2>;
}

function Users(match) {
  var userID = match.match.params.id
  return <div>
          <h2>Users</h2>
          {users.filter(item => item.id == userID).map(data => {
            return (
              <div>
                Name : {data.name} <br />
                Class : {data.class}
              </div>
            )
          })}
          </div>;
}


class App extends React.Component {
  render(){
    return (
      <Router>
        <Header />
        {users.map(item => {
          return(
            <div>
              <Link to = {'/users/'+item.id}>
                {item.name}
              </Link>
            </div>
          )
        })}
        <Route path="/" exact component={Index} />
        <Route path="/about" exact component={About} />
        <Route path="/users/:id" component={Users} />
      </Router>
    );
  }
}

export default App;
