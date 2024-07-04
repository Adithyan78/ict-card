import React,{useState} from 'react'
import { Typography,Button } from '@mui/material'

const First2 = () => {
    var [name,setname]= useState["tiya"];
    const changeName = ()=>{
        console.log
    }
  return (
    <> 
    <div style={{ margin:"18%", textAlign:"center"}}>
    <Typography variant='h3'>welcome to {name}</Typography>
    <br />
    <Button variant='contained' onClick={changeName}>Home</Button>&nbsp
    <Button variant='contained' color="secondary" onClick={changeContact}>Contact</Button>
</div>
</>
   
  )
}

export default First2
