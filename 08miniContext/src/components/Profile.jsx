import React,{useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user,name}=useContext(UserContext)
    console.log('name',name)
    if(!user.username){
        return <h1>Not Logged in MR.{name}</h1>
    }
  return (
    <div>


        Profile: {user.username}
    </div>
  )
}

export default Profile