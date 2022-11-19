import React, { useContext } from 'react'
import appContext from './appContext'

const UserInfo = () => {
  const {userDetails, dispatch} = useContext(appContext)
  return (
    <>
    <div>Name of User is : {userDetails.name}</div>
    <input type="text" onChange={(e) => dispatch({type:"SET_NAME",payload:e.target.value})} />
    </>
  )
}

export default UserInfo