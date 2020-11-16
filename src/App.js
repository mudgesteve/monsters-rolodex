import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';

//http://jsonplaceholder.typicode.com/users
//http://jsonplaceholder.typicode.com/post
//http://jsonplaceholder.typicode.com/comments
//http://jsonplaceholder.typicode.com/photos
//http://jsonplaceholder.typicode.com/todos
//http://jsonplaceholder.typicode.com/albums

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    //const self = this;
    e.preventDefault();
    this.setState({ searchField: e.target.value })
    console.log('HandleChange', e.target);
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    // console.log(filteredMonsters);
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
