import React from 'react';
import Home from './components/Home/home';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Redux2',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
  {
    title: 'Redux3',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 3,
  },
  {
    title: 'Redux4',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 4,
  },
];

class App extends React.Component {
    // <App />
  render(){
    var helloWorld = 'Welcome to the Road to learn React';
    return (
      <div>
        {/* <h2>Hello</h2> */}
        <Header />
        <Home />
        <Footer />


        {/* {list.map(item => {
          return <div key={item.objectID}>
                    <span>
                      <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                 </div>
        })} */}


        {/* <Rehan />
        <Rehan />
        <Rehan />
        <p>{helloWorld}</p>
        <p>{1+1}</p> */}
      </div>
    );
  }
}

export default App;
