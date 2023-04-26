import React from 'react'
import TodoFilter from '../TodoFilters/todoFilter'
import Todo from '../Todo/todo'

const TasksList = ({todos}) => {
  return (
    <div className='flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl'>
        {todos.map(todo => {
          return (
            <Todo key={todo.id} todo={todo}/>
          )
        })}
        <TodoFilter/>
    </div>
  )
}

export default TasksList