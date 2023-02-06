import React, { Fragment,useState } from 'react'
import AddUser from './components/users/AddUser'
import UserList from './components/users/UserList'

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return[
        ...prevUsersList,{
          name:uName,
          age:uAge,
          id:Math.random().toString()
        }
      ]

    })
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </Fragment>
  )
}

export default App
