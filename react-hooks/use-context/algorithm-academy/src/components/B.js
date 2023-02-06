import React ,{useContext}from 'react'; 

import { counterCtx } from '../context/CounterContext';
import { NameCtx } from '../context/Name';

// const B = () => {
//   return (
//     <counterCtx.Consumer>
// {(value)=>(
//     <NameCtx.Consumer>
//     {(name)=>{
//         return(
//             <div>
//     <h2>B Counter is {value.counter} and name is {name}</h2>
//     </div>
//         )
//     }}
   
//     </NameCtx.Consumer>
// )
// }
//     </counterCtx.Consumer>
//   )
// }


const B = () => {
    const {counter ,inc}=useContext(counterCtx);
    const name=useContext(NameCtx);

  return (
    <div>
      <h2>B Counter is {counter}
      <div>
        <button onClick={inc}>+</button>
      </div>
       and name is {name}</h2>
    </div>
  )
}

export default B;
