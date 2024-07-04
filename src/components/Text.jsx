import { TextField, Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const Text = () => {
    var [output,setOutput] = useState();
    var[input,setInput]= useState("AA")
    const inputHandler =(e)=>{
        console.log(e.target.value);
        setInput(e.target.value)

    };

    
    const displayValue = ()=>{
        console.log("btn clicked")
        setOutput(input)
    }

  return (
    <div style={{textAlign:'center',marginTop:'18%'}}>
        <Typography variant='h3'>Hello {output}</Typography>
        <br/>
        <TextField id='outlined-basic' label='Type here' variant='outlined' onChange={inputHandler} ></TextField>
        <Button variant="contained" color='success' onClick={displayValue} >Submit</Button>&nbsp;
    </div>
  )
}

export default Text
