import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import Loader from './Loader';
import Modal from './Todo/Modal/Modal';
import AddTodo from './Todo/AddTodo';

//'https://jsonplaceholder.typicode.com/todos?_limit=5'

function App() {
  const [todos, setTodo]  = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
          setTodo(todos)
          setLoading(false)
      })
  }, [])

  function toggleTodo(id) {
    setTodo(todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
    
        return todo
      })
    )
  }

  function addTodo(title) {
    setTodo(todos.concat([{
      title,
      id: new Date(),
      completed: false
    }]))
  
  }

  function removeTodo(id) {
    setTodo(todos.filter(todo => todo.id !== id))
  }
  

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React Application</h1>
          <Modal />
          <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : <p>No todo!</p>
        }
      </div>
    </Context.Provider>
  )
}

export default App;
