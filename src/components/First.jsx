import React from 'react'
import { Typography } from '@mui/material'

const First = (props) => {
  return (
    <div>
      <h1>Hello {props.data.name} age {props.data.age}</h1>
      <Typography variant="h1" component="h2">
   Hello
</Typography>
      
    </div>  
  )}




export default First
