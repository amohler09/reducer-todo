import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
