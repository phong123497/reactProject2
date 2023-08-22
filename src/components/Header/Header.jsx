import { Box, Button, Container,Typography,Fab } from '@mui/material'
import Group105 from "../../image/Group105.svg" 
import React from 'react'
import HeaderLink from "../common/HeaderLink"
import ButtonCom from "../common/ButtonCom"
function Header() {
  return (

    <Box sx ={{ maxWidth:"100%", backgroundColor:"#10375C",height:"80rem"}}>
      
      <Container sx={{maxWidth:"1170px" ,paddingLeft:0, paddingRight:0}}>
        {/* navi */}
        <Box sx={{display:"flex", justifyContent:"space-between",paddingTop:"3.6rem"}}>
          <Box sx={{display:"flex", justifyContent:"center",alignItems:"center"}}>
            <img src={Group105} alt=""  />
            <Box sx={{display:"flex", flexDirection:"column"}}>
              <Typography sx={{fontSize:"1.8rem", fontStyle:"normal",fontWeight:"400",lineHeight:"14px", color:"#fff" }}>shine</Typography>
              <Typography sx={{fontSize:"1.2rem", fontStyle:"normal",fontWeight:"300",lineHeight:"14px", color:"#fff", float:"right" }}>smile</Typography>
            </Box>
          </Box>
          <Box sx={{display:"flex", }}>
            <HeaderLink title="Home" />
            <HeaderLink title="Services" />
            <HeaderLink title="About" />
            <HeaderLink title="Doctors" />
            {/* <HeaderLink title="Login" /> */}
          </Box>

          <Box sx={{display:"flex"}}>
            <HeaderLink title="Login" />
            <ButtonCom name="Sign Up" size="medium"/>
          </Box>
        </Box>
      </Container>
      
    </Box>
  )
}

export default Header