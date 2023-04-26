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
  return (
    <>
      <div className='bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5'>
        <div className='container flex flex-col max-w-xl'>
          <Title/>
          <Input/>
          <TasksList todos={todos}/>
        </div>
      </div>
    </>
  )
}

export default App
