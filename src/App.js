import React, { useReducer, useState } from 'react'
import "./app.scss"
import Counter from './Counter'
import AppContext from './appContext'
import Header from './Header'

const initialUserDetail = {
    name: "Sanjeev Kaushik",
    age: 25
}

const reducer = (state, action) =>{
    switch(action.type){
        case "SET_AGE":
            return {
                ...state,
                age:action.payload
            }
        case "SET_NAME":
            return  {
                ...state,
                name:action.payload
            }

        default:
            return state;
    }

}

export default function App() {
    // const [name, setName] = useState("Sanjeev Kaushik")
    // const [age, setAge] = useState(25);
    const [userDetails, dispatch] = useReducer(reducer, initialUserDetail)

  return <AppContext.Provider value={{userDetails, dispatch}}>
        <h1>Welcome to New World!!!</h1>
         {/* <Counter /> */}
         <Header />
         </AppContext.Provider>
}
