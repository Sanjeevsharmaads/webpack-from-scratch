import React, {useContext} from 'react'
import AppContext from './appContext'
import UserInfo from './UserInfo'

const Header = () => {
  const {userDetails, dispatch} = useContext(AppContext)
  return (
    <div> 
        <h1> Age is : {userDetails.age}</h1>
        <button onClick={() => dispatch({type:"SET_AGE",payload:20})}>Update Age</button>
        <UserInfo />
    </div>
  )
}

export default Header