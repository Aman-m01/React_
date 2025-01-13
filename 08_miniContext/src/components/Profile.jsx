import React, {useState, useContext} from 'react'
import userContext from '../Context/UserContext'
function Profile() {
  const {user} = useContext(userContext)
  if (!user) return <div className='text-3xl text-red-300'>Please Login!! </div>

 
  return  <div className='text-3xl  bg-slate-200'>
  Welcome {user.userName }
  </div>
}
export default Profile