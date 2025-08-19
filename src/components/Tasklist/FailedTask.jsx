import React from 'react'

const FailedTask = ({data}) => {
  return (
    <>
    <div className='relative flex-nowrap flex-shrink-0 h-full w-[388px] bg-blue-400 rounded-2xl'>
        <div className='py-7 px-7 flex items-center justify-between'>
            <h2 className='bg-red-600 px-4 py-2 text-lg font-medium text-white rounded-lg'>{data.category}</h2>
            <h2 className='text-lg font-medium text-white'>{data.taskDate}</h2>
        </div>
        <h1 className='text-white text-3xl font-semibold px-7'>{data.taskTitle}</h1>
        <p className='text-gray-200 font-semibold px-7 mt-7'>
        {data.taskDescription}          
        </p>
        <div className='absolute bottom-0 mb-7 w-full flex justify-around px-10'>
            <button className='bg-green-500 py-1 px-2 text-white rounded-lg w-[110px]'>Completed</button>
            <button className='bg-red-500 py-1 px-2 text-white rounded-lg w-[110px]'>Failed</button>
        </div>
    </div>
</>
  )
}

export default FailedTask