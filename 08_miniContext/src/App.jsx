import React from 'react'
import './App.css'
import UserCoontextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserCoontextProvider>
     <h3 className='text-4xl text-red-300'>
      context Api
     </h3>
     <Login/>
     <Profile/>
    </UserCoontextProvider>
  )
}

export default App
