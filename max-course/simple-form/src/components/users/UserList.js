import React, { Fragment } from 'react'

const UserList = (props) => {
  return (
    <Fragment>

<h1>Users</h1>
    <ul>
    {props.users.map(user=> <li key={user.id}>
        {user.name} ({ user.age} years old)
    </li>)}
    </ul>
    </Fragment>
  )
}

export default UserList
