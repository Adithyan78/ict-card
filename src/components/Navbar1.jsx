import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navbar1 = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button ><Link to={'/'}style={{textDecoration:"none",color:"white"}}>First</Link></Button>
          <Button ><Link to={'/s'}style={{textDecoration:"none",color:"white"}}> second</Link></Button>
          <Button ><Link to={'/t'}style={{textDecoration:"none",color:"white"}}> third</Link></Button>
          <Button ><Link to={'/v'}style={{textDecoration:"none",color:"white"}}> table</Link></Button>
          <Button ><Link to={'/x'}style={{textDecoration:"none",color:"white"}}> card</Link></Button>




        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar1
