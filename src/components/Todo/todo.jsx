import React from 'react'

const Todo = () => {
  return (
    <div className='flex items-center justify-between p-4 pg-gray-700 border-b border-solid border-gray-600 rounded-xl bg-gray-800'>
        <div className='flex items-center'>
            <span className='border-solid border border-gray-500 rounded-full p-3 cursor-pointer'></span>
            <p className='pl-3'>
                To do item
            </p>
        </div>
        <img src="/close-icon.svg" alt="close icon" className='h-5 w-5 cursor-pointer transition-all duration-300 ease-in '/>
    </div>
  )
}

export default Todo