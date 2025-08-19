import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {
   const authData= useContext(AuthContext)
  //  console.log(authData.Empdata)
  return (
    <div id='Alltask' className='relative mt-10 mb-5 mx-14 bg-[#1c1c1c] rounded-md pt-3 '>
        <div className='bg-red-400 mx-10 py-2 mt-3  px-9 flex justify-between text-white text-2xl rounded-lg font-semibold'>
            <h2 className=' w-1/5 flex justify-center relative'>Employee Name</h2>
            <h3 className=' w-1/5 flex justify-center relative'>New Task</h3>
            <h5 className=' w-1/5 flex justify-center relative'>Active Task</h5>
            <h2 className=' w-1/5 flex justify-center relative'>Completed</h2>
            <h3 className=' w-1/5 flex justify-center relative'>Failed</h3>
        </div>
        <div className='pb-7'>
        {authData.Empdata.map((elem,idx)=>{
            return <div key={idx} className='border-2 border-emerald-200 mx-10 py-2 mt-3  px-9 flex justify-between text-white text-2xl rounded-lg font-semibold'>
            <h2 className=' w-1/5 flex justify-center'>{elem.firstName}</h2>
            <h3 className=' w-1/5 flex justify-center text-blue-400'>{elem.taskCount.newTask}</h3>
            <h5 className=' w-1/5 flex justify-center text-yellow-300' >{elem.taskCount.active}</h5>
            <h2 className=' w-1/5 flex justify-center text-white'>{elem.taskCount.completed}</h2>
            <h3 className=' w-1/5 flex justify-center text-red-500'>{elem.taskCount.failed}</h3>
        </div>
        })}
        </div>

       
    </div>
  )
}

export default Alltask