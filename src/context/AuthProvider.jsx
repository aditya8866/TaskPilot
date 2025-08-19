import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [userData, setuserData] = useState(null)

    useEffect(() => {
        const {Empdata,Admindata}=getLocalStorage()
        // console.log({Empdata,Admindata})
        setuserData({Empdata,Admindata})
    }, [])
    
  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider