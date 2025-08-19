import React, { useContext, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmpDashboard from './components/Dashboard/EmpDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
const App = () => {

 

  useEffect(() => {
    setLocalStorage()  
    getLocalStorage()
  }, [])
 
  
  const [user, setUser] = useState(null)
  const authData=useContext(AuthContext)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  // console.log(authData.Empdata)

  useEffect(() => {
  const loggedInUser=localStorage.getItem("loggedInUser")
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role) 
      setloggedInUserData(userData.data)
      // console.log("user logged in hai",loggedInUser)
    }
  }, [authData])
  

  const HandleLogin=(email,password)=>{
    // console.log(email,password)
    if(authData && authData.Admindata.find((e)=>email==e.email && password==e.password)){
      const admin=authData.Admindata.find((e)=>email==e.email && password==e.password)
      setUser("admin")
      setloggedInUserData(admin)
      
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:admin}))
      // console.log(user)
    }
    else if(authData){
      const employee=authData.Empdata.find((e)=>email==e.email && password==e.password)
      // console.log("employeeeeee",employee);
      
      if(employee){
        setUser("employee")
        setloggedInUserData(employee)

      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
      }
      
      // console.log(user)
    }
    else{
      alert("Invalid Crediantials")
    }
  }
  // console.log(loggedInUserData)


  return (
    <>
    {!user ?
     <Login HandleLogin={HandleLogin}/> : ''}   
    {user=="admin" ? 
    <AdminDashboard  data={loggedInUserData}  /> 
    :(user=="employee" ? <EmpDashboard data={loggedInUserData}/> : null)}
    
    </>
  )
}

export default App