import './App.css'
import TasksList from './components/Input/TasksList/tasksList'
import Input from './components/Input/input'
import Title from './components/Title/title'
import Todo from './components/Todo/todo'

function App() {

  return (
    <>
      <div className='bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5'>
        <div className='container flex flex-col max-w-xl'>
          <Title/>
          <Input/>
          <TasksList>
            <Todo/>
          </TasksList>
        </div>
      </div>
    </>
  )
}

export default App
