import { createContext ,useState} from "react";

export const counterCtx=createContext();
counterCtx.displayName="ConuterCtx";


const CounterContextProvider=({children})=>{
    const[counter,setCounter]=useState(0);
    
// function will throw
const inc=()=>{
    setCounter(prevCounter=>(prevCounter+1));
  };
  const dec=()=>{
    setCounter(prevCounter=>(prevCounter-1));
  };

    return(
        <counterCtx.Provider value={{
            counter,
            inc,
            dec
        }}>
            {children}
        </counterCtx.Provider>
    )
}
export default CounterContextProvider;