import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

const todo = [
  {
    task: 'Fill out this form',
    id: 0,
    completed: false,
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todo: todo,
    }
  }

  // CLICKING THE TASK TO TURN IT OFF / COMPLETE IT //
  // CLICKING THE TASK TO TURN IT OFF / COMPLETE IT //
  handleTaskToggle = (clickedTaskId) => {
    const newTodo = this.state.todo.map((task) => {
      if (task.id === clickedTaskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    })

    this.setState({
      todo: newTodo,
    })
  }


  // ADDING THE TASK TO STATE //
  // ADDING THE TASK TO STATE //
  handleTaskAdd = (taskName) => {
    const task = {
      task: taskName,
      id: this.state.todo.length,
      completed: false,
    }

    const newTodo = [...this.state.todo, task]

    this.setState({
      todo: newTodo,
    })
  }


  // CLEARING OF COMPLETED TASKS //
  // CLEARING OF COMPLETED TASKS //
  handleTaskCompleted = () => {
    const newTodo = this.state.todo.filter(task => {
      return(!task.completed);
    })

    this.setState({
      todo: newTodo,
    })
  }


  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>What do you need to do today?</h2>
          <TodoList handleTaskToggle={this.handleTaskToggle} todo={this.state.todo}/>
          <TodoForm handleTaskCompleted={this.handleTaskCompleted} handleTaskAdd={this.handleTaskAdd}/>
        </div>
      </div>
    );
  }
}

export default App;