import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";

// TODO: Replace the following with your app's Firebase project configuration

  var firebaseConfig = {
    apiKey: "AIzaSyDckAOmAefa3dhFIaTSSZdIM5MF6_lTCeo",
    databaseURL: "https://fir-18b.firebaseio.com/",
    projectId: "fir-18b",
    appID: "fir-18b",
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor(){
    super();
    // console.log("working constructor")
    this.state={
      todos : [],
      value : ""
    }

    firebase.database().ref('todos-user/user2').once('value')
    .then((snapshot) => {
      console.log(snapshot.val().todos)
      
      if( snapshot.val() && snapshot.val().todos){
        this.setState({
          todos : snapshot.val().todos
        })
      }
    });
  }

  inputadd(e){
    this.setState({
      value : e.target.value
    })
  }

  add(){
    let arr = [];
    arr.push(this.state.value)
    this.setState({
      todos :this.state.todos.concat(arr)
    }, () => this.writeUserData(this.state.todos))
  }

  writeUserData(todos) {
    firebase.database().ref('todos-user/user2').set({
      todos: todos
    });
  }

  delete(i){
    // console.log(i)
    let newArr = this.state.todos
    newArr.splice(i,1)
    console.log(newArr)
    this.setState({
      todos : newArr
    }, () => this.writeUserData(this.state.todos))
    

  }
  // componentDidMount(){
  //   console.log("working componentDidMount")
  // }
  // componentWillMount(){
  //   console.log("working componentWillMount")
  // }
  // componentWillReceiveProps(props){
  //   console.log("working componentWillReceiveProps", props)
  // }
  // shouldComponentUpdate(props){
  //   console.log("working shouldComponentUpdate", props)
  // }
  // componentWillUpdate(props){
  //   console.log("working componentWillUpdate", props)
  // }
  // componentDidUpdate(props){
  //   console.log("working componentDidUpdate", props)
  // }
  // componentWillUnmount(){
  //   console.log("working componentWillUnmount")
  // }
  render(){
    // console.log('working render')
    return (
      <div className="App">
       <input type="text" onChange={(e)=> this.inputadd(e)} />
       <button onClick={()=> this.add()}>Add</button>
       {this.state.todos.map((item,index) => {
         return (
           <div>
           {item}<button onClick={()=> this.delete(index)}>Delete</button></div>
         )
       })}
      </div>
    );
  }
}

export default App;
