import React from 'react'
import Header from '../others/Header'
import Alltask from '../others/Alltask'
import CreateTask from '../Tasklist/CreateTask'

const AdminDashboard = ({data}) => {
    // console.log(data)
    return (
        <div  >
            <Header data={data}/>
            <CreateTask/>
            <Alltask/>
        </div>
    )
}

export default AdminDashboard