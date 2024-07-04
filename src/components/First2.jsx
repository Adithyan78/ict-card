import { Button, Typography } from '@mui/material'
import React, {useState} from 'react'


const First2 = () => {
    var [name,setName] = useState("Tiya");
    const changeName = ()=>{
        console.log("btn clicked");
        setName("Home")
    }
    const changeContact  = ()=>{
        console.log("btn clicked");
        setName("OOTY NICE TO MEET YOU")
    }
  return (
    <>
    <div style ={{margin:'18%',textAlign:'center'}}>
        <Typography variant='h3'>Welcome to {name}</Typography>
        <br/>
      <Button variant='contained' onClick={changeName} >Home</Button>&nbsp;
      <Button variant='contained' color='secondary' onClick={changeContact}>OOTY </Button>
    </div>
    </>
  )
}

export default First2
