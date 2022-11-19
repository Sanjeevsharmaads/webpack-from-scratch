import React, {useState} from 'react'

const Counter = () => {
  const [timer, setTimer] =  useState(10);
  const [pauseTimer, setPauseTimer] = useState(false)


  React.useEffect(()=>{
    let timer1 = setTimeout(()=>{
        !pauseTimer && setTimer(timer-1)
    }, 1000)
    // if(pauseTimer) clearTimeout(timer1)
    return () => {
        clearTimeout(timer1);
      };
  }, [timer, pauseTimer])

  const handleTimer = (type) => {
    if(type === 0){
        setTimer(timer + 1)
    }
    else if(type === 1) {
        setTimer(timer - 1)
    }
    else if(type === 2){
        setTimer(0)
    }
    else {
        setPauseTimer(!pauseTimer)
        clearTimeout()
    }
  }

  return (
    <div>
        <h1> Current time is : {timer}</h1> 
        <button onClick={() => handleTimer(2)}>Reset</button>
        <button onClick={() => handleTimer(0)}>Increment</button>
        <button onClick={() => handleTimer(1)}>Decrement</button>
        <button onClick={() => handleTimer(3)}>Pause</button>
    </div>
    // <div>
    //     
    //     
    // </div>
  )
}

export default Counter