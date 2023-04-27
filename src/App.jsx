import './App.css'
import TasksList from './components/TasksList/tasksList'
import Input from './components/Input/input'
import Title from './components/Title/title'
import Todo from './components/Todo/todo'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Study 2 hours',
      completed: false,
    },
    {
      id: 2,
      title: 'Doing the app',
      completed: false,
    },
    {
      id: 3,
      title: 'Physical training',
      completed: false,
    },
  ])

  

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false
    }
    const todoList = [...todos]
    todoList.push(newTodo)
    setTodos(todoList)
  }

  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      }
      return todo
    })
    setTodos(updatedList)
  }

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id)
    setTodos(updatedList)
  }

  return (
    <>
      <div className='bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5'>
        <div className='container flex flex-col max-w-xl'>
          <Title/>
          <Input addTodo={addTodo}/>
          <TasksList 
            todos={todos}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  )
}

export default App
