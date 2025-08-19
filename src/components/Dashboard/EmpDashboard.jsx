import React from 'react'
import Header from '../others/Header'
import OverallTaskhistory from '../others/OverallTaskhistory'
import Tasklist from '../Tasklist/Tasklist'

const EmpDashboard = ({data}) => {
  console.log(data)
  return (
    <div className='w-screen h-screen bg-[#1c1c1c]'>
        <Header data={data}/>
        <OverallTaskhistory data={data.taskCount}/>
        <Tasklist data={data.tasks}/>
    </div>
  )
}

export default EmpDashboard