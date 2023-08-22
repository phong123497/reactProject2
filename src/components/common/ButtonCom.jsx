import { Fab } from '@mui/material'
import React from 'react'

function ButtonCom({name, size}) {
  return (
    <>
      <Fab  variant="extended" size={{size}} color="primary" sx={{color:"#fff",fontSize:"1.6rem",fontWeight:"400",lineHeight:"28px"}}>
        {name}
      </Fab>
    </>
  )
}

export default ButtonCom