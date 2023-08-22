import React from 'react'
import { Link } from "@mui/material";
function HeaderLink({title,active, link }) {
  return (
    <Link href={{link}}
    sx={{textDecoration:"none", fontSize:"1.6rem", fontStyle:"normal",color:"#C9D2DA",fontWeight:"300", lineHeight:"28px", marginRight:"42px"}}
    >{title}</Link>
  )
}

export default HeaderLink