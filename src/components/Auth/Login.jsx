import React, { useState } from 'react'


const Login = ({HandleLogin}) => {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const SubmitHandler=(event)=>{ //Two Way Binding
        event.preventDefault()
        // console.log("Email is",Email)
        // console.log("Password is ",Password)
        HandleLogin(Email,Password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='flex items-center justify-center border-emerald-600 border-2 rounded-3xl h-3/4 w-1/4'>
                <form  onSubmit={(event)=>{
                    SubmitHandler(event)
                }}
                className='flex flex-col justify-center items-center '>

                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                value={Email}
                 required
                 className='bg-transparent h-16 border-2 border-emerald-600 w-4/5 rounded-full my-4 px-4 font-semibold text-2xl text-gray-500 '
                 type="email"  
                 placeholder='Enter your email' />

                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                value={Password}
                 required
                 className='bg-transparent h-16 border-2 border-emerald-600 w-4/5 rounded-full my-4 px-4 font-semibold text-2xl text-gray-500'
                 type="password"
                 placeholder='Enter Password' />

                <button className='bg-emerald-500 h-16 border-2 border-emerald-600 w-1/3 rounded-full my-4 px-4 text-2xl text-white'>
                Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login