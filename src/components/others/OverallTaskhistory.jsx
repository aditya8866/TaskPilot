import React from 'react'

const OverallTaskhistory = ({data}) => {
  return (
    <div className='flex px-10 mt-10'>
        <div className='h-[130px] w-[25%] bg-blue-400 rounded-2xl px-14 py-6 mx-4'>
            <h1 className='text-4xl text-white font-semibold mb-2'>{data.active} </h1>
            <h1 className='text-3xl text-white font-semibold'>Active Task</h1>
        </div>

        <div className='h-[130px] w-[25%] bg-yellow-400 rounded-2xl px-14 py-6 mx-4'>
            <h1 className='text-4xl text-white font-semibold mb-2'>{data.newTask} </h1>
            <h1 className='text-3xl text-white font-semibold whitespace-nowrap'>Accepted Task</h1>
        </div>

        <div className='h-[130px] w-[25%] bg-green-400 rounded-2xl px-14 py-6 mx-4'>
            <h1 className='text-4xl text-white font-semibold mb-2'>{data.completed}</h1>
            <h1 className='text-3xl text-white font-semibold whitespace-nowrap'>Completed Task</h1>
        </div>

        <div className='h-[130px] w-[25%] bg-red-400 rounded-2xl px-14 py-6 mx-4'>
            <h1 className='text-4xl text-white font-semibold mb-2'>{data.failed} </h1>
            <h1 className='text-3xl text-white font-semibold'>Failed Task</h1>
        </div>
    </div>
  )
}

export default OverallTaskhistory