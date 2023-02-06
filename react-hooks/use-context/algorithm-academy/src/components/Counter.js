import React  from 'react'
import { counterCtx } from '../context/CounterContext';

const Counter = () => {


  
  return (
<counterCtx.Consumer>
  {(value)=>{
    return(
      <div>
    <h3>Counter Value is {value.counter} </h3>
    <div>
      <button onClick={value.inc}>+</button>
      <button onClick={value.dec}>-</button>

    </div>
      
    </div>
    )
  }}
</counterCtx.Consumer>
  
  )
}

export default Counter;
