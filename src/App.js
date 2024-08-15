import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:"",
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((users)=>this.setState(()=>{
      return {monsters:users};
    }))
  }

  render(){

    const filteredMonsters=this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event)=>{
          const searchField=event.target.value.toLocaleLowerCase();
          this.setState(()=>{
            return {searchField};
          })
          }}/>

        {filteredMonsters.map((monster)=>{
          return (<h1 key={monster.name}>{monster.name}</h1>);
        })}
      </div>
    );
  }
}

export default App;
