import React from 'react';
import './App.css';
import {CardList} from './components/card-list/cardlist.components';
import { SearchBox } from "./components/search-box/searchBox.components";


class App extends React.Component {
  constructor(){
    super();
    this.state ={
      demons :[],
      searchFeild:''
    }
  }
  componentDidMount (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState({demons:users}));
  }
 heandelChange = e => {
  this.setState({searchFeild:e.target.value});
 }
 render(){
   const {demons ,searchFeild} =this.state;
   const filterdDemon = demons.filter(demon => demon.name.toLowerCase().includes(searchFeild.toLowerCase()));
   return( <div className='App'>
      <h1 className='header'>MONSTER ROLODEX</h1>
      <SearchBox Placeholder='search monster' Handeler = {this.heandelChange} />
      <CardList demon = {filterdDemon}/> 
    </div>
   )
 } 
}
export default App;
