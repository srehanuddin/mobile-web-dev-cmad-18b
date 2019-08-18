import React from 'react';
import Header from './components/Header/header';
import Search from './components/Search/search';
import List from './components/List/list';


const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    status : 0
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    status : 1
  },
  {
    title: 'Angular',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 2,
    status : 2
  },
  {
    title: 'Vue',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 3,
    status : 3
  },
  {
    title: 'NodeJs',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 4,
    status : 4
  },
];

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      list : list,
      keyword : "A",
      filterBy : -1
    }
    this.onTest = this.onTest.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss(id){
    this.setState({
      list : this.state.list.filter(item => id !== item.objectID )
    })
    // this.state.list = this.state.list.filter(item => id !== item.objectID )
  }

  onSearch(e){
    // console.log("value : ", e.target.value)
    this.setState({
      keyword : e.target.value
    })
  }

  onFilter(status){
    this.setState({
      filterBy : status
    })
  }

  onTest(){
    console.log(this)
  }

  render(){
    
    return (
      <div>
        
        <Header 
          name123 = "Ali"
        />

        <button
          onClick={this.onTest}
          type="button"
        >
          Add
        </button>

        <Search 
          value={this.state.keyword}
          onChange={this.onSearch}
        >
          Search
        </Search>

        <Search 
          value={this.state.keyword}
          onChange={this.onSearch}
        >
          keyword
        </Search>

        <button
          onClick={() => this.onFilter(-1)}
          type="button"
        >
          All
        </button>

        <button
          onClick={() => this.onFilter(0)}
          type="button"
        >
          Inactive
        </button>

        <button
          onClick={() => this.onFilter(1)}
          type="button"
        >
          Active
        </button>

        <button
          onClick={() => this.onFilter(2)}
          type="button"
        >
          Deleted
        </button>

        <List
          list = {this.state.list}
          filterBy = {this.state.filterBy}
          keyword = {this.state.keyword}
          onDismiss = {this.onDismiss}
        />

        {/* {this.state.list.filter(item => item.status === this.state.filterBy || this.state.filterBy == -1)
        .filter(item => item.title.toLowerCase().includes(this.state.keyword.toLowerCase()))
        .map(item => {
          return <div key={item.objectID}>
                    <span>
                      <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                    <button
                      onClick={() => this.onDismiss(item.objectID)}
                      type="button"
                    >
                      Dismiss
                    </button>
                 </div>
        })} */}

      </div>
    );
  }
}

export default App;
