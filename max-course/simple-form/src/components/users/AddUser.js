import React,{useState} from 'react'

import classes from './AddUser.module.css'

import Button from '../ui/Button'
import Card from '../ui/Card'


const AddUser = (props) => {
    const [enterName, setEnterName] = useState('');
    const [age, setAge] = useState('');


    const addUserHandler=(event)=>{
        event.preventDefault()

        if(enterName.trim().length===0||age.trim().length===0){
            return
        }
        if(+age<1){
            return
        }
        props.onAddUser(enterName,age);
        console.log(enterName,age)

            
        setEnterName('')
         setAge ('')
    }

    const userNameChange=(event)=>{
        setEnterName(event.target.value);
    }

    const ageChange=(event)=>{
        setAge(event.target.value);
    }

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
    <label htmlFor='username'>UserName</label>
    <input id='username' type={'text'} onChange={userNameChange}
        value={enterName}
    />
    <label htmlFor='age'>Age (years)</label>
    <input id='age' type={'number'} onChange={ageChange}
    value={age}
    />
    
    <Button type='submit'> Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser
