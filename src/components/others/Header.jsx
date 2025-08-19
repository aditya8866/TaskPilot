import React from 'react'

const Header = ({data}) => {
  // console.log(data)
  const logOutUser=()=>{
    localStorage.setItem("loggedInUser","")
    window.location.reload()
  }
  return (
    <div className='flex justify-between px-14 py-5 items-center'>
        <h1 className='text-white text-3xl font-bold font-montserrat'>Hello,<br/> {data.firstName} 👋</h1>
        <button onClick={logOutUser}
         className='bg-red-500 px-6 py-4 text-xl font-semibold text-white rounded-md active:scale-95' >Log Out</button>
    </div>
  )
}

export default Header