import Navbar from './components/Navbar';
import TodosList from './components/TodosList';
import todosData from './data/todosData';
import {Component} from "react";

import './App.css';


class App extends Component {

  state = {
    todosData: todosData,
    text: '',
    createdAt: '',
    isCompleted: false
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault ()

    // create a new todo object
    const newTodo = {
      text: this.state.text,
      createdAt: this.state.createdAt,
      isCompleted: this.state.isCompleted
    }

    // set the new values in the state
    this.setState({
      todosData: [newTodo, ...this.state.todosData],
      text: '',
      createdAt: '',
      isCompleted: false
    })
  }

  render(){
    return (
      <div className="App">
      <Navbar text='Todos App' />

      <form onSubmit={this.handleSubmit}>
        <label htmlFor="text">Text</label>
        <input type="text" value={this.state.text} onChange={this.handleChange} id="text"></input>

        <label htmlFor="createdAt">Created at</label>
        <input type="date" value={this.state.createdAt} onChange={this.handleChange} id="createdAt"></input>

        <input type="submit"/>
      </form>

      <TodosList todos={this.state.todosData} />
      
      </div>
    );
  }
}

export default App;
