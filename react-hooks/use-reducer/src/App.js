import React, { useReducer } from 'react'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'
// 
const initState={
  users:[]
}


const reducer=(state,action)=>{
  switch(action.type){
    case 'Add_User':
      return {
        users:[...state.users,'hamza']
      }; 
      case 'Remove_Users':
        return {users:[]};
    default:
      return state;
      }
    }

// 
const App = () => {
  const[state,dispatch]=useReducer(reducer,initState);
  return (
    <div>

      <h1>UseReducer</h1>
      {
        state.users.length ? state.users.map(user=><div>{user}</div>):'there No'
      }
      <button onClick={()=>dispatch({
        type:'Add_User'
      })}>Add</button>
      <button onClick={()=>dispatch({
        type:'Remove_Users'
      })}>Remove_Users</button>
      

            <Sidebar />
      <Widget />
      
    </div>
  )
}

export default App
